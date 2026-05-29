import React, { useState } from 'react';
import { Check, Info, Server, Sparkles, X, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<string | null>(null);

  const calculatePrice = (base: number) => {
    if (isAnnual) {
      return Math.round(base * 0.8); // 20% off
    }
    return base;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Success! Simulated subscription setup completed for the ${checkoutPlan} Plan. Sandbox credentials parsed successfully!`);
    setCheckoutPlan(null);
  };

  return (
    <section id="pricing" className="py-24 px-6 md:px-16">
      <div className="max-w-[1516px] mx-auto relative z-10">
        
        {/* Billing cycle slider */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className={`text-xs font-bold ${!isAnnual ? 'text-on-surface' : 'text-on-surface-variant'}`}>Billed Monthly</span>
          <button 
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-brand-primary/20 hover:bg-brand-primary/30 p-1 transition-all flex items-center relative cursor-pointer"
          >
            <div className={`w-4 h-4 bg-brand-primary rounded-full transition-all absolute ${isAnnual ? 'right-1' : 'left-1'}`} />
          </button>
          <span className={`text-xs font-bold flex items-center gap-1.5 ${isAnnual ? 'text-on-surface' : 'text-on-surface-variant'}`}>
            Billed Annually
            <span className="bg-brand-secondary-container text-brand-on-secondary-container text-[8px] font-black uppercase px-2 py-0.5 rounded-full border border-brand-secondary/10">
              Save 20%
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Pricing Description Info */}
          <div className="p-8 md:p-10 flex flex-col justify-center bg-white/45 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest block mb-3">PRODUCT PLAN MATRIX</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight text-on-surface mb-4">
              Simple, transparent pricing.
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
              Choose the plan that fits your ambition. Deploy clean static web assets, responsive CRM tools, or edge containers instantly. No hidden fees.
            </p>
          </div>

          {/* Column 2: Free Plan */}
          <div className="p-8 md:p-10 bg-white/45 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-[0_12px_36px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/10 to-transparent -z-10" />
            
            <h3 className="font-sans font-extrabold text-2xl text-on-surface mb-2">Start with Horizon</h3>
            <div className="font-display font-black text-5xl text-on-surface mb-6 font-mono">
              $0
              <span className="font-sans font-bold text-xs text-on-surface-variant block mt-1">Free Sandbox forever</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1 font-sans text-xs font-bold text-on-surface-variant">
              <li className="flex items-center gap-3">
                <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" /> 
                <span>3 Sandbox Projects</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" /> 
                <span>Community SLA & Forum Support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" /> 
                <span>Basic Interactive Components</span>
              </li>
            </ul>

            <button
              onClick={() => setCheckoutPlan('Horizon Base')}
              className="w-full bg-white/50 backdrop-blur-md border border-white/70 shadow-sm text-on-surface rounded-full py-4 font-sans text-xs font-black hover:bg-white/90 active:scale-95 duration-200 transition-all cursor-pointer"
            >
              Get Started Free
            </button>
          </div>

          {/* Column 3: Pro Plan */}
          <div className="p-8 md:p-10 bg-white/45 backdrop-blur-xl rounded-[32px] border-2 border-brand-primary shadow-[0_16px_48px_rgba(255,94,58,0.1)] flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-container/20 to-transparent -z-10" />
            <div className="absolute top-4 right-4 bg-brand-primary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Popular
            </div>

            <h3 className="font-sans font-extrabold text-2xl text-on-surface mb-2">Paid Pro</h3>
            <div className="font-display font-black text-5xl text-on-surface mb-6 font-mono">
              ${calculatePrice(20)}
              <span className="font-sans font-bold text-xs text-on-surface-variant block mt-1">
                {isAnnual ? '$192 billed annually (save 20%)' : 'Billed month-to-month'}
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-1 font-sans text-xs font-bold text-on-surface-variant">
              <li className="flex items-center gap-3">
                <Check className="h-4.5 w-4.5 text-brand-secondary shrink-0" /> 
                <span>Unlimited Container Projects</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4.5 w-4.5 text-brand-secondary shrink-0" /> 
                <span>Priority SLA Premium Support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4.5 w-4.5 text-brand-secondary shrink-0" /> 
                <span>Custom Domain Linking</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4.5 w-4.5 text-brand-secondary shrink-0" /> 
                <span>Advanced API integrations</span>
              </li>
            </ul>

            <button
              onClick={() => setCheckoutPlan('Horizon Pro')}
              className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 border border-brand-primary shadow-md rounded-full py-4 font-sans text-xs font-black active:scale-95 duration-200 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 fill-white" /> Upgrade to Pro
            </button>
          </div>

        </div>

        {/* Enterprise Bottom Row */}
        <div id="enterprise" className="bg-white/40 backdrop-blur-xl rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#38BDF8]/5 -z-10" />
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-[#38BDF8]/10 rounded-full flex items-center justify-center text-[#38BDF8] shrink-0 border border-white/40">
              <Server className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-sans font-extrabold text-xl text-on-surface mb-1">Enterprise requirements?</h4>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant">Custom SLAs, private container clusters, and multi-user authentication registers.</p>
            </div>
          </div>
          <button
            onClick={() => setCheckoutPlan('Horizon Enterprise')}
            className="mt-4 md:mt-0 bg-white/50 hover:bg-white border border-white/60 shadow-sm text-on-surface rounded-full px-8 py-3.5 font-sans text-xs font-black transition-colors shrink-0"
          >
            Contact Sales
          </button>
        </div>
      </div>

      {/* Checkout Drawer Sandbox Simulation Modal */}
      <AnimatePresence>
        {checkoutPlan && (
          <div className="fixed inset-0 bg-black/45 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border text-left p-6 md:p-8 rounded-[32px] w-full max-w-md shadow-2xl relative"
            >
              <button 
                onClick={() => setCheckoutPlan(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-low transition-colors text-on-surface-variant"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                <CreditCard className="h-4 w-4" />
                <span>Simulated Secure Checkout</span>
              </div>

              <h3 className="font-sans font-black text-xl text-on-surface mb-2">
                Confirm your {checkoutPlan} Subscription
              </h3>
              
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                Experience Luminous Horizon parameters without constraints. As this is a front-end preview sandbox, no real currency is processed.
              </p>

              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="you@domain.com"
                    className="w-full bg-surface-low border border-black/10 p-3 rounded-xl text-xs placeholder:text-brand-outline/60 focus:outline-none focus:ring-1 focus:ring-brand-primary"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-wider">Simulated Card Detail</label>
                  <div className="grid grid-cols-3 gap-2">
                    <input 
                      type="text" 
                      required 
                      defaultValue="4242 •••• •••• 4242"
                      disabled
                      className="col-span-2 bg-black/5 border border-black/10 p-3 rounded-xl text-xs text-on-surface-variant font-mono"
                    />
                    <input 
                      type="text" 
                      required 
                      placeholder="12/28"
                      className="bg-surface-low border border-black/10 p-3 rounded-xl text-xs text-center placeholder:text-brand-outline/60 font-mono focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-extrabold text-xs py-3.5 rounded-full transition-transform active:scale-95 mt-2"
                >
                  Verify $0.00 Transaction
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
