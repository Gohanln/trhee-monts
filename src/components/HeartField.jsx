import React from 'react'
import { motion } from 'framer-motion'

function random(min, max){
  return Math.random() * (max - min) + min
}

export default function HeartField({count = 10}){
  const hearts = Array.from({length: count})

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((_, i) => {
        const size = Math.floor(random(24, 72))
        const left = random(0, 100)
        const delay = random(0, 6)
        const duration = random(6, 14)
        const rotate = random(-20, 20)
        return (
          <motion.div
            key={i}
            className="heart absolute"
            style={{left: `${left}%`, bottom: -size}}
            initial={{y: 0, opacity: 0}}
            animate={{y: -window.innerHeight - 200, opacity: [0,1,1,0]}}
            transition={{delay, duration, repeat: Infinity, ease: 'linear'}}
          >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: `rotate(${rotate}deg)`}}>
              <path d="M12 21s-8-5.4-8-11a5 5 0 0 1 8-4.1A5 5 0 0 1 20 10c0 5.6-8 11-8 11z" fill="#FF77AA" />
            </svg>
          </motion.div>
        )
      })}
    </div>
  )
}
