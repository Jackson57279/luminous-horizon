import React, { useState, useEffect } from 'react';
import { Cloud, CheckCircle, Smartphone, Cpu, ShieldAlert, Database, RefreshCw, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function FeatureTwo() {
  const [selectedDb, setSelectedDb] = useState<'Edge SQL' | 'Atlas Sync' | 'Global Cache'>('Edge SQL');
  const [latency, setLatency] = useState<number>(0.4);
  const [activeStep, setActiveStep] = useState<number>(2);
  const [uptime, setUptime] = useState<number>(99.98);

  const dbDetails = {
    'Edge SQL': { latency: 0.4, throughput: '2.4 GB/s', coldStart: '0.1ms' },
    'Atlas Sync': { latency: 1.2, throughput: '1.8 GB/s', coldStart: '0.9ms' },
    'Global Cache': { latency: 0.1, throughput: '4.5 GB/s', coldStart: '0.0ms' }
  };

  // Simulate subtle updates to the metrics for a high-fidelity "live" feel
  useEffect(() => {
    const timer = setInterval(() => {
      // Small fluctuation in latency and uptime
      const variation = (Math.random() - 0.5) * 0.04;
      const baseLatency = dbDetails[selectedDb].latency;
      setLatency(Math.max(0.1, parseFloat((baseLatency + variation).toFixed(2))));
      
      const uptimeVar = (Math.random() - 0.5) * 0.002;
      setUptime(Math.min(100, Math.max(99.9, parseFloat((99.98 + uptimeVar).toFixed(3)))));
    }, 3000);

    return () => clearInterval(timer);
  }, [selectedDb]);

  return (
    <section className="py-24 px-6 md:px-16 bg-surface-low relative">
      <div className="max-w-[1118px] mx-auto bg-white/40 backdrop-blur-2xl rounded-[32px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row-reverse min-h-[596px] transition-all">
        {/* Text Container */}
        <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
          <span className="font-mono text-xs font-bold text-brand-primary mb-4 tracking-widest uppercase">02 / 04</span>
          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-on-surface mb-6 leading-tight tracking-tight">
            A backend for lorem ipsum
          </h3>
          <p className="font-sans text-base md:text-lg text-on-surface-variant mb-10 leading-relaxed max-w-md">
            Robust infrastructure generated instantly. From authentication to database schemas, Horizon writes the backend so you can focus on the user experience.
          </p>

          {/* Interactive Selector in Description */}
          <div className="bg-white/50 border border-white/70 p-4 rounded-2xl">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-2">
              Select Simulated Database Engine
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(['Edge SQL', 'Atlas Sync', 'Global Cache'] as const).map((db) => (
                <button
                  key={db}
                  onClick={() => {
                    setSelectedDb(db);
                    setLatency(dbDetails[db].latency);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedDb === db
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'bg-white/60 hover:bg-white text-on-surface-variant'
                  }`}
                >
                  {db}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Visual Graphic Preview */}
        <div className="flex-1 bg-white/20 relative overflow-hidden flex items-center justify-center p-6 md:p-10 border-r border-white/40">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-brand-tertiary/10 pointer-events-none"></div>

          {/* High Fidelity Card Mock */}
          <div className="relative z-10 w-full max-w-[420px] bg-white/65 backdrop-blur-[40px] rounded-[32px] border border-white/60 shadow-[0_45px_90px_-20px_rgba(0,0,0,0.12)] p-7 overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 border-b border-black/5 pb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/25 shadow-sm">
                <Cloud className="h-5 w-5 text-brand-primary" />
              </div>
              <div className="flex-1">
                <span className="block text-on-surface font-extrabold text-sm leading-none">Deployment Matrix</span>
                <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">v1.2.0-stable</span>
              </div>
              <span className="bg-brand-secondary-container/30 text-brand-secondary font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border border-brand-secondary/10">
                ACTIVE
              </span>
            </div>

            {/* Metrics */}
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <div className="flex items-center gap-1.5 text-on-surface">
                    <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse"></span>
                    <span>Edge Delivery SLA</span>
                  </div>
                  <span className="font-mono text-brand-primary font-extrabold">{uptime}%</span>
                </div>
                {/* Visual Progress bar */}
                <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden p-[1px] border border-black/5">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-primary-container rounded-full"
                    animate={{ width: `${uptime}%` }}
                    transition={{ ease: 'easeOut', duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Steps or Live Logs */}
              <div className="pt-2 space-y-3 border-t border-black/5">
                <div 
                  className={`flex items-center justify-between p-2 rounded-xl transition-colors cursor-pointer ${
                    activeStep === 0 ? 'bg-white shadow-sm' : 'hover:bg-white/20'
                  }`}
                  onClick={() => setActiveStep(0)}
                >
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant font-medium">
                    <Database className="h-3.5 w-3.5 text-brand-tertiary" />
                    <span>Syncing edge schemas...</span>
                  </div>
                  <CheckCircle className="h-4 w-4 text-brand-secondary shrink-0" />
                </div>

                <div 
                  className={`flex items-center justify-between p-2 rounded-xl transition-colors cursor-pointer ${
                    activeStep === 1 ? 'bg-white shadow-sm' : 'hover:bg-white/20'
                  }`}
                  onClick={() => setActiveStep(1)}
                >
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant font-medium">
                    <RefreshCw className="h-3.5 w-3.5 text-brand-primary animate-spin" style={{ animationDuration: '3s' }} />
                    <span>Optimizing cold starts...</span>
                  </div>
                  <CheckCircle className="h-4 w-4 text-brand-secondary shrink-0" />
                </div>

                {/* Live in production widget */}
                <div className="mt-4 p-4 bg-white rounded-2xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between hover:scale-[1.02] duration-300 transition-transform">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-brand-secondary/15 flex items-center justify-center text-brand-secondary">
                      <Zap className="h-4 w-4 fill-brand-secondary" />
                    </div>
                    <div>
                      <span className="text-on-surface text-xs font-bold block">Live in production</span>
                      <span className="text-[10px] text-on-surface-variant font-medium font-mono">{dbDetails[selectedDb].throughput} throughput</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-on-surface font-mono font-black text-xs block">{latency}ms</span>
                    <span className="text-[8px] text-on-surface-variant font-bold uppercase tracking-wider">LATENCY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
