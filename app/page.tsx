import Button from "@/components/button";
import Card from "@/components/card";
import Reviews from "@/components/reviews";
import Rules from "@/components/rules";


export default function Home() {
  return (
    <div className="gridLayout grid ">
      <div className="relative col-start-1 col-span-full">
        <div className="relative">
          <div className="bg-black/30 w-full h-full absolute top-0 left-0"/>
          <img className="w-full max-h-[900px]" src="/Landing.png"/>
        </div>
        <div className="absolute top-[30%] grid gridLayout w-full">
          <div className="col-start-2 col-span-full">
            <h1 className="text-white">Welcome To <br></br> Zira Houses</h1>
            <p className="text-white mt-[20px]">We are Zira Houses, the best house in Silver Coast, Portugal</p>
            <Button className="mt-[50px]"></Button>
          </div>
        </div>
      </div>

      <div className="col-start-2 col-span-9 grid grid-cols-9 gap-x-[20px] mt-[100px]">
        <Card className="col-span-3" Card title="About the House" img="/Bed.png" text="Welcome to Zira Houses, the best family-friendly accommodation on Portugal’s Silver Coast. Nestled in Burinhosa village, it’s the perfect retreat to relax, disconnect, and explore the stunning Oeste region."></Card>
        <Card className="col-span-3" Card title="The Silver Coast" img="/Beach.png" text="Discover Portugal’s Silver Coast, a hidden gem where golden beaches, scenic cliffs, and charming seaside villages create the perfect escape. Located between Lisbon and Porto, this breathtaking region offers unspoiled coastlines, world-class surf spots, rich cultural heritage, and fresh seafood delights."></Card>
        <Card className="col-span-3" Card title="About Us" img="/Garden.png" text="I’m Mariana, a proud Superhost on Airbnb with over 10 years of experience hosting guests at Zira Houses, a family-friendly accommodation on Portugal’s Silver Coast. My mission is to provide families with a relaxing seaside getaway in a peaceful, private setting, ensuring a memorable and comfortable stay."></Card>
      </div>

      <div className="col-start-2 col-span-9 grid grid-cols-9 gap-x-[20px] mt-[100px]">
        <div className="col-span-5 flex flex-row flex-nowrap items-center gap-x-[20px]">
          <h2>Our Guest Reviews</h2>
          <div className="bg-black h-[1px] flex-1"/>
        </div>
        <div className="mt-[50px] col-span-full">
          <Reviews></Reviews>
        </div>
      </div>

      <div className="col-start-2 col-span-9 mt-[100px] mb-[200px]">
        <Rules></Rules>
      </div>
    </div>
  );
}
