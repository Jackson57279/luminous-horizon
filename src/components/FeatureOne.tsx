import React, { useState } from 'react';
import { Sparkles, MessageSquare, Lightbulb, Mic, ArrowRight, AppWindow } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FeatureOne() {
  const [activeTab, setActiveTab] = useState<'Chat' | 'Idea' | 'Narration'>('Chat');

  const chatContent = (
    <div className="space-y-4 text-xs">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-primary/20 shrink-0 border border-white/40 flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-brand-primary" />
        </div>
        <div className="flex-1 bg-white/50 p-3 rounded-2xl rounded-tl-none border border-white/60 shadow-sm leading-relaxed">
          <span className="font-mono text-[10px] text-brand-primary font-bold block mb-1">Horizon AI</span>
          What kind of application would you like to build today? I can prepare the data model, clean routes, and interactive dashboard instantly.
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <div className="flex-1 bg-brand-primary/10 p-3 rounded-2xl rounded-tr-none border border-brand-primary/20 shadow-sm text-right leading-relaxed">
          <span className="font-mono text-[10px] text-brand-primary font-bold block mb-1">You</span>
          Create a minimalist Kanban board for travel planning with collaborative notes and calendar agenda toggles.
        </div>
        <div className="w-8 h-8 rounded-full bg-brand-primary/15 shrink-0 border border-white/40 flex items-center justify-center font-mono font-bold text-[10px]">
          U
        </div>
      </div>

      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-primary/20 shrink-0 border border-white/40 flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-brand-primary" />
        </div>
        <div className="flex-1 bg-white/70 p-3 rounded-2xl rounded-tl-none border border-white/60 shadow-sm space-y-2">
          <div className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="font-mono text-[10px] text-brand-secondary font-bold">Generating Live Prototype...</span>
          </div>
          <div className="h-1.5 w-1/3 bg-on-surface/40 rounded-full animate-pulse"></div>
          <div className="h-1.5 w-full bg-on-surface/15 rounded-full"></div>
          <div className="h-1.5 w-5/6 bg-on-surface/15 rounded-full"></div>
          
          <div className="mt-2 grid grid-cols-3 gap-2 pt-2">
            <div className="h-10 bg-white/50 rounded-lg border border-white/60 flex flex-col justify-center items-center text-[9px] hover:bg-white/80 transition-colors cursor-pointer">
              <span className="font-bold text-brand-primary">12</span>
              <span className="text-on-surface-variant text-[8px]">Card Items</span>
            </div>
            <div className="h-10 bg-white/50 rounded-lg border border-white/60 flex flex-col justify-center items-center text-[9px] hover:bg-white/80 transition-colors cursor-pointer">
              <span className="font-bold text-brand-tertiary">3</span>
              <span className="text-on-surface-variant text-[8px]">List Columns</span>
            </div>
            <div className="h-10 bg-white/50 rounded-lg border border-white/60 flex flex-col justify-center items-center text-[9px] hover:bg-white/80 transition-colors cursor-pointer">
              <span className="font-bold text-brand-secondary">Sync</span>
              <span className="text-on-surface-variant text-[8px]">Real-time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ideaContent = (
    <div className="space-y-4 text-xs">
      <div className="bg-white/80 p-4 rounded-2xl border border-white/80 shadow-md">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="h-5 w-5 text-brand-primary" />
          <h4 className="font-semibold text-on-surface">Structured Conceptual Model</h4>
        </div>
        <div className="space-y-3">
          <div className="p-2.5 bg-surface-low rounded-xl border border-surface-highest/60">
            <span className="font-bold text-brand-primary block text-[10px] uppercase tracking-wider mb-0.5">Core System Architecture</span>
            <p className="text-[11px] text-on-surface-variant leading-relaxed">
              Tailwind CSS grid structure with integrated local state arrays synced automatically across local storage namespaces.
            </p>
          </div>
          <div className="p-2.5 bg-surface-low rounded-xl border border-surface-highest/60">
            <span className="font-bold text-brand-tertiary block text-[10px] uppercase tracking-wider mb-0.5">User Interface Focus</span>
            <p className="text-[11px] text-on-surface-variant leading-relaxed">
              Atmospheric off-white color schemas, 32px rounded dividers, and glassmorphism headers using native WebKit filter properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const narrationContent = (
    <div className="space-y-4 text-xs">
      <div className="bg-white/60 p-4 rounded-2xl border border-white/70 shadow-sm flex flex-col items-center justify-center text-center min-h-[160px] space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-primary/20 rounded-full animate-ping pointer-events-none scale-150"></div>
          <div className="w-12 h-12 rounded-full bg-brand-primary/15 border border-brand-primary/40 flex items-center justify-center text-brand-primary">
            <Mic className="h-6 w-6 animate-pulse" />
          </div>
        </div>
        <div>
          <span className="block text-[11px] text-brand-primary font-bold uppercase tracking-widest mb-1">Voice Narration Active</span>
          <p className="text-xs text-on-surface font-medium italic">
            "Now add a drag-and-drop mechanism and map preview panel..."
          </p>
        </div>
        <div className="w-full flex gap-1 justify-center max-w-[140px] items-end h-6">
          <span className="w-1.5 h-3 bg-brand-primary animate-pulse rounded-full"></span>
          <span className="w-1.5 h-5 bg-brand-primary animate-pulse rounded-full duration-300"></span>
          <span className="w-1.5 h-6 bg-brand-primary animate-pulse rounded-full duration-700"></span>
          <span className="w-1.5 h-2 bg-brand-primary animate-pulse rounded-full duration-400"></span>
          <span className="w-1.5 h-4 bg-brand-primary animate-pulse rounded-full duration-200"></span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="product" className="pt-24 pb-12 px-6 md:px-16 relative">
      <div className="max-w-[1118px] mx-auto bg-white/40 backdrop-blur-2xl rounded-[32px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row min-h-[596px] transition-all">
        {/* Left Column (Information and actions) */}
        <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
          <span className="font-mono text-xs font-bold text-brand-primary mb-4 tracking-widest uppercase">01 / 04</span>
          
          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-on-surface mb-6 leading-tight tracking-tight">
            Tell Horizon your lorem ipsum idea...
          </h3>
          
          <p className="font-sans text-base md:text-lg text-on-surface-variant mb-10 leading-relaxed max-w-md">
            Transform your ideas into functional applications seamlessly. Our intuitive builder lets you craft complex interfaces and logics without traditional coding constraints.
          </p>
          
          <a
            href="#try-it"
            className="inline-flex items-center justify-center gap-2 bg-white/50 border border-white/70 shadow-sm backdrop-blur-md text-on-surface font-bold text-sm px-8 py-4 rounded-full w-fit hover:bg-white/80 hover:text-brand-primary hover:border-brand-primary/20 transition-all duration-300 transform active:scale-95 group"
          >
            Start building
            <ArrowRight className="h-4 w-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Column (The simulated interaction UI) */}
        <div className="flex-1 bg-surface-low/30 relative overflow-hidden flex items-center justify-center border-l border-white/40 p-6 md:p-10 min-h-[350px]">
          {/* Decorative glowing gradient orbs */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-tertiary/10 pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-tertiary/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Interactive Tablet Container with Glassmorphism */}
          <div className="relative z-10 w-full max-w-[450px] bg-white/20 backdrop-blur-[32px] rounded-3xl border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden">
            {/* Nav tabs */}
            <div className="flex items-center justify-center p-4 border-b border-white/10">
              <div className="flex p-1 rounded-full border border-white/30 backdrop-blur-md bg-white/45 shadow-sm">
                {(['Chat', 'Idea', 'Narration'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 ${
                      activeTab === tab
                        ? 'bg-white text-on-surface shadow-sm'
                        : 'text-on-surface-variant hover:text-brand-primary'
                    }`}
                  >
                    {tab === 'Chat' && <MessageSquare className="h-3 w-3 text-brand-primary" />}
                    {tab === 'Idea' && <Lightbulb className="h-3 w-3 text-brand-secondary" />}
                    {tab === 'Narration' && <Mic className="h-3 w-3 text-brand-tertiary" />}
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Workspace panel */}
            <div className="flex-1 p-6 min-h-[290px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full"
                >
                  {activeTab === 'Chat' && chatContent}
                  {activeTab === 'Idea' && ideaContent}
                  {activeTab === 'Narration' && narrationContent}
                </motion.div>
              </AnimatePresence>

              {/* Bottom Card Workspace Signpost */}
              <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between text-[10px] text-on-surface-variant bg-white/10 p-2.5 rounded-xl">
                <span className="flex items-center gap-1 font-mono font-semibold">
                  <AppWindow className="h-3 w-3 text-brand-primary" />
                  builder-v1.4.2
                </span>
                <span className="bg-brand-secondary/20 text-brand-secondary font-bold px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wider">
                  Connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
