import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import Faq_Layout from "./faq_layout";

export default async function Faq() {
    const { data: faq, error } = await supabase
        .from("faq")
        .select("*")
        .order("id", { ascending: true });

    if (error || !faq) {
        notFound();
    }

    return <Faq_Layout faq={faq} />;
}
