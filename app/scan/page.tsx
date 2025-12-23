"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import StarBackground from './components/StarBackground';
import ProfileCard from './components/ProfileCard';
import TabContent from './components/TabContent';
import { USER_CONFIG } from '@/app/config/user-config';

export default function NFCRedirectPage() {
  const [activeTab, setActiveTab] = useState<'social' | 'contact' | 'navigation'>('social');
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const tabs = [
    { id: 'social', label: 'Social Links' },
    { id: 'contact', label: 'Contact Info' },
    { id: 'navigation', label: 'Quick Navigation' },
  ] as const;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Animated Star Background */}
      <StarBackground starCount={150} mouseFollowStrength={0.4} />

      {/* Additional gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
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
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TabContent activeTab={activeTab} />
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

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end items-start"
          >
            <ProfileCard onPhotoClick={() => setShowPhotoModal(true)} />
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

      {/* Photo Modal */}
      {showPhotoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowPhotoModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content would go here */}
            <button
              onClick={() => setShowPhotoModal(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}