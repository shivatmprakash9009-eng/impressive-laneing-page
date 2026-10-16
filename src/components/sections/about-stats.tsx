"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.7 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setCount(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.65,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, target]);

  return (
    <span className="about-stat-number" ref={countRef}>
      {String(count).padStart(2, "0")}
      {suffix && <span className="about-stat-suffix">{suffix}</span>}
    </span>
  );
}

export default function AboutStats() {
  const reduceMotion = useReducedMotion();
  const cardMotion = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="about-stats" aria-label="Portfolio highlights">
      <motion.div className="about-stat-card" {...cardMotion(0)}>
        <strong aria-label="More than one year building">
          <CountUp target={1} suffix="+" />
        </strong>
        <span className="about-stat-label">Year of building</span>
      </motion.div>
      <motion.div className="about-stat-card" {...cardMotion(0.1)}>
        <strong aria-label="Nine tools in the toolkit">
          <CountUp target={9} />
        </strong>
        <span className="about-stat-label">Tools in my kit</span>
      </motion.div>
      <motion.div className="about-stat-card" {...cardMotion(0.2)}>
        <strong aria-label="Always learning">
          <motion.span
            className="about-stat-number"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.72 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          >∞</motion.span>
        </strong>
        <span className="about-stat-label">Things to learn</span>
      </motion.div>
    </div>
  );
}
