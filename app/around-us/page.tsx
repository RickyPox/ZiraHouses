import around from "@/arrays/around";
import Button from "@/components/button";
import Card from "@/components/card";
import PageHeading from "@/components/pageHeading";

export default function AroundUs() {
    return (
        <div className="mb-[100px]">
            <PageHeading img="/Bed.png" title="Around Us">
                <p>
                    Discover Portugal’s Silver Coast, a hidden gem where golden
                    beaches, scenic cliffs, and charming seaside villages create
                    the perfect escape. Located between Lisbon and Porto, this
                    breathtaking region offers unspoiled coastlines, world-class
                    surf spots, rich cultural heritage, and fresh seafood
                    delights.
                </p>
                <p>
                    From the giant waves of Nazaré and the medieval charm of
                    Óbidos to the tranquil bay of São Martinho do Porto and the
                    forested trails of Paredes da Vitória, the Silver Coast is a
                    top destination for family holidays, outdoor adventures, and
                    authentic Portuguese experiences.
                </p>
                <p className="font-bold text-center mt-4">
                    Experience the true essence of the silver coast where
                    nature, history, and seaside beauty come together.
                </p>
            </PageHeading>

            <div className="flex justify-center">
                <div className="col-start-1 col-span-9 lg:grid grid-cols-9 flex flex-col lg:gap-y-[20px] gap-y-[50px] gap-x-[20px] pt-[100px] common-margin max-w-[1920px]">
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
