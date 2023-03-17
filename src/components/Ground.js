import { usePlane } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
const assetUrl = "/assets/umedalabo_nonright.glb";

const pointLightPositions = [
  [-0.597, 2, 0],
  [1.175, 2, 0],
  [2.76, 2, 0],
  [4.373, 2, 0],
  [-2.046, 2, 0],
];

const spotLightProperties = [
  { position: [-3.67, 2.2, -3.4] },
  { position: [-4.85, 2.2, -3.4] },
  { position: [-6.12, 2.2, -3.4] },
];

const Ground = ({ ...props }) => {
  const { scene } = useGLTF(assetUrl);
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

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
    return spotLightProperties.map((property, index) => {
      return (
        <spotLight
          key={index}
          {...property}
          angle={Math.PI / 6}
          castShadow
          penumbra={0.25}
          distance={10}
          decay={0.5}
          color="#FFF8DA"
          intensity={1}
        />
      );
    });
  };

  return (
    <>
      <mesh ref={ref} />
      <primitive rotation={[0, -Math.PI / 2, 0]} castShadow object={scene} />
      {/* {renderPointLight()} */}
      {renderSpotLight()}
    </>
  );
};

export default Ground;
