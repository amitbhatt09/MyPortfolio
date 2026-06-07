"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Lightbulb, Layers, Server, Rocket, Shield } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Enterprise Experience",
    description:
      "Working on mission-critical software used by global teams at Fortune 500 companies. I understand the stakes of production systems.",
    color: "#a855f7",
    metric: "Fortune 500",
    metricLabel: "Clients",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Focused on understanding your business goals first, then delivering elegant technical solutions that create measurable value.",
    color: "#3b82f6",
    metric: "100%",
    metricLabel: "Business Focus",
  },
  {
    icon: Layers,
    title: "Modern Tech Stack",
    description:
      "AI, Cloud, Full Stack, and DevOps expertise. I work with the technologies that define tomorrow's software landscape.",
    color: "#06b6d4",
    metric: "5+",
    metricLabel: "Tech Domains",
  },
  {
    icon: Server,
    title: "Production Mindset",
    description:
      "Building scalable, maintainable, and secure systems from day one. Clean architecture, proper testing, and CI/CD pipelines are non-negotiable.",
    color: "#10b981",
    metric: "99.9%",
    metricLabel: "Uptime SLA",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Agile development approach with clear milestones. I deliver working software iteratively, keeping you in the loop every step of the way.",
    color: "#f59e0b",
    metric: "2x",
    metricLabel: "Faster Delivery",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Security isn't an afterthought. Authentication, authorization, data protection, and OWASP compliance are built into every project.",
    color: "#ef4444",
    metric: "OWASP",
    metricLabel: "Compliant",
  },
];

export default function WhyHireMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-hire-me" ref={ref} className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.03] rounded-full"
          style={{ background: "radial-gradient(circle, #a855f7 0%, #3b82f6 50%, transparent 70%)" }} />
      </div>

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">07. Why Me</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
        </motion.div>

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">Amit Bhatt</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto"
          >
            I bring enterprise-grade engineering discipline to every project, regardless of size.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative glass rounded-2xl border border-white/5 hover:border-white/10 p-6 transition-all duration-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 0%, ${reason.color}08, transparent 60%)` }}
              />

              <div className="relative z-10">
                {/* Icon + metric */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${reason.color}15`, border: `1px solid ${reason.color}25` }}
                  >
                    <reason.icon className="w-5 h-5" style={{ color: reason.color }} />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold" style={{ color: reason.color }}>{reason.metric}</p>
                    <p className="text-xs text-slate-600">{reason.metricLabel}</p>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
