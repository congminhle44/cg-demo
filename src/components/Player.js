import { useSphere } from "@react-three/cannon";
import { PointerLockControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Vector3 } from "three";
import { useKeyboardInput } from "../hooks/useKeyboardInput";

const Player = (props) => {
  const {
    movement: { moveBackward, moveForward, moveLeft, moveRight, jump, sprint },
  } = useKeyboardInput();
  const { camera } = useThree();
  const [speed, setSpeed] = useState(5);
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: [0.7, 0.5, 6],
    type: "Dynamic",
  }));
  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  const pos = useRef(props.position);
  useEffect(
    () => api.position.subscribe((v) => (pos.current = v)),
    [api.position]
  );

  useFrame(() => {
    {
      !props.debug &&
        camera.position.copy(
          new Vector3(pos.current[0], pos.current[1] + 0.6, pos.current[2])
        );
    }
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );
    sprint ? setSpeed(5) : setSpeed(3);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.01) {
      api.velocity.set(velocity.current[0], 8, velocity.current[2]);
    }
  });

  return (
    <>
      {!props.debug && <PointerLockControls pointerSpeed={0.6} />}
      <mesh castShadow ref={ref}>
        <sphereGeometry />
        <meshStandardMaterial
          transparent={true}
          opacity={props.debug ? 0.7 : 0}
        />
      </mesh>
    </>
  );
};

export default Player;
