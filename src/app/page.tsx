"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [showSvgInterlude, setShowSvgInterlude] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveTab(sectionId);
    }
  };

  return (
    <div className="relative bg-brutalist-white">
      <Navigation activeTab={activeTab} scrollToSection={scrollToSection} />
      <div
        className="container mx-auto px-6 pb-12 text-brutalist-black"
        style={{ paddingLeft: 0 }}
      >
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
