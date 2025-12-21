"use client";
import { NFCRedirectConfig } from '../config';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiInstagram, 
  FiMail, 
  FiPhone,
  FiGlobe,
  FiDownload,
  FiCode,
  FiYoutube
} from 'react-icons/fi';

export const defaultConfig: NFCRedirectConfig = {
  user: {
    name: "Sultanum Mobin",
    title: "Full Stack Developer",
    photoUrl: "/profile.png",
    portfolioUrl: "/", // Your portfolio homepage
  },
  socialLinks: [
    { id: 'github', icon: <FiGithub />, label: 'GitHub', url: 'https://github.com/johndoe', color: 'hover:text-purple-400' },
    { id: 'linkedin', icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/johndoe', color: 'hover:text-blue-400' },
    { id: 'twitter', icon: <FiTwitter />, label: 'Twitter', url: 'https://twitter.com/johndoe', color: 'hover:text-cyan-400' },
    { id: 'instagram', icon: <FiInstagram />, label: 'Instagram', url: 'https://instagram.com/johndoe', color: 'hover:text-pink-400' },
    { id: 'youtube', icon: <FiYoutube />, label: 'YouTube', url: 'https://youtube.com/johndoe', color: 'hover:text-red-400' },
    { id: 'codepen', icon: <FiCode />, label: 'CodePen', url: 'https://codepen.io/johndoe', color: 'hover:text-green-400' },
  ],
  contactLinks: [
    { id: 'email', icon: <FiMail />, label: 'hello@johndoe.com', action: 'mailto:hello@johndoe.com', color: 'hover:text-yellow-400' },
    { id: 'phone', icon: <FiPhone />, label: '+1 (234) 567-8900', action: 'tel:+12345678900', color: 'hover:text-green-400' },
    { id: 'website', icon: <FiGlobe />, label: 'johndoe.com', action: 'https://johndoe.com', color: 'hover:text-indigo-400' },
    { id: 'resume', icon: <FiDownload />, label: 'Download Resume', action: '/documents/Sultan-CV.pdf', color: 'hover:text-red-400' },
  ],
  settings: {
    redirectDelay: 12,
    enableBackgroundAnimation: true,
    backgroundType: 'gradient',
    theme: {
      primary: '#8B5CF6',
      secondary: '#EC4899',
      accent: '#3B82F6',
    },
  },
};