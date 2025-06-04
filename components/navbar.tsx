import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import Navbar_Layout from "./navbar_layout";
import { getFilteredContentByLanguage } from "@/app/utils/getFilteredContentByLanguage";

export default async function Navbar({ language }: { language: string }) {
    const { data: lang_select, error: LangSelectError } = await supabase.from("languages").select("*");

    if (LangSelectError || !lang_select) {
        notFound();
    }

    const navbar = (await getFilteredContentByLanguage("navbar", language)) ?? [];

    return <Navbar_Layout navbar={navbar} lang={lang_select} currentLang={language} />;
}
