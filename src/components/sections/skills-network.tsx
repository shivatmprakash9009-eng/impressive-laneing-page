"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/lib/portfolio-data";

export default function SkillsNetwork() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="skills-network"
      role="group"
      aria-label="Technology skills constellation"
      animate={reduceMotion ? undefined : { x: [-10, 10] }}
      transition={{ duration: 19, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    >
      <div className="network-lines" aria-hidden="true">
        {skills.map((skill, i) => (
          <span key={skill.name} className={`network-spoke spoke-${i + 1}`} />
        ))}
      </div>
      <div className="network-core">
        <div className="core-glow" />
        <div className="core-mark" aria-hidden="true">Σ</div>
        <span>BUILD / EXPLORE</span>
      </div>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 37;
        const y = 49 + Math.sin(angle) * 34;

        return (
          <motion.div
            key={skill.name}
            title={skill.name}
            aria-label={skill.name}
            className={`skill-node ${skill.className}`}
            style={{ left: `${x}%`, top: `${y}%`, "--skill-color": skill.color } as React.CSSProperties}
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 3.5 + i * 0.31, delay: i * 0.17, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className={skill.secondaryLogo ? "skill-logo-pair" : "skill-logo"}>
              <Image src={skill.logo} alt="" width={28} height={28} unoptimized className="skill-logo-image" />
              {skill.secondaryLogo && (
                <Image src={skill.secondaryLogo} alt="" width={24} height={24} unoptimized className="skill-logo-image skill-logo-secondary" />
              )}
            </span>
            <small>{skill.name}</small>
          </motion.div>
        );
      })}
      <div className="network-orbit orbit-a" />
      <div className="network-orbit orbit-b" />
      <div className="network-orbit orbit-c" />
    </motion.div>
  );
}
