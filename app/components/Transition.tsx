'use client'

import { motion } from "framer-motion";

const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%',
    },
    animate: {
      x: '0%',
      width: '0%',
    },
    exit: {
      x: ['0%', '100%'],
      width: ['0%', '100%'],
    },
}


function Transition() {
  return (
    <>
    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-blue-900"
    variants={transitionVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{delay: 0.1, duration: 0.3, 
    ease: 'easeInOut' }}
    ></motion.div>

    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-blue-950"
    variants={transitionVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{delay: 0.2, duration: 0.5, 
    ease: 'easeInOut' }}
    ></motion.div>

    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-blue-950"
    variants={transitionVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{delay: 0.3, duration: 0.6, 
    ease: 'easeInOut' }}
    ></motion.div>


  </>
  )
}

export default Transition