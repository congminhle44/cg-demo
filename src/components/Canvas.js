import { Physics } from "@react-three/cannon";
import { OrbitControls, PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import Ground from "./Ground";
import House from "./House";
import Player from "./Player";
import Pointlights from "./Pointlights";
import Spotlights from "./Spotlights";
import ConeInstructions from "./ConeInstructions";

const HouseCanvas = ({
  debug,
  setHover,
  setCursorSelected,
  selectedLink,
  joyStick,
}) => {
  const pointerLockRef = useRef(null);
  setTimeout(() => {
    if (pointerLockRef?.current && selectedLink) {
      setTimeout(() => {
        pointerLockRef?.current?.unlock();
      }, 5);
    } else {
      setTimeout(() => {
        pointerLockRef?.current?.lock();
      }, 5);
    }
  }, [pointerLockRef, selectedLink]);

  return (
    <Canvas
      gl={{
        toneMapping: THREE.NoToneMapping,
      }}
      shadows
      camera={{ position: [0, 0, 0] }}
      style={{ height: "100vh" }}
      dpr={[1, 2]}
    >
      {debug && <OrbitControls />}
      {!debug && window.innerWidth > 1367 && (
        <PointerLockControls ref={pointerLockRef} pointerSpeed={0.3} />
      )}
      <ambientLight intensity={0.7} />
      <Suspense fallback={null}>
        <ConeInstructions setCursorSelected={setCursorSelected} />
        <Pointlights />
        <Spotlights />
      </Suspense>
      <Physics gravity={[0, -30, 0]}>
        <Player joyStick={joyStick} debug={debug} position={[2, 0, 2]} />
        <House
          debug={debug}
          setHover={setHover}
          setCursorSelected={setCursorSelected}
        />
        <Ground receiveShadow position={[0, 0, 0]} />
      </Physics>
    </Canvas>
  );
};

export default HouseCanvas;
