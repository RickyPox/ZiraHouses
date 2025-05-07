import around from "@/arrays/around";
import Button from "@/components/button";
import Card from "@/components/card";

export default function AroundUs() {
    return (
        <div className="">
            <div className="relative col-start-1 col-span-full">
                <div className="relative">
                    <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
                    <img
                        className="w-full max-h-[900px] lg:h-auto md:h-[50vh] h-[50vh] object-cover"
                        src="/Bed.png"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="absolute xl:top-[30%] top-[10%] grid gridLayout w-full max-w-[1920px]">
                        <div className="col-start-2 col-span-full">
                            <h1 className="text-white">
                                Around <br></br> Us
                            </h1>
                        </div>
                        <div className="col-start-2 col-span-5 h-[5px] mt-[20px] bg-white" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="max-w-[1920px] lg:grid gridLayout ">
                    <div className="relative col-start-2 col-span-9 grid grid-cols-9 bg-white py-[30px] gap-y-[40px] -mt-[80px] xl:-mt-[70px] z-20 lg:mx-0 mx-[10px]">
                        <div className="sm:col-start-2 sm:col-span-7 col-start-1 col-span-full px-[20px] ">
                            <p>
                                Discover Portugal’s Silver Coast, a hidden gem
                                where golden beaches, scenic cliffs, and
                                charming seaside villages create the perfect
                                escape. Located between Lisbon and Porto, this
                                breathtaking region offers unspoiled coastlines,
                                world-class surf spots, rich cultural heritage,
                                and fresh seafood delights.
                            </p>
                            <p className="mt-4">
                                From the giant waves of Nazaré and the medieval
                                charm of Óbidos to the tranquil bay of São
                                Martinho do Porto and the forested trails of
                                Paredes da Vitória, the Silver Coast is a top
                                destination for family holidays, outdoor
                                adventures, and authentic Portuguese
                                experiences.
                            </p>
                        </div>
                        <p className="sm:col-start-2 sm:col-span-7 col-start-1 col-span-full font-bold text-center px-[20px]">
                            Experience the true essence of the silver coast
                            where nature, history, and seaside beauty come
                            together.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="col-start-1 col-span-9 lg:grid grid-cols-9 flex flex-col lg:gap-y-[20px] gap-y-[50px] gap-x-[20px] pt-[100px] common-margin">
                    {around.map((page, i) => (
                        <div key={i} className="col-span-3">
                            <Card
                                title={page.title}
                                text={page.description}
                                img={page.img}
                            >
                                <Button
                                    text="See more"
                                    href={`around-us/${page.path}`}
                                ></Button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
