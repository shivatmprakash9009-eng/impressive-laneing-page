"use client";

import { useEffect, useState } from "react";
import { Command, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActive("#" + visible.target.id);
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.6] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="nav-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Anurag home">
          <span className="brand-mark"><Command size={17} /></span>
          <span>anurag<span className="brand-dot">.</span></span>
        </a>
        <div id="primary-nav-links" className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              className={active === item.href ? "nav-link active" : "nav-link"}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}<span />
            </a>
          ))}
          <a className="nav-availability" href="#contact" onClick={() => setOpen(false)}>
            <span className="availability-dot" /> Available for work
          </a>
        </div>
        <button
          type="button"
          className="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
    </header>
  );
}
