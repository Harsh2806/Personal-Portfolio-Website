"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
      >
        {/* Main Bio Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 lg:col-span-2 row-span-2 bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] hover:border-[#a6a1cb]/30 transition-all duration-300 group cursor-pointer"
          whileHover={{
            scale: 1.02,
            y: -5,
            backgroundColor: "#1f1f1f",
            boxShadow: "0 10px 40px rgba(166, 161, 203, 0.1)",
          }}
        >
          <motion.h2
            className="text-3xl font-serif mb-6 text-[#a6a1cb] group-hover:text-[#c2b8a3] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-[#e0e0e0]/80 leading-relaxed mb-4 group-hover:text-[#e0e0e0] transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            Hi, I'm Harsh Suryawanshi — a pre-final year Electronics Engineering
            student at VJTI, Mumbai with a CGPA of 7.91. I specialize in AI/ML,
            geospatial technologies, and data engineering. My experience spans
            from building intelligent chatbots to environmental monitoring
            systems. I'm passionate about leveraging technology to solve complex
            problems, whether it's through machine learning models, remote
            sensing applications, or embedded systems. My work combines
            technical expertise with practical implementation to create
            meaningful solutions. Beyond academics, I've secured Rs. 3.4L+ in
            sponsorships as Sponsorships Executive for Technovanza VJTI and
            completed NASA ARSET certification in Remote Sensing.
          </motion.p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#c2b8a3]/30 transition-all duration-300 group overflow-hidden cursor-pointer"
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 10px 30px rgba(194, 184, 163, 0.2)",
          }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/placeholder.png?height=200&width=200"
              alt="Profile"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-[#c2b8a3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#6c7b8b]/30 transition-all duration-300 group cursor-pointer"
          whileHover={{
            scale: 1.05,
            y: -5,
            backgroundColor: "#1f1f1f",
            boxShadow: "0 10px 30px rgba(108, 123, 139, 0.2)",
          }}
        >
          <motion.h3
            className="text-lg font-semibold mb-4 text-[#6c7b8b] group-hover:text-[#a6a1cb] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Core Skills
          </motion.h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "Machine Learning", "Flask", "Remote Sensing"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-[#2a2a2a] rounded-full text-sm text-[#e0e0e0]/80 group-hover:bg-[#3a3a3a] group-hover:text-[#e0e0e0] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#c2b8a3]/30 transition-all duration-300 group cursor-pointer"
          whileHover={{
            scale: 1.05,
            y: -5,
            backgroundColor: "#1f1f1f",
            boxShadow: "0 10px 30px rgba(194, 184, 163, 0.2)",
          }}
        >
          <motion.h3
            className="text-lg font-semibold mb-2 text-[#c2b8a3] group-hover:text-[#a6a1cb] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Location
          </motion.h3>
          <motion.p
            className="text-[#e0e0e0]/80 group-hover:text-[#e0e0e0] transition-colors duration-300"
            whileHover={{ x: 3 }}
          >
            Mumbai, India
          </motion.p>
          <motion.p
            className="text-sm text-[#e0e0e0]/60 mt-2 group-hover:text-[#e0e0e0]/80 transition-colors duration-300"
            whileHover={{ x: 3 }}
          >
            VJTI Student
          </motion.p>
        </motion.div>

        {/* Years of Experience */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#a6a1cb]/30 transition-all duration-300 group cursor-pointer"
          whileHover={{
            scale: 1.05,
            y: -5,
            backgroundColor: "#1f1f1f",
            boxShadow: "0 10px 30px rgba(166, 161, 203, 0.2)",
          }}
        >
          <motion.h3
            className="text-4xl font-bold text-[#a6a1cb] mb-2 group-hover:text-[#c2b8a3] transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
          >
            2+
          </motion.h3>
          <motion.p
            className="text-[#e0e0e0]/80 group-hover:text-[#e0e0e0] transition-colors duration-300"
            whileHover={{ x: 3 }}
          >
            Pre-Final Year
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
