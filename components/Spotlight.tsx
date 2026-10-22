"use client";

import type { ReactNode } from "react";

/**
 * Tracks the pointer over its children and exposes the position as --mx / --my
 * on whichever `.spot` card is hovered, driving the CSS glow effect.
 */
export default function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const card = (e.target as HTMLElement).closest<HTMLElement>(".spot");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div className={className} onPointerMove={onMove}>
      {children}
    </div>
  );
}
