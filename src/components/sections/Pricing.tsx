import React from 'react';
import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { Section, Button } from '../ui/base';
import { PRICING_PLANS } from '../../constants';

export const Pricing = () => {
  return (
    <Section id="planos" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
          Invista no seu <span className="text-primary italic">novo eu.</span>
        </h2>
        <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-8" />
        <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
          Escolha o plano que melhor se adapta aos seus objetivos e comece sua transformação ainda hoje.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className={`relative p-10 rounded-[2.5rem] border ${
              plan.recommended 
                ? 'border-primary bg-zinc-950 text-white shadow-2xl shadow-primary/20' 
                : 'border-zinc-200 bg-zinc-50 text-zinc-900'
            } flex flex-col h-full overflow-hidden`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-bl-2xl">
                Mais Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{plan.name}</h3>
              <p className={plan.recommended ? 'text-zinc-400' : 'text-zinc-500'}>{plan.desc}</p>
            </div>

            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-black tracking-tighter">{plan.price}</span>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className={`mt-1 p-0.5 rounded-full ${plan.recommended ? 'bg-primary' : 'bg-zinc-200'}`}>
                    <Check className={`w-3.5 h-3.5 ${plan.recommended ? 'text-white' : 'text-zinc-500'}`} />
                  </div>
                  <span className={`text-sm ${plan.recommended ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              primary={plan.recommended} 
              className="w-full"
            >
              SELECIONAR PLANO
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
