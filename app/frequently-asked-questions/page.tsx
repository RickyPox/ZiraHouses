import Faq from "@/components/faq";
import PageHeading from "@/components/pageHeading";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function FAQ() {
    const { data: pageheading, error } = await supabase.from("page_heading").select("*").eq("id", 4).single();
    if (error || !pageheading) {
        notFound();
    }
    return (
        <div>
            {" "}
            <PageHeading img="/contacts.jpg" title="Frequently Asked Questions">
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
