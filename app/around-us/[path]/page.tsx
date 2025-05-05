import pages from "@/arrays/pages";
import Card from "@/components/card";
import Masonry from "react-masonry-css";
import Link from "next/link";
import { notFound } from "next/navigation";
import MansonryLayout from "@/components/masonry";

export async function generateStaticParams() {
    return pages.map((page) => ({ path: page.path }));
}
type Params = Promise<{ path: string }>;
export default async function Pagina({ params }: { params: Params }) {
    const { path } = await params;
    const page = pages.find((p) => p.path === path);

    if (!page) {
        notFound();
    }

    return (
        <div>
            <div className="relative col-start-1 col-span-full">
                <div className="relative">
                    <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
                    <img
                        className="w-full max-h-[900px]"
                        src="/Bed.png"
                        alt="Background"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="absolute top-[30%] grid gridLayout w-full max-w-[1920px]">
                        <div className="col-start-1 col-span-full text-center">
                            <h1 className="text-white">{page.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <MansonryLayout content={page.content}></MansonryLayout>
        </div>
    );
}
