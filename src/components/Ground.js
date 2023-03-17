import { usePlane } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
const assetUrl = "/assets/umedalabo_nonright.glb";

const pointLightPositions = [
  [-0.597, -0.46, 0],
  [1.175, -0.46, 0],
  [2.76, -0.46, 0],
  [4.373, -0.46, 0],
  [-2.046, -0.46, 0],
];

const spotLightProperties = [
  { position: [-3.67, 2.2, -3.4] },
  { position: [-4.85, 2.2, -3.4] },
  { position: [-6.12, 2.2, -3.4] },
];

const Ground = ({ ...props }) => {
  const { scene, nodes } = useGLTF(assetUrl);
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  const renderPointLight = () => {
    return pointLightPositions.map((position) => {
      return <pointLight position={position} intensity={0.2} />;
    });
  };
  const renderSpotLight = () => {
    console.log(nodes);
    return spotLightProperties.map((property, index) => {
      return (
        // <mesh {...property}>
        //   <boxBufferGeometry args={[0.2, 0.2, 0.2]} />
        //   <meshBasicMaterial color="#FFF8DA" />
        // </mesh>
        <spotLight
          key={index}
          position={[3, 1, 3]}
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
      {renderPointLight()}
      {renderSpotLight()}
    </>
  );
};

export default Ground;
