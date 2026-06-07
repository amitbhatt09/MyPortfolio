"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Globe, Cloud, Lightbulb, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    tagline: "Intelligent automation that scales",
    color: "#a855f7",
    gradient: "from-purple-500/10 to-purple-500/5",
    borderColor: "border-purple-500/20",
    features: [
      "Knowledge Retrieval & RAG Systems",
      "Document Intelligence Pipelines",
      "Workflow Automation Agents",
      "Internal AI Copilots",
      "Generative AI Solutions",
      "LLM Integrations (OpenAI, Claude)",
      "Enterprise Knowledge Systems",
      "AI-powered Assistants",
    ],
    popular: true,
  },
  {
    icon: Globe,
    title: "Full Stack Development",
    tagline: "End-to-end web solutions",
    color: "#3b82f6",
    gradient: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-500/20",
    features: [
      "Modern Web Applications",
      "Business & Corporate Websites",
      "RESTful API Design & Development",
      "Authentication & Authorization",
      "Database Design & Optimization",
      "Responsive & Mobile-first UI",
      "Performance Optimization",
      "Third-party API Integration",
    ],
    popular: false,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Deploy with confidence",
    color: "#06b6d4",
    gradient: "from-cyan-500/10 to-cyan-500/5",
    borderColor: "border-cyan-500/20",
    features: [
      "Azure Cloud Deployment",
      "CI/CD Pipeline Setup",
      "Containerization (Docker)",
      "Monitoring & Alerting",
      "Infrastructure as Code",
      "Cloud Cost Optimization",
      "Azure DevOps Boards",
      "Release Management",
    ],
    popular: false,
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    tagline: "Strategic software guidance",
    color: "#f59e0b",
    gradient: "from-amber-500/10 to-amber-500/5",
    borderColor: "border-amber-500/20",
    features: [
      "Solution Architecture Design",
      "AI Strategy & Roadmap",
      "Software Design Reviews",
      "Tech Stack Recommendations",
      "Code Quality Assessment",
      "Scalability Planning",
      "Migration Strategy",
      "Team Technical Guidance",
    ],
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] rounded-full"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
      </div>

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">03. Services</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            <span className="text-white">What I </span>
            <span className="gradient-text">Build & Deliver</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-sm text-sm"
          >
            End-to-end software development services for startups, enterprises, and everything in between.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl glass border ${service.borderColor} p-6 group cursor-default overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-medium text-white"
                  style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>
                  Popular
                </div>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`, border: `1px solid ${service.color}30` }}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
              <p className="text-xs text-slate-500 mb-5">{service.tagline}</p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:amitbhatt54341@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white glass border border-white/10 hover:border-purple-500/40 transition-all hover:glow-purple group"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
