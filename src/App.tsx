/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navigation from './components/Navigation';
import AppSimulator from './components/AppSimulator';
import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';
import ShowcaseCards from './components/ShowcaseCards';
import Pricing from './components/Pricing';
import FaqSection from './components/FaqSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Mouse coordinates state for interactive CTA glow
  const [mouseCoord, setMouseCoord] = useState({ x: '50%', y: '50%' });

  // Handle CTA mouse movement for interactive light reflection
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;
    setMouseCoord({ x, y });
  };

  const handleStartBuildingClick = () => {
    const promoElement = document.getElementById('try-it');
    if (promoElement) {
      promoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // GSAP scroll trigger reveals with React lifecycle safety
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slogan Reveal
      gsap.fromTo(
        '.scroll-slogan-h2',
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.scroll-slogan-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo(
        '.scroll-slogan-p',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.scroll-slogan-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      // 2. Feature One Reveal
      gsap.fromTo(
        '.scroll-feat1-section',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.scroll-feat1-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      // 3. Feature Two Reveal
      gsap.fromTo(
        '.scroll-feat2-section',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.scroll-feat2-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      // 4. Showcase reveal
      gsap.fromTo(
        '.scroll-showcase-section',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.scroll-showcase-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      // 5. Pricing reveal
      gsap.fromTo(
        '.scroll-pricing-section',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.scroll-pricing-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      // 6. Faq reveal
      gsap.fromTo(
        '.scroll-faq-section',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.scroll-faq-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      // 7. CTA slide
      gsap.fromTo(
        '.scroll-cta-content',
        { scale: 0.96, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.scroll-cta-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-surface-bg text-on-surface min-h-screen relative antialiased flex flex-col justify-between selection:bg-brand-primary-container selection:text-brand-on-primary-container overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <Navigation onStartBuilding={handleStartBuildingClick} />

      {/* Main Container */}
      <main className="max-w-[1728px] mx-auto w-full flex-1">
        
        {/* 2. Hero Sector + Interactive Mock AI Generator Engine */}
        <AppSimulator />

        {/* 3. Minimal Slogan Division */}
        <section className="scroll-slogan-section py-24 px-6 md:px-16 bg-white flex items-center justify-center min-h-[460px] border-y border-brand-outline-variant/15">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="scroll-slogan-h2 font-display font-light text-4xl md:text-6xl text-on-surface tracking-tight leading-tight select-none">
              Imagine <span className="font-black text-brand-primary">lorem ipsum</span> without limits
            </h2>
            <p className="scroll-slogan-p text-on-surface-variant max-w-xl mx-auto font-sans text-xs md:text-sm font-semibold tracking-widest uppercase mt-4">
              Aesthetic Pairings • Pristine Radiuses • Atmospheric Latency
            </p>
          </div>
        </section>

        {/* 4. Active Tab Dialogue Studio feature */}
        <div className="scroll-feat1-section">
          <FeatureOne />
        </div>

        {/* 5. Production SLAs edge controller feature */}
        <div className="scroll-feat2-section">
          <FeatureTwo />
        </div>

        {/* 6. Showcase Gallery with multi-state ledger and checklist */}
        <div className="scroll-showcase-section">
          <ShowcaseCards />
        </div>

        {/* 7. Billing discounts & Sandboxed Subs pricing selector */}
        <div className="scroll-pricing-section">
          <Pricing />
        </div>

        {/* 8. Expanding Accordion FAQs */}
        <div className="scroll-faq-section">
          <FaqSection />
        </div>

        {/* 9. Final CTA with mouse-tracking radial focus gradient */}
        <section 
          onMouseMove={handleMouseMove}
          className="scroll-cta-section relative py-28 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center min-h-[60vh] group/cta border-t border-brand-outline-variant/20 bg-white"
        >
          {/* Deep ambient secondary glow backplate */}
          <div className="absolute inset-0 opacity-15 pointer-events-none -z-10" 
               style={{
                 background: 'radial-gradient(circle at 12% 24%, #9f4122 0%, transparent 45%), radial-gradient(circle at 88% 76%, #326578 0%, transparent 45%), radial-gradient(circle at 50% 50%, #556500 0%, transparent 60%)'
               }}
          />

          {/* Interactive cursor tracking spotlight sheen */}
          <div 
            className="absolute inset-0 pointer-events-none -z-10 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(450px circle at ${mouseCoord.x} ${mouseCoord.y}, rgba(255, 138, 101, 0.25), rgba(128, 177, 199, 0.2), transparent 70%)`
            }}
          />

          <div className="scroll-cta-content flex flex-col items-center justify-center text-center">
            <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.12] mb-10 text-center max-w-2xl text-on-surface tracking-tight drop-shadow-sm select-none">
              So, what lorem are we building?
            </h2>

            <button 
              type="button"
              onClick={handleStartBuildingClick}
              className="inline-flex items-center gap-3 bg-white hover:bg-white/90 border-2 border-brand-primary/10 font-sans text-sm md:text-base font-bold px-10 py-5 rounded-full hover:scale-105 duration-200 shadow-lg active:scale-95 transition-all text-on-surface cursor-pointer select-none group"
            >
              Get started
              <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </section>

      </main>

      {/* 10. Horizon Standard Brand Footer */}
      <footer className="bg-[#11100D] w-full py-12 text-white border-t border-white/5 relative z-20">
        <div className="max-w-[1515px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-semibold text-white/60">
          
          {/* Grayscale Logo */}
          <div className="flex items-center gap-2 text-white opacity-80 hover:opacity-100 transition-all cursor-pointer">
            <div className="h-6 w-6 rounded-full border border-white/60 flex items-center justify-center">
              <svg className="h-3.5 w-3.5 text-white fill-none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 10V22M21 10V22M11 16H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </div>
            <span className="font-display tracking-[0.05em] uppercase font-black text-sm">Horizon AI</span>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a className="hover:text-brand-primary-container transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-brand-primary-container transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-brand-primary-container transition-colors" href="#">Security</a>
            <a className="hover:text-brand-primary-container transition-colors" href="#">Status</a>
            <a className="hover:text-brand-primary-container transition-colors" href="#">Contact Support</a>
          </div>

          {/* Timestamp or Trademark indicator */}
          <div className="text-white/45 font-mono text-[10px]">
            © 2024 Luminous Horizon AI. Built for the future of SaaS.
          </div>
        </div>
      </footer>
    </div>
  );
}
