// app/nfc-redirect/components/Header.tsx
"use client";

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface HeaderProps {
  name: string;
  onManualRedirect: () => void;
}

export default function Header({ name, onManualRedirect }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8 md:mb-12"
    >
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
        Hi, I'm <a href="" onClick={onManualRedirect} >{name}</a>
      </h1>
      <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
        Thanks for scanning my NFC card! Here's a quick way to connect with me.
      </p>
    </motion.header>
  );
}