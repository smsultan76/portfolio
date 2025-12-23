// app/config/portfolioConfig.ts
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiGlobe,
  FiDownload,
  FiCode,
  FiPhone,
  FiHome,
  FiUser,
  FiBriefcase,
  FiMessageCircle
} from 'react-icons/fi';

// Central User Configuration
export const userConfig = {
  name: "Sultanum Mobin",
  title: "Full Stack Developer",
  email: "sultanum.mobin@gmail.com",
  alternateEmail: "sultan.1021@fec.edu.bd",
  phone: "+880 1723-332972",
  website: "https://yourportfolio.com",
  resumeUrl: "/resume.pdf",
  photoUrl: "/images/portrait.jpg", // Add your photo here
  portfolioUrl: "/",
  location: "Faridpur, Dhaka, Bangladesh",
  status: {
    freelance: true,
    fullTime: true,
  }
};

// Central Social Links Configuration
export const socialLinks = [
  { 
    id: 'github',
    icon: <FiGithub />, 
    label: 'GitHub', 
    url: 'https://github.com/smsultan76', 
    color: 'hover:text-gray-200',
    footerIcon: 'github'
  },
  { 
    id: 'linkedin',
    icon: <FiLinkedin />, 
    label: 'LinkedIn', 
    url: 'https://linkedin.com/in/smsultan76', 
    color: 'hover:text-blue-400',
    footerIcon: 'linkedin'
  },
  { 
    id: 'twitter',
    icon: <FiTwitter />, 
    label: 'Twitter', 
    url: 'https://twitter.com/yourusername', 
    color: 'hover:text-blue-400',
    footerIcon: 'twitter'
  },
  { 
    id: 'email',
    icon: <FiMail />, 
    label: 'Email', 
    url: 'mailto:sultanum.mobin@gmail.com', 
    color: 'hover:text-red-400',
    footerIcon: 'email'
  },
  { 
    id: 'facebook',
    icon: <FiCode />, // Using code icon as placeholder
    label: 'Facebook', 
    url: 'https://facebook.com/smsultan76', 
    color: 'hover:text-blue-400',
    footerIcon: 'facebook'
  },
];

// Central Contact Links Configuration
export const contactLinks = [
  { 
    id: 'email-primary',
    icon: <FiMail />, 
    label: userConfig.email, 
    action: `mailto:${userConfig.email}`, 
    color: 'hover:text-yellow-400' 
  },
  { 
    id: 'email-secondary',
    icon: <FiMail />, 
    label: userConfig.alternateEmail, 
    action: `mailto:${userConfig.alternateEmail}`, 
    color: 'hover:text-yellow-400' 
  },
  { 
    id: 'phone',
    icon: <FiPhone />, 
    label: userConfig.phone, 
    action: `tel:${userConfig.phone.replace(/\s+/g, '')}`, 
    color: 'hover:text-green-400' 
  },
  { 
    id: 'website',
    icon: <FiGlobe />, 
    label: 'yourportfolio.com', 
    action: userConfig.website, 
    color: 'hover:text-indigo-400' 
  },
  { 
    id: 'resume',
    icon: <FiDownload />, 
    label: 'Download Resume', 
    action: userConfig.resumeUrl, 
    color: 'hover:text-red-400' 
  },
];

// Central Navigation Links
export const navigationLinks = [
  { id: 'home', name: 'Home', href: '/', icon: <FiHome /> },
  { id: 'about', name: 'About', href: '#about', icon: <FiUser /> },
  { id: 'skills', name: 'Skills', href: '/#skills', icon: <FiCode /> },
  { id: 'projects', name: 'Projects', href: '/#projects', icon: <FiBriefcase /> },
  { id: 'contact', name: 'Contact', href: 'contact', icon: <FiMessageCircle /> },
];

// Central Contact Information
export const contactInfo = [
  {
    id: 'location',
    icon: '🏠',
    title: 'Location',
    content: userConfig.location,
    link: '#'
  },
  {
    id: 'email',
    icon: '📧',
    title: 'Email',
    content: userConfig.alternateEmail,
    link: `mailto:${userConfig.alternateEmail}`
  },
  {
    id: 'phone',
    icon: '📱',
    title: 'Phone',
    content: userConfig.phone,
    link: `tel:${userConfig.phone.replace(/\s+/g, '')}`
  },
];