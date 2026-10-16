"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

type MagneticLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export default function MagneticLink({ children, href, className = "" }: MagneticLinkProps) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 260, damping: 18 });
  const y = useSpring(0, { stiffness: 260, damping: 18 });

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}
