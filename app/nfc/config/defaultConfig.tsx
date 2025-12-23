import { NFCRedirectConfig } from '../config';
import { 
  userConfig, 
  socialLinks, 
  contactLinks, 
  navigationLinks,
  contactInfo 
} from '@/app/config/portfolioConfig';

export const defaultConfig: NFCRedirectConfig = {
  user: {
    name: userConfig.name,
    title: userConfig.title,
    email: userConfig.email,
    phone: userConfig.phone,
    website: userConfig.website,
    resumeUrl: userConfig.resumeUrl,
    photoUrl: userConfig.photoUrl,
    portfolioUrl: userConfig.portfolioUrl,
    location: userConfig.location,
  },
  socialLinks: socialLinks,
  contactLinks: contactLinks,
  navigationLinks: navigationLinks,
  contactInfo: contactInfo,
  settings: {
    redirectDelay: 10, // Increased to 10 seconds for better UX
    enableBackgroundAnimation: true,
    backgroundType: 'gradient',
    theme: {
      primary: '#3B82F6', // blue
      secondary: '#8B5CF6', // purple
      accent: '#EC4899', // pink
    },
  },
};