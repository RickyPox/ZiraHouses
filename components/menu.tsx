import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

export default function AnimatedHamburgerButton({ active, setActive }: any) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => setActive((prev: any) => !prev)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative sm:h-10 sm:w-10 h-5 w-5 flex flex-col justify-between rounded-full transition-colors`}
            >
                <motion.span
                    variants={VARIANTS.top}
                    className={`${active ? "absolute" : "relative"} h-[3px] sm:w-10 w-5 ${active ? "bg-black" : "bg-white"}`}
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className={`${active ? "absolute" : "relative"} h-[3px] sm:w-10 w-5 ${active ? "bg-black" : "bg-white"}`}
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className={`${active ? "absolute" : "relative"} h-[3px]  ${isHovered ? "w-5 " : "sm:w-10 w-5"} ${
                        active ? "bg-black hidden" : "bg-white block"
                    } duration-300`}
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "50%",
                    }}
                />
            </motion.button>
        </MotionConfig>
    );
}

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
        },
    },
};
