import PageHeading from "@/components/pageHeading";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function Contacts({ lang }: { lang: string }) {
    const { data: pageheading, error: headingError } = await supabase
        .from("page_heading")
        .select("*")
        .eq("page", "contacts")
        .eq("lang", lang)
        .single();
    if (headingError || !pageheading) {
        notFound();
    }
    return (
        <div>
            <div className="">
                <PageHeading img={pageheading.image} title={pageheading.title}>
                    <div>
                        {pageheading.content.paragraph &&
                            pageheading.content.paragraph.map((item: any, index: number) => (
                                <p key={index} className={index > 0 ? "mt-4" : ""}>
                                    {item}
                                </p>
                            ))}
                        {pageheading.content.link && (
                            <p className="font-bold mt-4 text-center">
                                {pageheading.content.link.before_link}{" "}
                                <a className="underline" href={pageheading.content.link.url}>
                                    {pageheading.content.link.link_text}
                                </a>{" "}
                                {pageheading.content.link.after_link}
                            </p>
                        )}
                        {pageheading.content.extraInfo && (
                            <div className="flex lg:flex-row flex-col mt-20 lg:space-x-[50px] space-y-[20px] lg:space-y-0 justify-between">
                                {pageheading.content.extraInfo.map((item: any, i: any) => (
                                    <div key={i}>
                                        {item.title && <h3>{item.title}</h3>}
                                        {item.info &&
                                            (Array.isArray(item.info) ? (
                                                item.info.map((line: any, index: number) => <p key={index}>{line}</p>)
                                            ) : (
                                                <p>{item.info}</p>
                                            ))}
                                        {item.url && (
                                            <p className="font-bold">
                                                {item.url_before}
                                                <a href={item.url} className="underline">
                                                    {item.url_text}
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </PageHeading>
            </div>
            <iframe
                className=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1352.4024272271886!2d-8.986656294690876!3d39.70076810536609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd220911a5fbd031%3A0x55d96a183febc760!2sZira%20Houses!5e1!3m2!1sen!2spt!4v1746551978648!5m2!1sen!2spt"
                width="100%"
                height="1000"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
