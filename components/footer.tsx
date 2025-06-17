import Footer_Layout from "./footer_layout";
import { getFilteredContentByLanguage } from "@/app/utils/getFilteredContentByLanguage";

export default async function Footer({ language }: { language: string }) {
    /*   const { data: footer, error } = await supabase.from("footer").select("*").order("id", { ascending: false }); */
    const footer = (await getFilteredContentByLanguage("footer", language)) ?? [];

    return <Footer_Layout currentLang={language} footer={footer} />;
}
