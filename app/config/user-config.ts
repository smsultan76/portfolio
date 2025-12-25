export const USER_CONFIG = {
  name: "Sultanum Mobin",
  title: "Software Developer",
  email: "sultanum.mobin@gmail.com",
  alternateEmail: "sultan.1021@fec.edu.bd",
  phone: "+880 1723-332972",
  website: "http://sultanum-mobin.vercel.app/",
  resumeUrl: "/resume.pdf",
  photoUrl: "/profile.png",
  portfolioUrl: "/",
  location: "Faridpur, Dhaka, Bangladesh"
} as const;

export type UserConfig = typeof USER_CONFIG;