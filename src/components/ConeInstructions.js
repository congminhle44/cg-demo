import { useRef } from "react";

const instructPositions = [
  [-4, 1.5, -2.7],
  [5, 1.5, 2],
  [2.6, 2.5, 8.5],
  [-3.2, 1.7, 11],
];

const ConeInstructions = () => {
  const ref = useRef();

  return instructPositions.map((position, index) => {
    return (
      <mesh
        key={index}
        ref={ref}
        position={position}
        rotation={[Math.PI, 0, 0]}
      >
        <coneGeometry args={[0.1, 0.2, 4]} />
        <meshBasicMaterial color="red" />
      </mesh>
    );
  });
};

export default ConeInstructions;
