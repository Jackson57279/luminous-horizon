import React, { useState, useEffect } from 'react';
import { Play, TrendingUp, CircleAlert, DollarSign, Plus, Check, MapPin, Sparkles, User, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ShowcaseCards() {
  // Transcation Ledger State
  const [transactions, setTransactions] = useState([
    { id: '1', name: 'Server Hosting Spec', amount: -19.00, time: '10m ago' },
    { id: '2', name: 'API Credits top-up', amount: -5.00, time: '2h ago' },
    { id: '3', name: 'Stripe SaaS Payout', amount: 320.00, time: '4h ago' }
  ]);
  const [txName, setTxName] = useState('');
  const [txAmount, setTxAmount] = useState('');

  // Travel Checklist State
  const [itinerary, setItinerary] = useState([
    { id: 'tokyo', name: 'Kyoto Bamboo Forest', completed: true },
    { id: 'paris', name: 'Cafe de Flore Morning', completed: false },
    { id: 'vienna', name: 'Schönbrunn Palace Walk', completed: false }
  ]);

  // Streaming Live Stats
  const [streams, setStreams] = useState(1420);
  const [activeSegment, setActiveSegment] = useState<'A' | 'B'>('A');

  // Ledger calculation
  const totalBalance = transactions.reduce((acc, current) => acc + current.amount, 0);

  // Simulating live streaming stats
  useEffect(() => {
    const streamInterval = setInterval(() => {
      setStreams(prev => prev + Math.floor((Math.random() - 0.4) * 8));
    }, 2000);
    return () => clearInterval(streamInterval);
  }, []);

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!txName || !txAmount) return;
    const amountVal = parseFloat(txAmount);
    if (isNaN(amountVal)) return;

    const newTx = {
      id: Date.now().toString(),
      name: txName,
      amount: amountVal,
      time: 'Just now'
    };

    setTransactions([newTx, ...transactions]);
    setTxName('');
    setTxAmount('');
  };

  const toggleItinerary = (id: string) => {
    setItinerary(
      itinerary.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const travelProgress = Math.round(
    (itinerary.filter((item) => item.completed).length / itinerary.length) * 100
  );

  return (
    <section className="py-24 bg-white/30 backdrop-blur-md relative overflow-hidden dotted-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center justify-center mb-16 relative z-10 text-center">
        <span className="bg-brand-secondary-container/40 text-brand-on-secondary-container text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block border border-brand-secondary/15">
          SIMULATOR GALLERY
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-on-surface tracking-tight mb-4">
          Seamless integration from idea to execution
        </h2>
        <p className="text-on-surface-variant font-medium text-sm md:text-base max-w-2xl">
          Interact with a few live SaaS micro-apps instantly built under Luminous Horizon parameters. Try adding entries or checking itineraries.
        </p>
      </div>

      {/* Grid container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
        
        {/* CARD 1: Streaming Dashboard */}
        <div className="bg-white/45 backdrop-blur-xl rounded-[32px] border border-white/70 shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow h-[400px]">
          <div className="flex-1 bg-[#38BDF8]/10 relative p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center bg-white/75 backdrop-blur-md rounded-2xl p-3 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-primary tracking-wider">Metrics</span>
                <span className="block font-sans font-bold text-xs text-on-surface">Streams Dashboard</span>
              </div>
              <div className="flex gap-1.5">
                <button 
                  onClick={() => setActiveSegment('A')}
                  className={`w-5 h-5 rounded text-[9px] font-mono font-bold flex items-center justify-center ${activeSegment === 'A' ? 'bg-brand-primary text-white' : 'bg-black/5 hover:bg-black/10'}`}
                >
                  A
                </button>
                <button 
                  onClick={() => setActiveSegment('B')}
                  className={`w-5 h-5 rounded text-[9px] font-mono font-bold flex items-center justify-center ${activeSegment === 'B' ? 'bg-brand-primary text-white' : 'bg-black/5 hover:bg-black/10'}`}
                >
                  B
                </button>
              </div>
            </div>

            {/* Simulated Chart preview */}
            <div className="flex-1 my-4 bg-white/60 rounded-2xl border border-white p-3 flex flex-col justify-between">
              <div className="flex justify-between items-end h-[110px] gap-2 pt-2">
                {[35, 60, 40, activeSegment === 'A' ? 75 : 45, 95, 80, 110, 85].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end h-full group/bar select-none">
                    <motion.div 
                      className={`w-full rounded-t-md transition-colors ${
                        i === 6 ? 'bg-brand-primary/80' : 'bg-[#38BDF8]/40'
                      }`}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05 }}
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between font-mono text-[9px] text-on-surface-variant pt-2 border-t border-black/5">
                <span>08:00 AM</span>
                <span>Live Audience</span>
                <span>12:00 PM</span>
              </div>
            </div>

            {/* Bottom Counter */}
            <div className="flex items-center justify-between text-xs font-bold text-on-surface px-1">
              <span>Dynamic Streams:</span>
              <span className="font-mono bg-white px-2 py-0.5 rounded border border-black/5 text-[#38BDF8]">
                {streams.toLocaleString()} rps
              </span>
            </div>
          </div>
        </div>

        {/* CARD 2: Finance Ledger */}
        <div className="bg-white/45 backdrop-blur-xl rounded-[32px] border border-white/70 shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow h-[400px]">
          <div className="flex-1 bg-[#C084FC]/10 relative p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-extrabold text-on-surface uppercase tracking-wider">Finance Ledger</span>
                <span className="font-mono text-xs font-bold text-brand-primary px-2.5 py-0.5 bg-white/80 rounded-full border border-white">
                  ${totalBalance.toFixed(2)}
                </span>
              </div>

              {/* Transactions List */}
              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1 hide-scrollbar bg-white/60 p-2.5 rounded-2xl border border-white">
                <AnimatePresence initial={false}>
                  {transactions.slice(0, 3).map((tx) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex justify-between items-center text-[10px] py-1 border-b border-black/5 last:border-0"
                    >
                      <div className="truncate pr-1">
                        <span className="font-bold text-on-surface block truncate">{tx.name}</span>
                        <span className="text-[8px] text-on-surface-variant">{tx.time}</span>
                      </div>
                      <span className={`font-mono font-bold shrink-0 ${tx.amount > 0 ? 'text-brand-secondary' : 'text-brand-primary'}`}>
                        {tx.amount > 0 ? '+' : ''}${tx.amount.toFixed(2)}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Live Interactive Form to add transaction */}
            <form onSubmit={addTransaction} className="mt-2 bg-white/60 p-3 rounded-2xl border border-white space-y-2">
              <div className="grid grid-cols-2 gap-1.5">
                <input 
                  type="text" 
                  value={txName}
                  onChange={(e) => setTxName(e.target.value)}
                  placeholder="Tx Item..."
                  className="bg-white border border-black/10 px-2 py-1 rounded text-[10px] placeholder:text-brand-outline/65 text-on-surface focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
                <input 
                  type="number" 
                  value={txAmount}
                  onChange={(e) => setTxAmount(e.target.value)}
                  placeholder="Amt ($)..."
                  className="bg-white border border-black/10 px-2 py-1 rounded text-[10px] placeholder:text-brand-outline/65 text-on-surface focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-[9px] py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all active:scale-95 shadow-sm"
              >
                <Plus className="h-3 w-3" /> Add Transaction
              </button>
            </form>
          </div>
        </div>

        {/* CARD 3: Travel Planner */}
        <div className="bg-white/45 backdrop-blur-xl rounded-[32px] border border-white/70 shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow h-[400px]">
          <div className="flex-1 bg-[#FF9A9E]/10 relative p-6 flex flex-col justify-between">
            <div className="flex gap-2 items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-[#FF5E3A]/20 border border-white flex items-center justify-center text-brand-primary shrink-0">
                <MapPin className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-on-surface block tracking-wide">Kyoto Trip</span>
                <span className="text-[9px] font-bold text-on-surface-variant font-mono">Travel Progress: {travelProgress}%</span>
              </div>
            </div>

            {/* List with toggles */}
            <div className="space-y-2 flex-1 my-2">
              {itinerary.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => toggleItinerary(item.id)}
                  className="bg-white/80 border border-white/60 p-2.5 rounded-xl flex items-center justify-between cursor-pointer hover:bg-white transition-colors active:scale-98"
                >
                  <span className={`text-[11px] font-semibold text-on-surface ${item.completed ? 'line-through opacity-50' : ''}`}>
                    {item.name}
                  </span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                    item.completed ? 'bg-brand-secondary border-brand-secondary text-white' : 'border-black/25 bg-transparent'
                  }`}>
                    {item.completed && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual meter */}
            <div className="space-y-1 bg-white/50 p-2.5 rounded-2xl border border-white/80">
              <div className="h-2 bg-black/5 rounded-full overflow-hidden p-[1px]">
                <div 
                  className="h-full bg-brand-primary rounded-full transition-all duration-300"
                  style={{ width: `${travelProgress}%` }}
                />
              </div>
              <span className="text-[8px] uppercase tracking-widest font-black text-on-surface-variant block text-center">
                Check boxes to complete
              </span>
            </div>
          </div>
        </div>

        {/* CARD 4: bento aspect blocks */}
        <div className="bg-white/45 backdrop-blur-xl rounded-[32px] border border-white/70 shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow h-[400px]">
          <div className="flex-1 bg-[#FFD166]/10 relative p-6 flex flex-col justify-between">
            <span className="text-xs font-extrabold text-on-surface mb-2 uppercase tracking-wider block">Visual Matrix Grid</span>
            
            <div className="grid grid-cols-2 gap-3 my-2 flex-1">
              {[
                { label: 'Cloud Run', color: 'bg-brand-primary/20 hover:bg-brand-primary/35', desc: 'Secure Serverless Containers' },
                { label: 'Vite Native', color: 'bg-[#38BDF8]/20 hover:bg-[#38BDF8]/35', desc: 'Lightning Fast Bundling' },
                { label: 'Edge SQL', color: 'bg-[#C084FC]/20 hover:bg-[#C084FC]/35', desc: 'Distributed Memory Sync' },
                { label: 'SaaS Client', color: 'bg-brand-secondary/20 hover:bg-brand-secondary/35', desc: 'Aesthetic Interface Shell' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`${item.color} rounded-2xl p-3 border border-white/85 flex flex-col justify-between transition-all duration-200 cursor-help relative group/item`}
                >
                  <span className="font-extrabold text-[11px] text-on-surface select-none block">
                    {item.label}
                  </span>
                  
                  {/* Subtle info pill */}
                  <span className="text-[8px] leading-tight text-on-surface-variant opacity-75 font-medium">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/80 p-2 border border-white text-center rounded-xl text-[10px] text-brand-primary font-bold flex items-center justify-center gap-1 animate-pulse">
              <Sparkles className="h-3 w-3" /> Fully Customized For You
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
