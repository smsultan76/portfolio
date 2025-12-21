// app/nfc-redirect/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiInstagram, 
  FiMail, 
  FiPhone,
  FiGlobe,
  FiDownload
} from 'react-icons/fi';

const NFCRedirectPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [redirectTimer, setRedirectTimer] = useState(5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Auto-redirect to portfolio after 5 seconds
    const timer = setInterval(() => {
      setRedirectTimer((prev) => {
        if (prev <= 1) {
          window.location.href = '/'; // Redirect to your portfolio homepage
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  // Social links data
  const socialLinks = [
    { icon: <FiGithub />, label: 'GitHub', url: 'https://github.com/yourusername', color: 'hover:text-purple-400' },
    { icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-400' },
    { icon: <FiTwitter />, label: 'Twitter', url: 'https://twitter.com/yourusername', color: 'hover:text-cyan-400' },
    { icon: <FiInstagram />, label: 'Instagram', url: 'https://instagram.com/yourusername', color: 'hover:text-pink-400' },
  ];

  const contactLinks = [
    { icon: <FiMail />, label: 'hello@yourportfolio.com', action: 'mailto:hello@yourportfolio.com', color: 'hover:text-yellow-400' },
    { icon: <FiPhone />, label: '+1 (555) 123-4567', action: 'tel:+15551234567', color: 'hover:text-green-400' },
    { icon: <FiGlobe />, label: 'yourportfolio.com', action: 'https://yourportfolio.com', color: 'hover:text-indigo-400' },
    { icon: <FiDownload />, label: 'Download Resume', action: '/resume.pdf', color: 'hover:text-red-400' },
  ];

  // Calculate parallax effect
  const calculateParallax = (x: number, y: number, depth: number) => {
    const moveX = (x - window.innerWidth / 2) * depth;
    const moveY = (y - window.innerHeight / 2) * depth;
    return { x: moveX, y: moveY };
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Animated Galaxy Background with Mouse Interaction */}
      <div className="absolute inset-0">
        {/* Stars */}
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        {/* Animated Nebula */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
            style={{
              left: `${mousePosition.x / window.innerWidth * 100}%`,
              top: `${mousePosition.y / window.innerHeight * 100}%`,
              background: 'radial-gradient(circle, #8b5cf6, #3b0764, transparent)',
              transition: 'all 0.3s ease-out',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header with redirect timer */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome to My Digital Space
          </h1>
          <p className="text-gray-300 mt-2">
            Redirecting to portfolio in {redirectTimer} seconds...
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Go Now
          </button>
        </motion.header>

        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Side - Contact & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              transform: `translate(${calculateParallax(mousePosition.x, mousePosition.y, 0.01).x}px, 
                          ${calculateParallax(mousePosition.x, mousePosition.y, 0.01).y}px)`,
            }}
            className="flex-1 max-w-lg w-full"
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
              {/* Social Links */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></span>
                  Connect With Me
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                                hover:border-white/30 transition-all duration-300 ${link.color} group`}
                    >
                      <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Contact Links */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mr-4"></span>
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                                hover:border-white/30 transition-all duration-300 ${link.color} group cursor-pointer`}
                    >
                      <span className="text-xl transform group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Animated Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              transform: `translate(${calculateParallax(mousePosition.x, mousePosition.y, 0.02).x}px, 
                          ${calculateParallax(mousePosition.x, mousePosition.y, 0.02).y}px)`,
            }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Animated frame border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur-xl opacity-50 animate-pulse" />
              
              {/* Main frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 animate-gradient-x">
                <div className="rounded-2xl overflow-hidden bg-gray-900 p-2">
                  {/* Portrait placeholder - Replace with your image */}
                  <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden group">
                    {/* Replace this div with your actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 to-gray-800 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Your Portrait Here</span>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">Your Name</h3>
                        <p className="text-purple-300">Portfolio Owner</p>
                      </div>
                    </div>
                    
                    {/* Floating particles around portrait */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-purple-400"
                        animate={{
                          y: [0, -20, 0],
                          x: [0, Math.sin(i) * 20, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        style={{
                          left: `${(i * 12.5) + 5}%`,
                          top: '10%',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-8 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            Tap your NFC card again to revisit this page
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Made with ❤️ for my portfolio visitors
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default NFCRedirectPage;