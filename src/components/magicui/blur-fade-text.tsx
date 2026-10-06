"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, Variants } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.4,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);
  const prefersReducedMotion = useReducedMotion();
  const [settled, setSettled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const instant = prefersReducedMotion === true;

  // Safety net: if the reveal never completes, replace with plain visible text.
  // Skipped when the animation already finished so nothing flashes.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const animationWindow =
      delay +
      duration +
      (animateByCharacter ? characters.length * characterDelay : 0) +
      0.6;
    const id = window.setTimeout(() => {
      const inner = rootRef.current && rootRef.current.querySelector("span");
      const opacity = inner ? parseFloat(getComputedStyle(inner).opacity) : 0;
      if (!inner || Number.isNaN(opacity) || opacity < 0.95) setSettled(true);
    }, animationWindow * 1000);
    return () => window.clearTimeout(id);
  }, [animateByCharacter, characters.length, characterDelay, delay, duration, prefersReducedMotion]);

  if (settled) {
    return (
      <div ref={rootRef} className="flex">
        <span className={cn("inline-block", className)}>{text}</span>
      </div>
    );
  }

  if (animateByCharacter) {
    return (
      <div ref={rootRef} className="flex">
        {characters.map((char, i) => {
          const charVariants: Variants = {
            hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
            visible: { y: 0, opacity: 1, filter: "blur(0px)" },
          };
          return (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              variants={charVariants}
              transition={{
                duration: instant ? 0 : duration,
                delay: instant ? 0 : delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="flex">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={combinedVariants}
        transition={{
          duration: instant ? 0 : duration,
          delay: instant ? 0 : delay,
          ease: "easeOut",
        }}
        className={cn("inline-block", className)}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default BlurFadeText;
