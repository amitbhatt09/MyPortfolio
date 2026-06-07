"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Trophy } from "lucide-react";

const experiences = [
  {
    company: "LTM",
    role: "Software Engineer",
    period: "Feb 2025 Present",
    location: "Noida, India",
    type: "Full-time",
    logoSrc: "/LTM_Logo.jpg",
    color: "#a855f7",
    current: true,
    responsibilities: [
      "Developed and maintained enterprise applications for Halliburton, one of the world's largest oilfield services companies",
      "Enhanced business-critical workflows and improved code maintainability across multiple modules",
      "Migrated legacy systems to modern tech stacks, reducing technical debt significantly",
      "Resolved complex production issues ensuring high availability and system stability",
      "Worked extensively with Azure DevOps and implemented robust CI/CD pipelines",
      "Collaborated with global teams across time zones to deliver quality software on schedule",
    ],
    tech: ["ASP.NET Core","Azure", "CI/CD","React", "SQL Server", "C#", "Python","FastAPI", "AgenticAI"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />

      <div className="container-custom">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">02. Experience</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #a855f7, #3b82f6, transparent)" }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 md:left-4 top-6 flex items-center justify-center">
                  <motion.div
                    animate={exp.current ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center z-10"
                    style={{
                      borderColor: exp.color,
                      background: exp.current ? exp.color : "transparent",
                      boxShadow: exp.current ? `0 0 15px ${exp.color}60` : "none",
                    }}
                  >
                    {exp.current && <div className="w-2 h-2 bg-white rounded-full" />}
                  </motion.div>
                </div>

                {/* Card */}
                <div className="glass rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 overflow-hidden group">
                  <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${exp.color}, #3b82f6)` }} />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      {/* Company info */}
                      <div className="flex items-start gap-4">
                        {/* LTM Logo */}
                        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-white flex items-center justify-center p-1">
                          <Image
                            src={exp.logoSrc}
                            alt={exp.company}
                            width={52}
                            height={52}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-col gap-1.5 sm:items-end flex-shrink-0">
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.responsibilities.map((resp, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + j * 0.06 }}
                          className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 border border-white/8"
                          style={{ background: "rgba(255,255,255,0.03)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* â”€â”€ Super Crew Award â”€â”€ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Award timeline dot */}
              <div className="absolute left-3 md:left-4 top-6">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-6 rounded-full flex items-center justify-center z-10 text-sm"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                    boxShadow: "0 0 20px rgba(251,191,36,0.5)",
                  }}
                >
                  ðŸ†
                </motion.div>
              </div>

              {/* Award card */}
              <div className="relative rounded-2xl overflow-hidden border"
                style={{
                  background: "linear-gradient(135deg, rgba(251,191,36,0.06) 0%, rgba(245,158,11,0.04) 100%)",
                  borderColor: "rgba(251,191,36,0.25)",
                }}>
                {/* Gold shimmer top bar */}
                <div className="h-[2px]" style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)" }} />

                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">

                    {/* Left: Text content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.3)", color: "#fbbf24" }}>
                          <Trophy className="w-3 h-3" />
                          Recognition Award
                        </div>
                        <span className="text-xs text-slate-500">2025</span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Super Crew Award</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-5 h-5 rounded overflow-hidden bg-white flex items-center justify-center p-0.5">
                            <Image src="/LTM_Logo.jpg" alt="LTM" width={20} height={20} className="object-contain" />
                          </div>
                          <span className="text-amber-400 font-medium text-sm">LTM</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                          Recognized for exceptional dedication and passion â€” consistently going above and beyond
                          every responsibility. This award reflects a commitment to delivering excellence and
                          making a measurable impact on the team and organization.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {["Excellence", "Dedication", "Above & Beyond", "Team Impact"].map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium"
                            style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Award badge image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="flex-shrink-0 relative"
                    >
                      <div className="relative w-44 h-44 md:w-52 md:h-52">
                        {/* Glow behind badge */}
                        <div className="absolute inset-0 blur-2xl opacity-30 rounded-full"
                          style={{ background: "radial-gradient(circle, #fbbf24, transparent)" }} />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border"
                          style={{ borderColor: "rgba(251,191,36,0.3)", background: "rgba(251,191,36,0.05)" }}>
                          <Image
                            src="/SuperCrew.png"
                            alt="Super Crew Award â€” LTIMindtree"
                            fill
                            className="object-contain p-3"
                            sizes="208px"
                          />
                        </div>
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>
            </motion.div>

            {/* "More to come" node */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="relative pl-16 md:pl-20"
            >
              <div className="absolute left-3 md:left-4 top-4">
                <div className="w-6 h-6 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-700 rounded-full" />
                </div>
              </div>
              <div className="py-4">
                <p className="text-slate-600 text-sm font-mono">// Future opportunities await...</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
