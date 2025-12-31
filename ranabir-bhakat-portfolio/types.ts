export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  relation: string;
}

export interface NavItem {
  label: string;
  href: string;
}