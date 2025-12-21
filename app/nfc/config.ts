export interface SocialLink {
  id: string;
  icon: React.ReactNode;
  label: string;
  url: string;
  color: string;
}

export interface ContactLink {
  id: string;
  icon: React.ReactNode;
  label: string;
  action: string;
  color: string;
}

export interface NFCRedirectConfig {
  user: {
    name: string;
    title: string;
    photoUrl: string;
    portfolioUrl: string;
  };
  socialLinks: SocialLink[];
  contactLinks: ContactLink[];
  settings: {
    redirectDelay: number; // seconds
    enableBackgroundAnimation: boolean;
    backgroundType: 'gradient' | 'particles' | 'none';
    theme: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
}