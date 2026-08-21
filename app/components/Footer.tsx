// app/components/Footer.tsx
'use client';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../config/social-links';
import { Icons } from '@/app/config/icons';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: 'contact' },
];

const contactInfo = [
  {
    icon: '🏠',
    title: 'Location',
    content: 'Faridpur, Dhaka, Bangladesh',
  },
  {
    icon: '📧',
    title: 'Email',
    content: 'sultan.1021@fec.edu.bd',
    link: 'mailto:sultan.1021@fec.edu.bd'
  },
  {
    icon: '📞',
    title: 'Phone',
    content: '+880 1723-332972',
    link: 'tel:+8801723332972'
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-10 px-2 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 lg:ml-16">
          
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
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = Icons[social.icon];
                  return (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 ${social.color} hover:bg-gray-700 group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      title={social.label}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Section 2: Quick Links */}
          <motion.div 
            className="space-y-2"
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
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1 px-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-800 flex items-center space-x-2"
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
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg bg-gray-800/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for freelance work</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg bg-gray-800/50"
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
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              {contactInfo.map((contact, index) => {
                const Content = (
                  <motion.div
                    key={contact.title}
                    className="flex items-start space-x-3 group cursor-pointer rounded-lg hover:bg-gray-800 transition-colors duration-300"
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

                      <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                        {contact.content}
                      </p>
                    </div>
                  </motion.div>
                );

                return contact.link ? (
                  <a key={contact.title} href={contact.link} className="block">
                    {Content}
                  </a>
                ) : (
                  Content
                );
              })}
            </div>

            {/* Call to Action */}
            <motion.div
              className="pt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="scan"
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