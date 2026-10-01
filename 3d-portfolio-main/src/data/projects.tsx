import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMapbox,
  SiMaplibre,
  SiMongodb,
  SiOpenstreetmap,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  railRadar: {
    title: "RailRadar",
    bg: "black",
    fg: "white",
    icon: <SiMapbox />,
  },
  mapTiler: {
    title: "MapTiler",
    bg: "black",
    fg: "white",
    icon: <SiMapbox />,
  },
  mapLibre: {
    title: "MapLibre",
    bg: "black",
    fg: "white",
    icon: <SiMaplibre />,
  },
  openWeather: {
    title: "OpenWeather",
    bg: "black",
    fg: "white",
    icon: <SiOpenstreetmap />,
  },
  openTopography: {
    title: "OpenTopography",
    bg: "black",
    fg: "white",
    icon: <SiOpenstreetmap />,
  },
  overpass: {
    title: "Overpass/OSM",
    bg: "black",
    fg: "white",
    icon: <SiOpenstreetmap />,
  },
  turf: {
    title: "Turf.js",
    bg: "black",
    fg: "white",
    icon: <SiMapbox />,
  },
  ai: {
    title: "AI/ML",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  database: {
    title: "Database",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  featured?: boolean;
  features?: string[];
};
const projects: Project[] = [
  {
    id: "telemedicine",
    category: "Web Development",
    title: "Full-Stack Developer — Telemedicine Application",
    src: "/assets/projects-screenshots/telemedicine.svg",
    screenshots: ["telemedicine.svg"],
    featured: true,
    features: [
      "Automated scheduling that reduces manual appointment coordination",
      "Online doctor consultations and patient record management end-to-end",
      "RESTful APIs and MongoDB schema for patient/doctor data, appointment logic, and real-time availability filters",
      "Real-time chat and video consultation modules across patient/doctor dashboards",
      "Lazy-loaded appointment form improving load performance by 50%",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.html,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A production-style telemedicine platform built with React.js,
            Node.js, Express.js, and MongoDB, supporting online doctor
            consultations and patient record management end-to-end while
            reducing manual appointment coordination through automated
            scheduling.
          </TypographyP>
          <div className="mt-4 mb-4">
            <TypographyH3 className="text-lg mb-2">Key Features</TypographyH3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-muted-foreground">
              {this.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <ProjectsLinks live={this.live} repo={undefined} />
          <SlideShow images={[`${BASE_PATH}/telemedicine.svg`]} />
        </div>
      );
    },
  },
  {
    id: "personal-portfolio",
    category: "Web Development",
    title: "Personal Developer Portfolio",
    src: "/portfolio.png",
    screenshots: ["portfolio.png"],
    features: [
      "About me section",
      "Skills showcase",
      "Projects gallery",
      "Education and certificates",
      "Contact information",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            My personal portfolio website showcasing my skills, projects,
            education, certificates, and contact information with a modern 3D
            design and smooth animations.
          </TypographyP>
          <div className="mt-4 mb-4">
            <TypographyH3 className="text-lg mb-2">Key Features</TypographyH3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-muted-foreground">
              {this.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <ProjectsLinks live={this.live} repo={undefined} />
          <SlideShow images={[`${BASE_PATH}/portfolio-thumbnail.svg`]} />
        </div>
      );
    },
  },
];
export default projects;
