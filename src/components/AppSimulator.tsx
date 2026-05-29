import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUp, Play, ToggleLeft, Sparkles, ArrowRight, AppWindow, 
  Settings, Users, ShoppingBag, ShieldCheck, Gamepad2, FileDown, Rocket, 
  Percent, TrendingUp, AlertTriangle, ChevronRight, Plus, RefreshCw, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';

export default function AppSimulator() {
  const [promptInput, setPromptInput] = useState('');
  const [isPlanMode, setIsPlanMode] = useState(true);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compilingStep, setCompilingStep] = useState(0);
  const [compiledApp, setCompiledApp] = useState<'dashboard' | 'gaming' | 'crm' | 'inventory' | null>(null);

  // Compile logs list
  const compileSteps = [
    'Parsing application natural language parameters...',
    'Generating schema models & database schemas...',
    'Writing React components with Tailwind utility presets...',
    'Compiling assets & optimizing client responsive viewports...',
    'Starting serverless Cloud containers on route ingress...',
    'Syncing edge replica nodes... 0.4ms latency achieved!',
  ];

  // Presets mapping is: Prompt and visual target
  const presets = [
    { title: 'Reporting Dashboard', target: 'dashboard' as const, text: 'Create an e-commerce sales monitoring dashboard with live conversion rate slider and dynamic growth analyzer.' },
    { title: 'Gaming Platform', target: 'gaming' as const, text: 'Design an interactive token clicker incremental mini-game showing SaaS server upgrades and compilation loops.' },
    { title: 'CRM System', target: 'crm' as const, text: 'Construct a visual representative CRM register to track corporate leads, statuses, and search customer records.' },
    { title: 'Inventory Tracker', target: 'inventory' as const, text: 'Build a hardware supply inventory tracking spreadsheet that throws alerts when stock count goes below safe thresholds.' }
  ];

  // Start Compilation trigger
  const runGeneration = (targetType: 'dashboard' | 'gaming' | 'crm' | 'inventory', text: string) => {
    setPromptInput(text);
    setIsCompiling(true);
    setCompilingStep(0);
    setCompiledApp(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;

    // Detect keywords to map to the best interactive demo
    const test = promptInput.toLowerCase();
    let selected: 'dashboard' | 'gaming' | 'crm' | 'inventory' = 'dashboard';
    if (test.includes('game') || test.includes('clicker') || test.includes('play')) {
      selected = 'gaming';
    } else if (test.includes('crm') || test.includes('lead') || test.includes('customer') || test.includes('client')) {
      selected = 'crm';
    } else if (test.includes('inventory') || test.includes('stock') || test.includes('warehouse') || test.includes('track')) {
      selected = 'inventory';
    } else {
      selected = 'dashboard';
    }

    setIsCompiling(true);
    setCompilingStep(0);
    setCompiledApp(null);
  };

  // Compile stepper timer effect
  useEffect(() => {
    if (!isCompiling) return;

    const interval = setInterval(() => {
      setCompilingStep((prev) => {
        if (prev < compileSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Auto complete compilation
          setTimeout(() => {
            setIsCompiling(false);
            // Match to target or default
            const test = promptInput.toLowerCase();
            let selected: 'dashboard' | 'gaming' | 'crm' | 'inventory' = 'dashboard';
            if (test.includes('game') || test.includes('clicker')) {
              selected = 'gaming';
            } else if (test.includes('crm') || test.includes('lead') || test.includes('customer')) {
              selected = 'crm';
            } else if (test.includes('inventory') || test.includes('stock') || test.includes('warehouse')) {
              selected = 'inventory';
            } else {
              // Match preset titles if any
              const matchedPreset = presets.find(p => promptInput.includes(p.title) || p.text.toLowerCase().includes(test));
              if (matchedPreset) {
                selected = matchedPreset.target;
              }
            }
            setCompiledApp(selected);
          }, 600);
          return prev;
        }
      });
    }, 900);

    return () => clearInterval(interval);
  }, [isCompiling, promptInput]);

  // MICRO-APP IN-MEMORY STATE 1: Dashboard Simulator
  const [conversionRate, setConversionRate] = useState<number>(3.4);
  const [monthlyGoal, setMonthlyGoal] = useState<number>(85);

  // MICRO-APP IN-MEMORY STATE 2: Gaming Clicker
  const [score, setScore] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [upgradedEngine, setUpgradedEngine] = useState<boolean>(false);
  const [upgradedGemini, setUpgradedGemini] = useState<boolean>(false);

  // MICRO-APP IN-MEMORY STATE 3: CRM lead register
  const [crmLeads, setCrmLeads] = useState([
    { id: '1', name: 'Alts Corp Inc', revenue: 95000, status: 'Contacted', rep: 'Amy G.' },
    { id: '2', name: 'Jupiter Launch Labs', revenue: 150000, status: 'Prospect', rep: 'Marcus E.' },
    { id: '3', name: 'Vortex Global', revenue: 45000, status: 'Won', rep: 'Sarah K.' }
  ]);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadRevenue, setNewLeadRevenue] = useState('');
  const [crmFilter, setCrmFilter] = useState<'All' | 'Prospect' | 'Contacted' | 'Won'>('All');

  // MICRO-APP IN-MEMORY STATE 4: Inventory tracking
  const [inventoryItems, setInventoryItems] = useState([
    { id: '1', item: 'Horizon Core Chips', qty: 15, location: 'Shelf A3' },
    { id: '2', item: 'Transceiver Module', qty: 3, location: 'Bay 5' },
    { id: '3', item: 'Copper Ingress Connectors', qty: 24, location: 'Shelf C1' }
  ]);

  const addCrmLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName) return;
    const rev = parseFloat(newLeadRevenue) || 12000;
    const newLead = {
      id: Date.now().toString(),
      name: newLeadName,
      revenue: rev,
      status: 'Prospect',
      rep: 'AI Agent'
    };
    setCrmLeads([...crmLeads, newLead]);
    setNewLeadName('');
    setNewLeadRevenue('');
  };

  const setLeadStatus = (id: string, status: string) => {
    setCrmLeads(crmLeads.map(l => l.id === id ? { ...l, status } : l));
  };

  const updateInventoryQty = (id: string, delta: number) => {
    setInventoryItems(inventoryItems.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(0, item.qty + delta) };
      }
      return item;
    }));
  };

  // GSAP hero entry animation on mount with cleanup
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".gsap-hero-badge", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" })
        .fromTo(".gsap-hero-title", { scale: 0.95, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, "-=0.6")
        .fromTo(".gsap-hero-desc", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
        .fromTo(".gsap-hero-input", { y: 30, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.5")
        .fromTo(".gsap-hero-preset", { opacity: 0, y: 10, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.2)" }, "-=0.4");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="try-it" className="relative pt-36 pb-24 px-6 md:px-16 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Dynamic ambient backplane gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/20 via-[#C084FC]/10 to-[#fff9ee] -z-10 animate-pulse duration-[10s]"></div>
      
      {/* Brand new release badge */}
      <div className="gsap-hero-badge inline-flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full px-4 py-2 mb-8 shadow-sm">
        <span className="bg-brand-secondary text-white font-mono text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
          NEW
        </span>
        <span className="font-sans text-xs font-bold text-on-surface">
          Powered by Gemini 1.5 & Vite Compilation
        </span>
      </div>

      <h1 className="gsap-hero-title font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tighter text-on-surface max-w-4xl mb-6 select-none">
        Build with Horizon
      </h1>
      
      <p className="gsap-hero-desc font-sans text-base md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
        Horizon lets you build functional applications in minutes. An airy, minimalist workspace designed for seamless AI integration.
      </p>

      {/* Prompter Container */}
      <div className="gsap-hero-input w-full max-w-[870px] bg-white/45 rounded-[32px] border border-white/60 shadow-[0_12px_45px_rgba(0,0,0,0.03)] p-6 mb-8 backdrop-blur-2xl">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <textarea
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            disabled={isCompiling}
            className="w-full bg-transparent border-none resize-none font-sans text-base md:text-lg text-on-surface placeholder:text-brand-outline/65 focus:ring-0 min-h-[85px] text-left focus:outline-none"
            placeholder="Describe the application you want to build..."
          />
          
          <div className="flex items-center justify-between pt-4 border-t border-white/50">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPromptInput('Generate a customized real-time dashboard... ')}
                className="p-2.5 rounded-full hover:bg-white/60 transition-colors text-on-surface-variant"
                title="Add sample descriptor"
              >
                <Plus className="h-5 w-5" />
              </button>
              
              {/* Plan Mode selector toggle */}
              <button
                type="button"
                onClick={() => setIsPlanMode(!isPlanMode)}
                className="flex items-center gap-2 bg-white/55 border border-white/70 rounded-full px-4.5 py-2 cursor-pointer shadow-sm hover:bg-white transition-all text-xs font-bold text-on-surface-variant"
              >
                <span>Plan Engine</span>
                <span className={`transition-transform duration-300 ${isPlanMode ? 'text-brand-primary' : 'text-on-surface-variant/40'}`}>
                  {isPlanMode ? 'ACTIVE' : 'OFF'}
                </span>
              </button>
            </div>

            {/* Launch action */}
            <button
              type="submit"
              disabled={isCompiling || !promptInput.trim()}
              className="bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:scale-105 duration-200 transition-all active:scale-95 shrink-0"
              title="Compile prototype"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Preset Fast Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {presets.map((preset) => (
          <button
            key={preset.title}
            onClick={() => runGeneration(preset.target, preset.text)}
            className="gsap-hero-preset bg-white/40 text-on-surface border border-white/60 shadow-sm rounded-full px-5 py-2 font-sans text-xs font-bold hover:bg-brand-primary hover:text-white transition-all duration-300 backdrop-blur-md cursor-pointer select-none"
          >
            {preset.title}
          </button>
        ))}
      </div>

      {/* COMPILING DIALOGUE SECTION */}
      <AnimatePresence mode="wait">
        {isCompiling && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="w-full max-w-[800px] bg-white/70 border border-white rounded-[32px] p-8 shadow-xl backdrop-blur-3xl text-left space-y-6 mb-12"
          >
            <div className="flex items-center gap-3 border-b border-black/5 pb-4">
              <RefreshCw className="h-5 w-5 text-brand-primary animate-spin" />
              <div>
                <h4 className="font-extrabold text-on-surface text-sm">Deploying Horizon Core Container</h4>
                <p className="font-mono text-[10px] text-on-surface-variant">Active Agent Server: cloud-run-east-v18</p>
              </div>
            </div>

            {/* Simulated compile steps tracker */}
            <div className="space-y-3">
              {compileSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border text-[9px] font-bold ${
                    compilingStep > idx 
                      ? 'bg-brand-secondary border-brand-secondary text-white' 
                      : compilingStep === idx 
                        ? 'bg-brand-primary text-white border-brand-primary animate-pulse' 
                        : 'border-black/20 bg-transparent text-black/30'
                  }`}>
                    {compilingStep > idx ? '✓' : idx + 1}
                  </div>
                  <span className={`font-mono ${
                    compilingStep >= idx ? 'text-on-surface font-semibold' : 'text-on-surface-variant/40'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RENDER DYNAMIC LIVE COMPILED VIEWPORTS */}
      <AnimatePresence mode="wait">
        {compiledApp && (
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="w-full max-w-[920px] bg-white border-2 border-brand-primary/20 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-md text-left z-20 mb-8"
          >
            {/* Interactive Browser Top Bar */}
            <div className="bg-surface-low border-b border-black/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-primary" />
                <div className="w-3 h-3 rounded-full bg-[#FFE3A8]" />
                <div className="w-3 h-3 rounded-full bg-[#A8FFE3]" />
                <span className="font-mono text-xs font-bold text-on-surface-variant ml-3 bg-white/90 border px-3 py-1 rounded-full text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
                  {compiledApp === 'dashboard' && 'https://horizon-dashboard.live'}
                  {compiledApp === 'gaming' && 'https://horizon-arcade-clicker.app'}
                  {compiledApp === 'crm' && 'https://horizon-client-matrix.live'}
                  {compiledApp === 'inventory' && 'https://horizon-inventory.live'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
                <Rocket className="h-4 w-4 animate-bounce" />
                <span>Live Active Applet</span>
              </div>
            </div>

            {/* Visual Workspace Payload */}
            <div className="p-8 bg-[#fffcf5]">
              
              {/* WIDGET 1: Reporting Sales Dashboard */}
              {compiledApp === 'dashboard' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-white/80 p-4 rounded-2xl border border-black/5">
                    <div>
                      <h3 className="font-extrabold text-on-surface text-base">E-Commerce Live Growth Radar</h3>
                      <p className="text-xs text-on-surface-variant">Togglable conversion factors and milestones</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-2.5 py-1 rounded">
                      ACTIVE PREVIEW
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm space-y-1">
                      <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-wider block">Estimated Conversion</span>
                      <span className="text-2xl font-black text-brand-primary font-mono">{conversionRate.toFixed(1)}%</span>
                      <span className="text-[9px] text-brand-secondary block font-bold">↑ 0.4% from system base</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm space-y-1">
                      <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-wider block">SaaS Traffic Volume</span>
                      <span className="text-2xl font-black text-on-surface font-mono">14,200/min</span>
                      <span className="text-[9px] text-on-surface-variant block">Computed live edge SLA</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm space-y-1">
                      <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-wider block">Target Reached</span>
                      <span className="text-2xl font-black text-brand-secondary font-mono">{monthlyGoal}%</span>
                      <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden mt-1 pb-1">
                        <div className="h-full bg-brand-secondary rounded-full" style={{ width: `${monthlyGoal}%` }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Controls */}
                  <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-4 shadow-inner">
                    <h4 className="text-xs font-extrabold text-on-surface uppercase tracking-wider">Dynamic Interactive Knobs</h4>
                    
                    <div className="space-y-4">
                      {/* Knobs 1 */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-black/5 pb-3">
                        <label className="text-xs font-bold text-on-surface-variant">Adjust System Goal Threshold</label>
                        <div className="flex items-center gap-3">
                          <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={monthlyGoal}
                            onChange={(e) => setMonthlyGoal(parseInt(e.target.value))}
                            className="w-40 accent-brand-primary" 
                          />
                          <span className="font-mono text-xs font-bold w-10 text-right">{monthlyGoal}%</span>
                        </div>
                      </div>

                      {/* Knobs 2 */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <label className="text-xs font-bold text-on-surface-variant">Conversion Optimization Factor</label>
                        <div className="flex items-center gap-3">
                          <input 
                            type="range" 
                            min="1" 
                            max="9" 
                            step="0.1"
                            value={conversionRate}
                            onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                            className="w-40 accent-brand-primary" 
                          />
                          <span className="font-mono text-xs font-bold w-10 text-right">{conversionRate}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* WIDGET 2: Retro Clicker SaaS Mini-game */}
              {compiledApp === 'gaming' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-white/80 p-4 rounded-xl border border-black/5">
                    <div>
                      <h3 className="font-extrabold text-on-surface text-base">Incremental Clicker Core v1</h3>
                      <p className="text-xs text-on-surface-variant">Gather core units and hire compiler servers</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#EAB308] bg-yellow-100 border border-yellow-200 px-2.5 py-1 rounded">
                      RETRO MODE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Game board */}
                    <div className="bg-white p-6 rounded-2xl border border-black/5 flex flex-col justify-between text-center space-y-4">
                      <div>
                        <span className="text-xs font-black text-on-surface-variant uppercase block">Your SaaS Score</span>
                        <div className="text-4xl font-extrabold text-[#EAB308] font-mono py-2">{score}</div>
                        <span className="text-[10px] text-on-surface-variant font-mono">Multiplier: x{multiplier} per microchip</span>
                      </div>
                      
                      <button
                        onClick={() => setScore(score + multiplier)}
                        className="w-full bg-[#EAB308] hover:bg-[#D97706] text-white font-extrabold text-sm py-4 rounded-xl shadow-md cursor-pointer select-none ring-4 ring-yellow-500/10 active:scale-95 duration-100 transition-transform flex items-center justify-center gap-2"
                      >
                        <Gamepad2 className="h-4 w-4" /> COMPONENT CLICK
                      </button>
                    </div>

                    {/* Upgrades */}
                    <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-3">
                      <span className="text-xs font-black text-on-surface-variant uppercase block">Available Upgrades</span>
                      
                      {/* Upgrade Item 1 */}
                      <button
                        disabled={score < 10 || upgradedEngine}
                        onClick={() => {
                          setScore(score - 10);
                          setMultiplier(multiplier + 2);
                          setUpgradedEngine(true);
                        }}
                        className={`w-full p-2.5 rounded-xl border text-left flex justify-between items-center ${
                          upgradedEngine 
                            ? 'bg-black/5 border-black/10 opacity-60' 
                            : score >= 10 
                              ? 'bg-[#EAB308]/10 hover:bg-[#EAB308]/20 border-[#EAB308]/10 cursor-pointer' 
                              : 'bg-transparent border-black/5 cursor-not-allowed opacity-50'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold block text-on-surface">Vite Fast Compiler Bundle</span>
                          <span className="text-[10px] text-on-surface-variant block">Adds +2 multiplier points</span>
                        </div>
                        <span className="text-xs font-mono font-bold">{upgradedEngine ? 'BOUGHT' : '10 Points'}</span>
                      </button>

                      {/* Upgrade Item 2 */}
                      <button
                        disabled={score < 25 || upgradedGemini}
                        onClick={() => {
                          setScore(score - 25);
                          setMultiplier(multiplier + 5);
                          setUpgradedGemini(true);
                        }}
                        className={`w-full p-2.5 rounded-xl border text-left flex justify-between items-center ${
                          upgradedGemini 
                            ? 'bg-black/5 border-black/10' 
                            : score >= 25 
                              ? 'bg-brand-primary/10 hover:bg-brand-primary/20 border-brand-primary/10 cursor-pointer' 
                              : 'bg-transparent border-black/5 cursor-not-allowed opacity-50'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold block text-on-surface">Gemini Multimodal Agent Grid</span>
                          <span className="text-[10px] text-on-surface-variant block">Adds +5 multiplier points</span>
                        </div>
                        <span className="text-xs font-mono font-bold">{upgradedGemini ? 'BOUGHT' : '25 Points'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* WIDGET 3: Corporate CRM Lead Manager */}
              {compiledApp === 'crm' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-white/80 p-4 rounded-xl border border-black/5">
                    <div>
                      <h3 className="font-extrabold text-on-surface text-base">Target CRM Leads Tracker</h3>
                      <p className="text-xs text-on-surface-variant">Update, filter, and include new system accounts</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-secondary bg-brand-secondary/10 border border-brand-secondary/20 px-2.5 py-1 rounded">
                      CRM CORE
                    </span>
                  </div>

                  {/* Filter and inputs */}
                  <div className="flex justify-between items-center bg-white border border-black/5 p-3.5 rounded-xl">
                    <div className="flex p-1 bg-surface-low rounded-lg gap-1 border">
                      {(['All', 'Prospect', 'Contacted', 'Won'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setCrmFilter(filter)}
                          className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                            crmFilter === filter
                              ? 'bg-white text-on-surface shadow-sm'
                              : 'text-on-surface-variant hover:text-brand-primary'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CRM Table */}
                  <div className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-surface-low border-b border-black/5 text-[#89726b] font-bold">
                          <th className="p-3">Company Leads</th>
                          <th className="p-3">Annual Revenue</th>
                          <th className="p-3">Lead Rep</th>
                          <th className="p-3 text-right">Status Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {crmLeads
                          .filter(l => crmFilter === 'All' || l.status === crmFilter)
                          .map(lead => (
                            <tr key={lead.id} className="border-b last:border-0 hover:bg-surface-lowest">
                              <td className="p-3 font-semibold text-on-surface">{lead.name}</td>
                              <td className="p-3 font-mono font-bold text-brand-primary">${lead.revenue.toLocaleString()}</td>
                              <td className="p-3 text-on-surface-variant font-medium">{lead.rep}</td>
                              <td className="p-3 text-right flex justify-end gap-1">
                                {(['Prospect', 'Contacted', 'Won'] as const).map((status) => (
                                  <button
                                    key={status}
                                    onClick={() => setLeadStatus(lead.id, status)}
                                    className={`px-2 py-0.5 rounded text-[9px] font-bold transition-colors ${
                                      lead.status === status
                                        ? 'bg-brand-primary text-white'
                                        : 'bg-black/5 hover:bg-black/10 text-on-surface-variant'
                                    }`}
                                  >
                                    {status}
                                  </button>
                                ))}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Add Corporate Lead form */}
                  <form onSubmit={addCrmLead} className="p-5 bg-white rounded-2xl border border-black/5 flex flex-col md:flex-row gap-3">
                    <input
                      type="text"
                      value={newLeadName}
                      onChange={(e) => setNewLeadName(e.target.value)}
                      placeholder="Corporate Company Name..."
                      required
                      className="flex-1 bg-white border border-black/10 p-2.5 rounded-xl text-xs placeholder:text-brand-outline/60 text-on-surface focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    />
                    <input
                      type="number"
                      value={newLeadRevenue}
                      onChange={(e) => setNewLeadRevenue(e.target.value)}
                      placeholder="Est. Annual Revenue ($)..."
                      className="w-full md:w-48 bg-white border border-black/10 p-2.5 rounded-xl text-xs placeholder:text-brand-outline/60 text-on-surface focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    />
                    <button
                      type="submit"
                      className="bg-brand-primary hover:bg-brand-primary/95 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-transform active:scale-95 shrink-0"
                    >
                      Add lead
                    </button>
                  </form>
                </div>
              )}

              {/* WIDGET 4: Safe Inventory Quantity Tracker */}
              {compiledApp === 'inventory' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-white/80 p-4 rounded-xl border border-black/5 animate-fade-in">
                    <div>
                      <h3 className="font-extrabold text-on-surface text-base">Warehouse Stock Control Grid</h3>
                      <p className="text-xs text-on-surface-variant">Low stock automated alerting system</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#E11D48] bg-rose-50 border border-rose-100 px-3 py-1 rounded">
                      STOCK WATCH
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {inventoryItems.map((item) => (
                      <div 
                        key={item.id} 
                        className={`p-5 rounded-2xl border transition-all ${
                          item.qty <= 5 
                            ? 'bg-rose-50/50 border-rose-200 shadow-md ring-1 ring-rose-500/10' 
                            : 'bg-white border-black/5 shadow-sm'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[9px] uppercase tracking-wider text-on-surface-variant font-black">
                            {item.location}
                          </span>
                          {item.qty <= 5 && (
                            <div className="flex items-center gap-1 bg-rose-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide">
                              <AlertTriangle className="h-2 w-2" /> Alert Low Stock
                            </div>
                          )}
                        </div>

                        <span className="font-extrabold text-xs text-on-surface block truncate mb-1">
                          {item.item}
                        </span>

                        <div className="flex justify-between items-center pt-3 border-t border-black/5 mt-3">
                          <span className="font-mono text-xl font-bold text-on-surface">
                            {item.qty} pcs
                          </span>
                          <div className="flex gap-1">
                            <button
                              onClick={() => updateInventoryQty(item.id, -1)}
                              className="w-7 h-7 rounded-lg bg-black/5 hover:bg-black/10 flex items-center justify-center font-bold text-sm text-on-surface transition-colors"
                            >
                              -
                            </button>
                            <button
                              onClick={() => updateInventoryQty(item.id, 1)}
                              className="w-7 h-7 rounded-lg bg-black/5 hover:bg-black/10 flex items-center justify-center font-bold text-sm text-on-surface transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
