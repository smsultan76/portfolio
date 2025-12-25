"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import StarBackground from './components/StarBackground';
import Icon from './components/Icon';
import { USER_CONFIG } from '@/app/config/user-config';
import { SOCIAL_LINKS, CONTACT_LINKS, NAVIGATION_LINKS } from '@/app/config/social-links';
import Image from 'next/image';

export default function NFCPage() {
  const [activeSection, setActiveSection] = useState<'social' | 'contact' | 'work' | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
    <title>{USER_CONFIG.name}</title>
      <StarBackground starCount={200} mouseFollowStrength={0.3} />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-6xl">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex flex-row items-center gap-6">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex-shrink-0"
              >
                <div className="relative w-48 h-48 rounded-[70] bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-green-900 overflow-hidden shadow-2xl">
                  {USER_CONFIG.photoUrl ? (
                    <Image
                      src={USER_CONFIG.photoUrl}
                      alt={USER_CONFIG.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <Icon name="user" className="text-gray-300 text-5xl md:text-6xl" />
                    </div>
                  )}
                </div>
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -bottom-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full border-2 border-gray-900"
                />
              </motion.div>

              {/* Name & Title - Centered on mobile, left-aligned on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <div className="inline-block">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-4 mx-auto lg:mx-0"
                  />
                  <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {USER_CONFIG.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-purple-300 font-medium mb-4">
                    {USER_CONFIG.title}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 mx-auto lg:mx-0"
                  />
                </div>
                
                <p className="text-gray-300 mt-4 md:mt-6 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                  Welcome! Thanks for scanning my NFC card. Here's everything you need to connect with me.
                </p>
              </motion.div>
            </div>
          </motion.header>

          {/* Main Dashboard - 3 Columns on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30">
                  <Icon name="phone" className="text-xl text-blue-300" />
                </div>
                <h2 className="text-xl font-bold text-white">Contact Info</h2>
              </div>
              
              {/* 2-column grid for mobile, 1 column for desktop */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                {CONTACT_LINKS.slice(0, 5).map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg ${
                        link.id.includes('email') ? 'bg-yellow-500/30' :
                        link.id === 'phone' ? 'bg-green-500/30' : 
                        link.id === 'resume' ? 'bg-red-500/30' : 'bg-blue-500/30'
                      }`}>
                        <Icon name={link.icon} className="text-lg text-white" />
                      </div>
                      <span className="text-white text-sm font-medium md:hidden">
                        {link.id.includes('email') ? 'Email' : 
                         link.id === 'phone' ? 'Phone' :
                         link.id === 'resume' ? 'Resume' : 'Website'}
                      </span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-white text-sm font-medium hidden md:block">{link.label}</div>
                      <div className="text-gray-300 text-xs md:hidden truncate">{link.label}</div>
                    </div>
                    <div className="hidden md:block text-gray-300 group-hover:text-white transition-colors">
                      {link.id.includes('email') ? '📧' : 
                       link.id === 'phone' ? '📞' :
                       link.id === 'resume' ? '📄' : '🌐'}
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Location - Full width on mobile */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30">
                    <span className="text-lg text-white">📍</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">{USER_CONFIG.location}</div>
                    <div className="text-gray-400 text-xs">Location</div>
                  </div>
                </div>
              </div>
            </motion.div>


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
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30">
                  <Icon name="messageCircle" className="text-xl text-purple-300" />
                </div>
                <h2 className="text-xl font-bold text-white">Social Links</h2>
              </div>
              
              {/* 2-column grid for mobile, 1 column for desktop */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
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
                      link.id === 'github' ? 'bg-gray-800/30' :
                      link.id === 'linkedin' ? 'bg-blue-500/30' :
                      link.id === 'twitter' ? 'bg-blue-400/30' :
                      link.id === 'facebook' ? 'bg-blue-600/30' : 'bg-gray-800/30'
                    }`}>
                      <Icon name={link.icon} className="text-lg text-white" />
                    </div>
                    <span className="text-white flex-1 text-sm md:text-base">{link.label}</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors hidden md:inline">→</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors md:hidden">↗</span>
                  </motion.a>
                ))}
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
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/30 to-emerald-500/30">
                  <Icon name="briefcase" className="text-xl text-green-300" />
                </div>
                <h2 className="text-xl font-bold text-white">My Portfolio</h2>
              </div>
              
              {/* 2-column grid for mobile, 1 column for desktop */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3 mb-6">
                {NAVIGATION_LINKS.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => window.location.href = link.href}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/30 transition-all duration-300 w-full text-left group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/30 to-emerald-500/30">
                        <Icon name={link.icon} className="text-lg text-green-300" />
                      </div>
                      <span className="text-white text-sm font-medium md:hidden">{link.name}</span>
                    </div>
                    <span className="text-white flex-1 hidden md:block">{link.name}</span>
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors hidden md:inline">
                      {link.href.startsWith('#') ? '↓' : '→'}
                    </span>
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors md:hidden text-xs">
                      {link.href.startsWith('#') ? 'Scroll' : 'Visit'}
                    </span>
                  </motion.button>
                ))}
              </div>
              
              {/* Resume Download Button - Full width on mobile */}
              <motion.a
                href={USER_CONFIG.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full p-3 md:p-4 rounded-xl bg-gradient-to-r from-green-600/30 to-emerald-600/30 hover:from-green-600/40 hover:to-emerald-600/40 border border-green-500/30 hover:border-green-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon name="download" className="text-lg text-white" />
                <span className="text-white font-medium text-sm md:text-base">Download Resume</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Center Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 md:mt-12 flex justify-center"
          >
            <motion.a
              href="contact"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 shadow-2xl w-full max-w-md"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-xl md:text-2xl">✨</span>
                <span className="text-sm md:text-base">Let's Build Something Amazing!</span>
                <span className="text-xl md:text-2xl animate-pulse group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center"
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