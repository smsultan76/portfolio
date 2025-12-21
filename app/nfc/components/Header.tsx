// app/nfc-redirect/components/Header.tsx
"use client";

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface HeaderProps {
  name: string;
  redirectTimer: number;
  onManualRedirect: () => void;
}

export default function Header({ name, redirectTimer, onManualRedirect }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8 md:mb-12"
    >
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
        Hi, I'm {name}
      </h1>
      <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
        Thanks for scanning my NFC card! Here's a quick way to connect with me.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
          <span className="text-gray-200">
            Redirecting in <span className="font-bold text-white">{redirectTimer}s</span>
          </span>
        </div>
        
        <motion.button
          onClick={onManualRedirect}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <span>Go to Portfolio</span>
          <FiArrowRight className="text-xl" />
        </motion.button>
      </div>
    </motion.header>
  );
}