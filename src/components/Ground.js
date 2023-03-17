import { usePlane } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
const assetUrl = "/assets/umedalabo_nonright.glb";

const pointLightPositions = [
  [-0.597, -0.46, 0],
  [1.175, -0.46, 0],
  [2.76, -0.46, 0],
  [4.373, -0.46, 0],
  [-2.046, -0.46, 0],
];

const spotLightProperties = [
  // { position: [-3.35, 2.4, 4.2] },
  { position: [-3.35, 2.4, 5.35] },
  // { position: [-3.35, 2.2, 6.58] },
];

const Ground = ({ ...props }) => {
  const { scene } = useGLTF(assetUrl);
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  const renderPointLight = () => {
    return pointLightPositions.map((position) => {
      return <pointLight position={position} intensity={0.2} />;
    });
  };
  const renderSpotLight = () => {
    return spotLightProperties.map((property) => {
      return (
        <spotLight
          {...property}
          angle={45}
          penumbra={0.5}
          target={{ position: [-1, 0, 0] }}
          decay={1.0}
          color="FFF8DA"
          intensity={1}
        />
      );
    });
  };

  return (
    <>
      <mesh ref={ref} />
      <primitive castShadow object={scene} />
      {renderPointLight()}
      {renderSpotLight()}
    </>
  );
};

export default Ground;
