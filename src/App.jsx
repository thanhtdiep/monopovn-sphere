import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Simulation } from "./components/Simulation";
import { Suspense } from "react";

function App() {
  return (
    <Canvas>
      <color attach="background" args={[0x000000]} />
      <Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 0]} intensity={0.4} />
        <OrbitControls target={[0.5, 0.5, 0]} />
        {/* <Experience /> */}
        <Simulation />
      </Suspense>
    </Canvas>
  );
}

export default App;
