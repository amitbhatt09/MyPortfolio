"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CTO",
    company: "TechVentures Inc.",
    avatar: "AT",
    rating: 5,
    review:
      "Amit delivered an exceptional AI-powered application that exceeded our expectations. His understanding of both enterprise requirements and cutting-edge AI technologies is remarkable. The solution he built has automated 70% of our manual workflows.",
    color: "#a855f7",
    project: "AI Automation Platform",
  },
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "StartupLabs",
    avatar: "SM",
    rating: 5,
    review:
      "Working with Amit was a seamless experience. He built our full-stack platform from scratch with clean architecture, proper documentation, and handed off production-ready code with excellent test coverage. Highly recommend!",
    color: "#3b82f6",
    project: "SaaS Web Application",
  },
  {
    name: "Rajesh Kumar",
    role: "Engineering Lead",
    company: "Enterprise Corp",
    avatar: "RK",
    rating: 5,
    review:
      "Amit integrated seamlessly with our team on a critical enterprise project. His knowledge of Azure DevOps, CI/CD pipelines, and ASP.NET Core is outstanding. Delivered complex features on schedule with minimal bugs.",
    color: "#06b6d4",
    project: "Enterprise Integration",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">08. Testimonials</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
        </motion.div>

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-white">What Clients </span>
            <span className="gradient-text">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm"
          >
            Delivering value across enterprises, startups, and freelance projects
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative glass rounded-2xl border border-white/5 hover:border-white/10 p-6 group overflow-hidden transition-all duration-300"
            >
              {/* Top accent */}
              <div className="h-[1px] absolute top-0 left-0 right-0"
                style={{ background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)` }} />

              {/* Quote icon */}
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: t.color }} />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current text-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6 italic">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Project tag */}
              <div className="mb-5">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                  style={{ color: t.color, background: `${t.color}12`, border: `1px solid ${t.color}25` }}
                >
                  {t.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`, border: `1px solid ${t.color}30` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                </div>
              </div>

              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 100%, ${t.color}06, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
