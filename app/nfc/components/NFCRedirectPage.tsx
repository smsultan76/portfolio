// app/nfc-redirect/components/NFCRedirectPage.tsx - Updated Layout
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PhotoFrame from './PhotoFrame';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import NavigationLinks from './NavigationLinks';
import Header from './Header';
import Background from './Background';


export default function NFCRedirectPage({ config }: NFCRedirectPageProps) {
  const [redirectTimer, setRedirectTimer] = useState(config.settings.redirectDelay);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'social' | 'contact' | 'navigation'>('social');
  const handleManualRedirect = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = config.user.portfolioUrl;
    }, 500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      <Background 
        type={config.settings.backgroundType}
        enabled={config.settings.enableBackgroundAnimation}
        mousePosition={mousePosition}
      />
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        <Header 
          name={config.user.name}
          onManualRedirect={handleManualRedirect}
        />
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
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

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'social' && (
                <SocialLinks 
                  links={config.socialLinks}
                  title="Connect With Me"
                />
              )}
              
              {activeTab === 'contact' && (
                <ContactInfo 
                  links={config.contactLinks}
                  contactInfo={config.contactInfo}
                  title="Get In Touch"
                />
              )}
              
              {activeTab === 'navigation' && (
                <NavigationLinks 
                  links={config.navigationLinks}
                  title="Explore My Portfolio"
                />
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
            <PhotoFrame
              photoUrl={config.user.photoUrl}
              name={config.user.name}
              title={config.user.title}
              theme={config.settings.theme}
            />
          </motion.div>
        </div>

        {/* Quick Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} {config.user.name}. All rights reserved.</p>
          <p className="mt-2">Scan NFC card again to revisit this page</p>
        </motion.div>
      </div>
    </div>
  );
}