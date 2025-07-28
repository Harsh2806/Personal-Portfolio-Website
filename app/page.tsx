"use client"

import { useRef } from "react"
import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Hobbies from "@/components/Hobbies"
import Footer from "@/components/Footer"
import BackgroundGrid from "@/components/BackgroundGrid"
import ScrollProgress from "@/components/ScrollProgress"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0a] text-[#e0e0e0] overflow-x-hidden scroll-smooth"
    >
      <BackgroundGrid />
      <ScrollProgress />

      <main className="relative z-10">
        <section id="home">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="hobbies">
          <Hobbies />
        </section>
      </main>

      <Footer />
    </div>
  )
}
