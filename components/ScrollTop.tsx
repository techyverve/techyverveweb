"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/** Jumps to the top whenever the path changes, e.g. "Next project" between case studies. */
export default function ScrollTop() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    // Skip the smooth-scroll animation so the new page simply opens at the top
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname]);
  return null;
}
