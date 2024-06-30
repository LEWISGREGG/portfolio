'use client'
import Image from "next/image";
import Designer from "../../public/Designer.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import tailwind from "../../public/tailwind.svg";
import javascript from "../../public/javascript.svg";
import linkedin from "../../public/linkedin.svg";
import autodesk from "../../public/autodesk.svg";
import microsoft from "../../public/microsoft.svg";
import esri from "../../public/esri.svg";
import google from "../../public/google.svg";
import github from "../../public/github.svg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const icons = [
    autodesk, google, javascript, microsoft, esri, tailwind
]

const socialMedia = [
    {
        id: 1,
        icon: linkedin,
        name: 'linkedin',
        username: "@serhii",
        link: "https://www.linkedin.com/in/serhii-kushnirenko-pe-996946162/"
    },
    {
        id: 2,
        icon: github,
        name: 'github',
        username: "@sergio",
        link: "https://github.com/LEWISGREGG"
    },
]

function Section() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <motion.div 
        initial={{
        x:-100,
        }}
        animate={{
        x:0,
        transition: { type:'spring', duration: 1.5, delay:1}
        }}
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.9}}
        className="w-full relative col-span-1">
        <Image src={Designer} alt="Designer" className="w-full h-full object-cover rounded-2xl hover:rotate-1 transition-all duration-300" priority/>
        </motion.div>

        <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
            <Card className="bg-gray-100 border-none  hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-200">
                <CardHeader>
                <CardTitle >See engineering software I use daily : </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                {icons.map((item, index) => (
                    <Image key={index} src={item} alt="icon" className="w-14 h-14 bg-slate-100" />
                ))}
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
            {socialMedia.map ((item) => (
            <Card key={item.id} className="p-4 flex flex-col items-center sm:items-start bg-slate-100 border-none">
            <Image src={item.icon} alt="social" className="w-16 h-16" />
            <h1 className="text-2xl font-medium pt-3 dark:text-slate-800">{item.name}</h1>
            <p className="text-muted-foreground dark:text-slate-600">{item.username}</p>
            <Button 
            className="mt-4" size="sm" asChild>
            <a href={item.link} target="_blank"  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-amber-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Check it</span>
            </a>
            </Button>
            </Card>
            ))}
            </div>
        </motion.div>
    </div>
  )
}

export default Section