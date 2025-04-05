"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { randomRotation } from "@/utils/styles";

interface NavigationProps {
  activeTab: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  activeTab,
  scrollToSection,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFullName, setShowFullName] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullName(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    setShowFullName((current) => !current);
  };

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="brutalist-nav">
      <div className="container mx-auto px-6 flex justify-between items-center flex-wrap">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          className="text-2xl font-black uppercase tracking-tighter"
          onClick={handleLogoClick}
        >
          <div className="flex items-center">
            <div className="relative inline-flex items-center">
              F
              <motion.div
                initial={{ width: "auto", opacity: 1 }}
                animate={{
                  width: showFullName ? "auto" : 0,
                  opacity: showFullName ? 1 : 0,
                }}
                transition={{
                  width: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.2 },
                }}
                style={{ originX: 0 }}
                className="overflow-hidden"
              >
                RANCIS
              </motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: !showFullName ? 1 : 0,
                scale: !showFullName ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
                delay: showFullName ? 0 : 0.3,
                ease: "backOut",
              }}
              className="text-brutalist-accent mx-1"
            >
              .
            </motion.span>
            <div className="relative inline-flex items-center">
              J
              <motion.div
                initial={{ width: "auto", opacity: 1 }}
                animate={{
                  width: showFullName ? "auto" : 0,
                  opacity: showFullName ? 1 : 0,
                }}
                transition={{
                  width: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.2 },
                }}
                style={{ originX: 0 }}
                className="overflow-hidden"
              >
                OHNY
              </motion.div>
            </div>
          </div>
        </motion.button>

        <div className="hidden md:flex space-x-1 flex-wrap">
          {["about", "projects", "contact"].map((item) => (
            <button
              key={item}
              className={`brutalist-nav-link ${
                activeTab === item ? "active" : ""
              }`}
              onClick={() => scrollToSection(item)}
              style={randomRotation()}
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href="https://buymeacoffee.com/francjohny"
          target="_blank"
          rel="noopener noreferrer"
          className="brutalist-button hidden md:block"
          style={{ transform: "rotate(2deg)", whiteSpace: "nowrap" }}
        >
          BUY ME A COFFEE
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-brutalist-black text-2xl border-2 border-brutalist-black p-1"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-brutalist-white border-t-4 border-brutalist-black">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {["about", "projects", "contact"].map((item) => (
              <button
                key={item}
                className={`block w-full text-left py-2 font-bold uppercase ${
                  activeTab === item
                    ? "bg-brutalist-black text-brutalist-white px-2"
                    : "text-brutalist-black"
                }`}
                onClick={() => handleMobileNavClick(item)}
              >
                {item}
              </button>
            ))}
            <a
              href="https://buymeacoffee.com/francjohny"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-2 font-bold uppercase text-brutalist-accent hover:bg-brutalist-black hover:text-brutalist-white px-2 transition-colors"
            >
              BUY ME A COFFEE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
