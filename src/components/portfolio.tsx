'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Menu, X, Code2, Layers3, Sparkles, Send, MapPin, Mail, Phone, Globe2, Command } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const IMAGES = {
  hero: "https://i.ibb.co/xt0GdQZx/aileenweifeng-lol-2553537.jpg",
  office: "https://i.ibb.co/zTPY8sXp/jdpereiro-office-space-1744805.jpg",
  meeting: "https://i.ibb.co/m5GhB3Bs/pexels-chairs-2181951.jpg",
  chairs: "https://i.ibb.co/nqw59ZcJ/pexels-chairs-2181960.jpg",
};

const projects = [
  { number: "01", title: "Pulse — Music Intelligence", category: "PRODUCT DESIGN · WEB APP", image: IMAGES.office, description: "A personal listening dashboard that turns streaming data into stories. Explore your listening habits, discover patterns, and curate playlists that feel like you.", stack: ["Next.js", "Spotify API", "Tailwind CSS"], visual: "pulse" },
  { number: "02", title: "Studio North", category: "CREATIVE DEVELOPMENT · BRAND", image: IMAGES.meeting, description: "A digital home for a multidisciplinary creative studio, designed around quiet typography, considered motion, and a confident editorial grid.", stack: ["React", "GSAP", "Framer Motion"], visual: "north" },
  { number: "03", title: "Signal — Data Stories", category: "INTERACTIVE EXPERIENCE · DATA", image: IMAGES.chairs, description: "A clear and expressive interface for turning complex metrics into practical insight, with tactile controls and a layered information architecture.", stack: ["TypeScript", "D3", "Next.js"], visual: "signal" },
  { number: "04", title: "Tomorrow, Engineered", category: "EXPERIMENTAL WEB · AI", image: IMAGES.office, description: "An exploratory concept translating emerging technology into a polished, accessible experience through atmospheric art direction and purposeful interactions.", stack: ["React", "WebGL", "Motion"], visual: "tomorrow" },
];

const skills = [
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

const navItems = [{ label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Work", href: "#work" }, { label: "Contact", href: "#contact" }];

function MagneticLink({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 260, damping: 18 });
  const y = useSpring(0, { stiffness: 260, damping: 18 });
  return <motion.a href={href} className={className} style={{ x, y }} onMouseMove={(event) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }} onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.a>;
}

function SectionHeading({ eyebrow, title, index }: { eyebrow: string; title: string; index: string }) {
  return <div className="section-heading reveal-up"><div className="section-index">{index}</div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div></div>;
}

function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive("#" + visible.target.id);
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="nav-shell">
    <nav className="navbar" aria-label="Main navigation">
      <a href="#home" className="brand" aria-label="Anurag home"><span className="brand-mark"><Command size={17} /></span><span>anurag<span className="brand-dot">.</span></span></a>
      <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
        {navItems.map((item) => <a key={item.href} className={active === item.href ? "nav-link active" : "nav-link"} href={item.href} onClick={() => setOpen(false)}>{item.label}<span /></a>)}
        <a className="nav-availability" href="#contact"><span className="availability-dot" /> Available for work</a>
      </div>
      <button className="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}</button>
    </nav>
  </header>;
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <motion.div className="status-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }}>
        <span className="availability-dot" /> DIGITAL CRAFT · FRONT-END DEVELOPMENT
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2, ease: [.22, 1, .36, 1] }}>Hi, I’m <span className="gradient-word">Anurag</span><span className="hero-period">.</span></motion.h1>
      <motion.p className="hero-role" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .35 }}>Front-End Developer<span className="role-period">.</span></motion.p>
      <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }}>A self-taught front-end developer crafting modern, responsive, and human-centered digital experiences. I turn thoughtful design into fast, accessible interfaces with clean code and a little bit of magic.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .58 }}>
        <MagneticLink href="#contact" className="button button-primary">Let’s talk <ArrowUpRight size={16} /></MagneticLink>
        <a href="#work" className="button button-quiet">Explore my work <ArrowDownRight size={16} /></a>
      </motion.div>
      <motion.div className="hero-footnote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9, duration: .8 }}><span className="hero-footnote-line" /> Scroll to discover <span className="hero-footnote-index">01 / 04</span></motion.div>
    </div>
    <div className="hero-visual">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-halo" />
      <div className="hero-image-frame">
        <Image src={IMAGES.hero} alt="Portrait used for the fictional portfolio profile of Anurag" fill priority sizes="(max-width: 768px) 80vw, 42vw" className="hero-image" />
        <div className="image-shade" />
      </div>
      <motion.div className="floating-card floating-location" animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><span className="mini-icon"><Code2 size={16} /></span><span><strong>Creative developer</strong><small>Turning ideas into interfaces</small></span></motion.div>
      <motion.div className="floating-card floating-stack" animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: .4 }}><span className="stack-dot" /><span><strong>Currently building</strong><small>Experiences that feel alive</small></span></motion.div>
      <div className="visual-caption"><span>FIG. 01</span><span>DESIGN MEETS DEVELOPMENT</span></div>
    </div>
  </section>;
}

function SkillsNetwork() {
  const reduceMotion = useReducedMotion();
  return <div className="skills-network" aria-label="Technology skills constellation">
    <svg className="network-lines" viewBox="0 0 600 430" aria-hidden="true"><defs><linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#00f2fe" stopOpacity=".6" /><stop offset="1" stopColor="#e100ff" stopOpacity=".1" /></linearGradient></defs>{skills.map((skill, i) => {
      const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
      const x = 300 + Math.cos(angle) * 208;
      const y = 210 + Math.sin(angle) * 142;
      return <path key={skill.name} d={`M 300 210 Q ${(300+x)/2 + (i%2 ? 28 : -28)} ${(210+y)/2 - 20} ${x} ${y}`} stroke="url(#lineGlow)" strokeWidth="1" strokeDasharray="4 6" fill="none" />;
    })}</svg>
    <div className="network-core"><div className="core-glow" /><div className="core-mark">Σ</div><span>BUILD / EXPLORE</span></div>
    {skills.map((skill, i) => {
      const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
      const x = 50 + (Math.cos(angle) * 37);
      const y = 49 + (Math.sin(angle) * 34);
      return <motion.div key={skill.name} title={skill.name} className={`skill-node ${skill.className}`} style={{ left: `${x}%`, top: `${y}%` }} animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 3.5 + i * .31, delay: i * .17, repeat: Infinity, ease: "easeInOut" }}><span>{skill.short}</span><small>{skill.name}</small></motion.div>;
    })}
    <div className="network-orbit orbit-a" /><div className="network-orbit orbit-b" /><div className="network-orbit orbit-c" />
  </div>;
}

function About() {
  return <section className="about section-wrap" id="about">
    <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity is my creative engine." index="01" />
    <div className="about-grid">
      <div className="about-story reveal-up">
        <p className="about-lead">I build digital experiences where <span>precision meets personality.</span></p>
        <p>I’m a self-taught front-end developer who enjoys turning complex ideas into simple, intuitive interfaces. My process moves from understanding the problem to shaping a visual system, then bringing it to life with reusable components and considered motion.</p>
        <p>I care about the details users feel more than they notice: a transition that guides rather than distracts, a layout that holds together at every screen size, and code that stays readable long after launch.</p>
        <div className="about-interests"><span><span className="interest-line" /> Outside the browser</span><p>Long rides, new places, good music, and the kind of curiosity that makes you ask, “What if?”</p></div>
        <div className="about-stats"><div><strong>01<span>+</span></strong><small>YEAR OF BUILDING</small></div><div><strong>09</strong><small>TOOLS IN MY KIT</small></div><div><strong>∞</strong><small>THINGS TO LEARN</small></div></div>
      </div>
      <div className="about-visual reveal-up"><div className="network-topline"><span>THE TOOLKIT</span><span>09 NODES · CONNECTED</span></div><SkillsNetwork /><div className="network-bottomline"><span>LEARN BY MAKING</span><span className="live-indicator"><i /> SYSTEM ONLINE</span></div></div>
    </div>
  </section>;
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const reverse = index % 2 === 1;
  return <article className={`project-row project-${index + 1} ${reverse ? "project-reverse" : ""} project-reveal`}>
    <div className="project-visual">
      <div className={`project-image-wrap visual-${project.visual}`}>
        <Image src={project.image} alt={`${project.title} concept preview`} fill sizes="(max-width: 800px) 90vw, 52vw" className="project-image" />
        <div className="project-image-overlay" />
        <div className="project-window-top"><span className="window-dots"><i /><i /><i /></span><span>CONCEPT / {project.number}</span><ArrowUpRight size={15} /></div>
        {project.visual === "pulse" && <div className="mock-ui mock-pulse"><span className="mock-kicker">YOUR SOUND, DECODED</span><strong>Listening<br />in full color.</strong><div className="sound-bars">{Array.from({ length: 22 }, (_, i) => <i key={i} style={{ height: `${18 + ((i * 23) % 75)}%` }} />)}</div><span className="mock-foot">WEEKLY LISTENING REPORT ↗</span></div>}
        {project.visual === "north" && <div className="mock-ui mock-north"><span>STUDIO NORTH / 2026</span><strong>Ideas into<br /><em>experiences.</em></strong><span className="mock-north-bottom">INDEPENDENT CREATIVE STUDIO <ArrowUpRight size={14} /></span></div>}
        {project.visual === "signal" && <div className="mock-ui mock-signal"><span>LIVE DATA / 09:42</span><strong>Every number<br />has a story.</strong><div className="signal-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span className="mock-foot">SIGNAL / INSIGHT ENGINE</span></div>}
        {project.visual === "tomorrow" && <div className="mock-ui mock-tomorrow"><span>FIELD NOTES — 004</span><strong>Tomorrow,<br /><em>engineered.</em></strong><div className="tomorrow-orb" /><span className="mock-foot">A STUDY IN EMERGING TECHNOLOGY</span></div>}
        <div className="project-number">{project.number}</div>
      </div>
    </div>
    <div className="project-copy">
      <div className="project-topline"><span>FEATURED PROJECT</span><span>{project.category}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="project-links"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label={`GitHub for ${project.title}`}><Github size={16} /> Source code</a><a href="#contact" aria-label={`Discuss ${project.title}`}>Explore project <ArrowUpRight size={15} /></a></div>
    </div>
  </article>;
}

function RecentWork() {
  return <section className="work section-wrap" id="work">
    <div className="work-heading-row"><SectionHeading eyebrow="SELECTED WORK · 2024—2026" title="Ideas, made tangible." index="02" /><p className="work-intro reveal-up">A collection of explorations in interface design, front-end craft, and the little details that make a digital product memorable.</p></div>
    <div className="project-list">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
    <div className="work-end reveal-up"><span>MORE CURIOSITY. MORE CREATION.</span><a href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a></div>
  </section>;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "invalid" | "ready">("idle");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim()) {
      setStatus("invalid");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`Name: ${form.name.trim()}\nEmail: ${form.email}\n\n${form.message.trim()}`);
    setStatus("ready");
    window.location.href = `mailto:anurag@example.com?subject=${subject}&body=${body}`;
  }
  return <section className="contact section-wrap" id="contact">
    <SectionHeading eyebrow="HAVE SOMETHING IN MIND?" title="Let’s make it real." index="03" />
    <div className="contact-grid">
      <div className="contact-copy reveal-up"><p className="contact-lead">Good work starts with a <span>good conversation.</span></p><p>Have a product idea, a collaboration in mind, or just want to talk about design and development? My inbox is open.</p>
        <div className="contact-details">
          <a href="tel:+919876543210" className="contact-detail"><span className="detail-icon"><Phone size={16} /></span><span><small>GIVE ME A CALL</small><strong>+91 9876543210</strong></span><ArrowUpRight size={16} /></a>
          <a href="mailto:anurag@example.com" className="contact-detail"><span className="detail-icon"><Mail size={16} /></span><span><small>DROP AN EMAIL</small><strong>anurag@example.com</strong></span><ArrowUpRight size={16} /></a>
          <div className="contact-detail"><span className="detail-icon"><MapPin size={16} /></span><span><small>BASED IN</small><strong>India · Open to remote</strong></span><Globe2 size={16} /></div>
        </div>
      </div>
      <form className="contact-form reveal-up" onSubmit={submit} noValidate>
        <div className="form-heading"><div><span className="eyebrow">YOUR NEXT BIG IDEA</span><h3>Send a message<span>.</span></h3></div><span className="form-number">FORM / 01</span></div>
        <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="How should I call you?" autoComplete="name" value={form.name} onChange={(event) => { setForm({ ...form, name: event.target.value }); setStatus("idle"); }} aria-invalid={status === "invalid" && !form.name.trim()} /></div>
        <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={(event) => { setForm({ ...form, email: event.target.value }); setStatus("idle"); }} aria-invalid={status === "invalid" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)} /></div>
        <div className="form-field"><label htmlFor="message">What’s on your mind?</label><textarea id="message" name="message" rows={4} placeholder="Tell me a little about your project..." value={form.message} onChange={(event) => { setForm({ ...form, message: event.target.value }); setStatus("idle"); }} aria-invalid={status === "invalid" && !form.message.trim()} /></div>
        {status === "invalid" && <p className="form-error" role="alert">Please complete all fields with a valid email address.</p>}
        {status === "ready" && <p className="form-success" role="status">Opening your email app with the message drafted.</p>}
        <button type="submit" className="button button-primary form-submit">Send message <Send size={15} /></button>
        <p className="form-privacy"><span /> Your details stay yours. No spam, ever.</p>
      </form>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer section-wrap"><div className="footer-top"><a href="#home" className="brand"><span className="brand-mark"><Command size={16} /></span><span>anurag<span className="brand-dot">.</span></span></a><p>Thoughtfully made. <span>Intentionally different.</span></p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>© 2026 ANURAG. ALL RIGHTS RESERVED.</span><span className="footer-note">DESIGNED WITH CURIOSITY · BUILT WITH CARE</span><div className="footer-socials"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter / X"><span className="x-icon">𝕏</span></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a></div></div></footer>;
}

export default function Portfolio() {
  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
      gsap.fromTo(element, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: .85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%", once: true } });
    });
    gsap.utils.toArray<HTMLElement>(".project-reveal").forEach((element, index) => {
      gsap.fromTo(element, { y: 55, opacity: 0, x: index % 2 ? 35 : -35 }, { y: 0, opacity: 1, x: 0, duration: 1.05, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 82%", once: true } });
    });
    gsap.utils.toArray<HTMLElement>(".section-heading h2").forEach((heading) => {
      const words = heading.textContent?.split(" ") ?? [];
      heading.innerHTML = words.map((word) => `<span class="heading-mask"><span>${word}</span></span>`).join(" ");
      gsap.fromTo(heading.querySelectorAll(".heading-mask > span"), { yPercent: 110 }, { yPercent: 0, duration: .8, stagger: .08, ease: "power3.out", scrollTrigger: { trigger: heading, start: "top 82%", once: true } });
    });
    const xTo = gsap.quickTo(".parallax-shape-one", "x", { duration: 1.2, ease: "power3.out" });
    const yTo = gsap.quickTo(".parallax-shape-one", "y", { duration: 1.2, ease: "power3.out" });
    const xToTwo = gsap.quickTo(".parallax-shape-two", "x", { duration: 1.6, ease: "power3.out" });
    const yToTwo = gsap.quickTo(".parallax-shape-two", "y", { duration: 1.6, ease: "power3.out" });
    const onMove = (event: MouseEvent) => {
      const mx = event.clientX / window.innerWidth - .5;
      const my = event.clientY / window.innerHeight - .5;
      xTo(mx * 42); yTo(my * 36); xToTwo(mx * -26); yToTwo(my * -32);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, { scope: undefined });
  return <main className="site-shell">
    <div className="background-noise" aria-hidden="true" /><div className="parallax-shape parallax-shape-one" aria-hidden="true" /><div className="parallax-shape parallax-shape-two" aria-hidden="true" />
    <Navbar /><Hero /><About /><RecentWork /><Contact /><Footer />
  </main>;
}
