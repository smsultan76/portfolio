// app/nfc-redirect/components/ContactInfo.tsx
"use client";

import { motion } from 'framer-motion';
import { ContactLink } from '../config';

interface ContactInfoProps {
  links: ContactLink[];
  title: string;
}

export default function ContactInfo({ links, title }: ContactInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
        <span className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mr-4"></span>
        {title}
      </h2>
      
      <div className="space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.action}
            target={link.action.startsWith('http') ? '_blank' : undefined}
            rel={link.action.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            whileHover={{ 
              x: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm 
                      border border-white/10 hover:border-white/30 transition-all duration-300 
                      ${link.color} group cursor-pointer`}
          >
            <motion.span
              className="text-xl transform group-hover:scale-110 transition-transform duration-300"
              animate={{
                rotate: link.id === 'phone' ? [0, 10, -10, 0] : 0,
              }}
              transition={{ repeat: link.id === 'phone' ? Infinity : 0, duration: 2 }}
            >
              {link.icon}
            </motion.span>
            <span className="font-medium text-white">{link.label}</span>
            <motion.span
              className="ml-auto text-xs opacity-0 group-hover:opacity-100 text-gray-300"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              {link.id === 'email' ? 'Click to email' : 
               link.id === 'phone' ? 'Click to call' :
               link.id === 'resume' ? 'Click to download' : 'Click to visit'}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}