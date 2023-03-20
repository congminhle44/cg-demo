import { usePlane } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Lamp } from "./Lamp";
const assetUrl = "/assets/umedalabo_nonright_fix.glb";

const spotLightProperties = [
  { position: [-3.67, 1, -3.4] },
  { position: [-4.85, 1, -3.4] },
  { position: [-6.12, 1, -3.4] },
];

const Ground = ({ ...props }) => {
  const { scene, nodes } = useGLTF(assetUrl);
  console.log(nodes[""]);
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  const renderSpotLight = () => {
    return spotLightProperties?.map((light) => (
      <Lamp position={light.position} />
    ));
  };

  return (
    <>
      <mesh ref={ref} />
      <primitive rotation={[0, -Math.PI / 2, 0]} castShadow object={scene} />
      {renderSpotLight()}
    </>
  );
};

export default Ground;
