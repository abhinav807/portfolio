import {
  Bot,
  Boxes,
  CalendarDays,
  Code2,
  Compass,
  Globe,
  MonitorSmartphone,
  ScanEye,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Icons } from "@/components/icons";

/* ------------------------------------------------------------------ */
/*  Profile                                                            */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "Abhinav Goyal",
  firstName: "Abhinav",
  initials: "AG",
  tagline: "Student Builder · Developer · Founder",
  role: "Student builder, developer & founder building with code, AI and the web.",
  location: "Delhi NCR, India",
  locationShort: "Delhi, India",
  email: "goldenhourdelhi@gmail.com",
  url: "https://abhinavgoyal.vercel.app",
  github: "https://github.com/abhinav807",
  githubUsername: "abhinav807",
  githubAvatar: "https://avatars.githubusercontent.com/u/145897718?v=4",
  linkedin: "https://www.linkedin.com/in/abhinav-goyal-9645a840a/",
  description:
    "Portfolio of Abhinav Goyal — a student builder from Delhi building web applications, AI projects, developer experiments and GoldenHour.",
} as const;

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#goldenhour", label: "GoldenHour" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { label: "GitHub", url: SITE.github, icon: Icons.github },
  { label: "LinkedIn", url: SITE.linkedin, icon: Icons.linkedin },
  { label: "Email", url: `mailto:${SITE.email}`, icon: Icons.email },
] as const;

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: "Student builder · shipping real software",
  heading: "Hi, I'm Abhinav.",
  lead: "Student builder, developer & founder building with code, AI and the web.",
  body: "I build websites, AI-powered applications, experiments and community-driven tech projects — and I like turning ideas into things people can actually use.",
  location: SITE.location,
  terminal: [
    { key: "whoami", value: "abhinav — student builder" },
    { key: "location", value: "Delhi NCR, India" },
    { key: "focus", value: "web · ai agents · computer vision" },
    { key: "now", value: "building GoldenHour V1" },
  ],
  ctas: [
    { label: "View Projects", href: "#projects", variant: "primary" as const },
    { label: "GitHub", href: SITE.github, variant: "secondary" as const },
    { label: "LinkedIn", href: SITE.linkedin, variant: "secondary" as const },
    { label: "Contact Me", href: "#contact", variant: "secondary" as const },
  ],
};

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  paragraphs: [
    "I'm a Class 10 student from Delhi who spends most of my free time building things with code. I've worked on websites, AI applications, computer-vision projects, browser tools and hackathon projects.",
    "I enjoy taking an idea from a rough concept to something deployed and usable. I've also started building for real clients and organizations, and organising technology events for students and beginners.",
    "Most of my projects start as an idea, a problem I notice, or something I want to learn — then I try to turn it into something I can actually run. I've already deployed multiple JavaScript/web projects.",
    "Right now I'm especially interested in software engineering, AI agents, web development and building products.",
  ],
};

export const AREAS = [
  {
    title: "Web Development",
    description:
      "Building modern responsive websites and web applications across the JavaScript/TypeScript ecosystem.",
    icon: Code2,
  },
  {
    title: "AI & AI Applications",
    description:
      "Experimenting with AI-powered applications, agents, automation and practical AI workflows.",
    icon: Sparkles,
  },
  {
    title: "Computer Vision",
    description:
      "Working on projects involving OpenCV, face detection and computer vision.",
    icon: ScanEye,
  },
  {
    title: "Product Building",
    description:
      "Turning ideas into deployed prototypes and usable products.",
    icon: Boxes,
  },
  {
    title: "Hackathons & Events",
    description:
      "Taking part in and organising technology events for students and beginners.",
    icon: CalendarDays,
  },
  {
    title: "Client Websites",
    description:
      "Building websites and redesigns for organizations, businesses and professional services.",
    icon: Globe,
  },
] as const;

export const HIGHLIGHTS = [
  {
    label: "Student Builder",
    description: "Building real-world software while still in school.",
    icon: Terminal,
  },
  {
    label: "Founder",
    description: "Founder & Organiser of GoldenHour.",
    icon: CalendarDays,
  },
  {
    label: "Web Developer",
    description:
      "Building and deploying websites for real organizations and businesses.",
    icon: MonitorSmartphone,
  },
  {
    label: "AI Builder",
    description:
      "Experimenting with AI applications, computer vision and agentic workflows.",
    icon: Bot,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Building & Experience                                              */
/* ------------------------------------------------------------------ */

export const EXPERIENCE = [
  {
    org: "GoldenHour",
    role: "Founder & Organiser",
    meta: "Student technology initiative",
    description:
      "Founded GoldenHour, a student-focused technology initiative built around hackathons, coding and exposure to modern technology. The goal is to make building with technology more accessible to school students and beginners.",
    points: [
      "Event planning",
      "Venue outreach",
      "Partnerships",
      "Sponsorships",
      "Participant experience",
      "Event website",
      "Community building",
      "Technology education",
    ],
    icon: CalendarDays,
  },
  {
    org: "Independent Building",
    role: "Projects & experiments",
    meta: "Ongoing",
    description:
      "Building and experimenting across web development, AI, computer vision, browser extensions and product prototypes.",
    points: [
      "Web development",
      "AI applications",
      "Computer vision",
      "Browser extensions",
      "Product prototypes",
    ],
    icon: Boxes,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Websites I've built                                                */
/* ------------------------------------------------------------------ */

export const WEBSITES = [
  {
    name: "VKG Law Firm",
    domain: "vkglawfirm.co.in",
    url: "https://vkglawfirm.co.in/",
    status: "Live",
    description:
      "Designed and deployed a professional website for Vikas Verma, A.O.R., Supreme Court of India, with a professional legal-services presentation and appropriate legal disclaimer flow.",
    tags: ["Design", "Development", "Deployment"],
    visual: "legal" as const,
  },
  {
    name: "KMS Website",
    domain: "kms-new.vercel.app",
    url: "https://kms-new.vercel.app/",
    status: "Live",
    description:
      "A deployed website for KMS Law Firm — a responsive, modern web presence designed, built and shipped end to end.",
    tags: ["Responsive frontend", "Deployed on Vercel"],
    visual: "kms" as const,
  },
  {
    name: "Baniya Samaj Delhi",
    domain: "baniyasamajdelhi.vercel.app",
    url: "https://baniyasamajdelhi.vercel.app/",
    status: "In development",
    description:
      "A Hindi, mobile-first organizational website being developed with a focus on accessibility and a culturally appropriate visual identity.",
    tags: ["Hindi", "Mobile-first", "Accessibility"],
    visual: "hindi" as const,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export type Project = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  tech: readonly string[];
  status: string;
  visual: "shield";
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const PROJECTS: readonly Project[] = [
  {
    name: "PhishGuard",
    category: "Cybersecurity / Browser Extension",
    tagline:
      "A browser extension that flags potentially suspicious or phishing-related content.",
    description:
      "A browser-extension concept built to help people spot potentially suspicious or phishing-related web content before they interact with it. It's a helper, not a guarantee — it doesn't block every phishing attack — but it's a real attempt at making the web slightly safer to browse.",
    tech: ["JavaScript", "Browser Extension APIs"],
    status: "Prototype / Development",
    visual: "shield",
    github: "https://github.com/abhinav807/phishguard-ai-extension",
    featured: true,
  },
];

export type Experiment = {
  name: string;
  description: string;
  language: string;
  repo: string;
  demo?: string;
  status: string;
};

export const EXPERIMENTS: readonly Experiment[] = [
  {
    name: "repolingo",
    description:
      "Drop in any public GitHub repo and get a plain-English onboarding guide — tech stack, file tree and setup steps, with no server-side key storage.",
    language: "TypeScript",
    repo: "https://github.com/abhinav807/repolingo",
    demo: "https://repolingo-three.vercel.app",
    status: "Live",
  },
  {
    name: "abhinav-portfolio",
    description:
      "Earlier version of this portfolio — a personal site showcasing my work as a web developer, with a focus on AI, agent workflows and working tools.",
    language: "TypeScript",
    repo: "https://github.com/abhinav807/abhinav-portfolio",
    demo: "https://abhinav-portfolio-indol.vercel.app",
    status: "Archived build",
  },
  {
    name: "phishguard-ai-extension",
    description:
      "Source for the PhishGuard browser extension — the experiment behind the security project above.",
    language: "JavaScript",
    repo: "https://github.com/abhinav807/phishguard-ai-extension",
    status: "Prototype",
  },
  {
    name: "abhinav807 (profile)",
    description:
      "Terminal-style GitHub profile README — focus, toolbox and repos, generated from real account data.",
    language: "Markdown",
    repo: "https://github.com/abhinav807/abhinav807",
    status: "Live",
  },
];

/* ------------------------------------------------------------------ */
/*  GoldenHour                                                         */
/* ------------------------------------------------------------------ */

export const GOLDENHOUR = {
  name: "GoldenHour",
  // NOTE: the real goldenhourdelhi.co.in domain is currently having issues,
  // so `site` points at the working Vercel version of the event site.
  subheading: "Building a technology community for the next generation of builders.",
  body: "GoldenHour is a student-focused technology initiative I founded and organise, built around hackathons, coding and exposure to modern technology. The goal is simple: make building with technology more accessible to school students and beginners.",
  role: "Founder & Organiser",
  site: "https://goldenhourv1.vercel.app/",
  eventPage: "https://luma.com/bxo7adm4",
  points: [
    { label: "Event planning", detail: "Format, schedule, tracks and judging" },
    { label: "Venue outreach", detail: "Finding spaces that work for students" },
    { label: "Partnerships", detail: "Sponsors, collaborators and supporters" },
    { label: "Participant experience", detail: "Beginner-friendly by default" },
    { label: "Event website", detail: "Designed and built by me" },
    { label: "Community", detail: "Keeping builders connected after the event" },
  ],
  event: {
    name: "GoldenHour V1",
    date: "14 November 2026",
    place: "Delhi NCR, India",
    note: "Date & venue tentative",
    status: "Upcoming",
    description:
      "A free, student-led hackathon in Delhi where students come together to build, experiment, learn and ship something real — with tracks for web development and game development, and a theme revealed on event day.",
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Events                                                             */
/* ------------------------------------------------------------------ */

export const EVENTS = [
  {
    title: "GoldenHour V1",
    role: "Founder & Organiser",
    location: "Delhi NCR, India",
    when: "14 November 2026",
    status: "Upcoming",
    description:
      "The first edition of GoldenHour — a free, student-led hackathon for young builders, with tracks for web and game development.",
    href: GOLDENHOUR.site,
    icon: CalendarDays,
  },
  {
    title: "AgentForge",
    role: "Participant",
    location: "Gurugram, India",
    when: "Hackathon / build event",
    status: "",
    description:
      "A builders' event focused on AI agents and agentic workflows — a good excuse to ship something with modern AI tooling in a room full of people doing the same.",
    href: "",
    icon: Bot,
  },
  {
    title: "Agentathon · Nerds Room",
    role: "Participant",
    location: "Delhi NCR, India",
    when: "Community event",
    status: "",
    description:
      "A community technology event around AI agents and building — the kind of room where you learn more in one evening than in a week of tutorials.",
    href: "",
    icon: Sparkles,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Skills & learning                                                  */
/* ------------------------------------------------------------------ */

export const SKILL_GROUPS = [
  {
    label: "Web",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    label: "Backend / Data",
    items: ["Node.js", "Supabase", "PostgreSQL", "APIs"],
  },
  {
    label: "AI",
    items: [
      "AI application development",
      "LLM APIs",
      "AI agents",
      "Prompt engineering",
      "AI-assisted development",
      "Computer vision",
      "OpenCV",
    ],
  },
  {
    label: "Programming",
    items: ["JavaScript", "Python", "Java (basics)", "Git & GitHub"],
  },
  {
    label: "Tools",
    items: [
      "GitHub",
      "Vercel",
      "Cloudflare",
      "Cursor / AI coding tools",
      "Deployment & DNS workflows",
    ],
  },
] as const;

export const EXPLORING = [
  "AI agents",
  "Agentic workflows",
  "Modern full-stack development",
  "Software engineering",
  "AI product development",
  "Computer vision",
  "Developer tooling",
  "Hackathon building",
  "Product design",
] as const;

export const EDUCATION = [
  {
    school: "Bharti Public School, Mayur Vihar-III",
    detail: "Class X-C",
    location: "Delhi, India",
    status: "Current student",
    icon: Compass,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  heading: "Have an idea worth building?",
  body: "I'm always interested in interesting projects, collaborations, technology events and things worth experimenting with.",
  email: SITE.email,
  links: [
    { label: "GitHub", href: SITE.github, icon: Icons.github },
    { label: "LinkedIn", href: SITE.linkedin, icon: Icons.linkedin },
    { label: "Email", href: `mailto:${SITE.email}`, icon: Icons.email },
  ],
};
