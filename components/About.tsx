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
    <section className="py-10 sm:py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(150px,auto)] sm:auto-rows-[200px]"
      >
        {/* Main Bio Card */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 sm:col-span-2 row-span-2 bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-[#2a2a2a] hover:border-[#a6a1cb]/30 transition-all duration-300 group cursor-pointer"
          whileHover={{
            scale: 1.02,
            y: -5,
            backgroundColor: "#1f1f1f",
            boxShadow: "0 10px 40px rgba(166, 161, 203, 0.1)",
          }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6 text-[#a6a1cb] group-hover:text-[#c2b8a3] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-[#e0e0e0]/80 leading-relaxed mb-4 group-hover:text-[#e0e0e0] transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            Hi, I'm Harsh Suryawanshi — a pre-final year Electronics Engineering
            student at VJTI, Mumbai with a CGPA of 7.91. I specialize in AI/ML,
            geospatial technologies, and data engineering. My experience spans
            from building intelligent chatbots to environmental monitoring
            systems. I'm passionate about leveraging technology to solve complex
            problems, whether it's through machine learning models, remote
            sensing applications, or embedded systems.
          </motion.p>
        </motion.div>

        {/* Other cards remain the same but with adjusted padding and text sizes */}
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl border border-[#2a2a2a] hover:border-[#c2b8a3]/30 transition-all duration-300 group overflow-hidden cursor-pointer h-[200px] sm:h-auto"
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 10px 30px rgba(194, 184, 163, 0.2)",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/placeholder.png?height=150&width=200"
              alt="Profile"
              fill
              className="object-cover object-[center_30%] group-hover:scale-110 transition-transform duration-500"
              priority
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-[#c2b8a3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#2a2a2a] hover:border-[#6c7b8b]/30 transition-all duration-300 group cursor-pointer"
          whileHover={{
            scale: 1.05,
            y: -5,
            backgroundColor: "#1f1f1f",
            boxShadow: "0 10px 30px rgba(108, 123, 139, 0.2)",
          }}
        >
          <motion.h3
            className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#6c7b8b] group-hover:text-[#a6a1cb] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Core Skills
          </motion.h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "Machine Learning", "Flask", "Remote Sensing"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  className="px-2 sm:px-3 py-1 bg-[#2a2a2a] rounded-full text-xs sm:text-sm text-[#e0e0e0]/80 group-hover:bg-[#3a3a3a] group-hover:text-[#e0e0e0] transition-all duration-300"
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

        {/* Location and Years of Experience cards follow the same pattern */}
        {/* ... Rest of the code remains the same ... */}
      </motion.div>
    </section>
  );
};

export default About;
