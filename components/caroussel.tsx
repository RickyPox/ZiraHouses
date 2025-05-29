import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Caroussel() {
    return (
        <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className="lg:h-[600px] h-[300px] swiper-room">
            {props.img.map((image: any, i: any) => (
                <SwiperSlide key={i} className="">
                    <img src={image} alt={`Image ${i + 1}`} className=" lg:h-[600px] h-[300px] w-full object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
