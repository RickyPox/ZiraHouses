"use client";
import footer from "@/arrays/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Instagram, Pinterest } from "./socialsLogos";

export default function Footer() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className="bg-black flex justify-center">
            <div className="">
                <div className="w-screen grid grid-cols-11 lg:py-[20px] py-[50px] max-w-[2560px]">
                    <div className="col-start-2 col-span-9 flex lg:flex-row flex-col lg:space-y-0 space-y-[50px] items-center justify-between ">
                        <h1 className="text-white uppercase sm:text-[48px] text-[30px]">
                            ZIRA HOUSES
                        </h1>
                        {footer.map((item, i) => (
                            <div key={i}>
                                <Link
                                    href={item.href}
                                    target="_blank"
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="flex flex-col">
                                        <p className="text-white">
                                            {item.title}
                                        </p>
                                    </div>
                                    <motion.div
                                        className="h-[1px] bg-white"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width:
                                                hoveredIndex === i ? "100%" : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </div>
                        ))}
                        <div className="flex space-x-[50px]">
                            <Pinterest />
                            <Instagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
