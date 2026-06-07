"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/common/BrandIcons";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Travel Tales",
    subtitle: "Social Travel Platform",
    description:
      "A full-featured travel sharing platform that allows users to document journeys, share travel stories, upload images, and connect with fellow travelers. Built with enterprise-grade security and deployed on Azure.",
    color: "#a855f7",
    gradient: "from-purple-600/20 via-purple-600/5 to-transparent",
    tech: ["ASP.NET Core", "React", "Azure SQL", "JWT Authentication", "Azure", "Entity Framework"],
    highlights: [
      "Role-based authentication (Admin, User, Premium)",
      "RESTful API with Swagger documentation",
      "Azure cloud deployment with auto-scaling",
      "Responsive UI with modern design",
      "Image upload & CDN integration",
      "Advanced search & filtering",
    ],
    metrics: [
      { label: "API Endpoints", value: "30+" },
      { label: "Response Time", value: "<120ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    icon: "✈️",
    status: "Live",
    github: "https://github.com/amitbhatt09",
    demo: "#",
    featured: true,
    image: "/TravelTales.png",
  },
  {
    id: 2,
    title: "Bits & Bytes",
    subtitle: "Full-Stack Blog Platform",
    description:
      "A production-ready blog platform built with Angular 19 and ASP.NET Core 10, featuring JWT-based authentication with HttpOnly cookies (SameSite=None) and role-based access control (Reader/Writer roles). Deployed on Azure with automated database migrations on startup.",
    color: "#10b981",
    gradient: "from-emerald-600/20 via-emerald-600/5 to-transparent",
    tech: ["Angular 19", "ASP.NET Core 10", "Azure SQL", "JWT", "EF Core", "Azure App Service"],
    highlights: [
      "JWT auth with HttpOnly cookies (SameSite=None)",
      "Role-based access control (Reader/Writer)",
      "Markdown rendering & category filtering",
      "Image uploads & real-time comment threading",
      "Repository pattern + EF Core migrations",
      "Azure App Service + Static Web Apps deploy",
    ],
    metrics: [
      { label: "Auth", value: "JWT" },
      { label: "Access", value: "RBAC" },
      { label: "Deploy", value: "Azure" },
    ],
    icon: "📝",
    status: "Live",
    github: "https://github.com/amitbhatt09",
    demo: "#",
    featured: true,
    image: "/BitsNBytes.png",
  },
  {
    id: 3,
    title: "Enterprise AI Agent",
    subtitle: "Case Study — AI Automation",
    description:
      "A sophisticated AI agent system designed for enterprise document intelligence, knowledge retrieval, and workflow automation. Features RAG architecture with vector database integration and multi-step reasoning capabilities.",
    color: "#06b6d4",
    gradient: "from-cyan-600/20 via-cyan-600/5 to-transparent",
    tech: ["LangChain", "OpenAI GPT-4", "Python", "Vector DB", "FastAPI", "Azure"],
    highlights: [
      "RAG architecture for accurate knowledge retrieval",
      "Multi-document intelligence pipeline",
      "Automated workflow orchestration",
      "Custom prompt engineering strategies",
      "Real-time streaming responses",
      "Enterprise authentication layer",
    ],
    metrics: [
      { label: "Accuracy", value: "94%+" },
      { label: "Automation", value: "80% tasks" },
      { label: "Latency", value: "<2s" },
    ],
    icon: "🤖",
    status: "Case Study",
    github: "#",
    demo: "#",
    featured: false,
    isCaseStudy: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">04. Projects</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.a
            href="https://github.com/amitbhatt09"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors group"
          >
            <GitHubIcon className="w-4 h-4" />
            View all on GitHub
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative rounded-2xl glass border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer"
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              {/* Gradient accent top */}
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

              {/* Project screenshot — browser mockup */}
              {project.image && (
                <div className="relative w-full overflow-hidden border-b border-white/5" style={{ background: "#050810" }}>
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 mx-2 px-3 py-0.5 rounded-md text-[10px] text-slate-600 font-mono truncate text-center"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.vercel.app
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium flex-shrink-0"
                      style={{ color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.color }} />
                      {project.status}
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="relative overflow-hidden" style={{ height: "192px" }}>
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] group-hover:object-center"
                      sizes="(max-width: 768px) 100vw, 900px"
                    />
                    {/* Bottom fade blend */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                    {/* Side fades */}
                    <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/20 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black/20 to-transparent" />
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="grid lg:grid-cols-[1fr,auto] gap-6">
                  {/* Left content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                          <span
                            className="px-2 py-0.5 rounded text-xs font-medium"
                            style={{
                              color: project.color,
                              background: `${project.color}15`,
                              border: `1px solid ${project.color}30`,
                            }}
                          >
                            {project.status}
                          </span>
                          {project.isCaseStudy && (
                            <span className="px-2 py-0.5 rounded text-xs font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20">
                              Case Study
                            </span>
                          )}
                        </div>
                        <p className="text-slate-500 text-sm">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400 glass border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="flex items-center gap-6">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="text-lg font-bold" style={{ color: project.color }}>{m.value}</p>
                          <p className="text-xs text-slate-600">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Links */}
                  <div className="flex lg:flex-col items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-white/5 hover:border-white/15 transition-all"
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-white/5 hover:border-white/15 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Expanded highlights */}
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-white/5">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Key Features</p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {project.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-2 text-xs text-slate-400">
                              <div className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Click hint */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-700 group-hover:text-slate-500 transition-colors">
                  <span>{activeProject === project.id ? "↑ Collapse" : "↓ View details"}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
