import Button from "@/components/button";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import Reviews from "@/components/reviews";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function Home() {
    const { data: pages, error } = await supabase.from("pages").select("*").order("id", { ascending: true });

    if (error || !pages) {
        return { notFound };
    }
    return (
        <div className="flex flex-col ">
            <div className="relative col-start-1 col-span-full ">
                <div className="relative">
                    <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
                    <img className="w-full lg:max-h-[900px] lg:h-auto md:h-[50vh] h-[50vh] object-cover" src="/Landing.png" />
                </div>
                <div className="flex justify-center">
                    <div className="absolute top-[30%] lg:grid lg:gridLayout w-full max-w-[1920px]">
                        <div className="lg:col-start-2 col-span-full common-margin">
                            <h1 className="text-white">
                                Welcome To <br></br> Zira Houses
                            </h1>
                            <div className="w-1/2">
                                <p className="text-white md:mt-[20px] mt-[10px] pr-[10px]">
                                    We are Zira Houses, your welcoming holiday home on the Silver Coast of Portugal, ideal for families and travelers
                                    who love nature and the beach.
                                </p>
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
                            <Button text="See more" href={page.href}></Button>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="max-w-[1920px] col-start-2 col-span-9 grid grid-cols-9 gap-x-[20px] pt-[100px] common-margin">
                    <div className="md:col-span-5 col-span-full flex flex-row flex-nowrap items-center gap-x-[20px]">
                        <h2>Our Guest Reviews</h2>
                        <div className="bg-black h-[1px] flex-1" />
                    </div>
                    <div className="mt-[50px] col-span-full">
                        <Reviews></Reviews>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="col-start-2 col-span-9 pt-[100px]">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    );
}
