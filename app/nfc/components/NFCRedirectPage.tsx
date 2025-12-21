"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NFCRedirectConfig } from '../config';
import PhotoFrame from './PhotoFrame';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import Header from './Header';
import Footer from './Footer';
import Background from './Background';
import RedirectOverlay from './RedirectOverlay';

interface NFCRedirectPageProps {
  config: NFCRedirectConfig;
}

export default function NFCRedirectPage({ config }: NFCRedirectPageProps) {
  const [redirectTimer, setRedirectTimer] = useState(config.settings.redirectDelay);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Auto-redirect timer
    const timer = setInterval(() => {
      setRedirectTimer((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          setTimeout(() => {
            window.location.href = config.user.portfolioUrl;
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, [config.user.portfolioUrl]);

  const handleManualRedirect = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = config.user.portfolioUrl;
    }, 500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <Background 
        type={config.settings.backgroundType}
        enabled={config.settings.enableBackgroundAnimation}
        mousePosition={mousePosition}
      />

      {/* Redirect Overlay */}
      {isRedirecting && <RedirectOverlay />}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <Header 
          name={config.user.name}
          redirectTimer={redirectTimer}
          onManualRedirect={handleManualRedirect}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8">
          {/* Left Column - Social & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-lg w-full"
          >
            <div className="space-y-8">
              {/* Social Links */}
              <SocialLinks 
                links={config.socialLinks}
                title="Connect With Me"
              />

              {/* Contact Information */}
              <ContactInfo 
                links={config.contactLinks}
                title="Get In Touch"
              />
            </div>
          </motion.div>

          {/* Right Column - Large Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center w-full max-w-2xl"
          >
            <PhotoFrame
              photoUrl={config.user.photoUrl}
              name={config.user.name}
              title={config.user.title}
              theme={config.settings.theme}
            />
          </motion.div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}