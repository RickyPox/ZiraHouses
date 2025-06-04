import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import Footer_Layout from "./footer_layout";

export default async function Footer() {
    const { data: footer, error } = await supabase.from("footer").select("*").order("id", { ascending: false });

    if (error || !footer) {
        notFound();
    }

    return <Footer_Layout footer={footer} />;
}
