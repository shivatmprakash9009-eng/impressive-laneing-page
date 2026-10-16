import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reverse = index % 2 === 1;

  return (
    <article className={`project-row project-${index + 1} ${reverse ? "project-reverse" : ""} project-reveal`}>
      <div className="project-visual">
        <div className={`project-image-wrap visual-${project.visual}`}>
          <Image
            src={project.image}
            alt={`${project.title} concept preview`}
            fill
            sizes="(max-width: 800px) 90vw, 52vw"
            className="project-image"
          />
          <div className="project-image-overlay" />
          {project.visual === "pulse" && (
            <div className="mock-ui mock-pulse">
              <strong>Listening<br />in full color.</strong>
              <div className="sound-bars">
                {Array.from({ length: 22 }, (_, i) => <i key={i} style={{ height: `${18 + ((i * 23) % 75)}%` }} />)}
              </div>
            </div>
          )}
          {project.visual === "north" && (
            <div className="mock-ui mock-north">
              <strong>Ideas into<br /><em>experiences.</em></strong>
            </div>
          )}
          {project.visual === "signal" && (
            <div className="mock-ui mock-signal">
              <strong>Every number<br />has a story.</strong>
              <div className="signal-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          )}
          {project.visual === "tomorrow" && (
            <div className="mock-ui mock-tomorrow">
              <strong>Tomorrow,<br /><em>engineered.</em></strong>
              <div className="tomorrow-orb" />
            </div>
          )}
        </div>
      </div>
      <div className="project-copy">
        <div className="project-topline"><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">
          <a href="#contact" aria-label={`Discuss ${project.title}`}>Discuss project <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </article>
  );
}
