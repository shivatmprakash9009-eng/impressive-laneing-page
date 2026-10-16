export const IMAGES = {
  hero: "https://i.ibb.co/DgPGVBzq/file-00000000212c8208848844cfe89b33ac.png",
  office: "https://i.ibb.co/zTPY8sXp/jdpereiro-office-space-1744805.jpg",
  meeting: "https://i.ibb.co/m5GhB3Bs/pexels-chairs-2181951.jpg",
  chairs: "https://i.ibb.co/nqw59ZcJ/pexels-chairs-2181960.jpg",
} as const;

export type Skill = {
  name: string;
  logo: string;
  color: string;
  className: string;
  secondaryLogo?: string;
  secondaryColor?: string;
};

const simpleIcon = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

export const skills: Skill[] = [
  { name: "HTML5", logo: simpleIcon("html5", "E34F26"), color: "#E34F26", className: "skill-html" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572B6", className: "skill-css" },
  { name: "JavaScript", logo: simpleIcon("javascript", "F7DF1E"), color: "#F7DF1E", className: "skill-js" },
  { name: "React", logo: simpleIcon("react", "61DAFB"), color: "#61DAFB", className: "skill-react" },
  { name: "Next.js", logo: simpleIcon("nextdotjs", "FFFFFF"), color: "#FFFFFF", className: "skill-next" },
  { name: "Git & GitHub", logo: simpleIcon("git", "F05032"), color: "#F05032", className: "skill-git", secondaryLogo: simpleIcon("github", "FFFFFF"), secondaryColor: "#FFFFFF" },
  { name: "GSAP", logo: simpleIcon("greensock", "88CE02"), color: "#88CE02", className: "skill-gsap" },
  { name: "Framer Motion", logo: simpleIcon("framer", "FFFFFF"), color: "#FFFFFF", className: "skill-framer" },
  { name: "Tailwind CSS", logo: simpleIcon("tailwindcss", "06B6D4"), color: "#06B6D4", className: "skill-tailwind" },
];

export type Project = {
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  stack: string[];
  visual: "pulse" | "north" | "signal" | "tomorrow";
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Pulse — Music Intelligence",
    category: "PRODUCT DESIGN · WEB APP",
    image: IMAGES.office,
    description: "A personal listening dashboard that turns streaming data into stories. Explore your listening habits, discover patterns, and curate playlists that feel like you.",
    stack: ["Next.js", "Spotify API", "Tailwind CSS"],
    visual: "pulse",
  },
  {
    number: "02",
    title: "Studio North",
    category: "CREATIVE DEVELOPMENT · BRAND",
    image: IMAGES.meeting,
    description: "A digital home for a multidisciplinary creative studio, designed around quiet typography, considered motion, and a confident editorial grid.",
    stack: ["React", "GSAP", "Framer Motion"],
    visual: "north",
  },
  {
    number: "03",
    title: "Signal — Data Stories",
    category: "INTERACTIVE EXPERIENCE · DATA",
    image: IMAGES.chairs,
    description: "A clear and expressive interface for turning complex metrics into practical insight, with tactile controls and a layered information architecture.",
    stack: ["TypeScript", "D3", "Next.js"],
    visual: "signal",
  },
  {
    number: "04",
    title: "Tomorrow, Engineered",
    category: "EXPERIMENTAL WEB · AI",
    image: IMAGES.office,
    description: "An exploratory concept translating emerging technology into a polished, accessible experience through atmospheric art direction and purposeful interactions.",
    stack: ["React", "WebGL", "Motion"],
    visual: "tomorrow",
  },
];
