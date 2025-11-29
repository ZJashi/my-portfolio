"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState } from "react";   // ⭐ ADD useState here
import OrbitingSkill from "./OrbitingSkill";


function FloatingSphere() {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);

  useFrame(({ mouse }) => {
    if (!ref.current) return;

    // rotation
    ref.current.rotation.x += 0.002 + mouse.y * 0.0005;
    ref.current.rotation.y += 0.003 + mouse.x * 0.0005;

    // scale animation (small pulse on hover)
    const targetScale = hovered ? 1.05 : 1;
    ref.current.scale.x += (targetScale - ref.current.scale.x) * 0.1;
    ref.current.scale.y += (targetScale - ref.current.scale.y) * 0.1;
    ref.current.scale.z += (targetScale - ref.current.scale.z) * 0.1;
  });

  return (
    <group
      ref={ref}
      position={[0, 0, 0.1]}   // slight forward shift
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* SPHERE (default state) */}
      {!hovered ? (
        <Sphere args={[1.8, 64, 64]}>
          <MeshDistortMaterial
            color="#2aa9ff"
            emissive="#2aa9ff"
            emissiveIntensity={0.7}
            distort={0.4}
            speed={2}
            wireframe
          />
        </Sphere>
      ) : (
        /* TORUS (smaller + clean) */
        <mesh>
          <torusKnotGeometry args={[1.4, 0.25, 200, 32]} />
          <MeshDistortMaterial
            color="#00eaff"
            emissive="#00eaff"
            emissiveIntensity={1.3}
            transparent
            opacity={0.8}
            distort={0.2}
            speed={3}
            wireframe
          />
        </mesh>
      )}
    </group>
  );
}




export default function Hero3D() {
  return (
    <div className="w-full h-[60vh] relative">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 10 }}>

        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={2} />
        <FloatingSphere />
      </Canvas>

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
    </div>
  );
}
