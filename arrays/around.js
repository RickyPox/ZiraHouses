import { distance } from "framer-motion";

const around = [
    {
        path: "art-culture",
        title: "Art & Culture",
        description:
            "Immerse yourself in the region’s rich cultural heritage. From traditional festivals and local crafts to historical landmarks and museums, discover the unique blend of history and creativity that defines the heart of central Portugal.",
        img: "/around/art-culture.jpg",

        content: [
            {
                title: "Alcobaça Monastery (UNESCO World Heritage)",
                text: "The Alcobaça Monastery is a magnificent example of Gothic architecture in Portugal, founded in 1153 and a UNESCO World Heritage site. The monastery is famous for its stunning architecture, vast cloisters, and the tombs of King Pedro I and his lover Inês de Castro. The monastery houses important historical artifacts, including a remarkable collection of medieval manuscripts and religious relics. Visitors can explore the monastery’s beautiful surroundings, including the peaceful gardens, while learning about its historical significance as a center of religious and cultural life.",
                image: "/Bed.png",
                address: " Largo do Mosteiro, 2460-018 Alcobaça",
                website: "https://www.mosteiroalcobaca.gov.pt",
                distance: "Approx. 15 min by car",
            },
            {
                title: "Batalha Monastery (UNESCO World Heritage)",
                text: "A symbol of Portuguese resilience and artistic grandeur, the Batalha Monastery is one of the finest examples of late Gothic architecture in Europe. Built to celebrate the 1385 victory at the Battle of Aljubarrota, this UNESCO World Heritage site showcases intricate stone carvings, soaring arches, and the magnificent Founder's Chapel — the final resting place of King João I and Queen Philippa of Lancaster. Don’t miss the awe-inspiring Unfinished Chapels, an open-air glimpse into history frozen in time.",
                image: "/Bed.png",
                address:
                    "Mosteiro de Santa Maria da Vitória, Largo Infante Dom Henrique, 2440-109 Batalha",
                website: "whc.unesco.org/en/list/264",

                distance: " Approx. 30 min by car",
            },
            {
                title: "MCCB - Batalha Municipality Community Museum",
                text: "Located near the Batalha Monastery, a UNESCO World Heritage site, the MCCB (Municipal Community Museum) offers a comprehensive look at the history and culture of the Batalha region. The museum features exhibits that explore local traditions, agricultural practices, and the evolution of the community from medieval times to the present. The museum’s location, close to the historic monastery, allows it to incorporate themes related to religion, history, and the famous Battle of Aljubarrota. It also regularly hosts temporary exhibitions and cultural events.",
                image: "/Bed.png",
                address: "Largo Goa, Damão e Diu, 2440-901 Batalha",
                website: "http://www.museubatalha.com",

                distance: "Approx. 30 min by car",
            },
            {
                title: "Leiria Castle",
                text: "Leiria Castle, perched on a hilltop, offers stunning panoramic views of the city and surrounding landscapes. Originally built in the 12th century, this historic fortress was expanded over the centuries, showcasing a mix of Romanesque, Gothic, and Manueline architectural styles. It has witnessed significant events in Portuguese history, and today, it hosts various cultural activities, including historical reenactments, exhibitions, and concerts. The castle's central location makes it a must-visit landmark in Leiria, providing visitors with a glimpse into the past while enjoying breathtaking views.",
                image: "/Bed.png",
                address: "Rua do Castelo, 2400-235 Leiria",
                website: "https://www.visiteleiria.pt",

                distance: "Approx. 25 min by car",
            },
            {
                title: "Museum of the Moving Image (MIMO), Leiria",
                text: "Located in the heart of Leiria, MIMO offers a fascinating journey through the history of cinema, photography, and visual storytelling. The museum features a rich collection of equipment, artifacts, and documents that explore the evolution of moving images. In addition to its permanent exhibition, MIMO also promotes educational activities, thematic events, and research in the field of audiovisual media.",
                image: "/Bed.png",
                address: "Largo de São Pedro, Leiria",
                website:
                    "https://www.cm-leiria.pt/areas-de-atividade/cultura/museus/m-i-mo-museu-da-imagem-em-movimento",

                distance: "Approx. 20 min by car",
            },
            {
                title: "Paper Mill Museum (Museu da Fábrica do Papel), Leiria",
                text: "Set in a beautifully restored industrial building, this museum is dedicated to preserving the heritage of traditional crafts once central to daily life — including cereal milling, olive oil production, and paper making. The project was developed with the collaboration of renowned architect Álvaro Siza Vieira and a multidisciplinary team, bringing history to life through interactive exhibits and immersive storytelling.",
                image: "/Bed.png",
                address: "Rua Fábrica do Papel, nº 13, 2410-103 Leiria",
                website: "https://www.visiteleiria.pt",

                distance: "Approx. 18 min by car",
            },
            {
                title: "Santana's Market, Leiria",
                text: "Built in the early 20th century by architect Ernesto Korrodi, the Santana’s Market was originally designed to house the Municipal Market. Since 2002, it has been transformed into a vibrant cultural center that hosts a variety of events, exhibitions, and activities throughout the year, enriching the local cultural scene.",
                image: "/Bed.png",
                address: "Largo de Santana, Leiria",
                website: "www.cm-leiria.pt",

                distance: "Approx. 20 minutes by car",
            },
            {
                title: "Marinha Grande Glass Museum",
                text: "The Marinha Grande Glass Museum offers a fascinating journey through the history of glassmaking in the region, which has been renowned for its glass production for centuries. The museum showcases a wide array of glass objects, from delicate decorative pieces to functional items, reflecting the craftsmanship and skill of local artisans. Visitors can learn about traditional glassmaking techniques, watch live demonstrations, and explore exhibits that highlight the role of glass in both local and international contexts. The museum is an essential stop for anyone interested in the art and history of glassmaking.",
                image: "/Bed.png",
                address: "Rua 1º de Maio, 2430-184 Marinha Grande",
                website: "http://www.museudovidro.pt",

                distance: "Approx. 15 min by car",
            },
            {
                title: "Santuário de Nossa Senhora da Nazaré",
                text: "The Sanctuary of Our Lady of Nazaré is one of Portugal’s most famous pilgrimage sites, deeply embedded in both the religious and cultural life of the region. The sanctuary is home to the venerated image of Our Lady of Nazaré, which has been the center of devotion for centuries. The church itself is an architectural masterpiece, with elements dating back to the 14th century. The sanctuary is surrounded by a vibrant cultural atmosphere, with various religious celebrations and cultural events throughout the year, including the famous Nossa Senhora da Nazaré pilgrimage.",
                image: "/Bed.png",
                address: "Praça Sousa Oliveira, 2450-065 Nazaré",
                website: "http://www.santuarionazare.pt",

                distance: "Approx. 25 minutes by car",
            },
            {
                title: "Óbidos Castle",
                text: "Óbidos Castle is a stunning medieval fortress that offers visitors a unique glimpse into Portugal’s rich history. Originally built in the 12th century, the castle has been meticulously preserved and showcases traditional architectural elements such as fortified walls and a central keep. Today, the castle is open to the public, providing a captivating journey through Portugal's medieval past. Wander through its historic rooms, climb its towers for panoramic views, and explore the charming town of Óbidos, known for its cobbled streets and picturesque whitewashed houses.",
                image: "/Bed.png",
                address: "Rua do Castelo, 2510-999 Óbidos",
                website: "http://www.obidos.pt/en/castle",

                distance: "Approx. 40 minutes by car ",
            },
            {
                title: "Parque D. Carlos I, Caldas da Rainha",
                text: "The Parque D. Carlos I is a beautiful and tranquil park located in the heart of Caldas da Rainha. Created in the 19th century, it features lush green spaces, serene lakes, and charming pathways, making it an ideal spot for a relaxing walk or a peaceful picnic. The park also houses the Caldas da Rainha Thermal Hospital, famous for its therapeutic hot springs, adding to the town’s long-standing reputation for wellness. Visitors can enjoy the park’s natural beauty, explore its scenic surroundings, and take in the peaceful atmosphere that the park provides.",
                image: "/Bed.png",
                address: "Parque D. Carlos I, Caldas da Rainha",
                website: "",

                distance: "Approx. 40 minutes by car",
            },
            {
                title: "Museu José Malhoa, Caldas da Rainha",
                text: "The Museu José Malhoa is dedicated to the life and works of José Malhoa, one of Portugal’s most prominent painters of the late 19th and early 20th centuries. Located in Caldas da Rainha, the museum showcases a rich collection of his works, along with temporary exhibitions of Portuguese art. The museum offers a unique opportunity to explore the evolution of Portuguese art and to appreciate Malhoa's mastery in capturing the essence of rural life and the Portuguese landscape. A visit to this museum is a must for art lovers and anyone interested in Portuguese cultural heritage.",
                image: "/Bed.png",
                address: "Museu José Malhoa, Caldas da Rainha",
                website:
                    "https://www.museusemonumentos.pt/pt/museus-e-monumentos/museu-jose-malhoa?fbclid=IwY2xjawKOKh1leHRuA2FlbQIxMABicmlkETFjNGNXSWg3YXFEa09ZNHYwAR4adHqz3Lqz5mya6uk1LnoUXOyDAk3nXis46KG417AAr38a5XStXfRL4wwRsQ_aem_yMbVee_ySXrmBo7kZxIMgQ",

                distance: "Approx. 40 minutes by car",
            },
            {
                title: "Fátima",
                text: "Fátima is one of the world’s most important pilgrimage sites, known for the Sanctuary of Our Lady of Fátima, where the Virgin Mary appeared in 1917. The Sanctuary includes the Basilica of Our Lady of the Rosary, the Chapel of the Apparitions, and the Monument to the Shepherds. Millions visit annually, especially on the 13th of May and October. Fátima offers a peaceful atmosphere for prayer, reflection, and spiritual growth, attracting visitors of all faiths.",
                image: "/Bed.png",
                address: "Fátima, Portugal",
                website: "",

                distance: "Approx. 1 hour by car",
            },
            {
                title: "Convento de Cristo, Tomar (UNESCO World Heritage)",
                text: "This medieval convent is one of the most impressive monuments in Portugal, with a strong connection to the Knights Templar. The architecture and historical details, including the famous Charola and Tomar Castle, make this site a significant point of interest for tourists seeking history, art, and culture.",
                image: "/Bed.png",
                address: "Convento de Cristo, 2300-000 Tomar, Portugal ",
                website: "http://www.conventocristo.gov.pt/pt/index.php",

                distance: "Approx. 1h15 by car",
            },
        ],
    },
    {
        path: "beach-surf",
        title: "Beach & Surf",
        description:
            "Just a short drive from Burinhosa, you'll find stunning Atlantic beaches perfect for relaxing, surfing, or enjoying breathtaking sunsets. Explore the coastal charm of spots like Nazaré, São Pedro de Moel, and Praia da Vieira.",
        img: "/around/beach.png",
        content: [
            {
                title: "Nazaré Beach",
                text: "Nazaré Beach is world-renowned for its gigantic waves and dramatic coastline. Popular among surfers and tourists alike, it offers a vibrant promenade, traditional fishing boats, and stunning views from the cliffs of Sítio. During the winter, it attracts professional surfers who come to challenge some of the biggest surfable waves on the planet.",
                image: "/Bed.png",
                address: "Avenida da República, 2450-101 Nazaré",
            },
            {
                title: "São Martinho do Porto Beach",
                text: "Located in a naturally sheltered bay, São Martinho do Porto Beach is ideal for families and calm-water swimming. The beach features a charming village atmosphere with restaurants and cafes lining the shore. Its crescent-shaped bay is unique in Portugal and perfect for a relaxing beach day.",
                image: "/Bed.png",
                address: "Avenida Marginal, 2460-096 São Martinho do Porto",
            },
            {
                title: "Foz do Arelho Beach",
                text: "Foz do Arelho Beach is known for its dual personality: a calm lagoon ideal for paddleboarding and families, and the wild Atlantic side favored by surfers. This scenic spot also offers wooden walkways, beach bars, and plenty of space for sunbathing and walks along the coast.",
                image: "/Bed.png",
                address: "Avenida do Mar, 2500-500 Foz do Arelho",
            },
            {
                title: "Vieira Beach",
                text: "Praia da Vieira is a wide sandy beach bordered by a pine forest and a vibrant seaside town. It offers a mix of traditional fishing culture and modern beach facilities, including restaurants, bars, and summer events. The beach is also known for its colorful fishing boats and fresh seafood.",
                image: "/Bed.png",
                address: "Avenida Marginal, 2430-696 Vieira de Leiria",
            },
            {
                title: "Pedrógão Beach",
                text: "Pedrógão Beach offers a laid-back and less crowded atmosphere compared to nearby coastal towns. Surrounded by dunes and pine forests, it is ideal for those seeking a quieter, more natural beach experience. Local restaurants serve fresh fish, and the area is perfect for long beach walks.",
                image: "/Bed.png",
                address: "Avenida da Praia, 2425-449 Praia do Pedrógão",
            },
            {
                title: "Paredes da Vitória Beach",
                text: "Paredes da Vitória Beach is a stunning and spacious beach, perfect for families and surfers. With cliffs and green hills framing the golden sands, it is a great spot for sunbathing, swimming, and exploring natural rock formations. The surrounding village offers several cafes and local shops.",
                image: "/Bed.png",
                address: "Rua da Praia, 2450-138 Paredes da Vitória",
            },
            {
                title: "Vale Furado Beach",
                text: "Tucked beneath golden cliffs and surrounded by nature, Vale Furado Beach is a hidden gem. Accessible via a steep path, this secluded beach offers tranquility, impressive rock formations, and a peaceful retreat from the more touristy spots. Ideal for photography and peaceful contemplation.",
                image: "/Bed.png",
                address: "Estrada Vale Furado, 2445-017 Alcobaça",
            },
            {
                title: "Agua de Madeiros Beach",
                text: "Agua de Madeiros Beach is known for its dramatic cliffs and natural surroundings. It’s a quiet beach ideal for long walks, photography, and enjoying nature. Due to strong currents and rocks, it is not recommended for swimming, but it offers a spectacular coastal experience.",
                image: "/Bed.png",
                address: "Rua da Praia, Água de Madeiros, 2445-505 Alcobaça",
            },
            {
                title: "Polvoeira Beach",
                text: "Polvoeira Beach is a wild and scenic beach surrounded by cliffs, ideal for those looking for peace and unspoiled nature. There are no major tourist facilities here, which keeps the environment natural and pristine. The ocean here can be rough, making it more suitable for experienced swimmers.",
                image: "/Bed.png",
                address: "Rua da Polvoeira, 2445-505 Alcobaça",
            },
            {
                title: "Falca Beach",
                text: "Falca Beach is a small and quiet beach nestled between cliffs, popular with locals seeking a peaceful and less crowded alternative. Its golden sands and clear waters make it a great spot for sunbathing and relaxation. The natural beauty of the surrounding cliffs enhances its charm.",
                image: "/Bed.png",
                address: "Rua da Falca, 2445-505 São Martinho do Porto",
            },
        ],
    },
    {
        path: "restaurants",
        title: "Restaurants",
        description:
            "Savor the flavors of the region with a variety of local restaurants offering fresh seafood, traditional Portuguese dishes, and cozy atmospheres. Whether you’re looking for a casual bite or a fine dining experience, there's something for every taste.",
        img: "/around/restaurant.jpg",
        content: [
            {
                title: "Varanda do Casal",
                text: "Nestled at the entrance of the Schist Village of Casal de São Simão, Varanda do Casal offers traditional Portuguese cuisine with a stunning panoramic view. The rustic ambiance complements dishes like 'bacalhau à lagareiro' and 'cabrito assado'.",
                image: "/Bed.png",
                address: "Casal de São Simão, 3260-034 Figueiró dos Vinhos",
            },
            {
                title: "O Celeiro",
                text: "Located in Reguengo do Fetal, O Celeiro is a family-run restaurant serving authentic Portuguese dishes in a cozy setting. Specialties include grilled meats and regional desserts.",
                image: "/Bed.png",
                address: "EN356, 572, Reguengo do Fetal, 2440-000 Batalha",
            },
            {
                title: "Marisqueira Mirandum",
                text: "Situated in Pombal, Marisqueira Mirandum is renowned for its fresh seafood offerings. The menu features a variety of shellfish dishes, including 'ameijoas à Bulhão Pato' and grilled tiger prawns.",
                image: "/Bed.png",
                address: "Rua de Leiria 85, 3100-480 Pombal",
            },
            {
                title: "O Caçador",
                text: "In the heart of Figueiró dos Vinhos, O Caçador offers traditional Portuguese cuisine with a focus on game meats. The rustic decor and hearty dishes provide a warm dining experience.",
                image: "/Bed.png",
                address:
                    "Rua Major Neutel de Abreu 133, 3260-427 Figueiró dos Vinhos",
            },
            {
                title: "Restaurante O Cortiço",
                text: "Located in Ourém, O Cortiço is known for its regional dishes and welcoming atmosphere. Favorites include 'bacalhau com broa' and 'leitão assado'.",
                image: "/Bed.png",
                address: "Rua Dr. Francisco Sá Carneiro 5, 2490-480 Ourém",
            },
            {
                title: "O Barqueiro",
                text: "Set by the river in Foz do Alge, O Barqueiro specializes in freshwater fish dishes and offers a serene dining experience with picturesque views.",
                image: "/Bed.png",
                address: "Foz do Alge, 3260-423 Figueiró dos Vinhos",
            },
            {
                title: "Restaurante Tribeca",
                text: "Located in Serra d'El Rei, Tribeca offers a fusion of European cuisines in a stylish setting. The menu features dishes like duck confit and seafood risotto.",
                image: "/Bed.png",
                address: "Avenida da Serrana 5, 2525-802 Serra d'El Rei",
            },
            {
                title: "Restaurante Piadussa",
                text: "In the village of São Mamede, Piadussa serves traditional Portuguese meals in a rustic environment. Known for its 'bacalhau à Zé do Pipo' and homemade desserts.",
                image: "/Bed.png",
                address: "Rua da Pia do Urso 28, 2495-031 São Mamede",
            },
            {
                title: "Restaurante O Manito",
                text: "Situated in Almofala de Baixo, O Manito offers regional specialties like 'bacalhau à lagareiro' and 'cozido à portuguesa' in a welcoming atmosphere.",
                image: "/Bed.png",
                address:
                    "Zona Industrial de Almofala de Baixo, 3260-000 Figueiró dos Vinhos",
            },
            {
                title: "Restaurante A Lúria",
                text: "Located in Alcobaça, A Lúria combines traditional Portuguese flavors with modern culinary techniques. Signature dishes include octopus rice and roasted lamb.",
                image: "/Bed.png",
                address: "Rua Frei António Brandão 12, 2460-047 Alcobaça",
            },
            {
                title: "Restaurante O Cortiço",
                text: "In the town of Ourém, O Cortiço offers a menu rich in regional dishes, emphasizing local ingredients and traditional cooking methods.",
                image: "/Bed.png",
                address: "Rua Dr. Francisco Sá Carneiro 5, 2490-480 Ourém",
            },
            {
                title: "Restaurante O Manjar do Marquês",
                text: "Located in Pombal, O Manjar do Marquês is famous for its 'bacalhau à lagareiro' and extensive wine list, providing a refined dining experience.",
                image: "/Bed.png",
                address: "Avenida Heróis do Ultramar 185, 3100-462 Pombal",
            },
            {
                title: "Restaurante O Alcaide",
                text: "Set in the historic town of Óbidos, O Alcaide offers a romantic ambiance with a menu featuring traditional Portuguese dishes and fine wines.",
                image: "/Bed.png",
                address: "Rua Direita 60, 2510-001 Óbidos",
            },
            {
                title: "Restaurante O Casarão",
                text: "Situated in Batalha, O Casarão is known for its grilled meats and cozy atmosphere, making it a favorite among locals and tourists alike.",
                image: "/Bed.png",
                address: "Rua da Freiria 12, 2440-076 Batalha",
            },
            {
                title: "Restaurante O Cortiço",
                text: "In Ourém, O Cortiço offers a diverse menu with an emphasis on traditional flavors and a selection of regional wines.",
                image: "/Bed.png",
                address: "Rua Dr. Francisco Sá Carneiro 5, 2490-480 Ourém",
            },
        ],
    },
    {
        path: "trails",
        title: "Trails",
        description:
            "Surrounded by nature, Burinhosa is a gateway to scenic walking and cycling trails through forests, dunes, and coastal landscapes. Ideal for outdoor lovers seeking tranquility, fresh air, and a closer connection to the land.",
        img: "/around/trails.jpeg",
        content: [
            {
                title: "Burinhosa – Paredes de Vitória Trail",
                text: "A 11.6 km coastal trail starting in Burinhosa and leading to Paredes de Vitória beach. This route offers a mix of forest paths and seaside views, making it ideal for hiking and trail running.",
                image: "/Bed.png",
                address: "Burinhosa, Leiria, Portugal",
            },
            {
                title: "Moita – Burinhosa Trail",
                text: "A 21.9 km loop connecting Moita and Burinhosa through forested areas and rural landscapes. Suitable for both hiking and mountain biking enthusiasts.",
                image: "/Bed.png",
                address: "Moita, Leiria, Portugal",
            },
            {
                title: "Rota das Dunas",
                text: "A 81 km off-road trail that starts near São Pedro de Moel and extends inland. It features a mix of sandy paths, muddy sections, and technical terrains, perfect for mountain biking adventures.",
                image: "/Bed.png",
                address: "São Pedro de Moel, Leiria, Portugal",
            },
            {
                title: "Rota do Vale do Lapedo (PR1 LRA)",
                text: "A 4.5 km circular trail in Leiria that explores the Lapedo Valley, known for its archaeological significance. It's an easy hike suitable for families and history enthusiasts.",
                image: "/Bed.png",
                address: "Leiria, Portugal",
            },
            {
                title: "Rota da Lagoa de Óbidos (PR7 CLD)",
                text: "A 12.8 km circular trail around the Óbidos Lagoon, offering picturesque views of the lagoon and surrounding landscapes. Ideal for both hiking and cycling.",
                image: "/Bed.png",
                address: "Óbidos, Portugal",
            },
            {
                title: "Rota dos Moinhos (PR3 BTL)",
                text: "A 6.7 km trail in Batalha that takes you through historical water mills and lush greenery. It's a moderate hike that combines cultural heritage with natural beauty.",
                image: "/Bed.png",
                address: "Batalha, Portugal",
            },
            {
                title: "Rota do Carvão (PR6 PMS)",
                text: "An 11.3 km circular trail in Porto de Mós that traverses former coal mining areas, offering insights into the region's industrial past amidst scenic surroundings.",
                image: "/Bed.png",
                address: "Porto de Mós, Portugal",
            },
            {
                title: "Passadiços de Paredes da Vitória a Água de Madeiros",
                text: "An 8.7 km boardwalk trail connecting Paredes da Vitória and Água de Madeiros beaches. This easy route provides stunning coastal views and is suitable for all ages.",
                image: "/Bed.png",
                address: "Paredes da Vitória, Leiria, Portugal",
            },
            {
                title: "Rota do Peregrino (PR4 LRA)",
                text: "A 14.8 km trail starting in Leiria and ending in Fátima, following paths taken by pilgrims. It's a mix of paved and unpaved roads, offering a spiritual journey through diverse landscapes.",
                image: "/Bed.png",
                address: "Leiria to Fátima, Portugal",
            },
            {
                title: "Ecopista de Porto de Mós",
                text: "An 11 km eco-trail built on a former railway line in Porto de Mós. The path is mostly flat, making it perfect for leisurely walks, runs, and bike rides amidst nature.",
                image: "/Bed.png",
                address: "Porto de Mós, Portugal",
            },
        ],
    },
    {
        path: "cities",
        title: "Cities",
        description:
            "Within a 40km radius, explore charming cities and towns such as Alcobaça, Leiria, Batalha, and Nazaré. Each offers its own story, with historic sites, vibrant local markets, and unique architecture worth discovering.",
        img: "/around/cities.jpg",
        content: [
            {
                title: "Leiria",
                text: "A dynamic city blending medieval charm with modern life. Known for its hilltop castle, the city also boasts museums, a historic center, lively cafes, and the scenic Lis River promenade.",
                image: "/Bed.png",
                address: "Leiria, Portugal",
            },
            {
                title: "Marinha Grande",
                text: "Portugal's glassmaking capital, known for its rich industrial history and the Glass Museum. Surrounded by the vast Leiria Pine Forest, it’s a cultural and nature-filled destination.",
                image: "/Bed.png",
                address: "Marinha Grande, Portugal",
            },
            {
                title: "Alcobaça",
                text: "Famous for its UNESCO World Heritage Monastery, Alcobaça is a historic city offering beautiful gardens, traditional pastry shops, and a peaceful cultural atmosphere.",
                image: "/Bed.png",
                address: "Alcobaça, Portugal",
            },
            {
                title: "Batalha",
                text: "Home to the monumental Batalha Monastery, a masterpiece of Gothic architecture. The city is small but culturally significant, with quaint streets and historical importance.",
                image: "/Bed.png",
                address: "Batalha, Portugal",
            },
            {
                title: "Caldas da Rainha",
                text: "A lively spa city founded by Queen Leonor, known for its thermal waters, daily fruit and vegetable market, and strong tradition in ceramics and arts.",
                image: "/Bed.png",
                address: "Caldas da Rainha, Portugal",
            },
            {
                title: "Fátima",
                text: "One of the world’s most important Catholic pilgrimage sites. Fátima offers spiritual depth, cultural museums, and serene parks surrounding the Sanctuary.",
                image: "/Bed.png",
                address: "Fátima, Portugal",
            },
            {
                title: "Nazaré",
                text: "A coastal city world-famous for its record-breaking waves and strong fishing traditions. It offers stunning ocean views, seafood cuisine, and vibrant local culture.",
                image: "/Bed.png",
                address: "Nazaré, Portugal",
            },
            {
                title: "Ourém",
                text: "A historic city featuring a medieval hilltop castle and old town, overlooking the modern part below. It’s closely linked to Fátima and offers a mix of history and tranquility.",
                image: "/Bed.png",
                address: "Ourém, Portugal",
            },
            {
                title: "Torres Novas",
                text: "A charming inland city known for its castle ruins, traditional architecture, and riverside gardens. Ideal for exploring local history and enjoying relaxed city life.",
                image: "/Bed.png",
                address: "Torres Novas, Portugal",
            },
            {
                title: "Rio Maior",
                text: "Known for its traditional salt pans and the nearby Serra de Aire e Candeeiros Natural Park. A great base for exploring nature and local gastronomy.",
                image: "/Bed.png",
                address: "Rio Maior, Portugal",
            },
            {
                title: "Peniche",
                text: "A vibrant coastal city and surfing hotspot, also home to historic fortresses and the Berlengas Nature Reserve. Offers boat trips, fresh seafood, and cultural landmarks.",
                image: "/Bed.png",
                address: "Peniche, Portugal",
            },
            {
                title: "Pombal",
                text: "Strategically located between Lisbon and Porto, this city features a medieval castle and is rich in historical ties to the Marquis of Pombal, with a calm and cultural vibe.",
                image: "/Bed.png",
                address: "Pombal, Portugal",
            },
            {
                title: "Bombarral",
                text: "A wine-producing city surrounded by vineyards and close to the famous Buddha Eden Garden. Combines rural charm with cultural attractions and local flavors.",
                image: "/Bed.png",
                address: "Bombarral, Portugal",
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
                image: "/Bed.png",
                address: "",
                website: "",
                extra:"Second Website or extra information",
                distance:"",
            },
        ],
    },

Delete what is not needed

*/

export default around;
