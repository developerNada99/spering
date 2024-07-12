"use client"
import Link from "next/link";
import Image from "next/image";

export default function Home(){
    
    return(
        <div className="flex justify-around max-lg:text-center w-screen h-screen">
            <div className="bg-[#1a2e35] w-3/54 text-white font-bold p-28 max-lg:w-full">
                <h1 className="hidden max-sm:flex font-bold text-2xl">YOU CAN HIRE FREELANCER HERE</h1>
                <h1 className="text-[40px] max-sm:hidden">
                    YOU CAN
                </h1>
                <h1 className="text-[40px] max-sm:hidden">
                    HIRE FREELANCER
                </h1>
                <h1 className="text-[40px] max-sm:hidden">
                    HERE
                </h1>
                <p className="text-base  font-medium ">It is a long established fact that a reader will be distracted by the readable content of a page</p>
                <div className="mt-10 max-sm:flex max-sm:-ml-14">
                    <Link href="/"><button className="w-32 h-11 font-normal transition-colors ease-linear  bg-[#fe4f5a] hover:bg-[#1a2e35] hover:border hover:border-[#fe4f5a] hover:text-[#fe4f5a]">About Us</button></Link>
                    <Link href="/"><button className="ml-5 w-32 h-11 font-normal transition-colors ease-linear text-black bg-white hover:bg-[#1a2e35] hover:text-white hover:border hover:border-white">Get A Quote</button></Link>
                </div>
            </div>
            <div className="bg-[#1cbbb4] w-2/3 p-24 max-lg:hidden">
            <img src="/slider.png" />
            </div>
        </div>
    )
}