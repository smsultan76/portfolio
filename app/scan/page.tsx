"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import StarBackground from './components/StarBackground';
import Icon from './components/Icon';
import { USER_CONFIG } from '@/app/config/user-config';
import { SOCIAL_LINKS, CONTACT_LINKS, NAVIGATION_LINKS } from '@/app/config/social-links';

export default function NFCRedirectPage() {
  const [activeSection, setActiveSection] = useState<'social' | 'contact' | 'work' | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <StarBackground starCount={120} mouseFollowStrength={0.3} />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-20" />
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 overflow-hidden">
                  {/* Profile Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{USER_CONFIG.name}</h1>
                <p className="text-xl text-purple-300">{USER_CONFIG.title}</p>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                  Welcome! Thanks for scanning my NFC card. Here's everything you need to connect with me.
                </p>
              </div>
            </div>
          </motion.header>

          {/* Main Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`backdrop-blur-sm bg-white/5 rounded-2xl border p-6 transition-all duration-300 ${
                activeSection === 'social' 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                  : 'border-white/10 hover:border-purple-500/30'
              }`}
              onMouseEnter={() => setActiveSection('social')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Icon name="messageCircle" className="text-xl text-purple-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Social Links</h2>
              </div>
              
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-2 rounded-lg ${
                      link.color.replace('hover:', 'bg-') + '/20'
                    }`}>
                      <Icon name={link.icon} className="text-lg" />
                    </div>
                    <span className="text-white flex-1">{link.label}</span>
                    <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`backdrop-blur-sm bg-white/5 rounded-2xl border p-6 transition-all duration-300 ${
                activeSection === 'contact' 
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                  : 'border-white/10 hover:border-blue-500/30'
              }`}
              onMouseEnter={() => setActiveSection('contact')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Icon name="phone" className="text-xl text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Contact Info</h2>
              </div>
              
              <div className="space-y-4">
                {CONTACT_LINKS.slice(0, 3).map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-2 rounded-lg ${
                      link.id.includes('email') ? 'bg-yellow-500/20' :
                      link.id === 'phone' ? 'bg-green-500/20' : 'bg-blue-500/20'
                    }`}>
                      <Icon name={link.icon} className="text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{link.label}</div>
                      <div className="text-gray-400 text-xs">
                        {link.id.includes('email') ? 'Email' : 
                         link.id === 'phone' ? 'Phone' : 'Website'}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{USER_CONFIG.location}</div>
                    <div className="text-gray-400 text-xs">Location</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Portfolio Navigation Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`backdrop-blur-sm bg-white/5 rounded-2xl border p-6 transition-all duration-300 ${
                activeSection === 'work' 
                  ? 'border-green-500/50 shadow-2xl shadow-green-500/20' 
                  : 'border-white/10 hover:border-green-500/30'
              }`}
              onMouseEnter={() => setActiveSection('work')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <Icon name="briefcase" className="text-xl text-green-400" />
                </div>
                <h2 className="text-xl font-bold text-white">My Work</h2>
              </div>
              
              <div className="space-y-3 mb-6">
                {NAVIGATION_LINKS.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => window.location.href = link.href}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/30 transition-all duration-300 w-full text-left group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                      <Icon name={link.icon} className="text-lg text-green-400" />
                    </div>
                    <span className="text-white flex-1">{link.name}</span>
                    <span className="text-gray-400 group-hover:text-green-400 transition-colors">→</span>
                  </motion.button>
                ))}
              </div>
              
              <motion.a
                href={USER_CONFIG.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30 border border-green-500/30 hover:border-green-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon name="download" className="text-lg" />
                <span className="text-white font-medium">Download Resume</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Center Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <motion.a
              href="contact"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <span>Let's Build Something Amazing!</span>
                <span className="text-2xl animate-pulse group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 pt-8 border-t border-white/10 text-center"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {USER_CONFIG.name}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Scan NFC card again to refresh connection
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}