import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import Navbar_Layout from "./navbar_layout";

export default async function Navbar() {
    const { data: navbar, error } = await supabase
        .from("navbar")
        .select("*")
        .order("id", { ascending: true });

    if (error || !navbar) {
        notFound();
    }

    return <Navbar_Layout navbar={navbar} />;
}
