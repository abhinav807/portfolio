"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  Variants,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inViewResult = useInView(ref, {
    once: true,
    ...(inViewMargin ? { margin: inViewMargin as any } : {})
  });
  const [settled, setSettled] = useState(false);
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  const instant = prefersReducedMotion === true;
  const reveal = instant || settled || inViewResult;

  // Safety net 1: if the element is within the viewport but the intersection
  // observer never fired (e.g. unsupported), force it visible after a grace
  // period so content can never be stranded.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inViewport =
        rect.top < window.innerHeight && rect.bottom > 0 && rect.height > 0;
      if (inViewport && !inViewResult) setSettled(true);
    }, 2000);
    return () => window.clearTimeout(id);
  }, [prefersReducedMotion, inViewResult]);

  // Safety net 2: once revealed, if the animation never completes (opacity
  // still low after its window), swap to a plain visible container.
  useEffect(() => {
    if (prefersReducedMotion || !inViewResult) return;
    const id = window.setTimeout(() => {
      const el = ref.current;
      const opacity = el ? parseFloat(getComputedStyle(el).opacity) : 0;
      if (!el || Number.isNaN(opacity) || opacity < 0.95) setSettled(true);
    }, (delay + duration + 0.8) * 1000);
    return () => window.clearTimeout(id);
  }, [delay, duration, prefersReducedMotion, inViewResult]);

  if (settled) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={reveal ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: instant ? 0 : 0.04 + delay,
          duration: instant ? 0 : duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;
