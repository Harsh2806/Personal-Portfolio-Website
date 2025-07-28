"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const BackgroundGrid = () => {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)

  // Create grid cells
  const gridCells = Array.from({ length: 200 }, (_, i) => i)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(166, 161, 203, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(166, 161, 203, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Interactive grid cells */}
      <div className="absolute inset-0 grid grid-cols-20 gap-0 opacity-10">
        {gridCells.map((cell) => (
          <motion.div
            key={cell}
            className="aspect-square border border-[#a6a1cb]/10 hover:border-[#a6a1cb]/30 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredCell(cell)}
            onMouseLeave={() => setHoveredCell(null)}
            whileHover={{
              backgroundColor: "rgba(166, 161, 203, 0.05)",
              scale: 1.1,
              zIndex: 10,
            }}
            animate={{
              opacity: hoveredCell === cell ? 0.8 : 0.1,
              boxShadow: hoveredCell === cell ? "0 0 20px rgba(166, 161, 203, 0.3)" : "none",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Floating animated dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#a6a1cb] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 3,
              opacity: 1,
              boxShadow: "0 0 15px rgba(166, 161, 203, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(166, 161, 203, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(194, 184, 163, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(108, 123, 139, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(166, 161, 203, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}

export default BackgroundGrid
