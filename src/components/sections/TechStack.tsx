"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "ai",
    label: "AI & Automation",
    color: "#a855f7",
    icon: "🤖",
    techs: [
      { name: "OpenAI GPT-4", level: 88 },
      { name: "LangChain", level: 82 },
      { name: "RAG Architectures", level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Vector Databases", level: 75 },
      { name: "AI Agents", level: 82 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#3b82f6",
    icon: "⚙️",
    techs: [
      { name: "ASP.NET Core", level: 90 },
      { name: "C#", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "Entity Framework", level: 85 },
      { name: "Python", level: 75 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "#06b6d4",
    icon: "🎨",
    techs: [
      { name: "React", level: 84 },
      { name: "TypeScript", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "Angular", level: 72 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "#f59e0b",
    icon: "☁️",
    techs: [
      { name: "Microsoft Azure", level: 80 },
      { name: "Azure DevOps", level: 82 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "Docker", level: 72 },
      { name: "Git", level: 90 },
      { name: "GitHub Actions", level: 75 },
    ],
  },
  {
    id: "database",
    label: "Database",
    color: "#10b981",
    icon: "🗄️",
    techs: [
      { name: "SQL Server", level: 88 },
      { name: "Azure SQL", level: 82 },
      { name: "MySQL", level: 78 },
      { name: "PostgreSQL", level: 72 },
      { name: "Cosmos DB", level: 68 },
      { name: "Redis", level: 65 },
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("backend");

  const current = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="tech-stack" ref={ref} className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">05. Tech Stack</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-white">Technology </span>
          <span className="gradient-text">Arsenal</span>
        </motion.h2>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "text-white"
                  : "glass text-slate-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
              style={
                activeCategory === cat.id
                  ? { background: `linear-gradient(135deg, ${cat.color}40, ${cat.color}20)`, border: `1px solid ${cat.color}50` }
                  : {}
              }
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl border border-white/5 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{current.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-white">{current.label}</h3>
                <p className="text-xs text-slate-500">Proficiency levels</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {current.techs.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">{tech.name}</span>
                    <span className="text-xs font-mono" style={{ color: current.color }}>{tech.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 0.8, delay: i * 0.07, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${current.color}, ${current.color}80)` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All tech logos (static display) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {categories.flatMap((c) => c.techs).map((tech, i) => (
            <motion.span
              key={`${tech.name}-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.02 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 glass rounded-xl text-xs text-slate-400 border border-white/5 hover:border-white/10 hover:text-white transition-all cursor-default"
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
