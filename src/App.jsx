import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./components/Scene";
import { Suspense } from "react";

function App() {
  return (
    <Canvas
      camera={{
        fov: 70,
        near: 0.01,
        far: 1000,
        position: [0, 0, 1.3],
      }}
    >
      <color attach="background" args={[0x000000]} />
      <Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 0]} intensity={0.4} />
        <OrbitControls target={[0, 0, 0]} />
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
