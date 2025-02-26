import around from "@/arrays/around";
import Card from "@/components/card";

export default function AroundUs (){
    return(
    <div className="gridLayout grid ">
        <div className="relative col-start-1 col-span-full">
            <div className="relative">
            <div className="bg-black/30 w-full h-full absolute top-0 left-0"/>
            <img className="w-full max-h-[900px]" src="/Bed.png"/>
            </div>
            <div className="absolute top-[30%] grid gridLayout w-full">
            <div className="col-start-2 col-span-full">
                <h1 className="text-white">AROUND <br></br> US </h1>
            </div>
            </div>
        </div>
        
        <div className="col-start-2 col-span-9 grid grid-cols-9 bg-white py-[90px] gap-y-[40px] -mt-[140px] z-10">
            <div className="col-start-2 col-span-7">
                <p>Discover Portugal’s Silver Coast, a hidden gem where golden beaches, scenic cliffs, and charming seaside villages create the perfect escape. Located between Lisbon and Porto, this breathtaking region offers unspoiled coastlines, world-class surf spots, rich cultural heritage, and fresh seafood delights.</p>
                <p className="mt-4">From the giant waves of Nazaré and the medieval charm of Óbidos to the tranquil bay of São Martinho do Porto and the forested trails of Paredes da Vitória, the Silver Coast is a top destination for family holidays, outdoor adventures, and authentic Portuguese experiences.</p>
            </div>
            <p className="col-start-2 col-span-7 font-bold text-center">Consectetur venenatis lacinia ipsum vel amet sit cras. Vehicula velit ac leo augue. Morbi consequat enim pellentesque morbi aliquam amet.</p>
        </div>
        <div className="col-start-2 col-span-9 grid grid-cols-9 gap-x-[20px] gap-y-[50px] mt-[120px]">
        {around.map((around, i)=>(
            <div key={i} className="col-span-3">
                <Card title={around.name} text={around.text} img={around.image}/>
            </div>
        ))}
        </div>
    </div>
    )
}