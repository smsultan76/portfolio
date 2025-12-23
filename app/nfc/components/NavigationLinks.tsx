// app/nfc-redirect/components/NavigationLinks.tsx
"use client";

import { motion } from 'framer-motion';
import { NavigationLink } from '../types';

interface NavigationLinksProps {
  links: NavigationLink[];
  title?: string;
}

export default function NavigationLinks({ links, title = "Quick Navigation" }: NavigationLinksProps) {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl"
    >
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
          <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></span>
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {links.map((link, index) => (
          <motion.button
            key={link.id}
            onClick={() => scrollToSection(link.href)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.05,
              x: 3,
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 
                     border border-white/10 hover:border-blue-400/50 transition-all duration-300 
                     group cursor-pointer"
          >
            <motion.span
              className="text-2xl transform group-hover:scale-110 transition-transform duration-300 text-blue-400"
              animate={{
                rotate: link.id === 'home' ? [0, 5, -5, 0] : 0,
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {link.icon}
            </motion.span>
            <span className="font-medium text-white text-sm text-center">{link.name}</span>
            <motion.span
              className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: -5 }}
              animate={{ y: 0 }}
            >
              {link.href.startsWith('#') ? 'Scroll' : 'Go'}
            </motion.span>
          </motion.button>
        ))}
      </div>

      {/* Status Indicators */}
      <div className="mt-6 space-y-2">
        <motion.div 
          className="flex items-center gap-2 p-3 rounded-lg bg-white/5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Available for freelance work</span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2 p-3 rounded-lg bg-white/5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Open to full-time opportunities</span>
        </motion.div>
      </div>
    </motion.div>
  );
}