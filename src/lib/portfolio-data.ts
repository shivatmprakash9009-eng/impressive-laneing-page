export const IMAGES = {
  hero: "https://i.ibb.co/xt0GdQZx/aileenweifeng-lol-2553537.jpg",
  office: "https://i.ibb.co/zTPY8sXp/jdpereiro-office-space-1744805.jpg",
  meeting: "https://i.ibb.co/m5GhB3Bs/pexels-chairs-2181951.jpg",
  chairs: "https://i.ibb.co/nqw59ZcJ/pexels-chairs-2181960.jpg",
} as const;

export type Skill = {
  name: string;
  short: string;
  className: string;
};

export const skills: Skill[] = [
  { name: "HTML5", short: "HTML", className: "skill-html" },
  { name: "CSS3", short: "CSS", className: "skill-css" },
  { name: "JavaScript", short: "JS", className: "skill-js" },
  { name: "React", short: "Re", className: "skill-react" },
  { name: "Next.js", short: "N", className: "skill-next" },
  { name: "Git & GitHub", short: "Git", className: "skill-git" },
  { name: "GSAP", short: "GS", className: "skill-gsap" },
  { name: "Framer Motion", short: "FM", className: "skill-framer" },
  { name: "Tailwind CSS", short: "TW", className: "skill-tailwind" },
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
