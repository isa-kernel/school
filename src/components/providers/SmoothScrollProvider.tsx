"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateScroll = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateScroll);

    return () => {
      gsap.ticker.remove(updateScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}