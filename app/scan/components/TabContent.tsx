"use client";

import { motion } from 'framer-motion';
import { SOCIAL_LINKS, CONTACT_LINKS, NAVIGATION_LINKS } from '@/app/config/social-links';
import { USER_CONFIG } from '@/app/config/user-config';

interface TabContentProps {
  activeTab: 'social' | 'contact' | 'navigation';
}

export default function TabContent({ activeTab }: TabContentProps) {
  const renderSocialLinks = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {SOCIAL_LINKS.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.03,
            x: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm 
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
          <span className="font-medium text-white flex-1">{link.label}</span>
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Visit →
          </span>
        </motion.a>
      ))}
    </div>
  );

  const renderContactLinks = () => (
    <>
      <div className="space-y-3 mb-6">
        {CONTACT_LINKS.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            whileHover={{ 
              x: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm 
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
            <span className="font-medium text-white flex-1">{link.label}</span>
            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              {link.id.includes('email') ? 'Click to email' : 
                link.id === 'phone' ? 'Click to call' :
                link.id === 'resume' ? 'Download' : 'Visit'}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Location Info */}
      <div className="pt-4 border-t border-white/10">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
          <span className="text-2xl">🏠</span>
          <div>
            <h3 className="font-medium text-white">Location</h3>
            <p className="text-gray-300">{USER_CONFIG.location}</p>
          </div>
        </div>
      </div>
    </>
  );

  const renderNavigationLinks = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {NAVIGATION_LINKS.map((link, index) => (
        <motion.button
          key={link.id}
          onClick={() => window.location.href = link.href}
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
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {link.href.startsWith('#') ? 'Scroll' : 'Go'}
          </span>
        </motion.button>
      ))}
    </div>
  );

  const getTabConfig = () => {
    switch (activeTab) {
      case 'social':
        return {
          title: 'Connect With Me',
          gradient: 'from-blue-500 to-purple-500',
          content: renderSocialLinks()
        };
      case 'contact':
        return {
          title: 'Get In Touch',
          gradient: 'from-cyan-500 to-blue-500',
          content: renderContactLinks()
        };
      case 'navigation':
        return {
          title: 'Explore My Portfolio',
          gradient: 'from-purple-500 to-pink-500',
          content: renderNavigationLinks()
        };
    }
  };

  const config = getTabConfig();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
        <span className={`w-8 h-1 bg-gradient-to-r ${config.gradient} mr-4`}></span>
        {config.title}
      </h2>
      {config.content}
    </motion.div>
  );
}