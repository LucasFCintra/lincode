import React, { useEffect } from 'react';
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import LinCodeBanner from "@/components/LinCodeBanner";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Chat } from "@/components/Chat";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "LinCode - Soluções Digitais";
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <header className="pt-12 pb-6 px-4 w-full">
          <div className="container mx-auto flex justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              <span className="text-[#00FF88]">L</span>in<span className="text-[#00FF88]">Code</span>
            </h1>
          </div>
        </header>
        
        <main>
          <Hero />
          <Benefits />
          <LinCodeBanner />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <CTA />
          <Chat />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
