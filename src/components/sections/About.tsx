"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Code2, Bot, Globe, Cloud, GitBranch, Layers } from "lucide-react";

const highlights = [
  { icon: Layers, label: "Enterprise Software", color: "text-purple-400" },
  { icon: Bot, label: "AI Agents & Automation", color: "text-blue-400" },
  { icon: Globe, label: "Full Stack Development", color: "text-green-400" },
  { icon: Cloud, label: "Cloud Solutions", color: "text-cyan-400" },
  { icon: GitBranch, label: "DevOps Practices", color: "text-orange-400" },
  { icon: Code2, label: "Clean Architecture", color: "text-pink-400" },
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "3+", label: "Certifications" },
  { value: "2+", label: "Enterprise Clients" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />

      <div className="container-custom">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">01. About</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Avatar card */}
            <div className="relative">
              <div className="relative w-56 h-56 mx-auto lg:mx-0">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-3xl blur-xl opacity-40"
                  style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }} />
                {/* Profile photo */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-purple-500/20"
                  style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(59,130,246,0.1))" }}>
                  <Image
                    src="/Pic.jpeg"
                    alt="Amit Bhatt"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="224px"
                  />
                </div>

                {/* Status badge */}
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl glass-strong border border-green-500/30 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-2xl p-4 border border-white/5 hover:border-purple-500/20 transition-colors"
                >
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              <span className="text-white">Crafting </span>
              <span className="gradient-text">Enterprise-Grade</span>
              <br />
              <span className="text-white">Software & AI Solutions</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a <span className="text-white font-medium">Software Engineer</span> currently
                working at <span className="text-purple-400 font-medium">LTM</span>, building enterprise
                applications and automation solutions for global clients including{" "}
                <span className="text-blue-400 font-medium">Halliburton</span>.
              </p>
              <p>
                My expertise spans software engineering,{" "}
                <span className="text-white font-medium">AI-powered applications</span>, cloud
                technologies, DevOps, and modern web development. I work with cutting-edge tools
                like <span className="text-purple-400 font-medium">LangChain, OpenAI APIs</span>,
                and enterprise frameworks to deliver measurable business impact.
              </p>
              <p>
                I enjoy solving complex business problems through{" "}
                <span className="text-white font-medium">scalable software systems</span>,
                intelligent automation, and emerging AI technologies — building products
                that teams around the world can rely on.
              </p>
            </div>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.07 }}
                  className="flex items-center gap-2 p-3 glass rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                >
                  <item.icon className={`w-4 h-4 flex-shrink-0 ${item.color}`} />
                  <span className="text-xs text-slate-300 font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Location & Company */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>📍</span>
                <span>Noida, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>🏢</span>
                <span>LTM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
