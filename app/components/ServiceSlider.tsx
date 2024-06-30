'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from 'swiper/modules';
import { MdEngineering, MdSatelliteAlt  } from "react-icons/md";
import { FaSatelliteDish } from "react-icons/fa6";
import { SiTele5 } from "react-icons/si";
import { GiSatelliteCommunication } from "react-icons/gi";

export const serviceData = [
    {
        icon: <MdEngineering/>,
        title: 'Competence',
        description: 'I adore continuous learning, professional development, and staying updated with advancements in engineering practices. I am engaging in ongoing education, attending workshops and seminars, obtaining relevant certifications, and being aware of the latest engineering trends and best practices.',
    },
    {
        icon: <FaSatelliteDish/>,
        title: 'Integrity',
        description: 'I am adhering to ethical principles and being honest and transparent in all professional dealings. I act with honesty and fairness, avoid conflicts of interest, and ensure that my work adheres to the highest standards of honesty and ethical conduct.',
    },
    {
        icon: <MdSatelliteAlt />,
        title: 'Public Safety',
        description: 'The safety, health, and welfare of the public are paramount. I am ensuring that my designs and implementations do not pose any risk to public health and safety, conducting thorough risk assessments, adhering to safety regulations and standards, implementing best practices to mitigate hazards, and designing solutions that prioritize the safety of the public.',
    },
    {
        icon: <SiTele5/>,
        title: 'Accountability',
        description: 'I am as Professional engineer must take responsibility for my actions and the outcomes of my work. I am accountable for my decisions, answerable to clients, employers, and regulatory bodies, maintaining detailed documentation of work processes and decisions, and implementing corrective actions promptly when mistakes are identified.',
    },
    {
        icon: <GiSatelliteCommunication/>,
        title: 'Collaboration',
        description: 'I work well in teams, have effective collaboration and communication with colleagues, clients, stakeholders, share knowledge, and seek input and feedback to achieve the best outcomes.',
    },    

]


function ServiceSlider() {
  return (
    <Swiper breakpoints={{
        320: { 
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: { 
            slidesPerView: 1,
            spaceBetween: 15,
        },

    }}
    freeMode={true}
    pagination = {{
        clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[340px] sm:h-[400px]"
    >
        {
            serviceData.map((item, index) => {
                return (
                <SwiperSlide key={index}>
                <div className="bg-sky-300 flex flex-col h-full rounded-lg px-6 py-8 sm:flex-col gap-x-6 sm:gap-x-0 
                group cursor-pointer
                hover:bg-sky-500 transition-all duration-300 ">
                <div className="text-4xl text-slate-50 mb-4 font-semibold">{item.icon}</div>
                <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>

                </div>
                </SwiperSlide>
            )})
        }
    </Swiper>
  )
}

export default ServiceSlider