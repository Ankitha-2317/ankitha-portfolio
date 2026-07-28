import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import FloatingObject from "./FloatingObject";
import ParticleField from "./ParticleField";

/**
 * Isolated Canvas for the hero's 3D accent. Kept to a single object +
 * sparse particles + two lights — intentionally not a "3D environment" so
 * it stays fast and doesn't compete with the text content for attention.
 */
export default function HeroCanvas() {
  return (
    <div className="h-[320px] w-full sm:h-[420px] lg:h-[560px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[4, 4, 4]} intensity={1.2} color="#8B5CF6" />
          <pointLight position={[-4, -2, -2]} intensity={0.6} color="#7C3AED" />
          <FloatingObject />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
