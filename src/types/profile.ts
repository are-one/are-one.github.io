export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  avatar: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
