export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export interface SiteConfig {
  name: string;
  role: string;
  eyebrow: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  timezone: string;
  experienceYears: string;
  profilePhoto: string;
  aboutPhoto?: string;
  resume: {
    filePath: string;
    fileName: string;
    fileType: 'pdf' | 'docx';
    lastUpdated: string;
    summary: string;
  };
  behindTheWorkPhotos?: {
    url: string;
    caption: string;
    altText: string;
  }[];
}

export interface ProjectImage {
  url: string;
  caption?: string;
  altText: string;
}

export interface Project {
  id: string;
  name: string; // Project title / name
  category: string; // e.g. "Publishing Platform", "Creative / Client Web App", "AI/ML Research"
  categoryType: 'freelance' | 'aiml' | 'fullstack';
  year: string;
  description: string;
  shortDescription?: string;
  technologies: string[];
  
  // Optional media & evidence fields
  liveUrl?: string; // If provided, shows ● LIVE badge and [Live Website] button
  githubUrl?: string; // If provided, shows [GitHub] button
  images?: string[]; // Array of image paths e.g. ["/projects/talestexts/home.png"]
  gallery?: ProjectImage[];
  projectImage?: string; // Primary screenshot or banner

  features?: string[];
  myContribution?: string;
  result?: string;
  
  clientContext?: string;
  architecture?: {
    frontend?: string;
    backend?: string;
    database?: string;
    deployment?: string;
    payments?: string;
  };
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    useCase: string;
    isPrimary?: boolean;
  }[];
}

export interface WorkflowStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tasks: string[];
  deliverables: string[];
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'development' | 'integration' | 'optimization' | 'growth';
  whoIsItFor: string;
  whatYouGet: string[];
  deliverables: string[];
  technologies: string[];
}

export interface EducationItem {
  number: string;
  degree: string;
  institution: string;
  period: string;
  statusOrScore: string;
  badgeType: 'pursuing' | 'completed' | 'academic';
  highlights: string[];
  accentColor: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  imageFileName: string;
  icon: string;
  category: 'ai' | 'cloud' | 'data' | 'security' | 'development';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  title: string;
  description?: string;
  items: FAQItem[];
}

export interface BookingSlot {
  number: string;
  timeRange: string;
  periodLabel: string;
  description?: string;
}

export interface StartProjectStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}


