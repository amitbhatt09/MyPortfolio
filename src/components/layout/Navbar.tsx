"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/common/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-black/8 dark:border-white/8" : "bg-transparent"
        }`}
        style={scrolled ? { background: "var(--nav-scrolled-bg)", backdropFilter: "blur(20px)" } : {}}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2.5 cursor-pointer select-none"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {/* Code-tag logo — developer-centric branding */}
              <div className="flex items-center gap-0.5 px-3 py-1.5 rounded-xl font-mono text-sm font-bold"
                style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(59,130,246,0.15))", border: "1px solid rgba(168,85,247,0.3)" }}>
                <span className="text-slate-400 dark:text-slate-500">&lt;</span>
                <span className="gradient-text">Amit</span>
                <span className="text-slate-400 dark:text-slate-500">/&gt;</span>
              </div>
            </motion.a>

            {/* ── Desktop Nav ── */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* ── Right: CTA + Theme Toggle + Hamburger ── */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <motion.a
                href="mailto:amitbhatt54341@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
              >
                Hire Me
              </motion.a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </nav>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-black/8 dark:border-white/10"
              style={{ background: "var(--nav-mobile-bg)", backdropFilter: "blur(20px)" }}
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left px-4 py-3 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 rounded-xl transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="mailto:amitbhatt54341@gmail.com"
                  className="mt-2 px-4 py-3 rounded-xl text-center text-sm font-medium text-white"
                  style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
