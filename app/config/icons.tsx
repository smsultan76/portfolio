import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiGlobe,
  FiDownload,
  FiPhone,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMessageCircle,
  FiFacebook,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

export const Icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  mail: FiMail,
  globe: FiGlobe,
  download: FiDownload,
  phone: FiPhone,
  home: FiHome,
  user: FiUser,
  briefcase: FiBriefcase,
  code: FiCode,
  messageCircle: FiMessageCircle,
  facebook: FiFacebook,
} as const;

export type IconName = keyof typeof Icons;