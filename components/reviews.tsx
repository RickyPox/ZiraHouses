import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import Reviews_Slider from "./reviews_slider";

export default async function Reviews() {
    const { data: reviews, error } = await supabase
        .from("reviews")
        .select("*")
        .order("id", { ascending: false });

    if (error || !reviews) {
        notFound();
    }

    return <Reviews_Slider reviews={reviews} />;
}
