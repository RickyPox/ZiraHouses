"use client";
import Marquee from "react-fast-marquee";

export default function Carousel_Layout({ images, direction }: { images: any[]; direction: any }) {
    return (
        <div className="relative">
            <Marquee autoFill speed={50} style={{}} direction={direction}>
                {images?.map((image: any, i: any) => (
                    <img key={i} src={image.image} alt={`Image ${i + 1}`} className="w-full h-[400px] object-cover" />
                ))}
            </Marquee>
        </div>
    );
}
