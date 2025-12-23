"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import StarBackground from './components/StarBackground';
import ProfileCard from './components/ProfileCard';
import TabContent from './components/TabContent';
import { USER_CONFIG } from '@/app/config/user-config';

export default function NFCRedirectPage() {
  const [activeTab, setActiveTab] = useState<'social' | 'contact' | 'navigation'>('social');
  const [isHovering, setIsHovering] = useState(false);

  const tabs = [
    { id: 'social', label: 'NETWORK', icon: '🔗', color: 'from-cyan-500 to-blue-500' },
    { id: 'contact', label: 'CONTACT', icon: '📡', color: 'from-purple-500 to-pink-500' },
    { id: 'navigation', label: 'ACCESS', icon: '🚪', color: 'from-green-500 to-emerald-500' },
  ] as const;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Cyberpunk Star Background */}
      <StarBackground starCount={300} mouseFollowStrength={0.6} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Scan lines effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.02)_50%)] bg-[size:100%_4px] opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Holographic Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-50 rounded-full" />
              <h1 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Welcome
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              Thanks for scanning my NFC card! Let's connect and build something amazing together.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Profile Matrix */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="relative group">
                {/* Matrix border */}
                <div className="absolute -ins-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl border border-cyan-500/30" />
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-2xl blur-xl" />
                
                <ProfileCard onPhotoClick={() => console.log('Photo clicked')} />
                
                {/* Tech stats */}
                <div className="mt-6 space-y-3">
                  {[
                    { label: 'SYSTEM', value: 'ONLINE', status: 'active' },
                    { label: 'SECURITY', value: 'LEVEL 9', status: 'secure' },
                    { label: 'CONNECTION', value: 'STABLE', status: 'good' },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-black/50 rounded-lg border border-cyan-500/20">
                      <span className="text-cyan-400 text-sm font-mono">{stat.label}</span>
                      <span className={`text-sm font-mono ${
                        stat.status === 'active' ? 'text-green-400' :
                        stat.status === 'secure' ? 'text-yellow-400' : 'text-cyan-400'
                      }`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Control Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              {/* Terminal-style tabs */}
              <div className="mb-8 flex space-x-1 bg-black/50 rounded-t-xl p-2 border-b border-cyan-500/30">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-mono text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-black`
                        : 'bg-gray-900/50 text-gray-400 hover:text-cyan-300'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <span className="ml-2 animate-pulse">●</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Terminal content */}
              <div className="bg-black/70 rounded-b-xl rounded-tr-xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center p-4 border-b border-cyan-500/20 bg-black/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-cyan-300 font-mono text-sm">
                      TERMINAL - {activeTab.toUpperCase()} PROTOCOL
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <TabContent activeTab={activeTab} />
                </div>
              </div>

              {/* Action Buttons - HUD Style */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white p-4 rounded-xl border border-cyan-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-xl">⚡</span>
                    <span className="font-mono font-bold">INITIATE CONTACT</span>
                    <span className="text-xl animate-pulse">▶</span>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-xl border border-purple-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-xl">💾</span>
                    <span className="font-mono font-bold">DOWNLOAD PROFILE</span>
                    <span className="text-xl">↓</span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Footer - Status Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 p-4 bg-black/50 rounded-xl border border-cyan-500/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-cyan-300 font-mono text-sm">SYSTEM ACTIVE</span>
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  LAST ACCESS: {new Date().toLocaleDateString()}
                </div>
              </div>
              <div className="text-gray-500 text-sm font-mono">
                NFC SCAN PROTOCOL v2.0 • {USER_CONFIG.name.toUpperCase()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}