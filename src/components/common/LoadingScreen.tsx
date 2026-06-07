"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--bg-base)" }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold tracking-tight mb-2">
                <span className="gradient-text">AB</span>
              </div>
              <p className="text-slate-400 text-sm tracking-[0.3em] uppercase">
                Amit Bhatt
              </p>
            </motion.div>

            {/* Terminal-style loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-sm text-green-400"
            >
              <span className="text-slate-500">$</span>{" "}
              <span>initializing portfolio</span>
              <span className="animate-[blink_1s_step-end_infinite]">_</span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "280px" }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="w-[280px] h-[2px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #a855f7, #3b82f6)",
                    boxShadow: "0 0 10px rgba(168,85,247,0.5)",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-600 font-mono">{progress}%</span>
                <span className="text-xs text-slate-600 font-mono">Loading...</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
