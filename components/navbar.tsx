"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import pages from "@/arrays/pages";
import AnimatedHamburgerButton from "@/components/menu";
import { Instagram, Pinterest } from "./socialsLogos";
import Button from "./button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative text-white z-30 flex justify-center">
            <div className="grid grid-cols-11 justify-start  absolute z-30 top-0 w-screen items-center max-w-[2560px]">
                <div className="col-start-2 col-span-1 lg:flex hidden justify-between items-center ">
                    <Pinterest black={isOpen ? true : false} />
                    <Instagram black={isOpen ? true : false} />
                </div>
                <div className="col-start-3 col-span-7 flex justify-center">
                    <Link href="/">
                        <img
                            className="w-[300px]"
                            src={isOpen ? "/LogoBlack.png" : "/LogoWhite.png"}
                        />
                    </Link>
                </div>
                <div className="col-start-10  space-x-[50px]  items-center lg:flex hidden">
                    <p className={isOpen ? "text-black" : "text-white"}>PT</p>
                    <p className={isOpen ? "text-black" : "text-white"}>ENG</p>
                </div>
                <div className="lg:col-start-11 col-start-10 flex lg:justify-start">
                    <div>
                        <AnimatedHamburgerButton
                            active={isOpen}
                            setActive={setIsOpen}
                        />
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <div className="">
                        <motion.div
                            initial={{ width: 0, backgroundColor: "none" }}
                            animate={{
                                width: "100%",
                                backgroundColor: "rgba(255,255,255,0.9)",
                            }}
                            exit={{ width: 0 }}
                            className="grid gridLayout h-screen fixed top-0 right-0 z-20  pt-[100px]"
                        >
                            <div className="col-start-2 col-span-9 flex flex-col items-center lg:justify-start lg:space-y-[3vw] lg:my-0 my-[20px] justify-between ">
                                <div className="flex space-x-[50px] lg:hidden">
                                    <p
                                        className={
                                            isOpen ? "text-black" : "text-white"
                                        }
                                    >
                                        PT
                                    </p>
                                    <p
                                        className={
                                            isOpen ? "text-black" : "text-white"
                                        }
                                    >
                                        ENG
                                    </p>
                                </div>
                                <Link
                                    href="/"
                                    onMouseEnter={() => setHoveredIndex(998)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={handleIsOpen}
                                >
                                    <h2 className="text-black">Home</h2>
                                    <motion.div
                                        className="h-[2px] bg-black"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width:
                                                hoveredIndex === 998
                                                    ? "100%"
                                                    : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                                {pages.map((page, i) => (
                                    <Link
                                        key={i}
                                        href={page.href}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() =>
                                            setHoveredIndex(null)
                                        }
                                        onClick={handleIsOpen}
                                    >
                                        <h2 className="text-black">
                                            {page.title}
                                        </h2>
                                        <motion.div
                                            className="h-[2px] bg-black"
                                            initial={{ width: 0 }}
                                            animate={{
                                                width:
                                                    hoveredIndex === i
                                                        ? "100%"
                                                        : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                ))}
                                <Link
                                    href="/frequently-asked-questions"
                                    onMouseEnter={() => setHoveredIndex(999)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={handleIsOpen}
                                >
                                    <h2 className="text-black">
                                        Frequently Asked Questions
                                    </h2>
                                    <motion.div
                                        className="h-[2px] bg-black"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width:
                                                hoveredIndex === 999
                                                    ? "100%"
                                                    : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                                <Button
                                    text="Book with us"
                                    href="https://www.airbnb.com/rooms/904972187690070709?source_impression_id=p3_1746637459_P3IWiTHiExUXzYt5"
                                ></Button>
                                <div className="flex lg:hidden space-x-[50px]">
                                    <Pinterest black />
                                    <Instagram black />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
