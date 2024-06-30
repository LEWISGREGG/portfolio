'use client'
import { motion, useMotionValue, useSpring, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";



const work = [
    {
    id: 1,
    name: 'Engineering Associates LLC',
    date: "2021-2024",
    username: "OSP Engineer II",
    link: "https://engineeringassociates.com/",
    exp: 'Lumen FTTH, FTTB project, FL: I designed Passive Optical Network to connect a large number of end users (single dwelling units, multi dwelling units, large buildings and businesses) to an Access Node in Florida counties. I developed construction prints and installation drawings for underground and aerial fiber routes, created splicing schemes for fiber terminals and flexnap or bulk cables. I engineered a path for drop cables to connect the user end-service points, assigned fibers for each Optical Network Terminal or Optical Network Unit, located at user’s premises, developed vertical changes/alterations for make-ready poles. I prepared the bill of materials by creating OSP contracts in Lumen Fireworks and Bidmaster systems. I designed new fiber network in Lumen Network Designed System and was involved in some ISP projects related to splicing of splitters and feeder fibers in Optical Line Termination Points at the CO and Fiber Distribution Hubs by using GPON and XGS-PON standards, calculated link loss budget, also was involved in establishing right-of-way needs for buried cables and handholes installation within private property. During the project, I submitted detailed reports to the engineering manager and Lumen consultant engineer, confirming adherence to the design requirements. I worked to ensure that the design provided fell within the budget, while meeting the needs of the client.'
    },
    {
    id: 2,
    name: 'Tesinc LLC',
    date: "2018-2021",
    username: "OSP Engineer I",
    link: "https://engineeringassociates.com/",
    exp: 'VERIZON One Fiber project, KY & IN: I did cost analysis to find out what option is better for future design: aerial or buried, gathered information, created traffic control plan for future construction phase and prepared drawings of the existing facilities (buried gas, electric, sewage), developed the construction drawings to include fiber splicing details, grounding, and protection equipment as well as telco specifications. I engineered the fiber backhaul to connect the core network and the Radio Access Network of the mobile network and fronthaul telco route, assigned fiber counts to backhaul and fronthaul cables, prepared bill of materials, designed transmedia in GIS, calculated aerial fiber cable sag and pole loading, reviewed asbuilt drawings, designed make ready pole HOA, made sure design follows TIA-568 Commercial Building Telecommunications Cabling Standard. Designed detailed construction prints of fiber-optic cable running in the new duct attached to the bridge and made sure it is protected against expansion and contraction of a bridge based on AASHTO guidelines in KY.  My designs and documentations were submitted to the engineering supervisor who provided periodic feedback and final approval for completion and closeout of the VERIZON ONE project. I designed Optical Distribution Network to connect all-optical passive segments (small and large businesses and MDUs) to the OLT in various counties in Kentucky and Indiana, engineered fiber drops from the subscriber to the Access Level Fiber, prepared bill of materials, created fiber butt and mid-sheat splice schematics, developed fiber allocation spreadsheet, designed routes and splices in 3GIS. After the completion of each phase of work, I commissioned and witnessed the implementation of the new system with the guidance of my supervisor. I designed the outdoor 5G access points and the most economically feasible and efficiently constructed route from feeder point to the antennas located in Indianapolis and Louisville by assigning fiber count to each 5G cell, developing construction prints and general notes what included existing utilities plus new fiber route, prepared bill of materials, designed fiber routes, antennas and splices in 3GIS, created fiber splice schematics, reviewed asbuilt drawings. Discussed design requirements during regular engineering meetings.'
    },
]


function Work() {
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
    font-bold mt-16 w-full text-center md:text-4xl md:mt-24">Experience</h2>
    <div ref={ref} className="w-[100%] mx-auto relative">
    <motion.div 
    style={{scaleY: scrollYProgress}}
    className="absolute -left-8 top-0  w-[4px] h-full bg-red-500  origin-top">
    </motion.div>

            {work.map ((item) => (
            <motion.div
            initial={{y:90}}
            whileInView={{y:0}}
            transition={{duration: 0.2, ease:"ease-in-out", type: "spring"}}
            viewport={{once: true}}
            key={item.id} className="p-4 my-8 rounded-2xl border border-solid border-l-4 shadow-lg hover:shadow-orange-700 border-red-500  border-t-4 flex flex-col 
            items-center sm:items-start bg-slate-50 dark:bg-transparent hover:opacity-90 cursor-pointer transition duration-300 ease-in-out ">

            <h1 className="capitalize font-bold text-2xl text-center">{item.name}</h1>
            <p className="text-bold leading-2 text-center ">{item.date}</p>
            <span className="decoration-[#F7AB0A] underline font-semibold text-xl text-black dark:text-gray-200 opacity-100 text-center">{item.username}</span>
            <p className="text-bold text-sm lg:text-md leading-2 w-full">{item.exp}</p>
            <a href={item.link} target="_blank" className="relative mt-4 rounded px-5 py-2.5 overflow-hidden group bg-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Company Website</span>
            </a>
            </motion.div>
            ))}

        </div>
    </div>


  )
}

export default Work