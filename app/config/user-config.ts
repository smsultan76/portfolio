export const USER_CONFIG = {
  name: "Sultanum Mobin",
  title: "Software Developer",
  email: "sultanum.mobin@gmail.com",
  email2: "sultan.1021@fec.edu.bd",
  phone: "+880 1723-332972",
  phone2: "+880 1516 500902",
  website: "http://sultanum-mobin.vercel.app/",
  resumeUrl: "/documents/Sultan-CV.pdf",
  photoUrl: "/profile.png",
  portfolioUrl: "/",
  location: "Faridpur, Dhaka, Bangladesh"
} as const;

export type UserConfig = typeof USER_CONFIG;