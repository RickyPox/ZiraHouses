const faq = [
    /* RESERVATIONS & PAYMENTS */
    {
        title: "RESERVATIONS & PAYMENTS",
        questions: [
            {
                question: "How can I make a reservation?",
                answer: (
                    <>
                        You can book directly through{" "}
                        <a
                            href="https://www.airbnb.com/rooms/904972187690070709?source_impression_id=p3_1746637459_P3IWiTHiExUXzYt5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "5px" }}
                        >
                            Airbnb
                        </a>{" "}
                        or contact us by email:{" "}
                        <a
                            href="mailto:info@zirahouses.com"
                            className="underline bg-black text-white"
                            style={{ padding: "5px" }}
                        >
                            info@zirahouses.com
                        </a>{" "}
                        to explore alternative booking options.
                    </>
                ),
            },
            {
                question: "Do I need to pay a deposit?",
                answer: "Bookings through Airbnb follow their payment policies. If you book directly with us, we may request a deposit to secure your reservation — we’ll confirm the details by email.",
            },
        ],
    },
    /* CHECKIN / CHECKOUT */
    {
        title: "CHECK-IN / CHECK-OUT",
        questions: [
            {
                question: "What time can I check in?",
                answer: "Check-in is available from 4:00 PM (16h00).",
            },
            {
                question: "What time do I need to check out?",
                answer: "Check-out is until 12:00 PM (noon).",
            },
            {
                question:
                    "My flight arrives late at night. Can I check in after hours?",
                answer: "Yes, but please contact us in advance so we can arrange a smooth and comfortable check-in for you.",
            },
            {
                question:
                    "Can I check in early if my flight arrives in the morning?",
                answer: "Check-in is only guaranteed from 4:00 PM. To check in earlier, we recommend booking the previous night. Alternatively, you’re welcome to leave your luggage with us for safekeeping until the house is ready.",
            },
            {
                question:
                    "Can I check out late if my flight is in the evening?",
                answer: (
                    <>
                        Late check-out is subject to availability. Please
                        contact the host in advance.
                        <br></br>Until 1:00 PM – free of charge
                        <br></br>Until 4:00 PM – 50% of the nightly rate
                        <br></br>After 4:00 PM – full nightly rate
                    </>
                ),
            },
        ],
    },
    /* HOST CONTACT */
    {
        title: "HOST CONTACT",
        questions: [
            {
                question: "Will someone be there to welcome us?",
                answer: "Yes, we value a personal touch and want to ensure you have a warm welcome. Either the host or a friend/family member will be there to greet you upon arrival, provide a quick tour of the house, and give you helpful tips about the region. Please note, before check-in, we will ask for some personal details in accordance with Portuguese law.",
            },
            {
                question: "How can I contact the host?",
                answer: (
                    <>
                        <p>
                            You’ll be able to contact us directly via Airbnb
                            messaging or by phone — we’ll share all the contact
                            details before check-in.{" "}
                        </p>
                        <p>
                            You can also contact by email:{" "}
                            <a
                                href="mailto:info@zirahouses.com"
                                className="underline bg-black text-white"
                                style={{ padding: "5px" }}
                            >
                                info@zirahouses.com
                            </a>{" "}
                        </p>
                    </>
                ),
            },
        ],
    },
    /* LOCATION & TRANSPORT */
    {
        title: "LOCATION & TRANSPORT",
        questions: [
            {
                question:
                    "How can I find the address or directions to Zira Houses?",
                answer: (
                    <>
                        "You can find more details on our{" "}
                        <a
                            target="_blank"
                            href="/contacts"
                            className="underline bg-black text-white"
                            style={{ padding: "5px" }}
                        >
                            Contacts & Locations
                        </a>{" "}
                        page."
                        <br></br>
                        <br></br>
                        <span className="font-bold">Adress:</span> Zira Houses
                        R. Primeiro de Dezembro 25, Burinhosa 2445-022 Pataias,
                        Portugal
                        <br></br>
                        <br></br>
                        <a
                            target="_blank"
                            href="https://maps.app.goo.gl/VGtkEdfnLGWzxm9d6"
                            className="underline bg-black text-white"
                            style={{ padding: "5px" }}
                        >
                            GPS_ 39.70093, -8.98654
                        </a>
                    </>
                ),
            },
            {
                question: "How far is Zira Houses from the nearest beach?",
                answer: "Zira Houses is located just a short drive from the beautiful beaches of the West Coast. The nearest beach (Paredes da Vitória beach) is about 8 minutes away by car. ",
            },
            {
                question: "Is it necessary to have a car?",
                answer: "While a car is not strictly necessary, we highly recommend it to explore the surrounding region with more flexibility and comfort.",
            },
            {
                question: "Is there public transportation nearby?",
                answer: "There are some public transport options, but availability and schedules may be very limited. We’re happy to help with local taxi contacts or transport suggestions.",
            },
        ],
    },
    /* THE HOUSE & STAY */
    {
        title: "THE HOUSE & STAY",
        questions: [
            {
                question: "How many people can the house accommodate?",
                answer: "Zira Houses can comfortably accommodate up to 4 guests.",
            },
            {
                question: "Is the house private or shared?",
                answer: "The entire house is private and reserved exclusively for your group.",
            },
            {
                question: "Is there heating or air conditioning?",
                answer: "The house does not have air conditioning, but thanks to its thick walls and natural surroundings, it stays pleasantly cool during the summer months. For the colder season, a wood-burning stove is available to keep the space warm and cozy.",
            },
            {
                question: "Do you provide bed linen and towels?",
                answer: "Yes, bed linen, bath towels and basic toiletries are included.",
            },
            {
                question: "Is there a barbecue available?",
                answer: "Yes, guests are welcome to use the outdoor barbecue area. ",
            },
        ],
    },
    /* FAMILY-FRIENDLY & SAFETY */
    {
        title: "FAMILY-FRIENDLY & SAFETY",
        questions: [
            {
                question: "Are babies welcome at Zira Houses?",
                answer: "Absolutely! Babies and toddlers are very welcome. Upon request, we can provide a portable crib, a high chair, a baby bathtub, and kitchen utensils such as baby plates and spoons to make your stay more comfortable.",
            },
            {
                question: "Is the house safe for children?",
                answer: "Yes, Zira Houses is family-friendly and we do our best to ensure a safe and comfortable environment for children. Please let us know in advance if you need specific items for your child.",
            },
            {
                question:
                    "Is there an emergency contact or first aid kit available?",
                answer: (
                    <>
                        Yes, your safety is our priority. A fully stocked first
                        aid kit is available on the premises. You’ll also find a
                        printed emergency contact list in the house, including
                        local hospitals, pharmacies, and emergency services.
                        <br></br>
                        <br></br>
                        For your reference:
                        <br></br>
                        <br></br>
                        <span className="font-bold">
                            Emergency number in Portugal:
                        </span>{" "}
                        112
                        <br></br>
                        <br></br>
                        <span className="font-bold">Nearest hospital: </span>
                        Hospital de Leiria (approx. 25 minutes by car)
                        <br></br>
                        <br></br>
                        In case of any urgent need, you can also contact us —
                        details are provided in the welcome folder and on the
                        main contact board inside the house.w
                    </>
                ),
            },
        ],
    },
    /* SERVICES & AMENITIES */
    {
        title: "SERVICES & AMENITIES",
        questions: [
            {
                question: "Is there wireless Internet at Zira Houses?",
                answer: "Yes, free Wi-Fi is available via a mobile hotspot.",
            },
            {
                question: "Is breakfast included?",
                answer: "No, breakfast is not included. However, there’s a café just a 1-minute walk from Zira Houses that serves breakfast daily. The house is also fully equipped with everything you need to prepare your own breakfast at your convenience.",
            },
            {
                question: "Is there a laundry service?",
                answer: "We do not provide a laundry service, but guests have access to a free washing machine on the premises.",
            },
            {
                question:
                    "If I wish to surprise someone, is it possible to order a bouquet of flowers?",
                answer: "Absolutely! Whether it’s a bouquet of flowers, a bottle of champagne, or a cake to surprise someone special, we’re happy to help. Just let us know in advance and we’ll take care of the rest.",
            },
            {
                question: "Is there parking available?",
                answer: "Yes. We offer a private garage for one car and free outdoor parking. Please note that Zira Houses is not responsible for any damage to parked vehicles.",
            },
        ],
    },
    /* HOUSE RULES */
    {
        title: "HOUSE RULES",
        questions: [
            {
                question: "Are there any house rules I should be aware of?",
                answer: (
                    <>
                        Have fun and relax! <br></br>
                        No pets allowed <br></br>
                        Smoking is not permitted indoors <br></br>
                        Quiet hours begin at 10:00 PM <br></br>
                        No parties or events allowed <br></br>
                        Please report any damages immediately to the host{" "}
                        <br></br>
                    </>
                ),
            },
        ],
    },
    /* CANCELLATIONS */
    {
        title: "CANCELLATIONS",
        questions: [
            {
                question: "How can I change or cancel my reservation?",
                answer: (
                    <>
                        Please contact us at{" "}
                        <a
                            href="mailto:info@zirahouses.com"
                            className="underline bg-black text-white"
                            style={{ padding: "5px" }}
                        >
                            info@zirahouses.com
                        </a>{" "}
                        or manage your reservation through Airbnb if you booked
                        through their platform.
                    </>
                ),
            },
        ],
    },
    /* COMPLAINTS BOOK */
    {
        title: "COMPLAINTS BOOK",
        questions: [
            {
                question: "Is there a Complaints Book available?",
                answer: (
                    <>
                        Yes. This establishment has both a physical and an
                        Electronic Complaints Book, in compliance with
                        Portuguese regulations.
                        <br></br>
                        <br></br>
                        You can access the Electronic Complaints Book here:
                        <a
                            target="_blank"
                            href="https://www.livroreclamacoes.pt/Inicio/"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "5px" }}
                        >
                            Complaints Book
                        </a>
                    </>
                ),
            },
        ],
    },
];

/* THEMEPLATE

 {
        title:"",
        questions:[
            {
                question:"",
                answer:"",
            },
            {
                question:"",
                answer:"",
            },
            ...
        ]
    },

*/

export default faq;
