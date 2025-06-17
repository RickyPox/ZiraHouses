"use client";

import Masonry from "react-masonry-css";
import Card from "@/components/card";
import Button from "./button";
import Link from "next/link";
import React from "react";

export default function MasonryDisplay({ content }: any) {
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        640: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`gap-[20px] flex common-margin mt-[100px]`}
            columnClassName={`flex flex-col gap-[20px]`}
        >
            {content.map((item: any, i: any) => (
                <div key={i}>
                    <Card title={item.title} text={item.text} img={item.image}>
                        {item.extratext &&
                            item.extratext.map((text: any, i: any) => (
                                <p key={i} className="font-bold">
                                    {text.split("\n").map((line: string, idx: number) => (
                                        <React.Fragment key={idx}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            ))}
                        {item.address && (
                            <div>
                                <p>{item.address.location}</p>
                                <p className="mt-4">
                                    GPS:{" "}
                                    <a href={item.address.url} className="underline bg-black text-white p-[5px]" target="_blank">
                                        {item.address.gps}{" "}
                                    </a>
                                </p>
                            </div>
                        )}
                        {item.extralink && (
                            <div key={i}>
                                <p className=" leading-[40px]">
                                    {item.extralink.text}{" "}
                                    <Link className="underline bg-black text-white p-[5px]" href={item.extralink.url} target="_blank">
                                        {item.extralink.urlText}
                                    </Link>
                                </p>
                            </div>
                        )}
                        {item.website && <Button href={item.website} text="Explore" target="_blank"></Button>}
                    </Card>
                </div>
            ))}
        </Masonry>
    );
}
