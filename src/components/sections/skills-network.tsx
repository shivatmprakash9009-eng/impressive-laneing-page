"use client";

import Image from "next/image";
import { skills } from "@/lib/portfolio-data";

function SkillLogo({ skill }: { skill: (typeof skills)[number] }) {
  return (
    <span
      className="toolkit-marquee-item"
      role="img"
      aria-label={skill.name}
      title={skill.name}
      style={{ "--skill-color": skill.color } as React.CSSProperties}
    >
      <Image src={skill.logo} alt="" width={30} height={30} unoptimized className="skill-logo-image" />
      {skill.secondaryLogo && (
        <Image src={skill.secondaryLogo} alt="" width={25} height={25} unoptimized className="skill-logo-image skill-logo-secondary" />
      )}
    </span>
  );
}

export default function SkillsNetwork() {
  return (
    <div className="skills-network" role="group" aria-label="Technology platform logos">
      <div className="skills-marquee-track">
        <div className="skills-marquee-group">
          {skills.map((skill) => <SkillLogo key={skill.name} skill={skill} />)}
        </div>
        <div className="skills-marquee-group" aria-hidden="true">
          {skills.map((skill) => <SkillLogo key={skill.name} skill={skill} />)}
        </div>
      </div>
    </div>
  );
}
