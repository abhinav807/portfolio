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
  inView?: boolean;
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
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inViewResult = useInView(ref, {
    once: true,
    ...(inViewMargin ? { margin: inViewMargin as any } : {})
  });
  const inReach = !inView || inViewResult;
  const [settled, setSettled] = useState(false);
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  const instant = prefersReducedMotion === true;
  const reveal = instant || settled || inReach;

  // Safety net: if the reveal never completes, swap to a plain visible container.
  // Skipped when the element already finished animating so there is no flash.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setTimeout(() => {
      const el = ref.current;
      const opacity = el ? parseFloat(getComputedStyle(el).opacity) : 0;
      if (!el || Number.isNaN(opacity) || opacity < 0.95) setSettled(true);
    }, (delay + duration + 0.8) * 1000);
    return () => window.clearTimeout(id);
  }, [delay, duration, prefersReducedMotion]);

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
