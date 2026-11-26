import type { IconName } from "@/resources/icons";
import type { zones } from "tzdata";

/**
 * IANA time zone string (e.g., 'Asia/Kolkata', 'Europe/Vienna').
 * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type IANATimeZone = Extract<keyof typeof zones, string>;

/**
 * Represents a person featured in the portfolio.
 */
export type Person = {
  /** First / given name */
  firstName: string;
  /** Last / family initial or name */
  lastName: string;
  /** Full display name */
  name: string;
  /** Initials for monogram avatar */
  initials: string;
  /** Role or job title */
  role: string;
  /** Path to avatar image */
  avatar: string;
  /** Email address */
  email: string;
  /** IANA time zone location for live clock */
  location: IANATimeZone;
  /** Human-readable city and country */
  city: string;
  /** Current hiring availability badge text */
  availability: string;
  /** Languages spoken */
  languages?: string[];
  /** BCP 47 language tag for HTML lang attribute */
  locale?: string;
};

/**
 * Newsletter Section (optional)
 */
export type Newsletter = {
  display: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
};

/**
 * Social link configuration.
 */
export type Social = Array<{
  name: string;
  icon: IconName;
  link: string;
  essential?: boolean;
}>;

/**
 * Navigation item configuration.
 */
export type NavigationItem = {
  label: string;
  href: string;
  sectionId?: string;
  icon: IconName;
};

/**
 * Structured experience entry.
 */
export type ExperienceItem = {
  company: string;
  role: string;
  timeframe: string;
  location: string;
  current?: boolean;
  technologies: string[];
  achievements: string[];
};

/**
 * Skill category entry.
 */
export type SkillCategory = {
  title: string;
  subtitle: string;
  icon: IconName;
  skills: Array<{
    name: string;
    icon?: IconName;
  }>;
};

/**
 * Education institution entry.
 */
export type EducationItem = {
  institution: string;
  degree: string;
  timeframe: string;
  location: string;
  score: string;
  highlights?: string[];
};

/**
 * Certification entry.
 */
export type CertificationItem = {
  title: string;
  issuer: string;
  link?: string;
};

/**
 * Resume download configuration.
 */
export type ResumeConfig = {
  filename: string;
  path: string;
  title: string;
  description: string;
};

/**
 * Contact section configuration.
 */
export type ContactConfig = {
  eyebrow: string;
  headline: string;
  description: string;
  email: string;
  location: string;
  availability: string;
};

/**
 * Base interface for page configuration with common properties.
 */
export interface BasePageConfig {
  path: `/${string}` | string;
  label: string;
  title: string;
  description: string;
  image?: `/images/${string}` | string;
}

/**
 * Home page configuration.
 */
export interface Home extends BasePageConfig {
  image: `/images/${string}` | string;
  headline: React.ReactNode;
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  subline: React.ReactNode;
}

/**
 * About page configuration.
 */
export interface About extends BasePageConfig {
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: React.ReactNode;
    summaryParagraphs: string[];
    interests: string[];
  };
  work: {
    display: boolean;
    title: string;
    experiences: Array<{
      company: string;
      timeframe: string;
      location: string;
      role: string;
      current?: boolean;
      technologies: string[];
      achievements: React.ReactNode[];
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  studies: {
    display: boolean;
    title: string;
    institutions: Array<{
      name: string;
      degree: string;
      timeframe: string;
      location: string;
      score: string;
      description: React.ReactNode;
    }>;
  };
  certifications: {
    display: boolean;
    title: string;
    items: CertificationItem[];
  };
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      title: string;
      description?: React.ReactNode;
      tags?: Array<{
        name: string;
        icon?: IconName;
      }>;
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
}

export interface Blog extends BasePageConfig {}

export interface Work extends BasePageConfig {}

export interface Gallery extends BasePageConfig {
  images: Array<{
    src: string;
    alt: string;
    orientation: string;
  }>;
}
