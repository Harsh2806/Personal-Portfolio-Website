"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "hobbies", label: "Hobbies" },
    { id: "projects", label: "Projects" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl" : "bg-[#1a1a1a]/80 backdrop-blur-md"
      } rounded-full px-8 py-3 border border-[#2a2a2a]/50`}
    >
      <ul className="flex items-center justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <motion.button
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === item.id
                  ? "text-[#a6a1cb] scale-105"
                  : "text-[#e0e0e0]/70 hover:text-[#e0e0e0] hover:scale-105"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <AnimatePresence>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#a6a1cb]/20 to-[#c2b8a3]/20 rounded-full border border-[#a6a1cb]/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#a6a1cb] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: activeSection === item.id ? "80%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navigation
