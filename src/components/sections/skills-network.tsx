"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { skills } from "@/lib/portfolio-data";

type DragState = {
  pointerId: number;
  lastX: number;
};

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
        <Image src={skill.secondaryLogo} alt="" width={25} height={25} unoptimized className="skill-logo-secondary" />
      )}
    </span>
  );
}

export default function SkillsNetwork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const offsetRef = useRef(0);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = { pointerId: event.pointerId, lastX: event.clientX };
    event.currentTarget.classList.add("is-dragging");
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (!drag || drag.pointerId !== event.pointerId || !track) return;

    const delta = event.clientX - drag.lastX;
    if (delta === 0) return;
    drag.lastX = event.clientX;

    const group = track.querySelector<HTMLElement>(".skills-marquee-group");
    const groupWidth = group?.getBoundingClientRect().width ?? 0;
    let nextOffset = offsetRef.current + delta;
    if (groupWidth > 0) {
      nextOffset = ((nextOffset + groupWidth / 2) % groupWidth + groupWidth) % groupWidth - groupWidth / 2;
    }

    offsetRef.current = nextOffset;
    track.style.setProperty("--marquee-offset", `${nextOffset}px`);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const track = trackRef.current;
    if (!track) return;

    event.preventDefault();
    event.currentTarget.classList.add("is-dragging");
    const group = track.querySelector<HTMLElement>(".skills-marquee-group");
    const groupWidth = group?.getBoundingClientRect().width ?? 0;
    const delta = event.key === "ArrowRight" ? 48 : -48;
    let nextOffset = offsetRef.current + delta;
    if (groupWidth > 0) {
      nextOffset = ((nextOffset + groupWidth / 2) % groupWidth + groupWidth) % groupWidth - groupWidth / 2;
    }
    offsetRef.current = nextOffset;
    track.style.setProperty("--marquee-offset", `${nextOffset}px`);
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      event.currentTarget.classList.remove("is-dragging");
    }
  }

  function finishPointer(event: PointerEvent<HTMLDivElement>) {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return;
    dragRef.current = null;
    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div
      className="skills-network"
      role="group"
      aria-label="Technology logos. Drag or swipe horizontally to explore; focus and use left and right arrow keys to move."
      tabIndex={0}
      aria-keyshortcuts="ArrowLeft ArrowRight"
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointer}
      onPointerCancel={finishPointer}
      onLostPointerCapture={finishPointer}
    >
      <div className="skills-marquee-track" ref={trackRef}>
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
