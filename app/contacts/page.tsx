import PageHeading from "@/components/pageHeading";

export default function Contacts() {
    return (
        <div>
            <div className="">
                <PageHeading img="/Bed.png" title="About Us">
                    <p>
                        {" "}
                        I’m Mariana, a proud Superhost on Airbnb with over 10
                        years of experience hosting guests at Zira Houses, a
                        family-friendly accommodation on Portugal’s Silver
                        Coast. My mission is to provide families with a relaxing
                        seaside getaway in a peaceful, private setting, ensuring
                        a memorable and comfortable stay.
                    </p>

                    <p className="mt-4">
                        With personalized hospitality and local insights, I
                        guarantee a true authentic Portugal experience. Whether
                        you’re looking for a nature escape or simply a place to
                        unwind, Zira Houses offers the perfect base for your
                        next family vacation.
                    </p>

                    <p className="font-bold text-center">
                        You can contact me at:{" "}
                        <a href="mailto:info@zirahouses.com">
                            info@zirahouses.com
                        </a>
                    </p>
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
