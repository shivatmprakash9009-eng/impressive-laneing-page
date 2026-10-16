import SectionHeading from "@/components/sections/section-heading";
import ProjectCard from "@/components/sections/project-card";
import { projects } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export default function RecentWork() {
  return (
    <section className="work section-wrap" id="work" aria-labelledby="work-title">
      <div className="work-heading-row">
        <SectionHeading eyebrow="SELECTED WORK · 2024—2026" title="Ideas, made tangible." index="02" id="work-title" />
        <p className="work-intro reveal-up">A collection of explorations in interface design, front-end craft, and the little details that make a digital product memorable.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
      </div>
      <div className="work-end reveal-up">
        <span>MORE CURIOSITY. MORE CREATION.</span>
        <a href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
