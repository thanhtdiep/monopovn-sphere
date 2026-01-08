import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { forwardRef } from "react";

import vertexShader from "@/shaders/ballVertex.glsl";
import fragmentShader from "@/shaders/ballFragment.glsl";

import * as THREE from "three";

const SphereMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector4(),
  },
  vertexShader,
  fragmentShader,
  (self) => {
    self.side = THREE.DoubleSide;
    self.extensions.derivatives = true; // No need for the "#extension..." string
  }
);

extend({ SphereMaterial });

export const MagicSphere = forwardRef(function MagicSphere(props, ref) {
  return (
    <group>
      <mesh ref={ref} toneMapped={false}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <sphereMaterial time={props.time} />
      </mesh>
    </group>
  );
});
