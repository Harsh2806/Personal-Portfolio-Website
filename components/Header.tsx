"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Header = () => {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Electronics Engineering Student | AI/ML Enthusiast | Building Intelligent Solutions"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
        setTimeout(() => setShowCursor(false), 3000)
      }
    }, 60)

    return () => clearInterval(timer)
  }, [])

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const nameText = "Harsh Suryawanshi"

  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden group">
      {/* Hero content with hover animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.span
            className="text-[#e0e0e0] hover:text-[#c2b8a3] transition-colors duration-500 cursor-default"
            whileHover={{ scale: 1.05 }}
          >
            Hello, I'm{" "}
          </motion.span>
          <span className="inline-block">
            {nameText.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.05,
                }}
                className="text-[#a6a1cb] hover:text-[#c2b8a3] transition-colors duration-300 cursor-default"
                whileHover={{
                  scale: 1.2,
                  rotate: [-2, 2, -2, 0],
                  y: -10,
                  textShadow: "0 0 20px rgba(166, 161, 203, 0.8)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.div>

        <motion.div
          className="text-lg md:text-xl text-[#c2b8a3] mb-8 min-h-[60px] font-light leading-relaxed"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hover:text-[#a6a1cb] transition-colors duration-500 cursor-default"
          >
            {text}
          </motion.span>
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-[#a6a1cb]"
            >
              |
            </motion.span>
          )}
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-[#e0e0e0]/80 max-w-3xl mx-auto leading-relaxed hover:text-[#e0e0e0] transition-colors duration-500 cursor-default"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          Pre-final year Electronics Engineering student at VJTI Mumbai, passionate about AI/ML and geospatial
          technologies. Experienced in building intelligent systems that solve real-world problems through innovative
          technology solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          className="mt-8"
        >
          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-[#a6a1cb] to-[#c2b8a3] text-[#0a0a0a] rounded-full font-medium hover:shadow-glow transition-all duration-300"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0 10px 40px rgba(166, 161, 203, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        whileHover={{ scale: 1.2, y: -5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-[#a6a1cb]/50 rounded-full flex justify-center hover:border-[#a6a1cb] transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-[#a6a1cb] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Header
