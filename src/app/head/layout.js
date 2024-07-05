"use client"
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Head(){
    const [visible,setVisible] = useState(false);

    const toggleNav = ()=>{
        setVisible(!visible)
    }

    const navbarAnimation = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    transition: {duration: 0.5},
    exit: { opacity: 0},
    };
    

    return(
        <div className="head px-8 h-20 w-screen flex justify-between items-center bg-[#1a2e35]">
            <Link className="logo flex" href="/">
                <img src="/logo.png" width={40} height={40}/>
                <h1 className="font-bold text-2xl text-white">Spering</h1>
            </Link>
    
            <AnimatePresence>
            {visible && <motion.nav 
                            className={`w-4/5 text-white max-2xl:ml-8 text-[15px] font-bold flex justify-between max-lg:flex-col max-lg:text-center max-lg:absolute max-lg:right-px max-lg:w-36 max-lg:mt-[270px] max-lg:backdrop-blur-md max-lg:bg-[#1a2e35]/40`}
                            {...navbarAnimation}
                            >
                <div className="space-x-6 flex max-lg:flex-col max-lg:space-x-0">
                <Link href="/home" className="max-lg:p-2">Home</Link>
                <Link href="/about" className="max-lg:p-2">About</Link>
                <Link href="/work" className="max-lg:p-2">Work</Link>
                <Link href="/category" className="max-lg:p-2">Category</Link>
                </div>
                <div className="flex space-x-6 max-lg:flex-col max-lg:p-2">
                    <Link href="/" className="text-white">Login</Link>
                    <img src="/gh.png" className="text-white h-5 w-5 max-lg:hidden"/>
                </div>
            </motion.nav>}
            </AnimatePresence>
            
        <div  onClick={toggleNav} className={`w-11 h-14 mr-6 cursor-pointer flex flex-col justify-center`}>
            <span className={`${visible ? '-rotate-45 translate-y-[0.90rem]' : ' rotate-0'} w-10 h-[5px] m-1 block bg-white transition ease-in duration-200 rounded-full`}></span>
            <span className={`${visible ? 'opacity-0' : 'opacity-100'} w-8 h-[5px] m-1  block bg-white transition ease-in duration-200 rounded-full`}></span>
            <span className={`${visible ? 'rotate-45 -translate-y-3' : 'rotate-0'} w-10 h-[5px] m-1 block bg-white transition ease-in duration-200 rounded-full`}></span>
        </div>
        </div>
    )
}