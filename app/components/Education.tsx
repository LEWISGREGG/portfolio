'use client'

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";


const education = [
{
  id: 1,
  university: 'Wroclaw University of Science and Technology',
  city: "Wroclaw, Poland",
  year: "2015-2017",
  major: "MSc, Civil Engineering",
  link: "https://pwr.edu.pl/en/",
  },
  {
  id: 2,
  university: 'Poltava Polytechnic University',
  city: "Poltava, Ukraine, BSc",
  year: "2010-2014",
  major: "BSc, Construction",
  link: "https://nupp.edu.ua/en",
},
]



function Education() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center start"]
    }
)
return (
    <div className="first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between ">
    <h2 className="uppercase tracking-[14px] text-gray-600 text-2xl dark:text-slate-200 animate-pulse
    font-bold mt-16 w-full text-center md:text-4xl md:mt-24">Education</h2>
    <div ref={ref} className="w-[100%] mx-auto relative">
    <motion.div 
    style={{scaleY: scrollYProgress}}
    className="absolute -left-8 top-0  w-[4px] h-full bg-emerald-500 origin-top">
    </motion.div>

            {education.map ((item) => (
            <motion.div
            initial={{
            y: 100,
            opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{y:-12}}
            viewport={{ once: true }}
            key={item.id} className="p-4 my-8 rounded-2xl border border-solid border-r-4 border-emerald-500 border-b-4 flex flex-col 
            items-center sm:items-start bg-slate-50 dark:bg-transparent opacity-40 hover:opacity-100 cursor-pointer transition duration-300 ease-in-out ">

            <h1 className="capitalize font-bold text-md lg:text-2xl text-center">{item.university}</h1>
            <h1 className="capitalize font-bold text-md lg:text-2xl text-center">{item.city}</h1>
            <p className="text-bold leading-2 text-center ">{item.year}</p>
            <span className="decoration-amber-500 underline font-semibold text-md lg:text-xl mb-4 text-black dark:text-gray-200 opacity-100">{item.major}</span>
            <a href={item.link} target="_blank" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">University Website</span>
            <span className="relative invisible">University Website</span>
            </a>
            </motion.div>
            ))}

        </div>
    </div>

  )
}

export default Education