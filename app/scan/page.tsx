// app/scan/page.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiGlobe,
  FiDownload,
  FiPhone,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMessageCircle,
  FiFacebook,
} from 'react-icons/fi';

const USER_CONFIG = {
  name: "Sultanum Mobin",
  title: "Full Stack Developer",
  email: "sultanum.mobin@gmail.com",
  alternateEmail: "sultan.1021@fec.edu.bd",
  phone: "+880 1723-332972",
  website: "http://sultanum-mobin.vercel.app/",
  resumeUrl: "/resume.pdf",
  photoUrl: "/profile.png",
  portfolioUrl: "/",
  location: "Faridpur, Dhaka, Bangladesh"
};

const SOCIAL_LINKS = [
  { 
    id: 'github',
    icon: <FiGithub />, 
    label: 'GitHub', 
    url: 'https://github.com/smsultan76', 
    color: 'hover:text-gray-200'
  },
  { 
    id: 'linkedin',
    icon: <FiLinkedin />, 
    label: 'LinkedIn', 
    url: 'https://linkedin.com/in/smsultan76', 
    color: 'hover:text-blue-400'
  },
  { 
    id: 'twitter',
    icon: <FiTwitter />, 
    label: 'Twitter', 
    url: 'https://twitter.com/yourusername', 
    color: 'hover:text-blue-400'
  },
  { 
    id: 'facebook',
    icon: <FiFacebook />, 
    label: 'Facebook', 
    url: 'https://facebook.com/smsultan76', 
    color: 'hover:text-blue-400'
  },
];

const CONTACT_LINKS = [
  { 
    id: 'email-primary',
    icon: <FiMail />, 
    label: USER_CONFIG.email, 
    action: `mailto:${USER_CONFIG.email}`, 
    color: 'hover:text-yellow-400' 
  },
  { 
    id: 'email-secondary',
    icon: <FiMail />, 
    label: USER_CONFIG.alternateEmail, 
    action: `mailto:${USER_CONFIG.alternateEmail}`, 
    color: 'hover:text-yellow-400' 
  },
  { 
    id: 'phone',
    icon: <FiPhone />, 
    label: USER_CONFIG.phone, 
    action: `tel:${USER_CONFIG.phone.replace(/\s+/g, '')}`, 
    color: 'hover:text-green-400' 
  },
  { 
    id: 'website',
    icon: <FiGlobe />, 
    label: 'yourportfolio.com', 
    action: USER_CONFIG.website, 
    color: 'hover:text-indigo-400' 
  },
  { 
    id: 'resume',
    icon: <FiDownload />, 
    label: 'Download Resume', 
    action: USER_CONFIG.resumeUrl, 
    color: 'hover:text-red-400' 
  },
];

const NAVIGATION_LINKS = [
  { id: 'home', name: 'Home', href: '/', icon: <FiHome /> },
  { id: 'about', name: 'About', href: '#about', icon: <FiUser /> },
  { id: 'skills', name: 'Skills', href: '/#skills', icon: <FiCode /> },
  { id: 'projects', name: 'Projects', href: '/#projects', icon: <FiBriefcase /> },
  { id: 'contact', name: 'Contact', href: 'contact', icon: <FiMessageCircle /> },
];

export default function NFCRedirectPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'social' | 'contact' | 'navigation'>('social');

  // Calculate parallax effect for background
  const parallaxStyle = {
    transform: `translate(
      ${(mousePosition.x / window.innerWidth - 0.5) * 20}px,
      ${(mousePosition.y / window.innerHeight - 0.5) * 20}px
    )`,
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
        
        {/* Moving gradient */}
        <div 
          className="absolute inset-0 opacity-30 transition-transform duration-300 ease-out"
          style={parallaxStyle}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        </div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Hi, I'm {USER_CONFIG.name}
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Thanks for scanning my NFC card! Let's connect.
          </p>

        </motion.header>

        {/* Main Content Area */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
          {/* Left Column - Content Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-2 backdrop-blur-sm bg-white/5 rounded-2xl p-4"
            >
              <button
                onClick={() => setActiveTab('social')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'social'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                Social Links
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'contact'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                Contact Info
              </button>
              <button
                onClick={() => setActiveTab('navigation')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'navigation'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                Quick Navigation
              </button>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Social Links Tab */}
              {activeTab === 'social' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl"
                >
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mr-4"></span>
                    Connect With Me
                  </h2>
                  
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
                </motion.div>
              )}
              
              {/* Contact Info Tab */}
              {activeTab === 'contact' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl"
                >
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mr-4"></span>
                    Get In Touch
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    {CONTACT_LINKS.map((link, index) => (
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
                </motion.div>
              )}
              
              {/* Navigation Links Tab */}
              {activeTab === 'navigation' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl"
                >
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></span>
                    Explore My Portfolio
                  </h2>
                  
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
                </motion.div>
              )}
            </motion.div>

            {/* Let's Talk Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-center"
            >
              <motion.a
                href="contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl 
                         font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">💬</span>
                <span>Let's Build Something Amazing!</span>
                <span className="text-2xl animate-pulse">→</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Large Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end items-start"
          >
            <div className="relative w-full max-w-xl">
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl opacity-30 animate-pulse" />
              
              {/* Main frame */}
              <motion.div
                initial={{ scale: 0.9, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative rounded-3xl p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500"
              >
                <div className="rounded-2xl overflow-hidden bg-gray-900 p-4">
                  {/* Photo container */}
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group">
                    {USER_CONFIG.photoUrl ? (
                      <Image
                        src={USER_CONFIG.photoUrl}
                        alt={USER_CONFIG.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                        <FiUser className="text-gray-400 text-8xl mb-4" />
                        <span className="text-gray-400 text-lg">Add your photo</span>
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="absolute bottom-0 left-0 right-0 p-6"
                      >
                        <h3 className="text-3xl font-bold text-white mb-2">{USER_CONFIG.name}</h3>
                        <p className="text-purple-300 text-lg">{USER_CONFIG.title}</p>
                        <div className="mt-4 flex gap-2">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-3 h-3 rounded-full bg-white animate-bounce"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Simple Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} {USER_CONFIG.name}. All rights reserved.</p>
          <p className="mt-2">Scan NFC card again to revisit this page</p>
        </motion.div>
      </div>
    </div>
  );
}