'use client';

// import About from "@/components/about";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // Scroll to #home section on initial load
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <main className="flex flex-col items-center">
      <Intro />
      {/* <Divider /> */}
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Testimonials />
    </main>
  );
}
