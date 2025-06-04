import { supabase } from "@/lib/supabaseClient";
let cachedRoutes: { path: string; route_key: string; lang_code: string }[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 60 * 1000; // 1 minuto

export async function getCachedRoutes() {
    const now = Date.now();
    if (!cachedRoutes || now - lastFetchTime > CACHE_DURATION) {
        const { data, error } = await supabase.from("routes").select("*");

        if (error || !data) {
            console.error("Erro ao buscar rotas:", error);
            return [];
        }

        cachedRoutes = data;
        lastFetchTime = now;
    }

    return cachedRoutes;
}
