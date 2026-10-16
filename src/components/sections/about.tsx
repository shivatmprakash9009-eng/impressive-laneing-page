import SectionHeading from "@/components/sections/section-heading";
import AboutStats from "@/components/sections/about-stats";

export default function About() {
  return (
    <section className="about section-wrap" id="about" aria-labelledby="about-title">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity is my creative engine." index="01" id="about-title" />
      <div className="about-story reveal-up">
        <p className="about-lead">I build digital experiences where <span>precision meets personality.</span></p>
        <p>
          I’m a self-taught front-end developer exploring advanced JavaScript architecture and modular UI patterns. I turn complex ideas into intuitive interfaces through reusable components, deliberate visual systems, and accessible interactions.
        </p>
        <p>
          I care about the details users feel more than they notice: motion that guides rather than distracts, layouts that hold together at every screen size, and code that stays readable long after launch.
        </p>
        <div className="about-interests">
          <span><span className="interest-line" /> Outside the browser</span>
          <p>Active cycling, outdoor exploring, and high-fidelity music — the kind of off-screen resets that keep curiosity switched on.</p>
        </div>
        <AboutStats />
      </div>
    </section>
  );
}
