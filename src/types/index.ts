export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // key mapped to a react-icon in the consuming component
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
  /** Controls bento grid sizing, e.g. "md:col-span-2 md:row-span-2" */
  span?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  points: string[];
  stack: string[];
}

export interface EducationItem {
  id: string;
  level: string;
  institution: string;
  score: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}
