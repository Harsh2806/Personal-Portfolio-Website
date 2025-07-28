"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, MapPin, Briefcase, Code, Trophy, ChevronRight, Award, Zap } from "lucide-react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const experiences = [
    {
      title: "Industrial Trainee",
      company: "Shivam Electromech",
      period: "Jun 2023 – Jul 2023",
      location: "Jalgaon, India",
      type: "Internship",
      description:
        "Gained hands-on experience in electronics and environmental monitoring systems. Developed PCB-based solutions for industrial applications and implemented automated data collection workflows for sensor monitoring systems.",
      technologies: ["Embedded C", "PCB Design", "Sensor Systems", "Data Analysis", "Environmental Monitoring"],
      achievements: [
        {
          icon: Code,
          title: "PCB Development",
          description:
            "Prototyped and developed PCB-based CO₂ monitoring sensor system for environmental data collection",
        },
        {
          icon: Zap,
          title: "Automation Systems",
          description: "Implemented automated data collection and analysis workflows for industrial sensor monitoring",
        },
        {
          icon: Trophy,
          title: "Practical Application",
          description: "Applied theoretical knowledge to real-world industrial environmental monitoring challenges",
        },
      ],
      responsibilities: [
        "Designed and prototyped PCB-based CO₂ monitoring sensor systems",
        "Developed automated data collection workflows for environmental monitoring",
        "Analyzed sensor data for industrial applications and reporting",
        "Collaborated with engineering team on environmental monitoring solutions",
        "Tested and validated sensor system performance in industrial environments",
      ],
    },
  ]

  const achievements = [
    {
      title: "Sponsorships Executive - Technovanza VJTI",
      description: "Secured Rs. 3.4L+ in sponsorships, managing corporate partnerships and fundraising initiatives",
      icon: Trophy,
      color: "#a6a1cb",
      year: "2024",
    },
    {
      title: "DIPEX 24-25 Selection",
      description: "Selected under Waste Management category, showcasing innovative environmental solutions",
      icon: Award,
      color: "#c2b8a3",
      year: "2024",
    },
    {
      title: "NASA ARSET Certification",
      description:
        "Completed Fundamentals of Remote Sensing certification, demonstrating satellite data analysis expertise",
      icon: Award,
      color: "#6c7b8b",
      year: "2024",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto relative">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 border border-[#a6a1cb]/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-4 md:right-20 w-12 md:w-24 h-12 md:h-24 border border-[#c2b8a3]/10"
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-20 text-center relative"
      >
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 relative inline-block"
          whileHover={{ scale: 1.02 }}
        >
          <span className="bg-gradient-to-r from-[#a6a1cb] via-[#c2b8a3] to-[#6c7b8b] bg-clip-text text-transparent">
            Experience & Achievements
          </span>
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#a6a1cb] to-[#c2b8a3] rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "150px" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.h2>
        <motion.p
          className="text-[#e0e0e0]/70 text-base md:text-lg max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Professional experience and notable achievements in technology and leadership
        </motion.p>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-16 md:mb-24"
      >
        {/* Timeline connector */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#a6a1cb] via-[#c2b8a3] to-[#6c7b8b] opacity-30" />

        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#0f0f0f] rounded-2xl md:rounded-3xl overflow-hidden border border-[#2a2a2a] shadow-2xl ml-8 md:ml-16 mb-8"
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute -left-12 md:-left-20 top-8 md:top-12 w-3 md:w-4 h-3 md:h-4 bg-[#a6a1cb] rounded-full border-2 md:border-4 border-[#0a0a0a] shadow-lg"
              whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(166, 161, 203, 0.6)" }}
            />

            {/* Header Section */}
            <div className="p-4 md:p-8 lg:p-12 bg-gradient-to-r from-[#1a1a1a] to-[#151515] border-b border-[#2a2a2a]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 md:gap-6">
                <div className="flex items-start gap-3 md:gap-6">
                  <motion.div
                    className="p-2 md:p-4 bg-gradient-to-br from-[#a6a1cb]/20 to-[#c2b8a3]/20 rounded-xl md:rounded-2xl border border-[#a6a1cb]/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Briefcase size={20} className="md:hidden text-[#a6a1cb]" />
                    <Briefcase size={32} className="hidden md:block text-[#a6a1cb]" />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-lg md:text-2xl lg:text-3xl font-serif text-[#a6a1cb] mb-1 md:mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {experience.title}
                    </motion.h3>
                    <p className="text-base md:text-xl text-[#c2b8a3] font-medium mb-2 md:mb-3">{experience.company}</p>
                    <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-[#e0e0e0]/70">
                      <div className="flex items-center gap-1 md:gap-2">
                        <Calendar size={12} className="md:hidden" />
                        <Calendar size={16} className="hidden md:block" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <MapPin size={12} className="md:hidden" />
                        <MapPin size={16} className="hidden md:block" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <Briefcase size={12} className="md:hidden" />
                        <Briefcase size={16} className="hidden md:block" />
                        <span>{experience.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.p
                className="text-[#e0e0e0]/80 leading-relaxed mt-4 md:mt-6 text-sm md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                {experience.description}
              </motion.p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Achievements */}
              <div className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-[#151515] to-[#1a1a1a]">
                <motion.h4
                  className="text-base md:text-xl font-semibold text-[#c2b8a3] mb-4 md:mb-8 flex items-center gap-2 md:gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 }}
                >
                  <Trophy size={16} className="md:hidden text-[#a6a1cb]" />
                  <Trophy size={24} className="hidden md:block text-[#a6a1cb]" />
                  Key Achievements
                </motion.h4>

                <div className="space-y-3 md:space-y-6">
                  {experience.achievements.map((achievement, i) => {
                    const IconComponent = achievement.icon
                    return (
                      <motion.div
                        key={i}
                        className="group p-3 md:p-4 bg-[#1a1a1a]/50 rounded-lg md:rounded-xl border border-[#2a2a2a] hover:border-[#a6a1cb]/30 transition-all duration-300 cursor-pointer"
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          backgroundColor: "#1f1f1f",
                        }}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        onMouseEnter={() => setHoveredCard(i)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          <motion.div
                            className="p-1.5 md:p-2 bg-[#a6a1cb]/20 rounded-lg group-hover:bg-[#a6a1cb]/30 transition-colors duration-300"
                            animate={{ rotate: hoveredCard === i ? 5 : 0 }}
                          >
                            <IconComponent size={16} className="md:hidden text-[#a6a1cb]" />
                            <IconComponent size={20} className="hidden md:block text-[#a6a1cb]" />
                          </motion.div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-[#e0e0e0] mb-1 md:mb-2 group-hover:text-[#a6a1cb] transition-colors duration-300 text-sm md:text-base">
                              {achievement.title}
                            </h5>
                            <p className="text-xs md:text-sm text-[#e0e0e0]/70 leading-relaxed group-hover:text-[#e0e0e0]/90 transition-colors duration-300">
                              {achievement.description}
                            </p>
                          </div>
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{ x: hoveredCard === i ? 5 : 0 }}
                          >
                            <ChevronRight size={14} className="md:hidden text-[#a6a1cb]" />
                            <ChevronRight size={16} className="hidden md:block text-[#a6a1cb]" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="p-4 md:p-8 lg:p-12 bg-gradient-to-bl from-[#151515] to-[#0f0f0f] border-l border-[#2a2a2a]">
                <motion.h4
                  className="text-base md:text-xl font-semibold text-[#c2b8a3] mb-4 md:mb-8 flex items-center gap-2 md:gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <Code size={16} className="md:hidden text-[#a6a1cb]" />
                  <Code size={24} className="hidden md:block text-[#a6a1cb]" />
                  Key Responsibilities
                </motion.h4>

                <div className="space-y-2 md:space-y-4">
                  {experience.responsibilities.map((responsibility, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2 md:gap-4 group cursor-pointer"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <motion.div
                        className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#a6a1cb] rounded-full mt-1.5 md:mt-2 group-hover:scale-150 transition-transform duration-300"
                        whileHover={{ scale: 2 }}
                      />
                      <p className="text-[#e0e0e0]/80 leading-relaxed group-hover:text-[#e0e0e0] transition-colors duration-300 text-xs md:text-base">
                        {responsibility}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="p-4 md:p-8 lg:p-12 bg-[#0f0f0f] border-t border-[#2a2a2a]">
              <motion.h4
                className="text-sm md:text-lg font-semibold text-[#c2b8a3] mb-3 md:mb-6 text-center uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
              >
                Technologies Used
              </motion.h4>

              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-2 md:px-4 py-1 md:py-2 bg-[#2a2a2a] rounded-full text-xs md:text-sm text-[#e0e0e0]/80 border border-[#3a3a3a] hover:border-[#a6a1cb]/30 hover:bg-[#3a3a3a] hover:text-[#e0e0e0] transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1 + i * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h3
          className="text-2xl md:text-3xl font-serif text-[#a6a1cb] mb-6 md:mb-12 text-center"
          whileHover={{ scale: 1.02 }}
        >
          Notable Achievements
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] rounded-xl md:rounded-2xl p-4 md:p-8 border border-[#2a2a2a] hover:border-opacity-50 transition-all duration-300 group cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "#1f1f1f",
                  boxShadow: "0 10px 40px rgba(166, 161, 203, 0.1)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                style={{ "--hover-border-color": achievement.color } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = achievement.color + "50"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a"
                }}
              >
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <motion.div
                    className="p-2 md:p-3 rounded-xl"
                    style={{ backgroundColor: achievement.color + "20" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent size={20} className="md:hidden" style={{ color: achievement.color }} />
                    <IconComponent size={32} className="hidden md:block" style={{ color: achievement.color }} />
                  </motion.div>
                  <span
                    className="text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full"
                    style={{ backgroundColor: achievement.color + "20", color: achievement.color }}
                  >
                    {achievement.year}
                  </span>
                </div>

                <h4
                  className="text-sm md:text-lg font-semibold mb-2 md:mb-4 group-hover:scale-105 transition-transform duration-300"
                  style={{ color: achievement.color }}
                >
                  {achievement.title}
                </h4>

                <p className="text-[#e0e0e0]/80 leading-relaxed group-hover:text-[#e0e0e0] transition-colors duration-300 text-xs md:text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
