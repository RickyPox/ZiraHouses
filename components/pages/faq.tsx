import Faq from "@/components/faq";
import PageHeading from "@/components/pageHeading";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function FAQ({ lang }: { lang: string }) {
    const { data: pageheading, error: headingError } = await supabase.from("page_heading").select("*").eq("page", "faq").eq("lang", lang).single();
    if (headingError || !pageheading) {
        notFound();
    }
    return (
        <div>
            {" "}
            <PageHeading img={pageheading.image} title={pageheading.title}>
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
            </PageHeading>
            <Faq></Faq>
        </div>
    );
}
