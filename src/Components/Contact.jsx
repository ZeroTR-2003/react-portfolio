import React from 'react'
import {CONTACT} from "../Constants"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
       <motion.h1 
       whileInView={{opacity:1,y:0}} 
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
       className='my-20 text-center text-5xl text-blue-300'>Get in touch</motion.h1>
       <div className="text-center tracking-tight">
       <p  className="text-2xl font-semibold">📞 Phone : <a href={`tel:${CONTACT.phone}`} className="hover:text-blue-600">{CONTACT.phone}</a></p>
       <p  className="text-2xl font-semibold font-poppins">📧 Email: <a href={`mailto:${CONTACT.email}`}  className="hover:text-blue-600">{CONTACT.email}</a></p>
        <p className='my-4 text-2xl'> 📍 Location : {CONTACT.location}</p>
 
       </div>
    </div>
  )
}

export default Contact
