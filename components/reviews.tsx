"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import reviews from "../arrays/reviews";


export default function Reviews(){
    return(
        <div className='relative'>
            <Swiper
            spaceBetween={20}
            slidesPerView={3}
            pagination = {{ clickable: true }}
            modules={[Pagination]}
            >
            {reviews.map((review, i) => (
                <SwiperSlide key={i}>
                    <div className="bg-white p-[20px] h-full flex flex-col">
                        <h3>- {review.name}</h3>
                        <p className="flex-grow mt-[20px]">{review.comment}</p>
                        <p className='font-bold text-right mt-[50px]'>{review.date}</p>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}