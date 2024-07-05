"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect , useState } from "react";

const variants = {
    initial: {
        x: 200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: -200,
        opacity: 0,
    },
}
const childVariants = {
    initial: {
        x:200,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
    },
    exit: {
        x:-200,
        opacity:0,
    },
}
const images =[
   "/image1.jpg",
   "/image2.jpg",
   "/image3.jpg"
]

const Testimonial = () => {
    
    const [index, setIndex] = useState(0); 

    const prevStep = ()=>{
        if(index === data.length - 1){
            setIndex(0);
            return
        }
        setIndex(index + 1);
    }
    const nextStep = ()=>{
        if(index === 0){
            setIndex(data.length - 1);
            return
        }
        setIndex(index - 1);
    } 
    
    return(
   
<div className="flex flex-col h-screen">
        <h1 className="font-bold text-4xl mr-auto ml-auto">Testimonial</h1>
    <div className="mt-10">
        <div  className="slideshow m-auto w-[800px] h-72 relative overflow-hidden max-lg:w-[600px] max-lg:h-64 max-sm:w-[450px] max-sm:h-96">
            <AnimatePresence>
                <motion.div 
            variants={variants}
            animate='animate'
            initial= 'initial'
            exit='exit' 
            key={data[index].name}
            className="slides w-full h-full py-10 px-24 rounded-xl border bg-white text-black shadow-inner">
            <motion.h1 variants={childVariants} className="font-bold text-center text-2xl">  {data[index].name} </motion.h1>
            <motion.p variants={childVariants} className="text-center mt-3 text-lg">{data[index].para}</motion.p>
            </motion.div>
            </AnimatePresence>
            <button onClick={nextStep} className="prevButton flex justify-center items-center absolute top-2/4 left-4 -translate-y-2/4 p-4 max-lg:p-1 text-[18px] w-16 max-lg:w-10 rounded-full bg-[#1a2e35] border-none cursor-pointer text-centerc text-white aspect-square hover:bg-[#242430]">{"<"}</button>
            <button onClick={prevStep} className="nextButton  flex justify-center items-center absolute top-2/4 right-4 -translate-y-2/4 p-4 max-lg:p-1 text-[18px] w-16 max-lg:w-10 rounded-full bg-[#1a2e35] border-none cursor-pointer text-centerc text-white aspect-square hover:bg-[#242430]">{">"}</button>
        </div>
    </div> 
</div>
)
};

const data = [
    {
        name: "1John Hissona",
        para: "1passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s"
    },
    {
        name: "2John Hissona",
        para: "2passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s"
    }, 
    {
        name: "3John Hissona",
        para: "3passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s"
    }, 
    {
        name: "4John Hissona",
        para: "4passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s"
    }, 
    {
        name: "5John Hissona",
        para: "5passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s"
    },  
]
/*
 <motion.img  variants={variants}
            animate='animate'
            initial= 'initial'
            exit='exit' 
            key={images[index]} src={images[index]} className="w-[500px] h-96"/>
 <motion.div 
            variants={variants}
            animate='animate'
            initial= 'initial'
            exit='exit' 
            key={data[index]}
            className="slides w-full h-full py-10 px-28 bg-red-800">
                <motion.h1 >{data[index].name}</motion.h1>
                <motion.p>{data[index].para}</motion.p>
            </motion.div>
*/

export default Testimonial;