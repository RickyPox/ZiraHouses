import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import MansonryLayout from "@/components/masonry";
import PageHeading from "@/components/pageHeading";

// Gera os caminhos estáticos com base nos dados da Supabase
export async function generateStaticParams() {
    const { data, error } = await supabase.from("around_us").select("path");

    if (error || !data) {
        console.error("Erro ao buscar paths da Supabase:", error);
        return [];
    }

    return data.map((item) => ({ path: item.path.toString() }));
}

// Página dinâmica
export default async function Pagina({ params }: { params: { path: string } }) {
    const { path } = await params;

    const { data: page, error } = await supabase
        .from("around_us")
        .select("*")
        .eq("path", path)
        .single();

    if (error || !page) {
        console.error("Erro ao buscar página:", error);
        notFound();
    }

    return (
        <div className="mb-[100px]">
            <PageHeading img={page.image_link} title={page.title}>
                <p>{page.description}</p>
            </PageHeading>

            <MansonryLayout content={page.content} />
        </div>
    );
}
