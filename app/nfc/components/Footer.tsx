// app/nfc-redirect/components/Footer.tsx
"use client";

import { motion } from 'framer-motion';
import { FiSmartphone } from 'react-icons/fi';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="text-center mt-12 pt-8 border-t border-white/10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-400">
          <FiSmartphone className="animate-pulse" />
          <span>Scan NFC card again to revisit</span>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <span className="text-sm text-gray-300">
            Made with ❤️ using Next.js & Tailwind
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
}