import { Physics } from "@react-three/cannon";
import { Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Ground from "./components/Ground";
import Player from "./components/Player";
import * as THREE from "three";

import Loading from './components/Loading'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas
        gl={{ toneMapping: THREE.NoToneMapping }}
        shadows={true}
        style={{ height: "100vh" }}
      >
        <ambientLight intensity={0.5} />
        <Sky sunPosition={[100, 85, 100]} />
        <Stars />
        <Physics gravity={[0, -30, 0]}>
          <Player position={[0, 3, 0]} />
          <Ground receiveShadow position={[0, -0.1, 0]} />
        </Physics>
      </Canvas>
    </Suspense>
  );
}

export default App;
