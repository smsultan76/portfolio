// app/components/Footer.tsx
'use client';
import { motion } from 'framer-motion';

// Proper SVG icons for social media
const SocialIcon = ({ icon }: { icon: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    email: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
      </svg>
    ),
    facebook: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  };

  return icons[icon] || null;
};

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/smsultan76', 
    icon: 'github',
    color: 'hover:text-gray-400'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/smsultan76', 
    icon: 'linkedin',
    color: 'hover:text-blue-400'
  },
  { 
    name: 'Twitter', 
    url: 'https://twitter.com/yourusername', 
    icon: 'twitter',
    color: 'hover:text-blue-400'
  },
  { 
    name: 'Email', 
    url: 'mailto:sultanum.mobin@gmail.com', 
    icon: 'email',
    color: 'hover:text-red-400'
  },
  { 
    name: 'Facebook', 
    url: 'https://facebook.com/smsultan76', 
    icon: 'facebook',
    color: 'hover:text-red-400'
  },
  // { 
  //   name: 'Instagram', 
  //   url: 'https://instagram.com/yourusername', 
  //   icon: 'instagram',
  //   color: 'hover:text-pink-400'
  // },
  // { 
  //   name: 'YouTube', 
  //   url: 'https://youtube.com/yourchannel', 
  //   icon: 'youtube',
  //   color: 'hover:text-red-400'
  // },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const contactInfo = [
  {
    icon: '📍',
    title: 'Location',
    content: 'Dhaka, Bangladesh',
  },
  {
    icon: '📧',
    title: 'Email',
    content: 'sultanum@example.com',
    link: 'mailto:sultanum@example.com'
  },
  {
    icon: '📱',
    title: 'Phone',
    content: '+880 1XXX-XXXXXX',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-12 lg:ml-24">
          
          {/* Section 1: Brand & Social Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sultanum Mobin
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Full Stack Developer passionate about creating efficient, scalable web applications. 
                Let's build something amazing together!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 ${social.color} hover:bg-gray-700 group`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    title={social.name}
                  >
                    <SocialIcon icon={social.icon} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Section 2: Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-800 flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span>→</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="space-y-3 pt-4">
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 p-3 rounded-lg bg-gray-800/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for freelance work</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 p-3 rounded-lg bg-gray-800/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Open to full-time opportunities</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 3: Contact & Address */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="flex items-start space-x-3 group cursor-pointer p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl mt-1 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </span>
                  <div className="flex-1">
                    <h5 className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                      {contact.title}
                    </h5>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{contact.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span>
                <span>Let's Talk</span>
                <span>→</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>
              © {currentYear} Sultanum Mobin. All rights reserved.
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex space-x-6 text-sm text-gray-400">
            <motion.a
              href="#privacy"
              className="hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#terms"
              className="hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#sitemap"
              className="hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Sitemap
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}