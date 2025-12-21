// app/nfc-redirect/components/SocialLinks.tsx
"use client";

import { motion } from 'framer-motion';
import { SocialLink } from '../config';

interface SocialLinksProps {
  links: SocialLink[];
  title: string;
}

export default function SocialLinks({ links, title }: SocialLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
        <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></span>
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              x: 5,
            }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm 
                      border border-white/10 hover:border-white/30 transition-all duration-300 
                      ${link.color} group`}
          >
            <motion.span
              className="text-2xl transform group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {link.icon}
            </motion.span>
            <span className="font-medium text-white">{link.label}</span>
            <motion.span
              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
            >
              →
            </motion.span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}