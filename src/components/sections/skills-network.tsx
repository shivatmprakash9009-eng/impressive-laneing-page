"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/lib/portfolio-data";

export default function SkillsNetwork() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="skills-network" role="group" aria-label="Technology skills constellation">
      <svg className="network-lines" viewBox="0 0 600 430" aria-hidden="true">
        <defs>
          <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00f2fe" stopOpacity=".6" />
            <stop offset="1" stopColor="#e100ff" stopOpacity=".1" />
          </linearGradient>
        </defs>
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
          const x = 300 + Math.cos(angle) * 208;
          const y = 210 + Math.sin(angle) * 142;
          return (
            <path
              key={skill.name}
              d={`M 300 210 Q ${(300 + x) / 2 + (i % 2 ? 28 : -28)} ${(210 + y) / 2 - 20} ${x} ${y}`}
              stroke="url(#lineGlow)"
              strokeWidth="1"
              strokeDasharray="4 6"
              fill="none"
            />
          );
        })}
      </svg>
      <div className="network-core">
        <div className="core-glow" />
        <div className="core-mark">Σ</div>
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
            className={`skill-node ${skill.className}`}
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 3.5 + i * 0.31, delay: i * 0.17, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>{skill.short}</span><small>{skill.name}</small>
          </motion.div>
        );
      })}
      <div className="network-orbit orbit-a" />
      <div className="network-orbit orbit-b" />
      <div className="network-orbit orbit-c" />
    </div>
  );
}
