import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { Section } from '../ui/base';
import { FAQ_ITEMS } from '../../constants';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-zinc-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <Badge className="bg-primary/10 text-primary mb-4">Dúvidas Frequentes</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
            Tudo o que você <br />
            <span className="text-zinc-400 italic font-serif">precisa saber.</span>
          </h2>
          <p className="text-zinc-600 mb-8 max-w-sm">
            Ainda com dúvidas se o Método SlimFit28 é para você? Confira as perguntas mais comuns de nossas alunas.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button 
                className="w-full p-6 text-left flex items-center justify-between group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-zinc-900 group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <div className={`p-2 rounded-full ${openIndex === idx ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-zinc-50 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${className}`}>
    {children}
  </span>
);
