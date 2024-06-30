'use client'

import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ServiceSlider from "./ServiceSlider";
import { fadeIn } from "@/public/variants";

function Hero() {

  const [text, count] = useTypewriter({
    words: [
        "I am professional licensed OSP Engineer",
        "<Let's get in touch!/>",
    ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:0.5, delay:1 }}
        className="col-span-1 lg:col-span-2 h-full bg-slate-100 hover:bg-slate-200 min-h-[400px] lg:min-h-[300px] rounded-2xl p-8 hover:shadow-[inset_-12px_-8px_40px_#862929bc] transition-all duration-300">
            <h1 className="text-2xl lg:text-4xl font-medium dark:text-amber-500">Serhii Kushnirenko, PE</h1>
            <h1 className="text-lg lg:text-2xl font-normal mt-3 dark:text-amber-500">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="amber"/></h1>
            <a href="mailto:ukrainianscholar@gmail.com" className="relative mt-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 dark:bg-green-500 rounded-xl group">
<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 dark:bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 dark:bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Get in Touch</span>
            </a>
            <div className="w-3xl top-[20%] bg-rose-600 dark:bg-green-500 left-0 h-[100px] -skew-y-12 "/> 
        </motion.div>
      
        <motion.div 
        variants={fadeIn('up', 0.6)} 
        initial="hidden"
        animate="show" 
        exit="hidden"
        className="col-span-1 h-[400px] max-w-[450px] object-cover rounded-2xl ">
        <ServiceSlider/> 
        </motion.div> 
    </div>
  )
}

export default Hero