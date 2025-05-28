"use client";
import { useEffect, useRef, useState } from "react";
import Button from "./button";

export default function PageHeading(props: any) {
    const whiteBoxRef = useRef<HTMLDivElement>(null);
    const [marginTopValue, setMarginTopValue] = useState(0);

    useEffect(() => {
        const updateMarginTop = () => {
            if (whiteBoxRef.current) {
                const height = whiteBoxRef.current.offsetHeight;
                const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint

                if (isLargeScreen) {
                    setMarginTopValue(height / 2);
                } else {
                    setMarginTopValue(0);
                }
            }
        };

        updateMarginTop();
        window.addEventListener("resize", updateMarginTop);

        return () => {
            window.removeEventListener("resize", updateMarginTop);
        };
    }, []);

    return (
        <div>
            {props.img && (
                <div className="relative">
                    <div className="bg-black/40 w-full h-full absolute top-0 left-0" />
                    <img
                        className="w-full max-h-[700px] object-cover"
                        src={props.img}
                        alt={props.title + "_img"}
                    />
                </div>
            )}
            <div className="flex justify-center">
                <div className="max-w-[1920px] lg:grid gridLayout">
                    <div
                        ref={whiteBoxRef}
                        className="relative col-start-2 col-span-9 grid grid-cols-9 bg-white py-[30px] gap-y-[40px] z-20 lg:mx-0 mx-[10px]"
                        style={{
                            marginTop: props.img
                                ? marginTopValue > 0
                                    ? `-${marginTopValue}px`
                                    : "-50px"
                                : 150,
                        }}
                    >
                        <h2 className="col-span-full text-center px-[20px]">
                            {props.title}
                        </h2>
                        <div className="lg:col-start-2 lg:col-span-7 col-start-1 col-span-full px-[20px] ">
                            {props.children}
                            <div className="flex w-full items-center justify-center">
                                <Button
                                    className="mt-[50px]"
                                    text="Book with us"
                                    href="https://www.airbnb.com/rooms/904972187690070709?source_impression_id=p3_1746637459_P3IWiTHiExUXzYt5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
