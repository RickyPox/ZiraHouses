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
            <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-9 flex flex-col bg-white gap-y-[100px] py-[50px] mt-[120px] lg:px-[50px] px-[10px] mx-[10px] lg:mx-0">
                {faq.map((item, faqIndex) => (
                    <div key={faqIndex} className="flex flex-col gap-y-[50px]">
                        <h2 className="uppercase">{item.title}</h2>
                        <div className="flex flex-col space-y-[20px]">
                            {item.questions.map((question, questionIndex) => {
                                const indexKey = `${faqIndex}-${questionIndex}`;
                                return (
                                    <motion.div
                                        initial={{ rowGap: "0px" }}
                                        animate={{
                                            rowGap:
                                                activeIndex === indexKey
                                                    ? "20px"
                                                    : "0px",
                                        }}
                                        key={indexKey}
                                        className=" border-b-[1px] border-[#E9E9E9] pb-[10px] flex flex-col "
                                    >
                                        <div
                                            onClick={() =>
                                                toggleAnswer(indexKey)
                                            }
                                            className="flex gap-x-[10px] justify-between cursor-pointer"
                                        >
                                            <h3>{question.question}</h3>
                                            <motion.h2
                                                initial={{ rotate: 0 }}
                                                animate={{
                                                    rotate:
                                                        activeIndex === indexKey
                                                            ? 180
                                                            : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {activeIndex === indexKey
                                                    ? "−"
                                                    : "+"}
                                            </motion.h2>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity:
                                                    activeIndex === indexKey
                                                        ? 1
                                                        : 0,
                                                height:
                                                    activeIndex === indexKey
                                                        ? "auto"
                                                        : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {activeIndex === indexKey && (
                                                <p>{question.answer}</p>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
