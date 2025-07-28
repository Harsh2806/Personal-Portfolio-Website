"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Mail, Linkedin, Phone } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:hssuryawanshib23@ee.vjti.ac.in",
      label: "Email",
      color: "#c2b8a3",
    },
    {
      icon: Github,
      href: "https://github.com/Harsh2806",
      label: "GitHub",
      color: "#6c7b8b",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_harshsuryawanshi/",
      label: "Instagram",
      color: "#a6a1cb",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/harsh-suryawanshi-206922265",
      label: "LinkedIn",
      color: "#c2b8a3",
    },
    {
      icon: Phone,
      href: "tel:+919326568923",
      label: "Phone",
      color: "#6c7b8b",
    },
  ]

  return (
    <footer className="bg-gradient-to-t from-[#0f0f0f] to-[#0a0a0a] border-t border-[#2a2a2a]/50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-[#a6a1cb] mb-2">Let's Connect</h3>
          <p className="text-[#e0e0e0]/60 text-sm md:text-base">Get in touch for opportunities and collaborations</p>
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-[#2a2a2a]/50 hover:border-opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: link.color + "10",
                  borderColor: link.color + "50",
                }}
                style={{
                  borderColor: link.color + "30",
                }}
              >
                <IconComponent
                  size={20}
                  style={{ color: link.color }}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-medium text-[#e0e0e0] group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
              </motion.a>
            )
          })}
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center pt-6 border-t border-[#2a2a2a]/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[#e0e0e0]/40 text-sm">© 2024 Harsh Suryawanshi. Built with passion and precision.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
