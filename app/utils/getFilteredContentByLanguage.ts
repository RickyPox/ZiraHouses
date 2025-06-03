import { supabase } from "@/lib/supabaseClient";

type Route = {
    path: string;
    lang_code: string;
};

export async function getFilteredContentByLanguage<T>(tableName: string, matchKey: string, language: string): Promise<T[] | null> {
    const { data: tableData, error: tableError } = await supabase.from(tableName).select("*").order("id", { ascending: true });
    const { data: routes, error: routesError } = await supabase.from("routes").select("*");

    if (tableError || routesError || !tableData || !routes) {
        return null;
    }

    const filtered = tableData
        .map((item: any) => {
            const route = routes.find((r: Route) => r.path === item[matchKey]);
            return {
                ...item,
                lang_code: route?.lang_code ?? null,
            };
        })
        .filter((item: any) => item.lang_code === language);

    return filtered;
}
