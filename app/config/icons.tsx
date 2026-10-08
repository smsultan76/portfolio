// app/config/icons.tsx
import { BiSolidContact } from 'react-icons/bi';
import { FaCheckCircle, FaFacebook, FaFacebookMessenger, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiGlobe, FiDownload, FiPhone, FiHome, FiUser, FiBriefcase, FiCode } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail, MdError } from 'react-icons/md';
import { TbMessageFilled } from 'react-icons/tb';
import { TiWarning } from 'react-icons/ti';

export const Icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  contact: BiSolidContact,
  globe: FiGlobe,
  download: FiDownload,
  phone: FiPhone,
  home: FiHome,
  user: FiUser,
  briefcase: FiBriefcase,
  code: FiCode,
  messageCircle: TbMessageFilled,
  facebook: FaFacebook,
  messenger: FaFacebookMessenger,
  email: MdEmail,
  success: FaCheckCircle,
  error: MdError,
  warning: TiWarning,
  whatsapp: IoLogoWhatsapp
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