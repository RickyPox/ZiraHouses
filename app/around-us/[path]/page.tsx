import around from "@/arrays/around";
import { notFound } from "next/navigation";
import MansonryLayout from "@/components/masonry";
import PageHeading from "@/components/pageHeading";

export async function generateStaticParams() {
    return around.map((page) => ({ path: page.path }));
}
type Params = Promise<{ path: string }>;
export default async function Pagina({ params }: { params: Params }) {
    const { path } = await params;
    const page = around.find((p) => p.path === path);

    if (!page) {
        notFound();
    }

    return (
        <div className="mb-[100px]">
            <PageHeading img={page.img} title={page.title}>
                <p>{page.description}</p>
            </PageHeading>

            <MansonryLayout content={page.content}></MansonryLayout>
        </div>
    );
}
