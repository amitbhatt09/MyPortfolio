"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Zap, Globe, Bot, Code2, Cloud, ArrowRight } from "lucide-react";

const services = [
  { icon: Bot, label: "AI Agent Development", color: "#a855f7" },
  { icon: Globe, label: "Business Websites", color: "#3b82f6" },
  { icon: Code2, label: "Web Applications", color: "#06b6d4" },
  { icon: Zap, label: "API Development", color: "#f59e0b" },
  { icon: Cloud, label: "Cloud Deployment", color: "#10b981" },
  { icon: Zap, label: "Automation Solutions", color: "#ec4899" },
];

export default function FreelanceServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="freelance" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(59,130,246,0.08) 100%)" }}
        >
          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ border: "1px solid transparent", background: "linear-gradient(rgba(10,15,30,0), rgba(10,15,30,0)) padding-box, linear-gradient(135deg, rgba(168,85,247,0.3), rgba(59,130,246,0.3)) border-box" }} />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />

          <div className="relative z-10 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/30 text-sm text-purple-300 font-medium mb-5"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for Freelance Projects
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Amazing Together</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-slate-400 max-w-xl mx-auto"
              >
                From AI agents to enterprise web apps — I bring enterprise-grade engineering discipline
                to freelance projects of any size.
              </motion.p>
            </div>

            {/* Services grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
            >
              {services.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex flex-col items-center gap-2 p-4 glass rounded-2xl border border-white/5 hover:border-white/10 cursor-default transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <span className="text-xs text-slate-400 text-center leading-tight">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm w-full sm:w-auto justify-center"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
              >
                <ExternalLink className="w-4 h-4" />
                Hire Me on Fiverr
              </motion.a>
              <motion.a
                href="mailto:amitbhatt54341@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white text-sm glass border border-white/10 hover:border-purple-500/40 w-full sm:w-auto justify-center transition-all group"
              >
                Discuss a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
