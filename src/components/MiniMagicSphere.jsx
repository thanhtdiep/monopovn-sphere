import { shaderMaterial, CubeCamera } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { forwardRef } from "react";

import vertexShader from "@/shaders/miniBallVertex.glsl";
import fragmentShader from "@/shaders/miniBallFragment.glsl";

import * as THREE from "three";

const MiniSphereMaterial = shaderMaterial(
  {
    time: 0,
    tCube: null,
    resolution: new THREE.Vector4(),
  },
  vertexShader,
  fragmentShader,
  (self) => {
    self.side = THREE.DoubleSide;
    self.extensions.derivatives = true; // No need for the "#extension..." string
  }
);

extend({ MiniSphereMaterial });

export const MiniMagicSphere = forwardRef(function MiniMagicSphere(props, ref) {
  return (
    <group>
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <mesh ref={ref} position={[0.5, 0.5, 0]} toneMapped={false}>
            <sphereGeometry args={[0.9, 32, 32]} />
            <miniSphereMaterial
              time={props.time}
              transparent={true}
              tCube={texture}
            />
          </mesh>
        )}
      </CubeCamera>
    </group>
  );
});
