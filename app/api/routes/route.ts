import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    const { data, error } = await supabase.from("routes").select("route_key, path, lang_code"); // Seleciona apenas os campos que precisas

    if (error) {
        console.error("Erro ao buscar rotas:", error.message);
        return NextResponse.json({ error: "Erro ao buscar rotas" }, { status: 500 });
    }

    return NextResponse.json(data);
}
