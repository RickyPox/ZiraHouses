"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BigCard(props: any) {
return (
    <div className={`bg-white grid grid-cols-9 gap-x-[20px] h-full ${props.classname}`}>
        {props.img &&
            <div className="col-start-1 col-span-3 h-full row-span-full">
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true }}
                modules={[Pagination]}
                className="h-full swiper-room"
            >
                {props.img.map((image: any, i: any) => (    
                    <SwiperSlide key={i} className="h-full">
                        <img src={image} alt={`Image ${i + 1}`} className="h-full object-cover"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        }
        <div className="col-start-4 col-span-6 grid grid-cols-6 py-[20px] gap-y-[50px]">
        <div className="col-span-5 col-start-1 flex flex-col">
            <h2>{props.name}</h2>
            <p className="mt-[20px]">{props.description}</p>
        </div>
        <div className="col-start-1 col-span-6">{props.children}</div>
        </div>
    </div>
);

}
