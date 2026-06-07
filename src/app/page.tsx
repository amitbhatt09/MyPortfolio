"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Certifications from "@/components/sections/Certifications";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Testimonials from "@/components/sections/Testimonials";
import FreelanceServices from "@/components/sections/FreelanceServices";
import Contact from "@/components/sections/Contact";
import ScrollProgress, { ScrollToTop } from "@/components/common/ScrollProgress";

const LoadingScreen = dynamic(() => import("@/components/common/LoadingScreen"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/common/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />

      <div className="relative min-h-screen">
        {/* Global ambient background */}
        <div className="fixed inset-0 pointer-events-none" style={{ background: "var(--bg-base)", zIndex: -2 }} />
        <div className="fixed inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168,85,247,0.06) 0%, transparent 100%)",
          zIndex: -1,
        }} />

        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Projects />
          <TechStack />
          <Certifications />
          <WhyHireMe />
          <Testimonials />
          <FreelanceServices />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

