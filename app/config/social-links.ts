import { USER_CONFIG } from './user-config';
import { IconName } from './icons';

export interface SocialLink {
  id: string;
  icon: IconName;
  label: string;
  url: string;
  color: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    id: 'facebook',
    icon: 'facebook',
    label: 'Facebook', 
    url: 'https://facebook.com/smsultan76', 
    color: 'hover:text-blue-400'
  },
  { 
    id: 'github',
    icon: 'github',
    label: 'GitHub', 
    url: 'https://github.com/smsultan76', 
    color: 'hover:text-gray-200'
  },
  { 
    id: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn', 
    url: 'https://linkedin.com/in/smsultan76', 
    color: 'hover:text-blue-400'
  },
  { 
    id: 'twitter',
    icon: 'twitter',
    label: 'Twitter', 
    url: 'https://twitter.com/yourusername', 
    color: 'hover:text-blue-400'
  },
];

export const CONTACT_LINKS: SocialLink[] = [
    { 
    id: 'phone',
    icon: 'phone',
    label: USER_CONFIG.phone, 
    url: `tel:${USER_CONFIG.phone.replace(/\s+/g, '')}`, 
    color: 'hover:text-green-400' 
  },
  { 
    id: 'phone',
    icon: 'phone',
    label: USER_CONFIG.phone2, 
    url: `tel:${USER_CONFIG.phone2.replace(/\s+/g, '')}`, 
    color: 'hover:text-green-400' 
  },
  { 
    id: 'email-primary',
    icon: 'mail',
    label: USER_CONFIG.email, 
    url: `mailto:${USER_CONFIG.email}`, 
    color: 'hover:text-yellow-400' 
  },
  { 
    id: 'email-secondary',
    icon: 'mail',
    label: USER_CONFIG.email2, 
    url: `mailto:${USER_CONFIG.email2}`, 
    color: 'hover:text-yellow-400' 
  },
  { 
    id: 'website',
    icon: 'globe',
    label: 'Portfolio', 
    url: USER_CONFIG.website, 
    color: 'hover:text-indigo-400' 
  },
  { 
    id: 'resume',
    icon: 'download',
    label: 'Download Resume', 
    url: USER_CONFIG.resumeUrl, 
    color: 'hover:text-red-400' 
  },
];

export interface NavigationLink {
  id: string;
  name: string;
  href: string;
  icon: IconName;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  { id: 'home', name: 'Home', href: '/', icon: 'home' },
  { id: 'about', name: 'About', href: '#about', icon: 'user' },
  { id: 'skills', name: 'Skills', href: '/#skills', icon: 'code' },
  { id: 'projects', name: 'Projects', href: '/#projects', icon: 'briefcase' },
  { id: 'contact', name: 'Contact', href: 'contact', icon: 'messageCircle' },
];