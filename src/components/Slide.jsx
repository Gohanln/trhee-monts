import React from 'react'
import { motion } from 'framer-motion'

export default function Slide({children, photo, title}){
  return (
    <motion.div
      className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center gap-4"
      initial={{opacity:0, x:50}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:-50}}
      transition={{duration:0.6}}
    >
      {photo && (
        <div className="rounded-xl overflow-hidden w-64 h-64 shadow-lg">
          <img src={photo} alt={title || 'photo'} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="text-center max-w-xl">
        {title && <h2 className="decorative text-4xl text-mrosa">{title}</h2>}
        <div className="mt-4 text-gray-700 text-lg">{children}</div>
      </div>
    </motion.div>
  )
}
