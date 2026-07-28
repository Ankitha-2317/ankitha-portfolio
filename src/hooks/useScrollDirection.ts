import { useEffect, useRef, useState } from "react";

interface ScrollInfo {
  /** True once the user has scrolled past the threshold (used to trigger navbar blur/background) */
  isScrolled: boolean;
  /** Current scroll direction, used to optionally hide the navbar on scroll-down */
  direction: "up" | "down";
}

/**
 * Tracks scroll state for the sticky navbar: whether to show the blurred
 * background, and which direction the user is scrolling.
 */
export function useScrollDirection(threshold = 24): ScrollInfo {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    isScrolled: false,
    direction: "up",
  });
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const direction = currentY > lastScrollY.current ? "down" : "up";

      setScrollInfo({
        isScrolled: currentY > threshold,
        direction,
      });

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollInfo;
}
