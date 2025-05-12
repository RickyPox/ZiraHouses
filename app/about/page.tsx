import BigCard from "@/components/bigcard";
import rooms from "@/arrays/rooms";
import PageHeading from "@/components/pageHeading";

export default function About() {
    return (
        <div className="mb-[100px]">
            <PageHeading img="/Bed.png" title="About the House">
                <p>
                    Welcome to Zira Houses, the best family-friendly
                    accommodation on Portugal’s Silver Coast. Nestled in the
                    peaceful Burinhosa village, our home is the perfect retreat
                    to relax, disconnect, and explore the stunning Oeste region.
                </p>

                <p>
                    Our cozy and comfortable house features everything you need
                    for a memorable family vacation, including spacious living
                    areas, a fully equipped kitchen, and a beautiful outdoor
                    space to enjoy the fresh air. Whether you're looking to
                    unwind in a peaceful atmosphere or gather together for
                    family meals, Zira Houses offers the perfect setting for
                    creating unforgettable moments.
                </p>

                <p>
                    With easy access to golden beaches, scenic nature trails,
                    and charming towns like Nazaré, São Pedro de Moel, Paredes
                    da Vitória, and São Martinho do Porto, Zira Houses is an
                    ideal choice for families seeking both relaxation and
                    adventure.
                </p>

                <p className="font-bold text-center">
                    Relax at Zira Houses, the perfect peaceful escape for
                    families on Portugal’s Silver Coast.
                </p>
            </PageHeading>
            <div className="flex justify-center">
                <div
                    className="col-start-2 col-span-9 grid grid-cols-9 gap-y-[50px] pt-[100px] common-margin max-w-[1920px]"
                    style={{ gridAutoRows: "1fr" }}
                >
                    {rooms.map((room, i) => (
                        <div
                            key={i}
                            className={`col-start-1 col-span-full mb-[50px]`}
                        >
                            <BigCard
                                img={room.images}
                                name={room.name}
                                description={room.text}
                            >
                                {room.extraInfo && (
                                    <div>
                                        {room.extraInfo.map((info, i) => (
                                            <div key={i}>
                                                <p>
                                                    <span className="font-bold">
                                                        {info.name}
                                                    </span>{" "}
                                                    {info.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {room.amenities && (
                                    <div className="mt-4">
                                        <p className="font-bold">Amenities:</p>
                                        {room.amenities.map((amenitie, i) => (
                                            <div key={i}>
                                                <p>{amenitie}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {room.extraSpaces && (
                                    <div className="col-span-full grid grid-cols-6 gap-x-[20px]">
                                        {room.extraSpaces.map((space, i) => (
                                            <div key={i} className="col-span-2">
                                                <p className="font-bold uppercase">
                                                    {space.name}
                                                </p>
                                                {space.spaces.map((text, i) => (
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
