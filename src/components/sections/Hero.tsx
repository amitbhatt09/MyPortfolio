"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink, Download, ChevronDown, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon, FiverrIcon } from "@/components/common/BrandIcons";

const codeLines = [
  { indent: 0, text: "const amit = {", color: "text-slate-300" },
  { indent: 1, text: 'role: "AI & Software Engineer",', color: "text-blue-400" },
  { indent: 1, text: 'location: "Noida, India",', color: "text-blue-400" },
  { indent: 1, text: "skills: [", color: "text-slate-300" },
  { indent: 2, text: '"AI Agents", "LangChain",', color: "text-green-400" },
  { indent: 2, text: '"ASP.NET Core", "React",', color: "text-green-400" },
  { indent: 2, text: '"Azure", "CI/CD"', color: "text-green-400" },
  { indent: 1, text: "],", color: "text-slate-300" },
  { indent: 1, text: "status: ", color: "text-slate-300" },
  { indent: 2, text: '"Open to opportunities 🚀"', color: "text-purple-400" },
  { indent: 0, text: "}", color: "text-slate-300" },
];

const techBadges = [
  "AI Agents", "ASP.NET Core", "React", "Azure", "LangChain", "TypeScript", "RAG", "CI/CD"
];

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/amitbhatt09", color: "hover:text-white" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/in/amit-bhatt09", color: "hover:text-blue-400" },
  { icon: Mail, label: "Email", href: "mailto:amitbhatt54341@gmail.com", color: "hover:text-purple-400" },
  { icon: FiverrIcon, label: "Fiverr", href: "https://www.fiverr.com", color: "hover:text-green-400" },
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [codeVisible, setCodeVisible] = useState(false);
  const fullText = "Building Intelligent Software & AI Solutions That Scale";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) clearInterval(interval);
      }, 35);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setCodeVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating tech icons */}
        {["⚡", "🤖", "☁️", "🔮", "⚙️", "🚀"].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-xl select-none"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container-custom relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-slate-300 border border-purple-500/20"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new opportunities
            </motion.div>

            {/* Headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              >
                <span className="text-white">{typedText}</span>
                <span className="inline-block w-0.5 h-12 bg-purple-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Software Engineer specializing in{" "}
              <span className="text-purple-400 font-medium">AI-powered applications</span>,
              enterprise software development,{" "}
              <span className="text-blue-400 font-medium">cloud technologies</span>,
              and automation solutions.
            </motion.p>

            {/* Role pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="flex flex-wrap gap-2"
            >
              {["AI Engineer", "Full Stack Dev", "Enterprise Software", "Azure & DevOps"].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs font-mono text-purple-300 border border-purple-500/30 rounded-full glass"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white text-sm transition-all"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                href="mailto:amitbhatt54341@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white text-sm glass border border-white/10 hover:border-purple-500/40 transition-all"
              >
                Hire Me
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-300 text-sm hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-slate-600 uppercase tracking-widest">Connect</span>
              <div className="h-px w-8 bg-slate-700" />
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                    className={`w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-500 ${color} transition-colors border border-white/5 hover:border-white/10`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Animated Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 blur-3xl opacity-20 rounded-3xl"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }} />

              {/* Code editor window */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10"
                style={{ background: "rgba(10,15,30,0.95)" }}>
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5"
                  style={{ background: "rgba(255,255,255,0.02)" }}>
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">amit.config.ts</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-7">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={codeVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-slate-700 text-xs w-4 text-right select-none">{i + 1}</span>
                      <span
                        className={line.color}
                        style={{ paddingLeft: `${line.indent * 16}px` }}
                      >
                        {line.text}
                      </span>
                    </motion.div>
                  ))}

                  {/* Cursor blink at end */}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="mt-1 ml-8 inline-block w-2 h-4 bg-purple-400"
                  />
                </div>

                {/* Terminal at bottom */}
                <div className="border-t border-white/5 px-6 py-3" style={{ background: "rgba(0,0,0,0.3)" }}>
                  <p className="font-mono text-xs text-green-400">
                    <span className="text-slate-600">$</span> npm run build-portfolio
                    <span className="animate-[blink_1s_step-end_infinite]">_</span>
                  </p>
                  <p className="font-mono text-xs text-slate-600 mt-1">✓ Compiled successfully in 0.8s</p>
                </div>
              </div>

              {/* Floating tech pills */}
              {techBadges.slice(0, 4).map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + i * 0.1 }}
                  className="absolute glass px-3 py-1 rounded-full text-xs font-medium text-slate-300 border border-purple-500/20"
                  style={{
                    top: `${-20 + i * 30}px`,
                    right: `${-30 + i * 10}px`,
                    transform: `rotate(${-10 + i * 7}deg)`,
                  }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
