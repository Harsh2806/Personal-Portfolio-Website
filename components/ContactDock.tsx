"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Instagram, Mail, Linkedin } from "lucide-react"

const ContactDock = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -20])

  const contacts = [
    {
      icon: Mail,
      href: "mailto:alex@example.com",
      label: "Email",
      color: "#c2b8a3",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "#6c7b8b",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "#a6a1cb",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "#c2b8a3",
    },
  ]

  return (
    <>
      {/* Desktop/Tablet Dock - Top Center */}
      <motion.div
        style={{ y }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden sm:block fixed top-20 left-1/2 transform -translate-x-1/2 z-40"
      >
        <motion.div
          className="bg-[#1a1a1a]/95 backdrop-blur-xl rounded-2xl px-6 py-4 border border-[#2a2a2a]/50 shadow-2xl"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center justify-center space-x-6">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 rounded-xl transition-all duration-300 group"
                  whileHover={{
                    scale: 1.15,
                    y: -3,
                    backgroundColor: contact.color + "20",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <IconComponent
                    size={22}
                    className="text-[#e0e0e0]/70 group-hover:text-current transition-all duration-300"
                    style={{
                      filter: "drop-shadow(0 0 8px transparent)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = contact.color
                      e.currentTarget.style.filter = `drop-shadow(0 0 8px ${contact.color}40)`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#e0e0e0b3"
                      e.currentTarget.style.filter = "drop-shadow(0 0 8px transparent)"
                    }}
                  />

                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#2a2a2a] text-[#e0e0e0] px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {contact.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#2a2a2a]" />
                  </motion.div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Dock - Top Center */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="sm:hidden fixed top-20 left-1/2 transform -translate-x-1/2 z-40"
      >
        <motion.div
          className="bg-[#1a1a1a]/95 backdrop-blur-xl rounded-2xl px-6 py-3 border border-[#2a2a2a]/50 shadow-2xl"
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="flex items-center justify-center space-x-4">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl transition-all duration-300 group"
                  whileHover={{
                    scale: 1.15,
                    y: -3,
                    backgroundColor: contact.color + "20",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <IconComponent
                    size={18}
                    className="text-[#e0e0e0]/70 group-hover:text-current transition-all duration-300"
                    style={{
                      filter: "drop-shadow(0 0 6px transparent)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = contact.color
                      e.currentTarget.style.filter = `drop-shadow(0 0 6px ${contact.color}40)`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#e0e0e0b3"
                      e.currentTarget.style.filter = "drop-shadow(0 0 6px transparent)"
                    }}
                  />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default ContactDock
