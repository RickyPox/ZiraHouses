import Button from "@/components/button";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import Reviews from "@/components/reviews";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function Home() {
    const { data: pages, error: error1 } = await supabase.from("pages").select("*").order("id", { ascending: true });
    const { data: pageheading, error: error2 } = await supabase.from("page_heading").select("*").eq("id", 6).single();

    if (error1 || !pages) {
        notFound();
    }

    if (error2 || !pageheading) {
        notFound();
    }

    return (
        <div className="flex flex-col ">
            <div className="relative col-start-1 col-span-full ">
                <div className="relative">
                    <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
                    <img className="w-full lg:max-h-[900px] lg:h-auto md:h-[50vh] h-[50vh] object-cover" src={pageheading.image} />
                </div>
                <div className="flex justify-center">
                    <div className="absolute top-[30%] lg:grid lg:gridLayout w-full max-w-[1920px]">
                        <div className="lg:col-start-2 col-span-full common-margin">
                            <h1 className="text-white">
                                {pageheading.title
                                    .replace(/\\n/g, "\n")
                                    .split("\n")
                                    .map((line: string, index: number) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </h1>
                            <div className="w-1/2">
                                <p className="text-white md:mt-[20px] mt-[10px] pr-[10px]">{pageheading.bold}</p>
                            </div>
                            <Button
                                className="mt-[50px]"
                                text="Book with us"
                                href="https://www.airbnb.com/rooms/904972187690070709?source_impression_id=p3_1746637459_P3IWiTHiExUXzYt5"
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="max-w-[1920px] col-start-1 col-span-9 lg:grid grid-cols-9 flex flex-col lg:gap-y-0 gap-y-[50px] gap-x-[20px] pt-[100px] common-margin">
                    {pages.map((page, i) => (
                        <Card key={i} className="col-span-3" title={page.title} img={page.image} text={page.description}>
                            {page.href && <Button text="See more" href={page.href}></Button>}
                        </Card>
                    ))}
                </div>
            </div>
            <Reviews></Reviews>
            <div className="flex justify-center">
                <div className="col-start-2 col-span-9 pt-[100px]">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    );
}
