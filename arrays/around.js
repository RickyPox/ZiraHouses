import { distance } from "framer-motion";

const around = [
    /* ART & CULTURE */
    {
        path: "art-culture",
        title: "Art & Culture",
        description:
            "Immerse yourself in the region’s rich cultural heritage. From traditional festivals and local crafts to historical landmarks and museums, discover the unique blend of history and creativity that defines the heart of central Portugal.",
        img: "/around/art-culture/art-culture.jpg",

        content: [
            {
                title: "Alcobaça Monastery (UNESCO World Heritage)",
                text: "The Alcobaça Monastery is a magnificent example of Gothic architecture in Portugal, founded in 1153 and a UNESCO World Heritage site. The monastery is famous for its stunning architecture, vast cloisters, and the tombs of King Pedro I and his lover Inês de Castro. The monastery houses important historical artifacts, including a remarkable collection of medieval manuscripts and religious relics. Visitors can explore the monastery’s beautiful surroundings, including the peaceful gardens, while learning about its historical significance as a center of religious and cultural life.",
                image: "/around/art-culture/1.jpg",
                address: " Largo do Mosteiro, 2460-018 Alcobaça",
                website: "https://www.mosteiroalcobaca.gov.pt",
                distance: "Approx. 15 min by car",
            },
            {
                title: "Batalha Monastery (UNESCO World Heritage)",
                text: "A symbol of Portuguese resilience and artistic grandeur, the Batalha Monastery is one of the finest examples of late Gothic architecture in Europe. Built to celebrate the 1385 victory at the Battle of Aljubarrota, this UNESCO World Heritage site showcases intricate stone carvings, soaring arches, and the magnificent Founder's Chapel — the final resting place of King João I and Queen Philippa of Lancaster. Don’t miss the awe-inspiring Unfinished Chapels, an open-air glimpse into history frozen in time.",
                image: "/around/art-culture/2.jpg",
                address:
                    "Mosteiro de Santa Maria da Vitória, Largo Infante Dom Henrique, 2440-109 Batalha",
                website: "whc.unesco.org/en/list/264",

                distance: " Approx. 30 min by car",
            },
            {
                title: "MCCB - Batalha Municipality Community Museum",
                text: "Located near the Batalha Monastery, a UNESCO World Heritage site, the MCCB (Municipal Community Museum) offers a comprehensive look at the history and culture of the Batalha region. The museum features exhibits that explore local traditions, agricultural practices, and the evolution of the community from medieval times to the present. The museum’s location, close to the historic monastery, allows it to incorporate themes related to religion, history, and the famous Battle of Aljubarrota. It also regularly hosts temporary exhibitions and cultural events.",
                image: "/around/art-culture/3.jpg",
                address: "Largo Goa, Damão e Diu, 2440-901 Batalha",
                website: "http://www.museubatalha.com",

                distance: "Approx. 30 min by car",
            },
            {
                title: "Leiria Castle",
                text: "Leiria Castle, perched on a hilltop, offers stunning panoramic views of the city and surrounding landscapes. Originally built in the 12th century, this historic fortress was expanded over the centuries, showcasing a mix of Romanesque, Gothic, and Manueline architectural styles. It has witnessed significant events in Portuguese history, and today, it hosts various cultural activities, including historical reenactments, exhibitions, and concerts. The castle's central location makes it a must-visit landmark in Leiria, providing visitors with a glimpse into the past while enjoying breathtaking views.",
                image: "/around/art-culture/4.jpg",
                address: "Rua do Castelo, 2400-235 Leiria",
                website: "https://www.visiteleiria.pt",

                distance: "Approx. 25 min by car",
            },
            {
                title: "Museum of the Moving Image (MIMO), Leiria",
                text: "Located in the heart of Leiria, MIMO offers a fascinating journey through the history of cinema, photography, and visual storytelling. The museum features a rich collection of equipment, artifacts, and documents that explore the evolution of moving images. In addition to its permanent exhibition, MIMO also promotes educational activities, thematic events, and research in the field of audiovisual media.",
                image: "/around/art-culture/5.jpg",
                address: "Largo de São Pedro, Leiria",
                website:
                    "https://www.cm-leiria.pt/areas-de-atividade/cultura/museus/m-i-mo-museu-da-imagem-em-movimento",

                distance: "Approx. 20 min by car",
            },
            {
                title: "Paper Mill Museum (Museu da Fábrica do Papel), Leiria",
                text: "Set in a beautifully restored industrial building, this museum is dedicated to preserving the heritage of traditional crafts once central to daily life — including cereal milling, olive oil production, and paper making. The project was developed with the collaboration of renowned architect Álvaro Siza Vieira and a multidisciplinary team, bringing history to life through interactive exhibits and immersive storytelling.",
                image: "/around/art-culture/6.jpg",
                address: "Rua Fábrica do Papel, nº 13, 2410-103 Leiria",
                website: "https://www.visiteleiria.pt",

                distance: "Approx. 18 min by car",
            },
            {
                title: "Santana's Market, Leiria",
                text: "Built in the early 20th century by architect Ernesto Korrodi, the Santana’s Market was originally designed to house the Municipal Market. Since 2002, it has been transformed into a vibrant cultural center that hosts a variety of events, exhibitions, and activities throughout the year, enriching the local cultural scene.",
                image: "/around/art-culture/7.jpg",
                address: "Largo de Santana, Leiria",
                website: "www.cm-leiria.pt",

                distance: "Approx. 20 minutes by car",
            },
            {
                title: "Marinha Grande Glass Museum",
                text: "The Marinha Grande Glass Museum offers a fascinating journey through the history of glassmaking in the region, which has been renowned for its glass production for centuries. The museum showcases a wide array of glass objects, from delicate decorative pieces to functional items, reflecting the craftsmanship and skill of local artisans. Visitors can learn about traditional glassmaking techniques, watch live demonstrations, and explore exhibits that highlight the role of glass in both local and international contexts. The museum is an essential stop for anyone interested in the art and history of glassmaking.",
                image: "/around/art-culture/8.jpg",
                address: "Rua 1º de Maio, 2430-184 Marinha Grande",
                website: "http://www.museudovidro.pt",

                distance: "Approx. 15 min by car",
            },
            {
                title: "Santuário de Nossa Senhora da Nazaré",
                text: "The Sanctuary of Our Lady of Nazaré is one of Portugal’s most famous pilgrimage sites, deeply embedded in both the religious and cultural life of the region. The sanctuary is home to the venerated image of Our Lady of Nazaré, which has been the center of devotion for centuries. The church itself is an architectural masterpiece, with elements dating back to the 14th century. The sanctuary is surrounded by a vibrant cultural atmosphere, with various religious celebrations and cultural events throughout the year, including the famous Nossa Senhora da Nazaré pilgrimage.",
                image: "/around/art-culture/9.jpg",
                address: "Praça Sousa Oliveira, 2450-065 Nazaré",
                website: "http://www.santuarionazare.pt",

                distance: "Approx. 25 minutes by car",
            },
            {
                title: "Óbidos Castle",
                text: "Óbidos Castle is a stunning medieval fortress that offers visitors a unique glimpse into Portugal’s rich history. Originally built in the 12th century, the castle has been meticulously preserved and showcases traditional architectural elements such as fortified walls and a central keep. Today, the castle is open to the public, providing a captivating journey through Portugal's medieval past. Wander through its historic rooms, climb its towers for panoramic views, and explore the charming town of Óbidos, known for its cobbled streets and picturesque whitewashed houses.",
                image: "/around/art-culture/10.jpg",
                address: "Rua do Castelo, 2510-999 Óbidos",
                website: "http://www.obidos.pt/en/castle",

                distance: "Approx. 40 minutes by car ",
            },
            {
                title: "Parque D. Carlos I, Caldas da Rainha",
                text: "The Parque D. Carlos I is a beautiful and tranquil park located in the heart of Caldas da Rainha. Created in the 19th century, it features lush green spaces, serene lakes, and charming pathways, making it an ideal spot for a relaxing walk or a peaceful picnic. The park also houses the Caldas da Rainha Thermal Hospital, famous for its therapeutic hot springs, adding to the town’s long-standing reputation for wellness. Visitors can enjoy the park’s natural beauty, explore its scenic surroundings, and take in the peaceful atmosphere that the park provides.",
                image: "/around/art-culture/11.jpg",
                address: "Parque D. Carlos I, Caldas da Rainha",
                website: "",

                distance: "Approx. 40 minutes by car",
            },
            {
                title: "Museu José Malhoa, Caldas da Rainha",
                text: "The Museu José Malhoa is dedicated to the life and works of José Malhoa, one of Portugal’s most prominent painters of the late 19th and early 20th centuries. Located in Caldas da Rainha, the museum showcases a rich collection of his works, along with temporary exhibitions of Portuguese art. The museum offers a unique opportunity to explore the evolution of Portuguese art and to appreciate Malhoa's mastery in capturing the essence of rural life and the Portuguese landscape. A visit to this museum is a must for art lovers and anyone interested in Portuguese cultural heritage.",
                image: "/around/art-culture/12.jpg",
                address: "Museu José Malhoa, Caldas da Rainha",
                website:
                    "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-jose-malhoa?fbclid=IwY2xjawKOKh1leHRuA2FlbQIxMABicmlkETFjNGNXSWg3YXFEa09ZNHYwAR4adHqz3Lqz5mya6uk1LnoUXOyDAk3nXis46KG417AAr38a5XStXfRL4wwRsQ_aem_yMbVee_ySXrmBo7kZxIMgQ",

                distance: "Approx. 40 minutes by car",
            },
            {
                title: "Fátima",
                text: "Fátima is one of the world’s most important pilgrimage sites, known for the Sanctuary of Our Lady of Fátima, where the Virgin Mary appeared in 1917. The Sanctuary includes the Basilica of Our Lady of the Rosary, the Chapel of the Apparitions, and the Monument to the Shepherds. Millions visit annually, especially on the 13th of May and October. Fátima offers a peaceful atmosphere for prayer, reflection, and spiritual growth, attracting visitors of all faiths.",
                image: "/around/art-culture/13.jpg",
                address: "Fátima, Portugal",
                website: "",

                distance: "Approx. 1 hour by car",
            },
            {
                title: "Convento de Cristo, Tomar (UNESCO World Heritage)",
                text: "This medieval convent is one of the most impressive monuments in Portugal, with a strong connection to the Knights Templar. The architecture and historical details, including the famous Charola and Tomar Castle, make this site a significant point of interest for tourists seeking history, art, and culture.",
                image: "/around/art-culture/14.jpg",
                address: "Convento de Cristo, 2300-000 Tomar, Portugal ",
                website: "http://www.conventocristo.gov.pt/pt/index.php",

                distance: "Approx. 1h15 by car",
            },
        ],
    },
    /* BEACH & SURF */
    {
        path: "beach-surf",
        title: "Beach & Surf",
        description:
            "Portugal boasts some of the world’s most stunning beaches, many just a short drive from Zira Houses. Below, you’ll find a selection of beautiful beaches ranked by driving distance from our location. Whether you’re seeking family-friendly spots, prime surf breaks, or peaceful natural retreats, the Centro-Oeste region offers it all—charming fishing villages, fresh seafood, and breathtaking ocean views await.",
        img: "/around/beach/beach.png",
        content: [
            {
                title: "Praia da Paredes da Vitória (8min) ",
                text: "Paredes da Vitória Beach is a stunning and spacious beach, perfect for families and surfers. With cliffs and green hills framing the golden sands, it is a great spot for sunbathing, swimming, and exploring natural rock formations. The surrounding village offers several cafes and local shops.",
                extratext: (
                    <>
                        <p className="font-bold">- Family Friendly</p>
                        <p className="font-bold">- Surf Spot with Classes</p>
                    </>
                ),
                image: "/around/beach/1.jpg",
                address: "Rua da Praia, 2450-138 Paredes da Vitória",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/paredes-da-vitoria/ "
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia da Polvoeira (8min)",
                text: "A secluded beach surrounded by nature, perfect for those looking to relax and enjoy a peaceful atmosphere.",
                extratext: (
                    <>
                        <p className="font-bold">- Quiet Beach</p>
                        <p className="font-bold">- Nature Spot</p>
                    </>
                ),
                image: "/around/beach/2.jpg",
                address: "Praia da Polvoeira, Pataias, 2445 Alcobaça, Portugal",
            },
            {
                title: "Praia Vale Furado (10min)",
                text: "Tucked beneath golden cliffs and surrounded by nature, Vale Furado Beach is a hidden gem. Accessible via a steep path, this secluded beach offers tranquility, impressive rock formations, and a peaceful retreat from the more touristy spots. Ideal for photography and peaceful contemplation.",
                extratext: (
                    <>
                        <p className="font-bold">- Quiet Beach</p>
                        <p className="font-bold">- Nature Spot</p>
                    </>
                ),
                image: "/around/beach/3.jpg",
                address: "Estrada Vale Furado, 2445-017 Alcobaça",
            },
            {
                title: "Praia de São Pedro de Moel (12min)",
                text: "São Pedro de Moel is a charming beach village located in the Leiria Pine Forest. Known for its golden sands and rugged cliffs, it offers a peaceful retreat. Visitors can enjoy stunning ocean views, local seafood, and outdoor activities like surfing.",
                extratext: (
                    <>
                        <p className="font-bold">- Family Friendly</p>
                        <p className="font-bold">- Surf Spot with Classes</p>
                    </>
                ),
                image: "/around/beach/4.jpg",
                address: "Praia de São Pedro de Moel, Marinha Grande",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/sao-pedro-de-moel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia da Nazaré – Central Beach (20min)",
                text: "The main beach of Nazaré has lifeguards, umbrellas for rent, and easy beach access. Calm areas near the breakwater and lots of beachfront amenities make it great for families.",
                extratext: (
                    <>
                        <p className="font-bold">- Family Friendly</p>
                        <p className="font-bold">- Accessible</p>
                    </>
                ),
                image: "/around/beach/5.jpg",
                address: "Avenida da República, 2450-101 Nazaré",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/nazare-forte-sao-miguel-arcanjo-baia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia do Norte, Nazaré (20 min)",
                text: "Famous for its giant waves, Praia do Norte is a must-visit for surfers and those fascinated by natural spectacles. Praia do Norte is a legendary beach, known worldwide for its record-breaking giant waves. It's a must-visit for surfers, thrill-seekers, and anyone fascinated by the raw power of nature. The best time to witness the giant waves is between October and March, when Atlantic storms and the unique underwater Nazaré Canyon create the perfect conditions for massive swells.",
                extratext: (
                    <>
                        <p className="font-bold">
                            - World-Famous for Giant Waves
                        </p>
                        <p className="font-bold">
                            - Surf Spot (Experienced Only)
                        </p>
                    </>
                ),
                image: "/around/beach/6.jpg",
                address: "Praia do Norte, Nazaré, 2450-076, Portugal",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/praia-do-norte/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia de Vieira, Marinha Grande (25 min)",
                text: "Vieira Beach is a large golden sandy beach, perfect for family activities and outdoor fun. With a spacious and safe environment, it’s ideal for games, picnics, and long walks by the sea. The beach provides basic facilities and a peaceful atmosphere, making it a pleasant destination for anyone looking for a relaxing day surrounded by nature.",
                extratext: (
                    <>
                        <p className="font-bold">- Family Friendly</p>
                        <p className="font-bold">- Quiet Beach</p>
                    </>
                ),
                image: "/around/beach/7.jpg",
                address: "Praia da Vieira, Marinha Grande",

                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/praia-da-vieira/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia de São Martinho do Porto (30 min)",
                text: "A protected bay with calm waters, perfect for family outings and peaceful walks along the shore. A natural shell-shaped bay with very calm waters, perfect for little ones. Easy access, a flat promenade for strollers, and many nearby cafés and restaurants.",
                extratext: (
                    <>
                        <p className="font-bold">- Family Friendly</p>
                        <p className="font-bold">- Accessible</p>
                    </>
                ),
                image: "/around/beach/8.jpg",
                address: "Marginal de Alcobaça, 2460-096 São Martinho do Porto",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/sao-martinho-do-porto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia do Pedrógão (30 min)",
                text: "Pedrógão Beach is a quiet and beautiful beach with calm waters, perfect for families and those looking for a less crowded experience. Ideal for relaxing, swimming, and enjoying the surrounding nature, this beach provides a peaceful atmosphere away from the hustle and bustle—great for family time or peaceful seaside moments.",
                extratext: (
                    <>
                        <p className="font-bold">- Family Friendly</p>
                        <p className="font-bold">- Quiet Beach</p>
                    </>
                ),
                image: "/around/beach/9.jpg",
                address: "Praia do Pedrógão, Leiria",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/praia-do-pedrogao/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia de Foz do Arelho - lagoon side (35 min)",
                text: "",
                extratext: (
                    <>
                        <p className="font-bold">- Family Friendly</p>
                        <p className="font-bold">- Nature Spot</p>
                    </>
                ),
                image: "/around/beach/10.jpg",
                address:
                    "A beautiful beach with both ocean and lagoon views, ideal for swimming, kayaking, and relaxing in a scenic environment. The Óbidos Lagoon offers shallow and warm waters, ideal for kids to play safely. Plenty of space, shaded picnic areas, and family-friendly restaurants nearby.",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/foz-do-arelho/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia do Osso da Baleia – Ferrel, Peniche (45 min)",
                text: "Osso da Baleia Beach is a peaceful beach with clear waters and a natural landscape. It’s the perfect spot for those seeking quiet and relaxation by the sea, enjoying calm moments on a less crowded beach surrounded by the natural beauty of the coastline.",
                extratext: (
                    <>
                        <p className="font-bold">- Surf Spot</p>
                    </>
                ),
                image: "/around/beach/11.jpg",
                address: "Praia do Osso da Baleia, Ferrel, Peniche",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/praia-osso-da-baleia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
            {
                title: "Praia do Baleal, Peniche (50 min)",
                text: "Baleal Beach, near Peniche, is famous for its consistent waves, ideal for surfers of all levels. The relaxed atmosphere and nearby charming village attract families and nature lovers alike. Beyond surfing, visitors can enjoy swimming, coastal walks, and stunning views of cliffs and wide sandy shores. In summer, the beach offers bars and restaurants, making it perfect for a full day of beach fun and relaxation.",
                extratext: (
                    <>
                        <p className="font-bold">- Family Friendly</p>
                        <p className="font-bold">- Surf Spot with Classes </p>
                    </>
                ),
                image: "/around/beach/12.jpg",
                address: "Largo da Praça do Peixe, Ferrel",
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="https://beachcam.meo.pt/livecams/peniche-baleal-panoramica/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
            },
        ],
    },
    /* LEISURE PARKS */
    {
        path: "leisure-park",
        title: "Leisure Parks",
        description:
            "Discover unforgettable family experiences near Zira Houses. From dinosaurs and serene gardens to fun-filled leisure parks, explore our top recommendations—all within 90 minutes’ drive and perfect for all ages.",
        img: "/around/leisure-park/leisure-park.jpg",
        content: [
            {
                title: "Parque dos Monges – Alcobaça (15 min)",
                text: "Parque dos Monges is a unique theme park inspired by the monastic life of the Cistercian Order. Located in Alcobaça, just 15 minutes from Zira Houses, it offers families a blend of nature, history, and outdoor adventure. The park features a medieval village, a pedagogical farm with native animals, climbing and canoeing activities, and a freshwater aquarium dedicated to the Alcoa River. It's ideal for families looking for an educational and fun experience surrounded by nature.",
                image: "/around/leisure-park/1.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Parque+dos+Monges,+R.+Q.ta+das+Freiras+N.%C2%BA+10,+2460-089+Alcoba%C3%A7a/@39.6209397,-9.0881979,28142m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd18a43afef302bb:0xdbd8b5c0e6e9b04e!2m2!1d-8.9550905!2d39.5409975?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            39.541087, -8.956146
                        </a>
                    </>
                ),
                website: "http://www.parquedosmonges.com",
            },
            {
                title: "Pia do Urso Sensory EcoPark - Batalha (20 min)",
                text: "Charming forest walk with sensory activities for children, including sound tubes and tactile games. Free and stroller-friendly.",
                image: "/around/leisure-park/2.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Sensory+Ecopark+of+Pia+do+Urso,+R.+da+Pia+do+Urso+19,+2495-031/@39.6209397,-9.0881979,28142m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd189c449706fdeb:0x6588de0b119f5a0c!2m2!1d-8.7164507!2d39.5979585?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            39.59810657573996, -8.715942658676076
                        </a>
                    </>
                ),
                website: "http://rotadopatrimonio.pt/pia-do-urso/",
            },
            {
                title: "Bacalhôa Buddha Eden – Garden of Peace (40 min)",
                text: "Located in Bombarral, Bacalhôa Buddha Eden is Europe's largest oriental garden, spanning over 35 hectares. Created as a tribute to the destroyed Buddhas of Bamyan, this tranquil sanctuary features a harmonious blend of nature, art, and spirituality. Visitors can explore golden Buddha statues, pagodas, terracotta warriors, African sculptures, and serene lakes adorned with koi fish and stone dragons. The garden also showcases contemporary artworks from the Berardo Collection, offering a unique cultural experience.",
                image: "/around/leisure-park/3.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Buddha+Eden,+Quinta+dos+Loridos,+2540-420/@39.2625618,-9.1451849,14143m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd18ca66b0da2fbd:0x8f0e8583009b5b49!2m2!1d-9.1384902!2d39.2755559?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            39.27777823726978, -9.137803423651427
                        </a>
                    </>
                ),
                website: "http://www.cm-bombarral.pt",
            },
            {
                title: "Dino Parque Lourinhã (1h)",
                text: "Portugal's largest open-air dinosaur museum with over 180 life-size models. Kids can explore dig zones, learn about prehistoric eras, and enjoy interactive exhibits.",
                image: "/around/leisure-park/4.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Lourinh%C3%A3+Dino+Park,+R.+Vale+dos+Dinossauros+25,+Abelheira,+2530-059+Lourinh%C3%A3/@39.4888477,-9.3138494,56390m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd1f361db837f149:0x5dbc79a75bd1e04c!2m2!1d-9.2934375!2d39.2783785?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            39.286921857525954, -9.29256343502927
                        </a>
                    </>
                ),
                website: "http://www.dinoparque.pt",
            },
            {
                title: "Lisbon Zoo (1h30)",
                text: "A classic family favourite. See over 2,000 animals, enjoy the cable car, and explore conservation exhibits.",
                image: "/around/leisure-park/5.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Jardim+Zool%C3%B3gico+de+Lisboa,+Pra%C3%A7a+Marechal+Humberto+Delgado,+Lisbon/@39.220312,-9.7317473,226431m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd193323a502a477:0x44abde7aadf0d25d!2m2!1d-9.1692039!2d38.7430914?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            38.77739961031819, -9.182430934272247
                        </a>
                    </>
                ),
                website: "https://www.zoo.pt",
            },
        ],
    },
    /* Wellness & Spa */
    {
        path: "Wellness-Spa",
        title: "Top Wellness & Spa Retreats",
        description:
            "For guests seeking relaxation and rejuvenation, the Centro Oeste region offers a variety of spas, thalassotherapy centers, and thermal baths—all within about 90 minutes from Zira Houses.",
        img: "/around/wellness-spa/wellness-spa.jpg",
        content: [
            {
                title: "Thalasso Spa Nazaré – Nazaré (20 min)",
                text: "Located right by the Atlantic Ocean, the Nazaré Thalasso & Spa offers seawater treatments, hydrotherapy pools, massages, and beauty therapies. It’s a perfect place to unwind with stunning ocean views and the healing benefits of seawater. Ideal for those looking to combine beach time with wellness.",
                image: "/around/wellness-spa/1.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Thalasso+Nazar%C3%A9,+Avenida+Manuel+Rem%C3%ADgio,+Nazar%C3%A9/@39.6439977,-9.0703965,14066m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd18a9a3ff2c5545:0x1a56285f696726ab!2m2!1d-9.0738657!2d39.5908641?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            39.59500641345026, -9.075374684474658
                        </a>
                    </>
                ),
                website: "https://thalassonazare.com/en/",
            },
            {
                title: "Termas de Monte Real – Monte Real (30 min)",
                text: "One of Portugal's most renowned thermal spas, Termas de Monte Real offers a variety of thermal treatments using natural mineral waters with therapeutic properties. Facilities include thermal pools, hydrotherapy circuits, massage therapies, and beauty treatments in a serene environment. Perfect for a relaxing day or wellness getaway.",
                image: "/around/wellness-spa/2.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Monte+Real+Termas,+R.+de+Leiria,+2425-039+Monte+Real/@39.8517464,-8.8772396,3506m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd227364213fb66f:0x987cc30dfcbdb2bd!2m2!1d-8.8701233!2d39.8543765?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            39.8550904051736, -8.87045900399779
                        </a>
                    </>
                ),
                website: "https://www.termasdemontereal.pt/spa",
            },
            {
                title: "Termas da Piedade – Alcobaça (30 min)",
                text: "A historic thermal spa offering healing waters known for digestive and musculoskeletal benefits. Treatments include thermal baths, Vichy showers, and hydrocolonotherapy. Recently renovated, it combines tradition with modern wellness services.",
                image: "/around/wellness-spa/3.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Termas+da+Piedade,+Vestiaria/@39.5616122,-9.0052493,7041m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd18a6181f3ddec7:0xa0186c006b54044f!2m2!1d-9.0021079!2d39.5693238?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            39.57090849742248, -9.001901919957294
                        </a>
                    </>
                ),
                website:
                    "https://termasdeportugal.pt/rede-termas/termas-da-piedade",
            },
            {
                title: "Spa Villa Batalha – Batalha (30 min)",
                text: "Enjoy hydrotherapy circuits with indoor heated pools, jacuzzis, sauna, Turkish bath, and massages, all with views of the famous Batalha Monastery. A perfect blend of wellness and cultural heritage.",
                image: "/around/wellness-spa/4.jpg",
                address: (
                    <>
                        <p>GPS: </p>
                        <a href="https://www.google.com/maps/dir/Zira+Houses,+Rua+Primeiro+de+Dezembro,+Pataias/Villa+Batalha+Hotel,+Rua+de+Dom+Duarte+I+248,+2440-505+Batalha/@39.6312838,-9.0276961,28137m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0xd220911a5fbd031:0x55d96a183febc760!2m2!1d-8.986533!2d39.7009169!1m5!1m1!1s0xd22754fc17c40d3:0x2b93e1b9d98fe61b!2m2!1d-8.824409!2d39.6636218?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
                            39.66815984041338, -8.824448986345095
                        </a>
                    </>
                ),
                website: "https://www.hotelvillabatalha.com/spa/",
            },
        ],
    },
];

/*
THEMEPLATE

{
        path: "art-culture",
        title: "Art & Culture",
        description:
            "Immerse yourself in the region’s rich cultural heritage. From traditional festivals and local crafts to historical landmarks and museums, discover the unique blend of history and creativity that defines the heart of central Portugal.",
        img: "/around/art-culture.jpg",

        content: [
            {
                title: "",
                text: "",
                extratext: (
                    <>
                        <p className="font-bold">- </p>
                        <p className="font-bold">- </p>
                    </>
                ),
                image: "/Bed.png",
                address: "",

                in case of beach array:
                ---------------------------
                extralink: (
                    <>
                        Check live beach conditions:{" "}
                        <a
                            href="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline bg-black text-white"
                            style={{ padding: "3px" }}
                        >
                            Beachcam
                        </a>{" "}
                    </>
                ),
                -------------------------
            },
        ],
    },

Delete what is not needed

*/

export default around;
