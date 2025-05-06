import BigCard from "@/components/bigcard";
import rooms from "@/arrays/rooms";

export default function About() {
    return (
        <div>
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
                                About <br></br> The <br></br> House
                            </h1>
                        </div>
                        <div className="col-start-2 col-span-5 h-[5px] mt-[20px] bg-white" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="max-w-[1920px] lg:grid gridLayout ">
                    <div className="relative col-start-2 col-span-9 grid grid-cols-9 bg-white py-[30px] gap-y-[40px] -mt-[80px] xl:-mt-[70px] z-20 lg:mx-0 mx-[10px]">
                        <h2 className="col-span-full text-center px-[20px]">
                            YOUR HOME AWAY FROM HOME
                        </h2>
                        <div className="sm:col-start-2 sm:col-span-7 col-start-1 col-span-full px-[20px] ">
                            <p>
                                Welcome to Zira Houses, the best family-friendly
                                accommodation on Portugal’s Silver Coast.
                                Nestled in the peaceful Burinhosa village, our
                                home is the perfect retreat to relax,
                                disconnect, and explore the stunning Oeste
                                region.
                            </p>
                            <p className="mt-4">
                                Our cozy and comfortable house features
                                everything you need for a memorable family
                                vacation, including spacious living areas, a
                                fully equipped kitchen, and a beautiful outdoor
                                space to enjoy the fresh air. Whether you're
                                looking to unwind in a peaceful atmosphere or
                                gather together for family meals, Zira Houses
                                offers the perfect setting for creating
                                unforgettable moments.
                            </p>
                            <p className="mt-4">
                                With easy access to golden beaches, scenic
                                nature trails, and charming towns like Nazaré,
                                São Pedro de Moel, Paredes da Vitória, and São
                                Martinho do Porto, Zira Houses is an ideal
                                choice for families seeking both relaxation and
                                adventure.
                            </p>
                        </div>
                        <p className="sm:col-start-2 sm:col-span-7 col-start-1 col-span-full font-bold text-center px-[20px]">
                            Relax at Zira Houses, the perfect peaceful escape
                            for families on Portugal’s Silver Coast.
                        </p>
                    </div>
                </div>
            </div>

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
