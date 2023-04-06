import { useRef } from "react";

const instructPositions = [
  { position: [-4, 1.5, -2.7], child: "counter-table001" },
  { position: [5, 1.5, 2], child: "bar001" },
  { position: [2.6, 2.5, 8.5], child: "guildboard" },
  { position: [-3.2, 1.7, 11], child: "PC001" },
];

const ConeInstructions = ({ setCursorSelected }) => {
  const ref = useRef();

  return instructPositions.map((cone, index) => {
    return (
      <mesh
        key={index}
        ref={ref}
        position={cone.position}
        rotation={[Math.PI, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          setCursorSelected(cone.child);
        }}
      >
        <coneGeometry args={[0.1, 0.2, 4]} />
        <meshBasicMaterial color="red" />
      </mesh>
    );
  });
};

export default ConeInstructions;
