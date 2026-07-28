import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points as PointsType } from "three";

const PARTICLE_COUNT = 120;

/**
 * A sparse field of tiny purple points around the hero object, for depth.
 * Deliberately low count and low opacity — this is an accent, not a
 * particle simulation, to keep the hero render cheap on low-end devices.
 */
export default function ParticleField() {
  const pointsRef = useRef<PointsType>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#A78BFA"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}
