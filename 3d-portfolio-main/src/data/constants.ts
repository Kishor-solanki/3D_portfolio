// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
  C = "c",
  CPP = "cpp",
  PYTHON = "python",
  DBMS = "dbms",
  MAPLIBRE = "maplibre",
  MAPTILER = "maptiler",
  OPENSTREETMAP = "openstreetmap",
  OVERPASS = "overpass",
  TURF = "turf",
  COMPUTER_NETWORKS = "computer-networks",
  COMMUNICATION = "communication",
  SQL = "sql",
  MYSQL = "mysql",
  RECHARTS = "recharts",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "Core language I use to build interactive and dynamic web applications.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Type-safe JavaScript that helps me write more reliable, large-scale frontend code.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription:
      "Semantic structure for modern, accessible web pages and applications.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription:
      "Responsive, clean layouts with modern styling for all screen sizes.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription:
      "Building reusable, component-based UIs and smooth user experiences.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "React framework I use for production-ready, performant frontend applications.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription:
      "Utility-first CSS framework for fast, consistent and responsive styling.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "SQL / DBMS",
    shortDescription:
      "Relational databases, SQL queries and core DBMS concepts.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "making your code not a whole mess, thank u next 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "the grandpa of CMS, still rocking that cane 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.C]: {
    id: 26,
    name: "c",
    label: "C",
    shortDescription: "Foundational programming language for problem solving.",
    color: "#555555",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.CPP]: {
    id: 27,
    name: "cpp",
    label: "C++",
    shortDescription:
      "Object-oriented programming and performance-focused development.",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 28,
    name: "python",
    label: "Python",
    shortDescription:
      "Used for ML projects, automation, and backend development.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DBMS]: {
    id: 29,
    name: "dbms",
    label: "DBMS",
    shortDescription:
      "Database management, SQL queries, and data modeling.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MAPLIBRE]: {
    id: 30,
    name: "maplibre",
    label: "MapLibre",
    shortDescription:
      "Open-source mapping library for interactive map visualizations.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg",
  },
  [SkillNames.MAPTILER]: {
    id: 31,
    name: "maptiler",
    label: "MapTiler",
    shortDescription:
      "Custom map tiles and geospatial data for interactive applications.",
    color: "#4ba3c7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg",
  },
  [SkillNames.OPENSTREETMAP]: {
    id: 32,
    name: "openstreetmap",
    label: "OpenStreetMap",
    shortDescription: "Open collaborative map data for geospatial projects.",
    color: "#7ebc6f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg",
  },
  [SkillNames.OVERPASS]: {
    id: 33,
    name: "overpass",
    label: "Overpass API",
    shortDescription:
      "Query language and API for extracting OpenStreetMap data.",
    color: "#404040",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg",
  },
  [SkillNames.TURF]: {
    id: 34,
    name: "turf",
    label: "Turf.js",
    shortDescription:
      "Geospatial analysis library for spatial operations and calculations.",
    color: "#20b2aa",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg",
  },
  [SkillNames.COMPUTER_NETWORKS]: {
    id: 35,
    name: "computer-networks",
    label: "Computer Networks",
    shortDescription:
      "Networking fundamentals, protocols, and system communication.",
    color: "#2563eb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg",
  },
  [SkillNames.COMMUNICATION]: {
    id: 36,
    name: "communication",
    label: "Communication Systems",
    shortDescription:
      "Core ECE concepts in signal processing and communication.",
    color: "#7c3aed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
  },
  [SkillNames.SQL]: {
    id: 37,
    name: "sql",
    label: "SQL",
    shortDescription:
      "Structured query language for relational database operations and queries.",
    color: "#2b6fcf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 38,
    name: "mysql",
    label: "MySQL",
    shortDescription:
      "Popular open-source relational database used across web applications.",
    color: "#f29111",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.RECHARTS]: {
    id: 39,
    name: "recharts",
    label: "Recharts",
    shortDescription:
      "Declarative React charting library I use to turn data into clear, interactive dashboards.",
    color: "#22d3ee",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@14.0.0/icons/recharts.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "16 Jun 2026",
    endDate: "30 Jul 2026",
    title: "Data Analytics Intern (Remote)",
    company: "Codec Technologies",
    description: [
      "Completed a remote data analytics internship, working with Excel, SQL, and Python.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.MYSQL,
      SkillNames.RECHARTS,
    ],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "2025",
    title: "Academic Excellence Recognition",
    company: "Scintillation 2024-25 · Arya College of Engineering and IT",
    description: [
      "Recognized for academic and technical excellence at Scintillation 2024-25, Arya College of Engineering and IT.",
    ],
    skills: [
      SkillNames.C,
      SkillNames.CPP,
      SkillNames.PYTHON,
      SkillNames.JS,
      SkillNames.SQL,
      SkillNames.DBMS,
    ],
  },
  {
    id: 3,
    startDate: "2025",
    endDate: "2025",
    title: "National-Level Hackathon Participant",
    company: "Hackground India 2K25 · UEM Hackathon Jaipur",
    description: [
      "Participated in Hackground India 2K25 and UEM Hackathon Jaipur, national-level hackathon competitions demonstrating quick learning and teamwork under time constraints.",
      "Led frontend design for a 5-member team at UEM Hackathon Jaipur, prototyping a solution under time constraints.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  degree: string;
  institution: string;
  grade: string;
  coursework?: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "Aug 2023",
    endDate: "Aug 2027",
    degree:
      "Bachelor of Technology, Electronics and Communication Engineering",
    institution: "Arya College of Engineering and IT, Jaipur, Rajasthan",
    grade: "CGPA: 8.0/10.0",
    coursework:
      "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering Principles",
  },
  {
    id: 2,
    startDate: "2023",
    endDate: "2023",
    degree: "Higher Secondary (12th) — RBSE",
    institution: "Govt. Sr. Sec. School, Jalor, Rajasthan",
    grade: "71%",
  },
  {
    id: 3,
    startDate: "2021",
    endDate: "2021",
    degree: "Secondary (10th) — RBSE",
    institution: "Govt. Sr. Sec. School, Kalandri, Rajasthan",
    grade: "89%",
  },
];

export type Certification = {
  id: number;
  date: string;
  title: string;
  issuer: string;
  description: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    date: "June 2025",
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON",
    description:
      "Professional training in communication, interviews, and AI fundamentals.",
  },
  {
    id: 2,
    date: "Aug 2025",
    title: "Natural Language Processing for Developers",
    issuer: "Infosys Springboard",
    description: "Hands-on training in NLP and text processing.",
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

