"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/common/BrandIcons";

const projectTypes = [
  "AI Agent Development",
  "Full Stack Web App",
  "API Development",
  "Cloud & DevOps",
  "Technical Consulting",
  "Other",
];

const budgetRanges = [
  "< $500",
  "$500 - $2,000",
  "$2,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000+",
  "Let's discuss",
];

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "amitbhatt54341@gmail.com",
    href: "mailto:amitbhatt54341@gmail.com",
    color: "#a855f7",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "amit-bhatt09",
    href: "https://linkedin.com/in/amit-bhatt09",
    color: "#3b82f6",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "amitbhatt09",
    href: "https://github.com/amitbhatt09",
    color: "#e5e7eb",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India (IST)",
    href: "#",
    color: "#10b981",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission delay
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl glass border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 transition-colors bg-transparent";

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">09. Contact</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
        </motion.div>

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-white">Let&apos;s </span>
            <span className="gradient-text">Work Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-md mx-auto"
          >
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s build something remarkable.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-2xl border border-white/5 p-6 md:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className={inputClass}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className={inputClass}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Company</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      className={inputClass}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5">Project Type</label>
                      <select
                        className={`${inputClass} cursor-pointer`}
                        style={{ colorScheme: "dark" }}
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="" disabled>Select type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} style={{ background: "#0d1424" }}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5">Budget</label>
                      <select
                        className={`${inputClass} cursor-pointer`}
                        style={{ colorScheme: "dark" }}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="" disabled>Select budget</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b} style={{ background: "#0d1424" }}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, timeline..."
                      className={`${inputClass} resize-none`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-white text-sm transition-all disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Quick contacts */}
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${c.color}12`, border: `1px solid ${c.color}25` }}
                >
                  <c.icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{c.label}</p>
                  <p className="text-sm text-white font-medium">{c.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="p-5 glass rounded-2xl border border-green-500/15"
              style={{ background: "rgba(16,185,129,0.04)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <p className="text-sm font-medium text-green-400">Currently Available</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Open to freelance projects and full-time opportunities. Response time: within 24 hours.
              </p>
            </motion.div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="p-5 glass rounded-2xl border border-white/5 flex items-center gap-4"
            >
              <MessageSquare className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Quick Responses</p>
                <p className="text-xs text-slate-500">Usually within 4–12 hours</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
