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
    // Vai buscar a route correspondente ao slug (path)
    const { data: route, error } = await supabase
        .from("routes")
        .select("route_key")
        .eq("path", normalizedSlug)
        .eq("lang_code", lang) // se estiveres a usar multilinguagem por coluna
        .single();
    console.log(route, error, slug, lang);
    if (error || !route) {
        notFound();
    }

    const { route_key } = route;

    switch (route_key) {
        case "about":
            return await About({ lang });
        case "around":
            return await AroundUs({ lang });
        case "contacts":
            return await Contacts({ lang });
        case "faq":
            return await FAQ({ lang });
        default:
            return redirect(`/${lang}`);
    }
}
