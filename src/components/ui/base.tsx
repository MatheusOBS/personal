import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../constants';

export const Button = ({ 
  children, 
  className = "", 
  primary = false, 
  pulse = false,
  href = SITE_CONFIG.whatsapp 
}: { 
  children: React.ReactNode, 
  className?: string, 
  primary?: boolean, 
  pulse?: boolean,
  href?: string
}) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300
      ${primary ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-orange-600' : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'}
      ${pulse ? 'animate-pulse-cta' : ''}
      ${className}
    `}
  >
    {children}
  </motion.a>
);

export const Section = ({ 
  children, 
  className = "", 
  id = "" 
}: { 
  children: React.ReactNode, 
  className?: string,
  id?: string
}) => (
  <section id={id} className={`py-20 px-6 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${className}`}>
    {children}
  </span>
);
