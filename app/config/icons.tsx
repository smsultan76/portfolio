// app/config/icons.tsx
import { FaCheckCircle } from 'react-icons/fa';
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
import { MdError } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { TiWarning } from 'react-icons/ti';

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
  email: TfiEmail,
  success: FaCheckCircle,
  error: MdError,
  warning: TiWarning
} as const;

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

const Icon = ({ name, className = '', size = 24 }: IconProps) => {
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} size={size} />;
};

export default Icon;