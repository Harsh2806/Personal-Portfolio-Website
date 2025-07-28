"use client"

import { motion, useScroll, useSpring } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a6a1cb] via-[#c2b8a3] to-[#6c7b8b] origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
