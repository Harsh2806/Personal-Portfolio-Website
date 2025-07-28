"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Bot,
  Scale,
  BookOpen,
  MessageSquare,
  Shield,
  Brain,
  Database,
} from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "LLA Bot",
      subtitle: "AI-Powered Legal Assistant",
      shortDescription:
        "Intelligent chatbot providing accurate Indian labor law guidance",
      fullDescription:
        "An intelligent chatbot system designed to answer complex Indian labour law queries using advanced AI technologies. Built with Flask backend and Gemini language model, featuring Pinecone vector database for semantic search and natural language processing for legal document understanding.",
      technologies: [
        "Python",
        "Flask",
        "Gemini AI",
        "HuggingFace",
        "Pinecone",
        "Vector Database",
        "NLP",
        "Legal Tech",
      ],
      images: [
        "/placeholder.svg?height=500&width=800&text=LLA+Bot+Dashboard",
        "/placeholder.svg?height=500&width=800&text=Chat+Interface",
        "/placeholder.svg?height=500&width=800&text=Vector+Search",
        "/placeholder.svg?height=500&width=800&text=Analytics+Panel",
      ],
      github: "https://github.com/Harsh2806",
      live: "https://example.com",
      icon: Bot,
      features: [
        {
          icon: Scale,
          title: "Legal Precision",
          description: "Accurate answers to complex Indian labour law queries",
        },
        {
          icon: Brain,
          title: "AI-Powered",
          description: "Fine-tuned Gemini language model integration",
        },
        {
          icon: Database,
          title: "Vector Search",
          description: "Pinecone vector database for semantic search",
        },
        {
          icon: MessageSquare,
          title: "Natural Language",
          description: "Advanced NLP for legal document understanding",
        },
        {
          icon: BookOpen,
          title: "High Performance",
          description: "Robust Flask API serving 500+ users monthly",
        },
        {
          icon: Shield,
          title: "User Satisfaction",
          description: "High satisfaction rates with accurate responses",
        },
      ],
      stats: [
        { label: "Monthly Users", value: "500+" },
        { label: "Response Time", value: "<2s" },
        { label: "Legal Queries", value: "1000+" },
        { label: "Satisfaction Rate", value: "95%" },
      ],
      color: "#a6a1cb",
    },
  ];

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-serif mb-6 text-center relative"
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative bg-gradient-to-r from-[#a6a1cb] via-[#c2b8a3] to-[#6c7b8b] bg-clip-text text-transparent">
            Featured Project
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#a6a1cb] to-[#c2b8a3] rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "200px" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </span>
        </motion.h2>
        <motion.p
          className="text-center text-[#e0e0e0]/70 mt-6 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Showcasing innovative AI solutions that bridge technology and
          real-world impact
        </motion.p>
      </motion.div>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <ProjectShowcase
            key={index}
            project={project}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectShowcase = ({
  project,
  index,
  isInView,
}: {
  project: any;
  index: number;
  isInView: boolean;
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, project.images.length]);

  useEffect(() => {
    if (isHovered) {
      setIsAutoPlaying(false);
    } else {
      const timer = setTimeout(() => setIsAutoPlaying(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const goToImage = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentImage(index);
  };

  const IconComponent = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Project Container */}
      <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#0f0f0f] rounded-3xl overflow-hidden border border-[#2a2a2a] shadow-2xl">
        {/* Hero Section */}
        <div className="relative p-8 md:p-12 bg-gradient-to-r from-[#1a1a1a] to-[#151515] border-b border-[#2a2a2a]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <motion.div
                className="p-4 bg-gradient-to-br from-[#a6a1cb]/20 to-[#c2b8a3]/20 rounded-2xl border border-[#a6a1cb]/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent size={40} className="text-[#a6a1cb]" />
              </motion.div>
              <div>
                <motion.h3
                  className="text-3xl md:text-4xl font-serif text-[#a6a1cb] mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-lg font-mono text-[#c2b8a3]">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {project.stats.slice(0, 2).map((stat: any, i: number) => (
                <motion.div
                  key={i}
                  className="text-center p-3 bg-[#2a2a2a]/50 rounded-xl border border-[#3a3a3a]"
                  whileHover={{ scale: 1.05, backgroundColor: "#2a2a2a" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-xl font-bold text-[#a6a1cb]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#e0e0e0]/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            className="text-[#e0e0e0]/80 leading-relaxed mt-6 text-lg max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            {project.shortDescription}
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Image Carousel - Takes 2 columns */}
          <div className="lg:col-span-2 relative h-96 lg:h-[600px] bg-[#0f0f0f] overflow-hidden">
            <motion.div className="relative w-full h-full">
              {/* Main Image Display */}
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={
                    [
                      "/LLA_logo.png",
                      "/test_image_1.png",
                      "/test_image_2.png",
                      "/test_image_3.png",
                    ][currentImage]
                  }
                  alt={`${project.title} screenshot ${currentImage + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-contain transition-all duration-500"
                  style={{
                    transform: isHovered ? "scale(1.02)" : "scale(1)",
                    filter: isHovered
                      ? "brightness(1.05) contrast(1.05)"
                      : "brightness(1) contrast(1)",
                  }}
                />
              </motion.div>

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#a6a1cb]/10 to-[#c2b8a3]/10" />

              {/* Auto-play indicator */}
              {isAutoPlaying && (
                <motion.div
                  className="absolute top-6 right-6 flex items-center space-x-2 bg-black/70 backdrop-blur-md rounded-full px-4 py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="w-2 h-2 bg-[#a6a1cb] rounded-full animate-pulse" />
                  <span className="text-xs text-white font-medium">
                    AUTO PLAY
                  </span>
                </motion.div>
              )}

              {/* Enhanced Carousel Controls */}
              <motion.div
                className="absolute inset-0 flex items-center justify-between p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={prevImage}
                  className="p-4 bg-black/80 backdrop-blur-md rounded-full text-white hover:bg-black/90 transition-all duration-300 border border-white/20 hover:border-[#a6a1cb]/50"
                  whileHover={{ scale: 1.1, x: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="p-4 bg-black/80 backdrop-blur-md rounded-full text-white hover:bg-black/90 transition-all duration-300 border border-white/20 hover:border-[#a6a1cb]/50"
                  whileHover={{ scale: 1.1, x: 3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={24} />
                </motion.button>
              </motion.div>

              {/* Enhanced Image Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {project.images.map((_: any, i: number) => (
                  <motion.button
                    key={i}
                    onClick={() => goToImage(i)}
                    className={`relative transition-all duration-300 ${
                      i === currentImage
                        ? "w-12 h-3 bg-[#a6a1cb] rounded-full"
                        : "w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {i === currentImage && (
                      <motion.div
                        className="absolute inset-0 bg-[#a6a1cb] rounded-full shadow-lg"
                        layoutId="activeIndicator"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md rounded-full px-4 py-2">
                <span className="text-sm text-white font-medium">
                  {currentImage + 1} / {project.images.length}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Project Details Sidebar */}
          <div className="p-8 lg:p-10 bg-gradient-to-b from-[#1a1a1a] to-[#151515] flex flex-col justify-between">
            {/* Description */}
            <div className="mb-8">
              <motion.h4
                className="text-lg font-semibold text-[#c2b8a3] mb-4 uppercase tracking-wider"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ delay: 0.4 }}
              >
                About This Project
              </motion.h4>
              <motion.p
                className="text-[#e0e0e0]/80 leading-relaxed text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ delay: 0.5 }}
              >
                {project.fullDescription}
              </motion.p>
            </div>

            {/* Additional Stats */}
            <div className="mb-8">
              <div className="grid grid-cols-1 gap-3">
                {project.stats.slice(2).map((stat: any, i: number) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center p-3 bg-[#2a2a2a]/30 rounded-lg border border-[#3a3a3a]/50"
                    whileHover={{ backgroundColor: "#2a2a2a", scale: 1.02 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <span className="text-sm text-[#e0e0e0]/70">
                      {stat.label}
                    </span>
                    <span className="text-sm font-bold text-[#a6a1cb]">
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#2a2a2a] rounded-xl hover:bg-[#3a3a3a] transition-all duration-300 text-[#e0e0e0] hover:text-[#a6a1cb] border border-[#3a3a3a] hover:border-[#a6a1cb]/30 text-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={16} />
                <span className="font-medium">View Source</span>
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1jpUIP3eHgtlrRtzViWwf_N6dYf8pSIHV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-[#a6a1cb] to-[#c2b8a3] rounded-xl hover:shadow-glow transition-all duration-300 text-[#0a0a0a] font-medium text-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={16} />
                <span>View Report</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-[#151515] to-[#1a1a1a] border-t border-[#2a2a2a]">
          <motion.h4
            className="text-xl font-semibold text-[#c2b8a3] mb-8 text-center uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            Key Features & Capabilities
          </motion.h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature: any, i: number) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={i}
                  className="group p-6 bg-[#1a1a1a]/50 rounded-xl border border-[#2a2a2a] hover:border-[#a6a1cb]/30 transition-all duration-300 cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    backgroundColor: "#1f1f1f",
                    boxShadow: "0 10px 30px rgba(166, 161, 203, 0.1)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-[#a6a1cb]/20 rounded-lg mr-3 group-hover:bg-[#a6a1cb]/30 transition-colors duration-300">
                      <FeatureIcon size={20} className="text-[#a6a1cb]" />
                    </div>
                    <h5 className="font-semibold text-[#e0e0e0] group-hover:text-[#a6a1cb] transition-colors duration-300">
                      {feature.title}
                    </h5>
                  </motion.div>
                  <p className="text-sm text-[#e0e0e0]/70 leading-relaxed group-hover:text-[#e0e0e0]/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="p-8 md:p-12 bg-[#0f0f0f] border-t border-[#2a2a2a]">
          <motion.h4
            className="text-lg font-semibold text-[#c2b8a3] mb-6 text-center uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
          >
            Technology Stack
          </motion.h4>

          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm text-[#e0e0e0]/80 border border-[#3a3a3a] hover:border-[#a6a1cb]/30 hover:bg-[#3a3a3a] hover:text-[#e0e0e0] transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1.3 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
