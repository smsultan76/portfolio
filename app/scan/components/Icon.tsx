"use client";

import React from 'react';
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

// Icon mapping
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