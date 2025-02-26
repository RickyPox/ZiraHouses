export default function Card(props:any){
    return(
        <div className={`w-full h-full flex flex-col ${props.className}`}>
            <div>
                <img src={props.img} className="w-full h-[300px] object-cover "/>
            </div>
            <div className="bg-white mx-[20px] p-[10px] flex flex-col gap-y-[30px] h-full -mt-[50px]">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
} 