import React from "react";
import {motion} from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed =".1"className = 'w-full py-8 rounded-tl-3xl rounded-tr-3xl rounded-tl-3xl h-[50vh] bg-[#004D43]'>
        <div className= 'text border-t-2 border-b-2 border-zinc--300 flex overflow-hidden whitespace-nowrap'>
           <motion.h1 initial= {{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5 }} className = 'text-[20vw] leading-none font-["Founders_Grotesk"] font-semibold pt-10 -mb-12 pr-20' >
            WE ARE OCHI</motion.h1>
           <motion.h1 initial= {{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5 }} className = 'text-[20vw] leading-none font-["Founders_Grotesk"] font-semibold pt-10 -mb-12 pr-20' >
            WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee