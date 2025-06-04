import { supabase } from "@/lib/supabaseClient";
import { notFound, redirect } from "next/navigation";
import MansonryLayout from "@/components/masonry";
import PageHeading from "@/components/pageHeading";

export async function generateStaticParams() {
    const { data, error } = await supabase.from("around_us").select("path");

    if (error || !data) return [];

    return data.map((item) => ({
        path: item.path.replace(/^\//, ""),
    }));
}

type Params = Promise<{ lang: string; slug: string; path: string }>;

export default async function Pagina({ params }: { params: Params }) {
    const { path, lang, slug } = await params;
    const cleanPath = path.replace(/^\//, "");

    // Buscar todas as rotas para o idioma atual e todas as línguas
    const { data: allRoutes, error: routesError } = await supabase.from("routes").select("path, route_key, lang_code");

    if (routesError || !allRoutes) {
        notFound();
    }

    // Criar mapa para path -> rota
    const pathToRoute = new Map<string, { path: string; route_key: string; lang_code: string }>();
    // Criar mapa route_key -> rotas por idioma
    const routeKeyToLangRoutes = new Map<string, { path: string; route_key: string; lang_code: string }[]>();

    for (const r of allRoutes) {
        pathToRoute.set(r.path, r);
        if (!routeKeyToLangRoutes.has(r.route_key)) {
            routeKeyToLangRoutes.set(r.route_key, []);
        }
        routeKeyToLangRoutes.get(r.route_key)!.push(r);
    }

    // Traduzir cada segmento do path com base no idioma
    const segments = cleanPath.split("/");
    const translatedParts: string[] = [];

    for (const segment of segments) {
        const currentPath = `/${segment}`;

        const routeEntry = pathToRoute.get(currentPath);
        if (!routeEntry) notFound();

        const langRoutes = routeKeyToLangRoutes.get(routeEntry.route_key);
        if (!langRoutes) notFound();

        const correctLangRoute = langRoutes.find((r) => r.lang_code === lang);
        if (!correctLangRoute) notFound();

        translatedParts.push(correctLangRoute.path.replace(/^\//, ""));
    }

    const translatedPath = translatedParts.join("/");

    // Traduzir slug do mesmo modo
    const originalSlugPath = `/${slug}`;
    const slugRoute = pathToRoute.get(originalSlugPath);

    if (!slugRoute) notFound();

    const slugLangRoutes = routeKeyToLangRoutes.get(slugRoute.route_key);
    if (!slugLangRoutes) notFound();

    const translatedSlug = slugLangRoutes.find((r) => r.lang_code === lang);
    if (!translatedSlug) notFound();

    const newSlug = translatedSlug.path.replace(/^\//, "");

    // Redirecionar se slug ou path forem diferentes
    if (newSlug !== slug || translatedPath !== cleanPath) {
        return redirect(`/${lang}/${newSlug}/${translatedPath}`);
    }

    // Buscar páginas e infos fixas paralelamente
    const route = allRoutes.find((r) => r.path.replace(/^\//, "") === cleanPath);
    if (!route) notFound();

    const { data: allPages } = await supabase.from("around_us").select("*");
    const page = allPages?.find((p) => p.path.replace(/^\//, "") === cleanPath);
    if (!page) notFound();

    const { data: fixedInfo, error: fixedError } = await supabase.from("around_us_fixed_info").select("*").eq("categorie", route.route_key);

    if (fixedError || !fixedInfo) notFound();

    // NOVO: extrair os nomes relevantes para filtrar a próxima query
    const fixedNames = fixedInfo.map((f) => f["INFO-PLACE-NAME"]);

    const { data: content, error: contentError } = await supabase.from("around_us_content").select("*").eq("lang", lang).in("Info", fixedNames); // <- otimização aqui

    if (contentError || !content) notFound();

    // Como já filtramos antes, agora é só mapear
    const enrichedContent = content.map((item) => {
        const fixed = fixedInfo.find((f) => f["INFO-PLACE-NAME"] === item.Info);
        return {
            title: item.title,
            text: item.text,
            image: fixed?.image || null,
            extratext: fixed?.extraText || [],
            address: fixed?.address_gps
                ? {
                      gps: fixed.address_gps,
                      url: fixed.address_url,
                      location: fixed.address_location,
                  }
                : null,
            extralink: fixed?.extralink_url
                ? {
                      url: fixed.extralink_url,
                      text: fixed.extralink_text,
                      urlText: fixed.extralink_url_text,
                  }
                : null,
            website: fixed?.website || null,
        };
    });
    return (
        <div className="mb-[100px]">
            <PageHeading img={page.image_link} title={page.title}>
                <p>{page.description}</p>
            </PageHeading>

            <MansonryLayout content={enrichedContent} />
        </div>
    );
}
