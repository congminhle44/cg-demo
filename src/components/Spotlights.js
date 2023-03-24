import Lamp from "./Lamp";

const spotLightProperties = [
  { position: [-3.67, 1, -3.4] },
  { position: [-4.85, 1, -3.4] },
  { position: [-6.12, 1, -3.4] },
];

const Spotlights = () => {
  const renderSpotLight = () => {
    return spotLightProperties?.map((light, index) => (
      <Lamp key={index} position={light.position} />
    ));
  };
  return <group dispose={null}>{renderSpotLight()}</group>;
};

export default Spotlights;
