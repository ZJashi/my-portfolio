"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function OrbitingSkill({ text, radius = 1, speed = 0.5, offset = 0 }) {
  const ref = useRef<any>();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.rotation.y = -t + Math.PI / 2;
  });

  return (
    <Text
      ref={ref}
      fontSize={0.4}
      color="#89d2ff"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.02}
      outlineColor="#1e90ff"
    >
      {text}
    </Text>
  );
}
