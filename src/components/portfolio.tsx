"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import RecentWork from "@/components/sections/recent-work";
import Contact from "@/components/sections/contact";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${Math.min(100, Math.max(0, progress))}%`);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      document.documentElement.style.setProperty("--scroll-progress", "0%");
    };
  }, []);

  useGSAP(() => {
    const root = containerRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.querySelectorAll<HTMLElement>(".reveal-up").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        },
      );
    });

    root.querySelectorAll<HTMLElement>(".project-reveal").forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: 55, opacity: 0, x: index % 2 ? 35 : -35 },
        {
          y: 0,
          opacity: 1,
          x: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 82%", once: true },
        },
      );
    });

    root.querySelectorAll<HTMLElement>(".section-heading h2").forEach((heading) => {
      const words = heading.textContent?.split(" ") ?? [];
      heading.innerHTML = words
        .map((word) => `<span class="heading-mask"><span>${word}</span></span>`)
        .join(" ");

      gsap.fromTo(
        heading.querySelectorAll(".heading-mask > span"),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: heading, start: "top 82%", once: true },
        },
      );
    });

    const shapeOne = root.querySelector<HTMLElement>(".parallax-shape-one");
    const shapeTwo = root.querySelector<HTMLElement>(".parallax-shape-two");
    if (!shapeOne || !shapeTwo) return;

    const xTo = gsap.quickTo(shapeOne, "x", { duration: 1.2, ease: "power3.out" });
    const yTo = gsap.quickTo(shapeOne, "y", { duration: 1.2, ease: "power3.out" });
    const xToTwo = gsap.quickTo(shapeTwo, "x", { duration: 1.6, ease: "power3.out" });
    const yToTwo = gsap.quickTo(shapeTwo, "y", { duration: 1.6, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      const mx = event.clientX / window.innerWidth - 0.5;
      const my = event.clientY / window.innerHeight - 0.5;
      xTo(mx * 42);
      yTo(my * 36);
      xToTwo(mx * -26);
      yToTwo(my * -32);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, { scope: containerRef });

  return (
    <main className="site-shell" ref={containerRef}>
      <a href="#home" className="skip-link">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="background-noise" aria-hidden="true" />
      <div className="parallax-shape parallax-shape-one" aria-hidden="true" />
      <div className="parallax-shape parallax-shape-two" aria-hidden="true" />
      <Navbar />
      <Hero />
      <About />
      <RecentWork />
      <Contact />
      <Footer />
    </main>
  );
}
