import pages from "@/arrays/pages";
import { notFound } from "next/navigation"; 

export async function generateStaticParams() {
  return pages.map((page) => ({ path: page.path }));
}

export default async function Pagina({ params }: { params: { path: string } }) {
  const path = (await params).path; 
  const page = pages.find((p) => p.path === path);

  if (!page) {
    notFound();
  }

  return (
    <div className="gridLayout grid">
      <div className="relative col-start-1 col-span-full">
        <div className="relative">
          <div className="bg-black/30 w-full h-full absolute top-0 left-0"/>
          <img className="w-full max-h-[900px]" src="/Bed.png" alt="Background"/>
        </div>
        <div className="absolute top-[30%] grid gridLayout w-full">
          <div className="col-start-1 col-span-full text-center">
            <h1 className="text-white">{page.title}</h1>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-9 columns-3 space-y-[20px]">
        {page.content.map((content, i) => (
          <div key={i} className="break-inside-avoid">
            <div className="w-full flex flex-col">
              <div>
                <img src={content.image} className="w-full h-[300px] object-cover" alt={content.title}/>
              </div>
              <div className="bg-white mx-[20px] p-[10px] flex flex-col gap-y-[30px] -mt-[50px]">
                <h3>{content.title}</h3>
                <p>{content.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
