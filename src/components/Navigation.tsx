import React, { useState } from 'react';
import { Sparkles, Globe, Menu, X } from 'lucide-react';

interface NavigationProps {
  onStartBuilding: () => void;
}

export default function Navigation({ onStartBuilding }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'ES' | 'JA'>('EN');

  const handleLanguageToggle = () => {
    const langs: ('EN' | 'ES' | 'JA')[] = ['EN', 'ES', 'JA'];
    const nextIndex = (langs.indexOf(currentLang) + 1) % langs.length;
    setCurrentLang(langs[nextIndex]);
  };

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Resources', href: '#resources' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Enterprise', href: '#enterprise' }
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full border border-white/60 bg-white/45 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] z-50 flex justify-between items-center px-8 py-3 transition-all">
        {/* Logo */}
        <a className="flex items-center gap-2 group" href="#">
          <div className="h-8 w-8 rounded-full border-2 border-on-surface flex items-center justify-center transition-transform group-hover:rotate-12 duration-300">
            <svg className="h-5 w-5 text-on-surface fill-none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 10V22M21 10V22M11 16H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </div>
          <span className="font-display font-extrabold tracking-tighter text-xl text-on-surface">
            Horizon
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-on-surface-variant font-semibold hover:text-brand-primary transition-colors duration-300 text-sm active:scale-95 duration-200 transform"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLanguageToggle}
            className="text-on-surface-variant hover:text-brand-primary flex items-center gap-1 text-xs font-bold transition-all p-2 rounded-full hover:bg-white/40 active:scale-90"
            title="Change language"
          >
            <Globe className="h-4 w-4" />
            <span className="w-5 text-left font-mono">{currentLang}</span>
          </button>

          <button
            onClick={onStartBuilding}
            className="bg-white/50 text-on-surface border border-white/70 shadow-sm backdrop-blur-md text-sm font-semibold px-6 py-2 rounded-full hover:bg-white/80 hover:border-brand-primary/20 transition-all active:scale-95 duration-100 flex items-center gap-1"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-primary animate-pulse" />
            Start Building
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-on-surface-variant hover:text-brand-primary active:scale-90 rounded-full"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[90%] bg-surface-low/95 backdrop-blur-2xl rounded-3xl border border-white/60 p-6 shadow-[0_16px_48px_rgba(0,0,0,0.15)] z-40 transition-all animate-in fade-in duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-brand-primary font-bold text-base py-2 border-b border-surface-highest/50 transition-colors"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartBuilding();
              }}
              className="mt-2 w-full bg-brand-primary text-white border border-brand-primary shadow-md text-center py-3 rounded-full font-bold transition-transform active:scale-95"
            >
              Start Building Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
