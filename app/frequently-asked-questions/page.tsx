import Faq from "@/components/faq";
import PageHeading from "@/components/pageHeading";

export default function FAQ() {
    return (
        <div>
            {" "}
            <PageHeading img="/Bed.png" title="Frequently Asked Questions">
                <p>
                    Find quick answers to the most common questions about our
                    services, policies, and support. Whether you're looking for
                    help with bookings, your stay, or general inquiries, this
                    page is here to guide you with clear and concise
                    information.
                </p>
                <p className="mt-4">Still have questions?</p>
                <p className="mt-4">
                    Feel free to email us at{" "}
                    <a
                        className="font-bold underline"
                        href="mailto:info@zirahouses.com"
                    >
                        info@zirahouses.com
                    </a>{" "}
                    – we’re happy to help!
                </p>
            </PageHeading>
            <Faq></Faq>
        </div>
    );
}
