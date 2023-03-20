import { usePlane } from "@react-three/cannon";
import { Box, SpotLight, useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Lamp } from "./Lamp";
const assetUrl = "/assets/umedalabo_nonright_fix.glb";

const pointLightPositions = [
  [-0.597, 2, 0],
  [1.175, 2, 0],
  [2.76, 2, 0],
  [4.373, 2, 0],
  [-2.046, 2, 0],
];

const spotLightProperties = [
  { position: [-3.67, 1, -3.4] },
  { position: [-4.85, 1, -3.4] },
  { position: [-6.12, 1, -3.4] },
];

const Ground = ({ ...props }) => {
  const { scene, nodes } = useGLTF(assetUrl);
  console.log(nodes[''])
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const spotLightRef = useRef()

  useMemo(() => {
    scene.traverse((sceneNode) => {
      if (sceneNode.isMesh) {
        // show shadow for model
        sceneNode.castShadow = true;
        sceneNode.receiveShadow = true;
      }
    });
  }, [scene]);


  const renderPointLight = () => {
    return pointLightPositions.map((position) => {
      // return <pointLight position={position} intensity={0.2} />;
      return (
        <mesh position={position}>
          <boxBufferGeometry args={[0.2, 0.2, 0.2]} />
          <meshLambertMaterial color="#00be00" />
        </mesh>
      );
    });
  };

  const renderSpotLight = () => {
    return spotLightProperties?.map(light => <Lamp position={light.position} />)
  };

  return (
    <>
      <mesh ref={ref} />
      <primitive rotation={[0, -Math.PI / 2, 0]} castShadow object={scene} />
      {renderPointLight()}
      {renderSpotLight()}
    </>
  );
};

export default Ground;
