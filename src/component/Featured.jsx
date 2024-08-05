import React from 'react';
import {motion,useAnimation} from "framer-motion";

function Featured() {
    const cards = [useAnimation(),useAnimation()];
    const handleHover =(index) =>{
        cards[index].start({y:"0"})
        
    };

    const handleHoverEnd =(index) =>{
        cards[index].start({y:"100%"})
        
    };

    // const [isHovering,setHovering] = useState(false)
  return (
    <div className = 'w-full py-20'>
        <div className = 'w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className ='text-7xl font-["Neue_Montreal"] tracking-tight'> Featured projects</h1>
            </div>

            <div className="px-20">
            <div className = "card w-full flex gap-10 mt-10">
                <motion.div 
                onHoverStart= {() => handleHover(0)} 
                onHoverEnd= {() => handleHoverEnd(0)}
                
                className = ' cardcontainer relative card w-1/2 h-[75vh]' >

                    <h1 className = "absolute flex z-[9] text-[#99AD53] overflow-hidden right-0 translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl leading-none tracking-tighter">
                        {"FYDE".split('').map((item, index) => (
                        <motion.span 
                        initial = {{y : "100%"}} 
                        animate = {cards[0]} 
                        transition ={{ease:[0.68, -0.6, 0.32, 1.6], delay: index*.01}}
                        className= "inline-block">
                            {item}
                            </motion.span>
                        ))}

                    </h1>
                    <div className ="card w-full h-full rounded-xl overflow-hidden bg-green-600">
                        <img className= "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"></img>
                    </div>
                </motion.div>
                <div className = 'cardcontainer relative card w-1/2 h-[75vh] ' >
                <div className ="card w-full h-full  rounded-xl bg-green-600">
                <h1 className = "absolute z-[9] right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl leading-none tracking-tighter">
                {"VISE".split('').map((item, index) => <span>{item}</span>)} 
                </h1>
                        <img className= "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"></img>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Featured