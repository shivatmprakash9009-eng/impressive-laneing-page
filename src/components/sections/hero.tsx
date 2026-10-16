"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";
import { IMAGES } from "@/lib/portfolio-data";
import MagneticLink from "@/components/ui/magnetic-link";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <motion.div
          className="status-pill"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="availability-dot" /> DIGITAL CRAFT · FRONT-END DEVELOPMENT
        </motion.div>
        <motion.h1
          id="hero-title"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I’m <span className="gradient-word">Anurag</span>
        </motion.h1>
        <motion.p
          className="hero-role"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Front-End Developer<span className="role-period">.</span>
        </motion.p>
        <motion.p
          className="hero-description"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          A self-taught front-end developer with 1+ years of experience. I build modern, responsive, user-friendly websites and web apps, focusing on clean code, efficient design, and seamless experiences that support real business goals.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.58 }}
        >
          <MagneticLink href="#contact" className="button button-primary">
            Contact <ArrowUpRight size={16} />
          </MagneticLink>
          <a href="#work" className="button button-quiet">
            Explore my work <ArrowDownRight size={16} />
          </a>
        </motion.div>
        <motion.div
          className="hero-footnote"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span className="hero-footnote-line" /> Scroll to discover <span className="hero-footnote-index">01 / 04</span>
        </motion.div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-halo" />
        <div className="hero-image-frame">
          <Image
            src={IMAGES.hero}
            alt="Portrait used for the fictional portfolio profile of Anurag"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 42vw"
            className="hero-image"
          />
          <div className="image-shade" />
        </div>
        <motion.div
          className="floating-card floating-location"
          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="mini-icon"><Code2 size={16} /></span>
          <span><strong>Creative developer</strong><small>Turning ideas into interfaces</small></span>
        </motion.div>
        <motion.div
          className="floating-card floating-stack"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <span className="stack-dot" />
          <span><strong>Currently building</strong><small>Experiences that feel alive</small></span>
        </motion.div>
        <div className="visual-caption"><span>FIG. 01</span><span>DESIGN MEETS DEVELOPMENT</span></div>
      </div>
    </section>
  );
}
