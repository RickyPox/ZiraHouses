"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingButton_layout(props: any) {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = window.scrollY;
            const tenPercentHeight = scrollHeight * 0.1;

            if (scrolled > tenPercentHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="floatingButton"
                        initial={{ scale: 0, rotate: 90 }}
                        animate={{ scale: 1, rotate: 90 }}
                        exit={{ scale: 0, rotate: 90 }}
                        className="fixed right-0 bottom-[50%] z-20 origin-top-right "
                    >
                        {props.button}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
