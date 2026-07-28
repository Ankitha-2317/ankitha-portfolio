import { useRef } from "react";
import { useInView as useFramerInView } from "framer-motion";

/**
 * Standardizes scroll-reveal trigger settings across every section so
 * animations fire consistently (once, slightly before fully in view).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const isInView = useFramerInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return { ref, isInView };
}
