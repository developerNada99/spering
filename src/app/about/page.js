import Link from "next/link";
import Image from "next/image";
export default function About(){
    return(
    <div className="flex justify-around items-center m-28 h-screen">
        <div className="max-lg:hidden">
            <Image src="/experience.png"  height={900} width={900}/>
        </div>
        <div className="ml-20 max-lg:text-center max-lg:ml-0">
            <h1 className="text-[30px] font-bold">BEST EXPERINCED FREELANCER HERE</h1>
            <p className="mt-5 text-[17px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
            <div className="mt-10">
                <Link href="/"><button className="w-32 h-11 font-normal transition-colors text-white ease-linear  bg-[#fe4f5a] hover:bg-white hover:border hover:border-[#fe4f5a] hover:text-[#fe4f5a]">Read More</button></Link>
                <Link href="/"><button className="max-sm:ml-[2px] ml-5 w-32 h-11 font-normal transition-colors ease-linear text-white bg-[#1a2e35] hover:bg-white hover:text-[#1a2e35] hover:border hover:border-[#1a2e35]">Hire</button></Link>
            </div>
        </div>
    </div>
    )
}
