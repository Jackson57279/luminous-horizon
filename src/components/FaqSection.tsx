import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Horizon?',
      answer: 'Horizon is an airy, minimalist natural language web builder. It bridges ideas and deployment by taking simple written descriptions and compiling high-fidelity components, robust backend databases, and server configurations instantly with zero complex setups.'
    },
    {
      question: 'How does Horizon work?',
      answer: 'Luminous Horizon uses modern Multimodal Generative models (like Gemini) paired with a specialized lightning-fast compiler engine. It generates React/Typescript components on the client, links databases asynchronously, and serves container ingress routers within 0.4ms latencies.'
    },
    {
      question: 'Can I export my code?',
      answer: 'Yes, fully and without constraints. Any web application prototype you construct under Horizon can be exported as a clean zip file bundle containing full standard Vite + Tailwind + TypeScript configurations for immediate local hosting or manual git storage.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we provide our absolute standard Sandbox tier forever! You get 3 active container spaces, standard SLA forum support, and all core interactive component grids completely free of cost (no credit card credentials requested up front).'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-[1515px] mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Column title */}
        <div className="lg:w-1/3">
          <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest block mb-4">FAQS & DOCUMENTATION</span>
          <h2 className="font-display font-extrabold text-[#1d1c15] text-4xl md:text-5xl leading-[1.1] tracking-tight sticky top-32">
            Frequently asked questions
          </h2>
        </div>

        {/* Right Column Accordions */}
        <div className="lg:w-2/3 flex flex-col division-y divide-brand-outline-variant/30">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-brand-outline-variant/30 py-6 last:border-b-0 cursor-pointer group"
                onClick={() => setActiveIndex(isOpen ? null : index)}
              >
                <div className="flex justify-between items-center w-full select-none text-left">
                  <h3 className="font-sans font-extrabold text-lg md:text-xl text-on-surface group-hover:text-brand-primary transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full bg-surface-low border border-brand-outline-variant/20 flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-primary/10 text-brand-primary border-brand-primary/20' : 'text-on-surface-variant'
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-medium bg-surface-low p-4 rounded-2xl border border-black/5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
