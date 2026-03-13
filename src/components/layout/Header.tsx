import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAVIGATION, SITE_CONFIG } from '../../constants';
import { Button } from '../ui/base';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}>
            ALÊ<span className="text-primary italic">LOPES</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                isScrolled ? 'text-zinc-600' : 'text-zinc-300'
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button primary className="py-2.5 px-6 text-sm" href={SITE_CONFIG.whatsapp}>
            COMEÇAR AGORA
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-black' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-black' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button primary pulse className="w-full mt-4">
              QUERO TREINAR COM O ALÊ
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
