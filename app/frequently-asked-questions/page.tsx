"use client";
import faq from "@/arrays/faq";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="gridLayout grid ">
            <div className="relative col-start-2 col-span-full">
                <div className="col-start-2 col-span-full">
                    <h1>
                        Frequently <br></br> Asked <br></br> Questions{" "}
                    </h1>
                </div>
            </div>
            <div className="col-start-2 col-span-9 grid grid-cols-9 bg-white gap-y-[50px] py-[50px] mt-[120px]">
                {faq.map((item, i) => (
                    <motion.div
                        initial={{ rowGap: "0px" }}
                        animate={{ rowGap: activeIndex === i ? "40px" : "0px" }}
                        key={i}
                        className="col-start-2 col-span-7 border-b-[1px] border-[#E9E9E9] pb-[20px] px-[10px] flex flex-col "
                    >
                        <div
                            onClick={() => toggleAnswer(i)}
                            className="flex justify-between cursor-pointer"
                        >
                            <h2>{item.question}</h2>
                            <motion.h2
                                initial={{ rotate: 0 }}
                                animate={{
                                    rotate: activeIndex === i ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeIndex === i ? "−" : "+"}
                            </motion.h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: activeIndex === i ? 1 : 0,
                                height: activeIndex === i ? "auto" : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeIndex === i && <p>{item.answer}</p>}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
