import type {
  About,
  Blog,
  CertificationItem,
  ContactConfig,
  EducationItem,
  ExperienceItem,
  Gallery,
  Home,
  NavigationItem,
  Newsletter,
  Person,
  ResumeConfig,
  SkillCategory,
  Social,
  Work,
} from "@/types";

const person: Person = {
  firstName: "Lakshmipathi Balaji",
  lastName: "D.",
  name: "D. Lakshmipathi Balaji",
  initials: "LB",
  role: "Software Engineer | Backend & AI Systems",
  avatar: "/images/avatar.png",
  email: "lakshmipathibalaji44@gmail.com",
  location: "Asia/Kolkata",
  city: "Hyderabad, India",
  availability: "Available for full-time opportunities",
  languages: ["English (Professional)", "Telugu (Native)", "Hindi (Conversational)"],
  locale: "en",
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "/", sectionId: "home", icon: "home" },
  { label: "About", href: "/#about", sectionId: "about", icon: "person" },
  { label: "Experience", href: "/#experience", sectionId: "experience", icon: "briefcase" },
  { label: "Projects", href: "/#projects", sectionId: "projects", icon: "grid" },
  { label: "Skills", href: "/#skills", sectionId: "skills", icon: "terminal" },
  { label: "Education", href: "/#education", sectionId: "education", icon: "academic" },
  { label: "Contact", href: "/#contact", sectionId: "contact", icon: "email" },
];

const newsletter: Newsletter = {
  display: false,
  title: <>Stay in touch</>,
  description: <>Engineering notes and updates</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/balaji-0001",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/balaji-d-793182289",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const resume: ResumeConfig = {
  filename: "D_Lakshmipathi_Balaji_Resume.pdf",
  path: "/resume.pdf",
  title: "Resume",
  description:
    "Download a PDF copy of my resume covering backend engineering, autonomous AI agents, enterprise automation, and production testing experience.",
};

const experiences: ExperienceItem[] = [
  {
    company: "Leo Marcom Pvt Ltd",
    role: "AI Engineer",
    timeframe: "September 2026 – Present",
    location: "Hyderabad, India",
    current: true,
    technologies: [
      "Python",
      "FastAPI",
      "REST APIs",
      "LangGraph",
      "RAG",
      "MCP",
      "Automation Pipelines",
    ],
    achievements: [
      "Architect and deploy production backend integration pipelines and automation workflows connecting enterprise business platforms with distributed API services.",
      "Engineer autonomous AI agents and automation tools using structured tool/function calling and Model Context Protocol (MCP) to query relational databases safely.",
      "Implement Retrieval-Augmented Generation (RAG) pipelines with vector search to ground enterprise queries and eliminate response hallucinations.",
      "Design stateless REST microservices using FastAPI, enforcing strict request/response contracts, sub-second latency optimization, and horizontal scalability.",
    ],
  },
  {
    company: "SmartBridge (ServiceNow & AICTE)",
    role: "ServiceNow Virtual Intern",
    timeframe: "March 2026 – May 2026",
    location: "Remote",
    current: false,
    technologies: [
      "ServiceNow Platform",
      "Flow Designer",
      "Agentic AI",
      "Automated Test Framework",
    ],
    achievements: [
      "Completed a three-month internship focused on ServiceNow platform administration, automation, and system reporting.",
      "Built enterprise workflow automations using Flow Designer.",
      "Implemented automated test suites using ServiceNow Automated Test Framework (ATF).",
      "Evaluated Agentic AI capabilities for enterprise service workflows.",
    ],
  },
  {
    company: "IBM",
    role: "AI & Cloud Intern",
    timeframe: "July 2025 – August 2025",
    location: "Hyderabad, India",
    current: false,
    technologies: ["IBM watsonx.ai", "IBM Cloud", "Python", "REST APIs", "Microservices"],
    achievements: [
      "Developed and deployed an automated AI Travel Planner service using IBM watsonx.ai foundation models to synthesize real-time travel and itinerary data.",
      "Implemented cloud-native data ingestion pipelines on IBM Cloud and integrated third-party REST APIs for live travel data.",
      "Validated structured JSON outputs from foundation model responses.",
      "Conducted end-to-end integration and stress testing within a distributed cloud architecture, establishing robust fallback logic and error handling.",
    ],
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Core languages for backend services, type-safe web apps, and relational queries.",
    icon: "codeBracket",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "database" },
    ],
  },
  {
    title: "Backend & API Engineering",
    subtitle: "Stateless microservices, schema validation, and deterministic service contracts.",
    icon: "server",
    skills: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Express.js", icon: "express" },
      { name: "Flask", icon: "flask" },
      { name: "REST APIs", icon: "openLink" },
      { name: "Microservices", icon: "server" },
      { name: "API Specifications", icon: "document" },
      { name: "JSON Schema", icon: "code" },
    ],
  },
  {
    title: "Databases & ORM",
    subtitle: "Normalized schema architecture, query safety, and transactional persistence.",
    icon: "database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQLAlchemy 2.0", icon: "sqlalchemy" },
      { name: "Drizzle ORM", icon: "database" },
      { name: "Relational Schema Design", icon: "grid" },
    ],
  },
  {
    title: "AI & Agentic Systems",
    subtitle: "Multi-agent workflows, safe database tool calling, and vector-grounded retrieval.",
    icon: "cpu",
    skills: [
      { name: "AI Agents", icon: "sparkles" },
      { name: "LangGraph", icon: "cpu" },
      { name: "RAG", icon: "search" },
      { name: "MCP", icon: "link" },
      { name: "Tool Calling", icon: "terminal" },
      { name: "AI Automation", icon: "rocket" },
    ],
  },
  {
    title: "Testing & Engineering",
    subtitle: "Automated test suites, code quality discipline, and iterative delivery.",
    icon: "beaker",
    skills: [
      { name: "Pytest", icon: "pytest" },
      { name: "Vitest", icon: "vitest" },
      { name: "Automated Unit Testing", icon: "check" },
      { name: "Integration Testing", icon: "shield" },
      { name: "Code Reviews", icon: "eye" },
      { name: "Agile/Scrum", icon: "calendar" },
      { name: "CI/CD", icon: "rocket" },
    ],
  },
  {
    title: "Cloud & Tools",
    subtitle: "Containerization, cloud services, API verification, and developer tooling.",
    icon: "cloud",
    skills: [
      { name: "IBM Cloud", icon: "cloud" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Linux", icon: "linux" },
      { name: "ServiceNow", icon: "settings" },
    ],
  },
];

const education: EducationItem[] = [
  {
    institution: "Anurag University",
    degree: "B.Tech — Computer Science & Engineering",
    timeframe: "2023 – 2026",
    location: "Hyderabad, India",
    score: "CGPA: 7.84 / 10",
    highlights: [
      "Focused on distributed systems, relational databases, software engineering, and applied AI architectures.",
    ],
  },
  {
    institution: "TKR College of Engineering & Technology",
    degree: "Diploma — Mechanical Engineering",
    timeframe: "2020 – 2023",
    location: "Hyderabad, India",
    score: "GPA: 7.69 / 10",
    highlights: [
      "Built foundational analytical problem-solving, systems thinking, and engineering discipline.",
    ],
  },
];

const certifications: CertificationItem[] = [
  {
    title: "Oracle Certified: Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
  },
  {
    title: "Microsoft Certified: Applied Skills — Generate Reports with AI Research Agents",
    issuer: "Microsoft Learn",
  },
];

const contact: ContactConfig = {
  eyebrow: "Contact",
  headline: "Let's build something meaningful.",
  description:
    "I'm open to full-time opportunities in Software Engineering, Backend Development, AI Engineering, Generative AI, and related engineering roles.",
  email: person.email,
  location: person.city,
  availability: person.availability,
};

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: "D. Lakshmipathi Balaji | Software Engineer & AI Systems Engineer",
  description:
    "Portfolio of Lakshmipathi Balaji, Software Engineer specializing in backend engineering, AI agents, Generative AI, distributed systems, automation, and full-stack development.",
  headline: <>Building intelligent systems and scalable software.</>,
  featured: {
    display: true,
    title: (
      <>
        {person.city} · {person.availability}
      </>
    ),
    href: "/#contact",
  },
  subline: (
    <>
      I&apos;m a Software Engineer specializing in backend systems, AI agents, automation, and
      full-stack applications. I enjoy building scalable APIs, intelligent workflows, and practical
      AI-powered products.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About — ${person.name}`,
  description:
    "2026 Computer Science graduate and AI Engineer at Leo Marcom Pvt Ltd specializing in distributed backend services, autonomous AI agents, RAG, MCP, and full-stack engineering.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: `mailto:${person.email}`,
  },
  intro: {
    display: true,
    title: "About Me",
    description: (
      <>
        Computer Science graduate (2026) and AI Engineer at Leo Marcom Pvt Ltd with hands-on
        production experience engineering distributed backend services, modular REST APIs, automated
        data pipelines, autonomous AI agents, and full-stack applications.
      </>
    ),
    summaryParagraphs: [
      "I am a 2026 Computer Science and Engineering graduate from Anurag University, currently working as an AI Engineer at Leo Marcom Pvt Ltd in Hyderabad. My work sits at the intersection of production backend engineering and applied AI systems—designing stateless APIs, connecting enterprise platforms, and building reliable agent workflows.",
      "I focus on systems that are observable, testable, and grounded in clean engineering fundamentals: normalized relational schemas, explicit request/response contracts, safe database querying through Model Context Protocol (MCP) and structured tool calling, and automated unit and integration test suites.",
    ],
    interests: [
      "Backend engineering",
      "AI agents",
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
      "Distributed systems",
      "REST API development",
      "Enterprise automation",
      "Full-stack application development",
      "Database architecture",
      "Software quality and testing",
    ],
  },
  work: {
    display: true,
    title: "Experience",
    experiences: experiences.map((exp) => ({
      company: exp.company,
      timeframe: `${exp.timeframe} | ${exp.location}`,
      location: exp.location,
      role: exp.role,
      current: exp.current,
      technologies: exp.technologies,
      achievements: exp.achievements,
      images: [],
    })),
  },
  studies: {
    display: true,
    title: "Education",
    institutions: education.map((edu) => ({
      name: edu.institution,
      degree: edu.degree,
      timeframe: edu.timeframe,
      location: edu.location,
      score: edu.score,
      description: (
        <>
          {edu.degree} · {edu.timeframe} | {edu.location} · {edu.score}
        </>
      ),
    })),
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: certifications,
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: skillCategories.map((category) => ({
      title: category.title,
      description: category.subtitle,
      tags: category.skills,
      images: [],
    })),
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Writing — ${person.name}`,
  description: `Engineering notes by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects — ${person.name}`,
  description:
    "Featured software engineering, backend architecture, and AI agent projects built by D. Lakshmipathi Balaji.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery — ${person.name}`,
  description: `Visual gallery by ${person.name}`,
  images: [],
};

export {
  person,
  navigation,
  social,
  newsletter,
  resume,
  experiences,
  skillCategories,
  education,
  certifications,
  contact,
  home,
  about,
  blog,
  work,
  gallery,
};
