"use client";

import Masonry from "react-masonry-css";
import Card from "@/components/card";
import Link from "next/link";
import Button from "./button";

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
                        {item.extratext && <div>{item.extratext}</div>}
                        {item.address && <p>{item.address}</p>}
                        {item.extralink && <p>{item.extralink}</p>}
                        {item.website && (
                            <Button
                                href={item.website}
                                text="See more"
                            ></Button>
                        )}
                    </Card>
                </div>
            ))}
        </Masonry>
    );
}
