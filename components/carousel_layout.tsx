"use client";
import Marquee from "react-fast-marquee";

export default function Carousel_Layout({ images, direction }: { images: any[]; direction: any }) {
    return (
        <div className="relative">
            <Marquee autoFill speed={50} style={{}} direction={direction}>
                {images?.map((image: any, i: any) => (
                    <img
                        key={i}
                        src={image.image}
                        alt={`Image ${i + 1}`}
                        className="lg:w-full lg:h-[400px] sm:h-[200px] sm:w-[300px] h-[150px] w-[150px] object-cover"
                    />
                ))}
            </Marquee>
        </div>
    );
}
