import Image from "next/image"
export default function Category(){
    return(
        <div className="bg-[#1cbbb4] h-full">
            <h1 className="tracking-wide mr-auto ml-auto w-fit font-bold text-white text-3xl pt-11">CATEGORY
            <span className="w-full h-[1px] bg-white text-yellow-600 block"></span>
            </h1> 
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                <div className="flex flex-col justify-center items-center p-10">
                    <Image src="/c1.jpg" className="mr-auto ml-auto" height={80} width={80}/>
                    <span className="text-lg font-medium text-white text-center">Design & Arts</span>
                </div>
                <div className="flex flex-col justify-center items-center p-10">
                    <Image src="/c2.png" className="mr-auto ml-auto" height={80} width={80}/>
                    <span className="text-lg font-medium text-white">Web Development</span>
                </div>
                <div className="flex flex-col justify-center items-center p-10">
                    <Image src="/c3.png" className="mr-auto ml-auto" height={80} width={80}/>
                    <span className="text-lg font-medium text-white">SEO Markting</span>
                </div>
                <div className="flex flex-col justify-center items-center p-10">
                    <Image src="/c4.png" className="mr-auto ml-auto" height={80} width={80}/>
                    <span className="text-lg font-medium text-white">Video Edting</span>
                </div>
                <div className="flex flex-col justify-center items-center p-10">
                    <Image src="/c5.png" className="mr-auto ml-auto" height={80} width={80}/>
                    <span className="text-lg font-medium text-white">Logo Design</span>
                </div>
                <div className="flex flex-col justify-center items-center p-10">
                    <Image src="/c6.png" className="mr-auto ml-auto" height={80} width={80}/>
                    <span className="text-lg font-medium text-white">Game Design</span>
                </div>
            </div>
        </div>
    )
}