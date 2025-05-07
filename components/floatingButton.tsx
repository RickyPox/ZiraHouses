"use client";

import { useState, useEffect } from "react";
import Button from "@/components/button";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const triggerElement = document.getElementById("trigger");

        const handleScroll = () => {
            if (triggerElement) {
                const rect = triggerElement.getBoundingClientRect();
                if (rect.top <= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
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
                        className="fixed right-0 bottom-[20%] z-20 origin-top-right "
                    >
                        <Button
                            text="Book with us"
                            href="https://www.airbnb.com/rooms/904972187690070709?source_impression_id=p3_1746637459_P3IWiTHiExUXzYt5"
                        ></Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
