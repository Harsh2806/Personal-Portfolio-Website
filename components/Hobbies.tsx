"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Gamepad2, Mic } from "lucide-react"

const Hobbies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const hobbies = [
    {
      title: "Reading",
      description: "Exploring sci-fi novels and technical books to expand my knowledge and imagination.",
      icon: BookOpen,
      color: "#a6a1cb",
    },
    {
      title: "Gaming",
      description: "Strategy games and indie titles that challenge problem-solving skills.",
      icon: Gamepad2,
      color: "#6c7b8b",
    },
    {
      title: "ASMR Content",
      description: "Creating relaxing audio content that helps people unwind and focus.",
      icon: Mic,
      color: "#c2b8a3",
    },
  ]

  return (
    <section id="hobbies" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-serif mb-4 text-center">Hobbies & Interests</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hobbies.map((hobby, index) => {
          const IconComponent = hobby.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] hover:border-opacity-50 transition-all duration-300 group hover:scale-105 hover:bg-[#1a1a1a]/80 backdrop-blur-sm"
              style={{ "--hover-border-color": hobby.color } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = hobby.color + "50"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a"
              }}
            >
              <div className="mb-6">
                <IconComponent
                  size={48}
                  style={{ color: hobby.color }}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold mb-4" style={{ color: hobby.color }}>
                {hobby.title}
              </h3>

              <p className="text-[#e0e0e0]/80 leading-relaxed">{hobby.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Hobbies
