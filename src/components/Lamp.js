import { useCylinder, useSphere } from "@react-three/cannon"
import { Box, SpotLight } from "@react-three/drei";
import { useState } from "react"
import * as THREE from "three";

export function Lamp(props) {
  const [target] = useState(() => new THREE.Object3D())
  return (
    <mesh {...props}>
      {/* <Box args={[0.3, 0.3, 0.3]} /> */}
      <SpotLight
        target={target}
        angle={Math.PI / 2}
        anglePower={5}
        penumbra={0.4}
        distance={6}
        decay={1}
        color="#FFF8DA"
        opacity={0}
        intensity={1}
        castShadow
      />
      <primitive object={target} position={[0, -1, 0]} />
    </mesh>
  )
}