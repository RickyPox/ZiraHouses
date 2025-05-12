"use client";
import faq from "@/arrays/faq";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHeading from "@/components/pageHeading";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [openCategorie, setOpenCategorie] = useState(null);

    const toggleAnswer = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleCategorie = (index: any) => {
        if (openCategorie !== index) {
            setOpenCategorie(index);
            setActiveIndex(null); // Resetar a pergunta ativa ao mudar de categoria
        } else {
            setOpenCategorie(null);
        }
    };

    return (
        <div>
            {" "}
            <PageHeading img="/Bed.png" title="Frequently Asked Questions">
                <p>
                    Find quick answers to the most common questions about our
                    services, policies, and support. Whether you're looking for
                    help with orders, technical issues, or general inquiries,
                    this page is here to guide you with clear and concise
                    information.
                </p>
            </PageHeading>
            <div className="gridLayout grid ">
                <div
                    className={`col-start-1 col-span-full lg:col-start-2 lg:col-span-9 flex flex-col bg-white py-[50px] mt-[120px] lg:px-[50px] px-[10px] mx-[10px] lg:mx-0 `}
                >
                    {faq.map((item, faqIndex) => (
                        <div
                            key={faqIndex}
                            className={`flex flex-col gap-y-[50px] relative `}
                            style={{ zIndex: faqIndex }}
                        >
                            <div
                                className={`flex justify-between gap-x-[10px] cursor-pointer ${
                                    openCategorie === faqIndex
                                        ? "border-0"
                                        : "border-b-[1px] border-[#E9E9E9]"
                                }`}
                                onClick={() => toggleCategorie(faqIndex)}
                            >
                                <h2 className="uppercase">{item.title}</h2>
                                <motion.h2
                                    initial={{ rotate: 0 }}
                                    animate={{
                                        rotate:
                                            openCategorie === faqIndex
                                                ? 180
                                                : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {openCategorie === faqIndex ? "−" : "+"}
                                </motion.h2>
                            </div>

                            <motion.div
                                className={`flex flex-col space-y-[30px] ${
                                    openCategorie === faqIndex
                                        ? "mb-[100px]"
                                        : "mb-0"
                                }`}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: openCategorie === faqIndex ? 1 : 0,
                                    height:
                                        openCategorie === faqIndex ? "auto" : 0,
                                }}
                            >
                                {item.questions.map(
                                    (question, questionIndex) => {
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
                                                className=" border-b-[1px] border-[#E9E9E9] pb-[5px] flex flex-col "
                                            >
                                                <div
                                                    onClick={() =>
                                                        toggleAnswer(indexKey)
                                                    }
                                                    className={`flex gap-x-[10px] justify-between cursor-pointer`}
                                                >
                                                    <h3>{question.question}</h3>
                                                    <motion.h2
                                                        initial={{
                                                            rotate: 0,
                                                        }}
                                                        animate={{
                                                            rotate:
                                                                activeIndex ===
                                                                indexKey
                                                                    ? 180
                                                                    : 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                        }}
                                                    >
                                                        {activeIndex ===
                                                        indexKey
                                                            ? "−"
                                                            : "+"}
                                                    </motion.h2>
                                                </div>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    animate={{
                                                        opacity:
                                                            activeIndex ===
                                                            indexKey
                                                                ? 1
                                                                : 0,
                                                        height:
                                                            activeIndex ===
                                                            indexKey
                                                                ? "auto"
                                                                : 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                    }}
                                                >
                                                    <AnimatePresence>
                                                        {activeIndex ===
                                                            indexKey && (
                                                            <motion.p
                                                                initial={{
                                                                    opacity: 0,
                                                                    height: 0,
                                                                }}
                                                                animate={{
                                                                    opacity:
                                                                        activeIndex ===
                                                                        indexKey
                                                                            ? 1
                                                                            : 0,
                                                                    height:
                                                                        activeIndex ===
                                                                        indexKey
                                                                            ? "auto"
                                                                            : 0,
                                                                }}
                                                                exit={{
                                                                    opacity: 0,
                                                                    height: 0,
                                                                }}
                                                            >
                                                                {
                                                                    question.answer
                                                                }
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            </motion.div>
                                        );
                                    }
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
