"use client";

import { useState, useEffect } from "react";
import Button from "@/components/button";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = window.scrollY;
            const tenPercentHeight = scrollHeight * 0.1;
            console.log(tenPercentHeight);

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
                        <Button
                            target="_blank"
                            text="Book with us"
                            href="https://www.airbnb.com/rooms/904972187690070709?source_impression_id=p3_1746637459_P3IWiTHiExUXzYt5"
                        ></Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
