import Image from "next/image";
import Link from "next/link";

export default function About_2() {
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <Image src="/about.jpg" className="" height={600} width={600}/>
            <h1 className="font-bold text-3xl max-sm:text-center max-sm:text-2xl">ABOUT SPERING COMPANY</h1>
            <p className="text-center mx-20 mt-7 max-sm:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in somle form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you</p>
            <Link href="/"><button className="mt-7 h-11 w-32 font-normal transition-colors text-white ease-linear  bg-[#fe4f5a] hover:bg-white hover:border hover:border-[#fe4f5a] hover:text-[#fe4f5a]">Read More</button></Link>
        </div>
    )
}

