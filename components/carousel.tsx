import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import Carousel_Layout from "./carousel_layout";

export default async function Carousel() {
    const { data: images1, error: error1 } = await supabase.from("homepage_carousel").select("*").order("id", { ascending: false });

    const { data: images2, error: error2 } = await supabase.from("homepage_carousel_2").select("*").order("id", { ascending: false });

    if (error1 || error2 || !images1 || !images2) {
        notFound();
    }

    return (
        <>
            <Carousel_Layout images={images1} direction="left" />
            <Carousel_Layout images={images2} direction="right" />
        </>
    );
}
