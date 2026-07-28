import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * A single distorted icosahedron with a glassy purple emissive material.
 * Floats gently and applies a small rotational offset toward the cursor —
 * deliberately restrained rather than a full 3D "scene" so it reads as a
 * premium accent, not a gimmick.
 */
export default function FloatingObject() {
  const meshRef = useRef<Mesh>(null);
  const mouse = useMousePosition();

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Continuous slow spin
    meshRef.current.rotation.y += delta * 0.15;

    // Gentle easing toward mouse-driven tilt (small range, never jarring)
    const targetX = mouse.y * 0.25;
    const targetZ = -mouse.x * 0.25;

    meshRef.current.rotation.x +=
      (targetX - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.z +=
      (targetZ - meshRef.current.rotation.z) * 0.05;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#4C1D95"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.6}
          distort={0.35}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}
