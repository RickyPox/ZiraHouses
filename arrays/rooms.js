const rooms = [
   /* CLASSIC KING SIZE DOUBLE ROOM */ 
    {
        name:"CLASSIC KING SIZE DOUBLE ROOM",
        text:"Our King Size Double Room offers a comfortable and relaxing space with a classic design, featuring a spacious king-size bed perfect for a good night’s sleep. While simple and elegant, the room provides all the essential amenities for a peaceful stay, making it an ideal choice for those looking for a cozy and welcoming environment.",
        images: [
            "/Bed.png", "/Beach.png", "/Garden.png"
        ],
        extraInfo: [
            {
                name:"Max. Capacity:",
                text:"3 guests (2 adults + 1 baby)",
            },
            {
                name:"Baby crib available",
                text:"(upon request)",
            },
            {
                name:"Room size:",
                text:"25 square meters",
            },
        ],
        amenities: [
            "King-size bed for a restful night’s sleep",
            "Satellite TV and HDMI cable",
            "Hangers",
            "Extra pillows and blankets for added comfort",
            "Room-darkening shades for a peaceful sleep",
        ],
    },

    /* CLASSIC QUEEN SIZE DOUBLE ROOM */ 
    {
        name:"CLASSIC QUEEN SIZE DOUBLE ROOM",
        text:"Our Queen Size Double Room offers a cozy and relaxing space with a classic design, featuring a comfortable queen-size bed perfect for a restful night’s sleep. This room is ideal for couples or two children sharing the bed, providing a welcoming and comfortable environment. Simple yet elegant, it includes all the essential amenities for a peaceful stay, making it an excellent choice for those seeking a quiet retreat.",
        images: [
            "/Bed.png", "/Beach.png", "/Garden.png"
        ],
        extraInfo: [
            {
                name:"Max. capacity:",
                text:"2 guests",
            },
            {
                name:"Room Size:",
                text:"20 square meters",
            },
        ],
        amenities: [
            "Queen-size bed for a restful night’s sleep",
            "Hangers",
            "Extra pillows and blankets for added comfort",
            "Room-darkening shades for a peaceful sleep",
        ],
    },

    /* LIVING ROOM */
    {
        name:"LIVING ROOM",
        text:"The cozy living room, located next to the kitchen, features a traditional wood-burning stove for warmth and a dining table perfect for family meals. It also includes a selection of games for both children and adults, offering the ideal setting for happy moments together. Simple and inviting, it’s a great space to relax and enjoy quality time with loved ones.",
        images: [
            "/Bed.png", "/Beach.png", "Garden.png"
        ],
        extraInfo: [
            {
                name:"Max. Capacity: ",
                text:"5 guests (máx. 4 adults + 1 child < 3 years old)",
            },
            {
                name:"Max. Capacity: ",
                text:"High chair for babies (upon request)",
            },
        ],
        amenities: [
            "Cozy décor",
            "Dining table for 4 guests ",
            "Satellite TV",
            "Indoor fireplace - wood-burning stove",
            "Board games / card games",
            "Books and magazines",
            "Children’s books and toys for all ages",

        ],
    },

    /* KITCHEN */
    {
        name:"KITCHEN",
        text:"Our fully equipped kitchen is designed to make cooking easy and enjoyable during your stay. With modern appliances and a spacious layout, it's the perfect place to prepare meals for your family or friends. Whether you’re cooking a full dinner or just warming up leftovers, this kitchen provides everything you need for a comfortable and convenient stay.",
        images: [
            "/Bed.png", "/Beach.png", "/Garden.png"
        ],
        amenities: [
            "Gas Stove and Oven",
            "Fridge / Freezer",
            "Microwave",
            "Coffee maker (filter and espresso)",
            "Kettle",
            "Toaster",
            "Cookware and utensils",
            "Cups, plates, and glasses (incl. wine glasses)",
            "Cooking basics (oil, salt, pepper)",
            "Cleaning products",
        ],
    },

     /* BATHROOM */
    {
        name:"BATHROOM",
        text:"Our bathroom is clean, modern, and fully equipped to meet all your needs. Whether you're taking a quick shower or relaxing after a busy day, it offers everything you need for a comfortable stay.",
        images: [
            "/Bed.png", "/Beach.png", "/Garden.png"
        ],
        amenities: [
            "Bathtub",
            "Baby bath available upon request",
            "Toilet",
            "Bidet",
            "Sink and mirror",
            "Towels",
            "Hairdryer",
            "Shampoo and body wash",
            "Toilet paper",
            "Storage for toiletries",
        ],
    },

     /* OUTDOOR PATIO AND PRIVATE GARAGE  */
    {
        name:"OUTDOOR PATIO AND PRIVATE GARAGE ",
        text:"Our spacious outdoor patio is the perfect place to enjoy family meals and spend quality time in the fresh air. Featuring a dining table, a barbecue grill for delicious al fresco cooking, and a cold-water outdoor shower for a refreshing rinse after a day of fun, this area provides everything you need for a relaxing stay. The children’s play area ensures younger guests have plenty of space to enjoy their time outdoors. Whether you’re dining, grilling, or letting the kids play, the patio offers a versatile space for family-friendly activities and outdoor relaxation.",
        imgGages: [
            "/Bed.png", "/Beach.png", "/Garden.png"
        ],
        extraSpaces:[
            {
                name:"OUTDOOR PATIO" ,
                spaces: [
                    "Family-friendly outdoor dining area",
                    "Outdoor BBQ / Grill",
                    "Beach umbrella and windbreaker",
                    "Beach toys for children",
                    "Beach chairs and towels",
                ],
            },
            {
                name:"PARKING & FACILITIES" ,
                spaces: [
                    "Private garage 1 car",
                    "Free street parking",
                    "Single level home",
                    "Free washer – In unit",
                    "Drying rack for clothing",
                    "Iron",
                ],
            },
            {
                name:"HOME SAFETY" ,
                spaces: [
                    "Fire extinguisher",
                    "First aid kit",
                ],
            },
        ]
    },
]



/* 
ThemePlate

{
    name:"",
    text:"",
    images: [

    ],
    extraInfo: [
        {
            name:"",
            text:"",
        },
    ],
    amenities: [
        "",
        "",
    ],
    extraSpaces:[
        {
            name:"" ,
            spaces: [],
        },
    ]
},

Only use what applied for the room name, delete what is not applied. (extraInfo, amenities, extraSpaces)
Full image path included format on the image
*/


export default rooms