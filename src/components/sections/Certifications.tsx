"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    year: "2025",
    color: "#0078d4",
    bgColor: "rgba(0,120,212,0.1)",
    borderColor: "rgba(0,120,212,0.3)",
    icon: "☁️",
    badgeImage: "/az900.png",
    certImage: "/az900.png",
    certLink: "/az900.png",
    description: "Foundational cloud concepts, Azure services, security, privacy, compliance, and trust.",
    verified: true,
  },
  {
    title: "Azure DevOps",
    code: "Azure DevOps",
    issuer: "Microsoft",
    year: "2025",
    color: "#0ea5e9",
    bgColor: "rgba(14,165,233,0.1)",
    borderColor: "rgba(14,165,233,0.3)",
    icon: "🔄",
    badgeImage: "/AzureDevOps.png",
    certImage: "/AzureDevOps.png",
    certLink: "/AzureDevOps.png",
    description: "CI/CD pipelines, Azure Boards, Repos, Artifacts, and end-to-end DevOps workflows.",
    verified: true,
  },
  {
    title: "Generative AI",
    code: "Gen AI — LTIMindtree",
    issuer: "LTM",
    year: "2025",
    color: "#a855f7",
    bgColor: "rgba(168,85,247,0.1)",
    borderColor: "rgba(168,85,247,0.3)",
    icon: "🤖",
    badgeImage: null,
    certImage: "/LTIMindtree_GenAI_Certificate.jpg",
    certLink: "/LTIMindtree_GenAI_Certificate.jpg",
    description: "LLMs, prompt engineering, AI applications, ethical AI, and generative model architectures.",
    verified: true,
  },
  {
    title: "GitHub Foundations",
    code: "GH Foundations",
    issuer: "GitHub",
    year: "2025",
    color: "#e2e8f0",
    bgColor: "rgba(229,231,235,0.08)",
    borderColor: "rgba(229,231,235,0.2)",
    icon: "🐙",
    badgeImage: "/githubF.png",
    certImage: "/githubF.png",
    certLink: "/githubF.png",
    description: "Git fundamentals, GitHub workflows, collaboration, repositories, and CI/CD basics.",
    verified: true,
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="section-padding relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0078d4 0%, transparent 70%)" }} />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">06. Certifications</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-white">Industry </span>
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden group flex flex-col"
              style={{ background: cert.bgColor, border: `1px solid ${cert.borderColor}` }}
            >
              {/* Top accent */}
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

              {/* Certificate / badge thumbnail */}
              {cert.certImage && (
                <a
                  href={cert.certLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-36 overflow-hidden border-b group/thumb"
                  style={{ borderColor: cert.borderColor }}
                >
                  <Image
                    src={cert.certImage}
                    alt={`${cert.title} Certificate`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                      style={{ background: `${cert.color}30`, border: `1px solid ${cert.color}50` }}>
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </div>
                  </div>
                </a>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Badge / icon */}
                <div className="flex items-start justify-between mb-4">
                  {cert.badgeImage && !cert.certImage ? (
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border flex-shrink-0"
                      style={{ borderColor: cert.borderColor, background: cert.bgColor }}>
                      <Image
                        src={cert.badgeImage}
                        alt={`${cert.title} badge`}
                        fill
                        className="object-contain p-1"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border flex-shrink-0"
                      style={{ background: cert.bgColor, borderColor: cert.borderColor }}>
                      {cert.icon}
                    </div>
                  )}

                  {cert.verified && (
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
                      style={{ color: cert.color, background: cert.bgColor, border: `1px solid ${cert.borderColor}` }}>
                      <Award className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-xs font-mono mb-1" style={{ color: cert.color }}>{cert.code}</p>
                <p className="text-xs text-slate-500 mb-3">{cert.issuer} · {cert.year}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{cert.description}</p>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}08, transparent 70%)` }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-slate-600"
        >
          All certifications verified and active · Continuously learning and upskilling
        </motion.p>
      </div>
    </section>
  );
}
