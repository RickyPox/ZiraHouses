"use client";

import Masonry from "react-masonry-css";
import Card from "@/components/card";
import Link from "next/link";
import Button from "./button";

interface ContentItem {
    title: string;
    text: string;
    image: string;
    address?: string;
    website?: string;
}

interface MasonryDisplayProps {
    content: ContentItem[];
}

export default function MasonryDisplay({ content }: MasonryDisplayProps) {
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
            {content.map((item, i) => (
                <div key={i}>
                    <Card title={item.title} text={item.text} img={item.image}>
                        {item.address && <p>{item.address}</p>}
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
