import React from 'react';
import { FaArrowUpLong} from "react-icons/fa6";
import {motion} from "framer-motion"

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed = "-.8"className= "w-full h-screen bg-zinc-900 pt-1">
      <div className = "textStructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item,index) => {
          return( 
          <div className= "masker">
            <div className="w-fit flex item center">
              {index=== 1 && (
              <motion.div initial={{width:0}} animate={{width:"7vw"}} transition= {{ease:[0.68, -0.6, 0.32, 1.6], duration:4}}className = "w-[7vw] h-[4.5vw] rounded relative-top-[1vw] bg-red-500"></motion.div>)}
        <h1 className="flex items-center uppercase text-[7vw] h-full leading-[7vw] font-['Founders_Grotesk'] font-bold"> 
        {item}
        </h1>
        </div>
        </div>
          );

        })}
        

      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py- 5 px-20">
        {["For public and private comapnies",
         "From the first pitch to IPO"
        ].map((item,index) =>(
          <p className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className= "start flex item-center gap-5">
          <div className = "px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase rounded-full "> Start the project </div>
          <div className= "w-10 h-10 flex items-center border-1px] border-zinc-400 rounded-full">
            <span className= "rotate-[45deg]">
              <FaArrowUpLong />

            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage