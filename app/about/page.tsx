import BigCard from "@/components/bigcard";
import PageHeading from "@/components/pageHeading";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function About() {
    const { data: rooms, error } = await supabase.from("rooms").select("*").order("id", { ascending: true });

    if (error || !rooms) {
        return { notFound };
    }

    return (
        <div className="mb-[100px]">
            <PageHeading img="/about.jpg" title="About the House">
                <p>
                    Welcome to Zira Houses, the best family-friendly accommodation on Portugal’s Silver Coast. Nestled in the peaceful Burinhosa
                    village, our home is the perfect retreat to relax, disconnect, and explore the stunning Oeste region.
                </p>

                <p className="mt-4">
                    Our cozy and comfortable house features everything you need for a memorable family vacation, including spacious living areas, a
                    fully equipped kitchen, and a beautiful outdoor space to enjoy the fresh air. Whether you're looking to unwind in a peaceful
                    atmosphere or gather together for family meals, Zira Houses offers the perfect setting for creating unforgettable moments.
                </p>

                <p className="mt-4">
                    With easy access to golden beaches, scenic nature trails, and charming towns like Nazaré, São Pedro de Moel, Paredes da Vitória,
                    and São Martinho do Porto, Zira Houses is an ideal choice for families seeking both relaxation and adventure.
                </p>

                <p className="font-bold text-center mt-4">
                    Relax at Zira Houses, the perfect peaceful escape for families on Portugal’s Silver Coast.
                </p>
            </PageHeading>
            <div className="flex justify-center">
                <div
                    className="col-start-2 col-span-9 grid grid-cols-9 gap-y-[100px] pt-[100px] common-margin max-w-[1920px]"
                    style={{ gridAutoRows: "1fr" }}
                >
                    {rooms.map((room, i) => (
                        <div key={i} className={`col-start-1 col-span-full`}>
                            <BigCard img={room.content.images} name={room.title} description={room.description}>
                                {room.content.extraInfo && (
                                    <div>
                                        {room.content.extraInfo.map((info: any, i: any) => (
                                            <div key={i}>
                                                <p>
                                                    <span className="font-bold">{info.name}</span> {info.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {room.content.amenities && (
                                    <div className="mt-4">
                                        <p className="font-bold">Amenities:</p>
                                        {room.content.amenities.map((amenitie: any, i: any) => (
                                            <div key={i}>
                                                <p>{amenitie}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {room.content.extraSpaces && (
                                    <div className="col-span-full grid grid-cols-6 gap-x-[20px]">
                                        {room.content.extraSpaces.map((space: any, i: any) => (
                                            <div key={i} className="col-span-2">
                                                <p className="font-bold uppercase">{space.name}</p>
                                                {space.spaces.map((text: any, i: any) => (
                                                    <p key={i}>{text}</p>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </BigCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
