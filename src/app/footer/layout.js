import Link from "next/link";
import Image from "next/image";
export default function Footer(){
    return(
        <div className="bg-[#1a2e35]">
            <div className="flex justify-between items-center mx-16 py-14 max-md:flex-col">
                <Link className="flex items-center" href="/app">
                    <Image src="/logo.png" width={65} height={65}/>
                    <h1 className="font-bold text-3xl text-white mb-6">Spering</h1>
                </Link>
                <div className="flex items-center max-md:mt-7 max-md:ml-8">
                    <Link href="/"><Image src="/fb.png"  className="mr-5" width={30} height={30}/></Link>
                    <Link href="/"><Image src="/twitter.png" className="mr-5" width={30} height={30}/></Link>
                    <Link href="/"><Image src="/linkedin.png" className="mr-5" width={30} height={30}/></Link>
                    <Link href="/"><Image src="/instagram.png"className="mr-5"  width={30} height={30}/></Link>
                    <Link href="/"><Image src="/youtube.png" className="mr-5" width={30} height={30}/></Link>
                </div>
            </div>
            <div className="flex items-center justify-center gap-16 ml-20 basis-1/4 mx-12 text-white max-md:flex-col max-md:justify-center max-sm:mx-0">
                <div className="">
                    <h2 className="font-bold text-lg mt-4">USEFUL LINK</h2>
                    <nav className="flex-col flex mt-2 max-md:items-center">
                        <Link href="/home">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/work">Work</Link>
                        <Link href="/category">Category</Link>
                    </nav>
                </div>
                <div className="basis-1/4 max-md:text-center">
                    <h2 className="font-bold text-lg mb-3">OFFICES</h2>
                    <p className="max-md:mx-20">Readable content of a page when looking at its layoutreadable content of a page when looking at its layout</p>
                </div>
                <div className="basis-1/4 max-md:text-center">
                    <h2 className="font-bold text-lg mb-3">INFORMATION</h2>
                    <p className="max-md:mx-20">Readable content of a page when looking at its layoutreadable content of a page when looking at its layout</p>
                </div>
                <div className="basis-1/4 flex flex-col max-md:items-center">
                    <h2 className="font-bold text-lg mb-3">NEWSLETTER</h2>
                    <input className="w-48 h-9 pl-5 max-md:w-80" placeholder="Email"/>
                    <Link href="/"><button className="mt-5 w-32 h-11 font-normal transition-colors ease-linear  bg-[#fe4f5a] hover:bg-[#1a2e35] hover:border hover:border-[#fe4f5a] hover:text-[#fe4f5a]">SUBSCRIBE</button></Link>
                </div>
            </div>
            <div className="flex justify-center items-center gap-20 mt-20 pb-20 max-md:flex-col max-md:gap-10">
                <Link href="/" className="flex items-center">
                    <Image src="/location.png" height={20} width={20}/>
                    <span className="text-white font-medium ml-3">Location</span>
                </Link>
                <Link href="/" className="flex items-center">
                    <Image src="/mail.png" height={20} width={20}/>
                    <span className="text-white font-medium ml-3">something@gmail.com</span>
                </Link>
                <Link href="/" className="flex items-center">
                    <Image src="/call.png" height={20} width={20}/>
                    <span className="text-white font-medium ml-3">Call +01 1234567890</span>
                </Link>
            </div>
        </div>
    )
}