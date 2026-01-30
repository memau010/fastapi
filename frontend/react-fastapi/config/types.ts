export interface ContactConfig {
  email: string;
  phone: string;
}

export interface SocialConfig {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface ProfileInfoConfig {
  imgUrl?: string;
  fullName?: string;
  residence?: string;
  degree?: string;
  birthDate?: string;
  generalInfo?: string;
}

export interface AppConfig {
  contact: ContactConfig;
  social: SocialConfig;
  profileInfo : ProfileInfoConfig;
}
