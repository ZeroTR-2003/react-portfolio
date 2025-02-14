import React from 'react'
import { motion } from "framer-motion";
import {EXPERIENCES} from "../Constants"

const iconvariants=(duration)=>(
  {
    initial:{y:-10},
    animate:{
      y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
      }
    }
  }
)
const Experience = () => {
  return (
    <div className='boerder-b border-neutral-700 pb-4'>
       <motion.h1 
       whileInView={{opacity:1,y:0}} 
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
       className='my-20 text-center text-5xl text-blue-300'>Experience</motion.h1>
       <div>
           {
            EXPERIENCES.map((experince,index)=>(
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                 <motion.div 
                 
                 className="w-full lg:w-1/4">
                 <p className='mb-2   text-red-100  '>{experince.year}</p>
                 </motion.div>
                 <div className="w-full max-w-xl lg:w-3/4">
                   <h6 className=" font-semibold mb-2 text-2xl">{experince.role}  <span className='text-blue-200'> - {experince.company}</span></h6>
                    <p className='mb-4 text-neutral-400'>{experince.description}</p>
                    {experince.technologies.map((tech,index)=>(
                        <span className="mr-2 mt-4 rounded bg-neutral-900 p-2 text-sm font-medium text-blue-500" key={index}>{tech}</span>
                    ))}
                 </div>
              </div>
            ) )}
       </div>
    </div>
  )
}

export default Experience
