'use client'
import Image from "next/image";
import Link from 'next/link';
import PE from "../../public/PE.svg";
import { fadeIn } from "@/public/variants";
import { motion } from "framer-motion";

const Icons = () => {
return (
    <div className=" flex items-center justify-center overflow-hidden ">
    <motion.div 
    variants={fadeIn('up', 0.4)} 
    initial="hidden"
    animate="show" 
    exit="hidden" 
    className="w-52 h-auto flex items-center justify-center relative">
    <Image
    src={PE}
    alt="PE"
    width={220}
    height={220}
    className="animate-spin-slow "
    />
    <Link href="mailto:serhio.kushnirenko@gmail.com" target={"_blank"} 
className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-950 text-gray-50 
shadow-md border border-solid border-blue-950 w-[88px] h-[88px] rounded-full font-semibold hover:bg-gray-200 hover:text-blue-950 
transition duration-300 ease-out hover:ease-in m md:text-center dark:hover:shadow-amber-600">
Contact Me
</Link>
    </motion.div>
    </div>

  )
}

export default Icons