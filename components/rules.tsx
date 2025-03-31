export default function Rules() {
    const rules = [
        "Don’t Smoke inside the house (Electronic Cigar Included).",
        "No pets allowed.",
        "Prohibited consumption of illegal substances.",
        "Prohibited eating or drinking in the rooms.",
        "Between 7:00 AM and 11:00 PM, although making noise is allowed, it should not be a nuisance to the neighbors.",
        "For validation and security purposes (mandatory communication of foreign citizens to SEF), identification of all guests is requested during check-in.",
        "Use common sense. Do not disturb if you do not want to be disturbed.",
    ];

    return (
        <div className="bg-white lg:grid grid-cols-9 flex flex-col-reverse gap-x-[20px]">
            <div className="m-[20px] col-span-4">
                <h2>Home Rules And Safety</h2>
                <div className="mt-[30px]">
                    {rules.map((rule, i) => (
                        <div key={i} className="mb-4">
                            <p>{rule}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-start-6 col-span-4 h-full">
                <img className=" w-full h-full object-cover" src="/Beach.png" />
            </div>
        </div>
    );
}
