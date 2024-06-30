'use client'

import { Card } from '@/components/ui/card';
import { motion } from "framer-motion";
import React, {useState} from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaSpaceShuttle,
} from "react-icons/fa";
import { TbUniverse } from "react-icons/tb";
import { GiSpaceSuit, GiDefenseSatellite, GiRadioTower  } from "react-icons/gi";
import {
  SiNextdotjs,
  SiArcgis,
  SiGoogleearth,
  SiAutocad,
  SiMicrosoftoutlook,
  SiWolframmathematica
} from "react-icons/si";
import { fadeIn } from '@/public/variants';
import Icons from './Icons';


const aboutData = [
  {
    name: 'skills',
    info: [
      {
        title: '●	OSP Engineering',
        icons: [
          <SiArcgis key={''} />,
          <SiGoogleearth key={''}/>,
          <SiAutocad key={''}/>,
          <SiMicrosoftoutlook key={''}/>,
          <SiWolframmathematica key={''}/>,
        ],
        stage: '',
      },
      {
        title: '●	Web Development',
        icons: [
          <FaReact key={''}/>,
          <FaHtml5 key={''} />,
          <SiNextdotjs key={''}/>,
          <FaJs key={''}/>,
          <FaCss3 key={''}/>,
        ],
        stage: '',
      }
    ],
  },
  
  {
    name: 'experience',
    info: [
      {
        title: '●	OSP Designer II - EA LLC',
        stage: '2021 - Now',
        icons: [
          <TbUniverse  key={''}/>,

        ],
      },
      {
        title: '●	OSP Designer I - Tesinc LLC',
        stage: '2018 - 2021',
        icons: [
          <FaSpaceShuttle   key={''}/>,

        ],
      },
    ],

  },
  {
    name: 'certificates',
    info: [
      {
        title: '●	Professional Engineer License',
        stage: '2024',
        icons: [
          <GiSpaceSuit key={''}/>,

        ],
      },
      {
        title: '●	OSHA 30 Hour Construction',
        stage: '2020',
        icons: [
          <GiDefenseSatellite key={''}/>,

        ],
      }
      ,
      {
        title: '● Engineer Intern Florida',
        stage: '2018',
        icons: [
          <GiRadioTower   key={''}/>,

        ],
      }
    ],

  },
];





function About() {
  const [index, setIndex] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <motion.div 
    initial={{scale:0 }}
    animate={{ scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 1, delay: 1.6 }}
    className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-4 ">
        <Card className='col-span-1 border-none bg-slate-100 p-8 hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] transition-all duration-300'>
        <motion.div 
    variants={fadeIn ('right', 0.4)} 
    initial="hidden"
    animate="show" 
    exit="hidden" 
    className="flex flex-col w-full xl:max-w-[68%] h-[280px] md:h-[160px] ">
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 dark:text-slate-900/60 text-slate-900/50" >
      {aboutData.map((item, itemIndex) => {
        return (
          <div key={itemIndex} className={`${index === itemIndex && ' text-rose-600 after:w-[100%] after:bg-rose-600 after:transition-all after:duration-200'} 
          cursor-pointer capitalize xl:text-lg relative after:w-8 
          after:h-[2px]after:bg-white after:absolute after:-bottom-1 after:left-0`}
          onClick={() => setIndex(itemIndex)}
          >
          {item.name}
          </div>
        )
      })}
      </div>
      <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
      {aboutData[index].info.map((item, itemIndex) => {
      return (
      <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-slate-800">

      <div className="font-light mb-2 md:mb-0">{item.title}</div>
      
      <div className="hidden md:flex"> - </div>

      <div>{item.stage}</div>
      <div className="flex gap-x-4">
      {item.icons?.map((icon:any, itemIndex:any) => {
        return (
          <div key={itemIndex} className="text-2xl text-slate-700">
          {icon }
          </div>
        )
      })}

      </div>
      </div>
      )})}
      </div>
    </motion.div>
        </Card>
    </motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-4 "> <Icons/></div>
    </div>
  )
}

export default About