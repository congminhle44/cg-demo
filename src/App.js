import { Physics } from "@react-three/cannon";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Ground from "./components/Ground";
import Player from "./components/Player";
import * as THREE from "three";
import House from "./components/House";

function App() {
  const debug = false;

  return (
    <Suspense fallback="loading...">
      <Canvas
        gl={{ toneMapping: THREE.NoToneMapping }}
        shadows={true}
        camera={{ position: [2, 2, 2] }}
        style={{ height: "100vh" }}
      >
        {debug && <OrbitControls />}
        <ambientLight intensity={0.5} />
        <Sky sunPosition={[100, 85, 100]} />
        <Stars />
        <Physics gravity={[0, -30, 0]}>
          <Player debug={debug} position={[2, 0, 2]} />
          <House debug={debug} />
          <Ground receiveShadow position={[0, 0, 0]} />
        </Physics>
      </Canvas>
    </Suspense>
  );
}

export default App;
