import { getFilteredContentByLanguage } from "@/app/utils/getFilteredContentByLanguage";
import About from "@/components/pages/about";
import AroundUs from "@/components/pages/around";
import Contacts from "@/components/pages/contacts";
import FAQ from "@/components/pages/faq";
import { supabase } from "@/lib/supabaseClient";
import { notFound, redirect } from "next/navigation";

// Importa os teus componentes por route_key

export default async function DynamicPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
    const { lang, slug } = await params;
    const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;

    // 1. Obter o route_key associado ao slug atual
    const { data: routeEntry, error: routeError } = await supabase.from("routes").select("route_key").eq("path", normalizedSlug).single();

    if (routeError || !routeEntry) {
        notFound();
    }

    const { route_key } = routeEntry;

    // 2. Procurar o path correto para esse route_key no idioma atual
    const { data: correctLangRoute, error: langRouteError } = await supabase
        .from("routes")
        .select("path")
        .eq("route_key", route_key)
        .eq("lang_code", lang)
        .single();

    if (langRouteError || !correctLangRoute) {
        notFound();
    }

    const correctPath = correctLangRoute.path;
    // 3. Se o path atual não for o correto, redirecionar
    if (correctPath !== normalizedSlug) {
        return redirect(`/${lang}${correctPath}`);
    }
    switch (route_key) {
        case "about":
            return await About({ lang });
        case "around":
            return await AroundUs({ lang, slug });
        case "contacts":
            return await Contacts({ lang });
        case "faq":
            return await FAQ({ lang });
        default:
            return redirect(`/${lang}`);
    }
}
