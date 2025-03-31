"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BigCard(props: any) {
    return (
        <div
            className={`bg-white lg:grid grid-cols-9 flex flex-col h-full ${props.classname}`}
        >
            {props.img && (
                <div className="col-start-1 xl:col-span-3 col-span-4 h-full row-span-full">
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="h-full swiper-room"
                    >
                        {props.img.map((image: any, i: any) => (
                            <SwiperSlide key={i} className="h-full">
                                <img
                                    src={image}
                                    alt={`Image ${i + 1}`}
                                    className="h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            <div className="xl:col-start-4 col-start-5 xl:col-span-6 col-span-5 grid xl:grid-cols-6 p-[20px] gap-y-[50px] ">
                <div className="col-span-5 col-start-1 flex flex-col">
                    <h2>{props.name}</h2>
                    <p className="mt-[20px]">{props.description}</p>
                </div>
                <div className="col-start-1 col-span-6">{props.children}</div>
            </div>
        </div>
    );
}
