'use client'

import { motion } from "framer-motion";




const skill = [
    {
    id: 1,
    image: 'https://www.svgrepo.com/show/452228/html-5.svg',
    progress: "80%",
    },
    {
    id: 2,
    image: 'https://www.svgrepo.com/show/349330/css3.svg',
    progress: "70%",
    },
    {
    id: 3,
    image: 'https://www.svgrepo.com/show/374118/tailwind.svg',
    progress: "70%",
    },
    {
    id: 4,
    image: 'https://www.svgrepo.com/show/349419/javascript.svg',
    progress: "60%",
    },
    {
    id: 5,
    image: 'https://www.svgrepo.com/show/452092/react.svg',
    progress: "60%",
    },
    {
    id: 6,
    image: 'https://www.svgrepo.com/show/306466/next-dot-js.svg',
    progress: "50%",
    },
{
    id: 7,
    image: 'https://www.svgrepo.com/show/349540/typescript.svg',
    progress: "50%",
    },
    ]




function Skills() {
return (
    
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center 
    xl:space-y-0 mx-auto items-center">
    <h3 className="absolute top-12 uppercase tracking-[14px] text-gray-600 text-4xl dark:text-slate-200 animate-pulse
    font-bold">Skills</h3>
    <h2 className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover a skill to find out level of proficiency
    </h2>

    <div className="mt-36 flex flex-col lg:flex-row lg:mt-0">
    {skill.map ((item) => (

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    key={item.id} className="flex flex-col md:flex-row mb-2 ml-2">

        <div className="group relative flex cursor-pointer">
        <motion.img
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={(item.image)}
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter 
        group-hover:grayscale grayscale-0 transition duration-300 ease-in-out "/>

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white 
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
        <p className="text-3xl font-bold text-black opacity-100">{item.progress}</p>
        </div>
        </div>
        </div>
    </motion.div>
            ))}
    </div>
    </div>
);
}

export default Skills;