"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/common/BrandIcons";

const links = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/amitbhatt09" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/in/amit-bhatt09" },
  { icon: Mail, label: "Email", href: "mailto:amitbhatt54341@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>
              AB
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Amit Bhatt</p>
              <p className="text-xs text-slate-500">Software Engineer · AI Engineer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {links.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/30 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Amit Bhatt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
