import { useEffect, useState } from "react";

interface NormalizedMousePosition {
  x: number; // -1 (left) to 1 (right)
  y: number; // -1 (top) to 1 (bottom)
}

/**
 * Tracks mouse position normalized to [-1, 1] relative to the viewport.
 * Used by the 3D floating object (subtle rotation) and the cursor glow overlay.
 */
export function useMousePosition(): NormalizedMousePosition {
  const [position, setPosition] = useState<NormalizedMousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
