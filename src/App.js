import React from 'react'
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Ground from "./components/Ground";
import Player from "./components/Player";
import * as THREE from "three";
import House from "./components/House";
import Crosshair from "./components/Crosshair";
import Loading from "./components/Loading";
import Pointlights from "./components/Pointlights";
import Spotlights from "./components/Spotlights";

const debug = false;

const MainCanvas = React.memo(function MyCanvas({ setHover, setCursorSelected }) {
  return <Canvas
    gl={{
      toneMapping: THREE.NoToneMapping,
    }}
    shadows
    camera={{ position: [2, 2, 2] }}
    style={{ height: "100vh" }}
  >
    {debug && <OrbitControls />}
    <ambientLight intensity={0.7} />
    <Suspense fallback={null}>
      <Pointlights />
      <Spotlights />
    </Suspense>
    <Physics gravity={[0, -30, 0]}>
      <Player debug={debug} position={[2, 0, 2]} />
      <House debug={debug} setHover={setHover} setCursorSelected={setCursorSelected} />
      <Ground receiveShadow position={[0, 0, 0]} />
    </Physics>
  </Canvas>
})

function App() {
  const [ hover, setHover ] = useState('')
  const [ cursorSelected, setCursorSelected ] = useState('')
  return (
    <Suspense fallback={<Loading />}>
      <Crosshair hoverOn={hover} cursorSelected={cursorSelected} />
      <MainCanvas setHover={setHover} setCursorSelected={setCursorSelected} />
    </Suspense>
  );
}

export default App;
