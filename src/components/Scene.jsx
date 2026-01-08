import { useRef } from "react";
import { MagicSphere } from "@/components/MagicSphere";
import { MiniMagicSphere } from "@/components/MiniMagicSphere";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { DotScreen } from "./DotScreenEffect";

export const Scene = () => {
  const sphereRef = useRef();
  const miniSphereRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.5;
    sphereRef.current.material.time = time;
    miniSphereRef.current.material.time = time;
  });
  return (
    <>
      <MiniMagicSphere ref={miniSphereRef} />
      <MagicSphere ref={sphereRef} />
      <EffectComposer>
        <Noise opacity={0.3} />
      </EffectComposer>
    </>
  );
};
