'use client'

import Image from "next/image";
import me from "../../public/me.jpg";
import { motion} from "framer-motion";
import CountUp from "react-countup";
import Work from "../components/Work";
import Education from "../components/Education";
import Skills from "../components/Skills";

export default function ExperiencePage() {

return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <div className="divide-y divide-slate-200 dark:divide-gray-700">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight lg:text-5xl pt-5 sm:leading-9 dark:text-slate-100">My experience</h1>
        <p className="text-muted-foreground leading-7 mt-2">Check out my professional engineer experience</p>
        </div>
        
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-[100px] justify-center 
        xl:space-y-0 mx-auto items-center">
    
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-600 text-4xl dark:text-slate-200 animate-pulse">OSP Engineer</h3>
        </motion.div>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center">
        
        <Image
        src={me}
        alt="me"
        className="-mb-20 mt-12  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-2xl md:w-64 md:h-96 object-cover  overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:opacity-40">
        </Image>    

        <div className="space-y-10 px-0 md:px-10 mt-24 lg:mt-4">
        <h4 className="text-bold leading-7">
        I researched, designed and evaluated various fiber underground or aerial route options associated 
            with Verizon One BAU and Lumen FL KAHNA projects. Analyzed, and evaluated fielding data used in determining best fiber 
            optic aerial or buried path required per NEC standards by avoiding RR aerial crossings or a bore in a rocky soil, 
            reviewed labor, equipment, and material costs, designed finish railroad, interstate and street bore profiles, assisted OSP 
            technicians in illustration of poles and creation of base mapping drawings including PUE and ROW in Map3D.
        </h4>
        <h4 className="text-bold leading-7">
        I researched, designed and evaluated various fiber underground or aerial route options associated 
            with Verizon One BAU and Lumen FL KAHNA projects. Analyzed, and evaluated fielding data used in determining best fiber 
            optic aerial or buried path required per NEC standards by avoiding RR aerial crossings or a bore in a rocky soil, 
            reviewed labor, equipment, and material costs, designed finish railroad, interstate and street bore profiles, assisted OSP 
            technicians in illustration of poles and creation of base mapping drawings including PUE and ROW in Map3D.
        </h4>
        </div>
        </motion.div>

    <motion.div 
 initial={{
    x: -500,
    opacity: 0,
    scale: 0.5,
  }}
  animate={{
    x: 0,
    opacity: 1,
    scale: 1,
  }}
  transition={{ duration: 1.5 }}
    className='flex sm:max-w-md md:flex md:max-w-xl lg:flex xl:max-w-3xl mx-auto mb-4 mt-16'>
    <div className='flex flex-1 xl:gap-x-6'>
    <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after-absolute after:top-0 after:right-0'>
    <div className='text-2xl xl:text-4xl font-extrabold text-red-500 dark:text-emerald-500 mb-2'>
    <CountUp start={0} end={6} duration={1}/> +
    </div>
    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of Experience</div>
    </div>
    <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after-absolute after:top-0 after:right-0'>
    <div className='text-2xl xl:text-4xl font-extrabold text-red-500 dark:text-emerald-500 mb-2'>
    <CountUp start={0} end={3} duration={1}/> +
    </div>
    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Proffesional Certificates</div>
    </div>
    <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after-absolute after:top-0 after:right-0'>
    <div className='text-2xl xl:text-4xl font-extrabold text-red-500 dark:text-emerald-500 mb-2'>
    <CountUp start={0} end={240} duration={50} /> +
    </div>
    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Designed OSP Projects</div>
    </div>
    </div>
    </motion.div>

    <Work/>
    <Education/>
    <Skills/>

    </section>
)
}