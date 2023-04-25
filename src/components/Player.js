import { useSphere } from "@react-three/cannon";
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
    !props.debug &&
      camera.position.copy(
        new Vector3(pos.current[0], pos.current[1] + 0.6, pos.current[2])
      );
    if (window.innerWidth < 1367) {
      const xVec = props.joyStick.lookLeft - props.joyStick.lookRight;

      camera.rotation.set(0, camera.rotation.y + xVec * 0.05, 0);
    }

    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward || props.joyStick.backward ? 0.5 : 0) -
        (moveForward || props.joyStick.forward ? 0.5 : 0)
    );
    const sideVector = new Vector3(
      (moveLeft || props.joyStick.left ? 0.5 : 0) -
        (moveRight || props.joyStick.right ? 0.5 : 0),
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
    if (
      (jump || props.joyStick.jump) &&
      Math.abs(velocity.current[1].toFixed(2)) < 0.01
    ) {
      api.velocity.set(velocity.current[0], 8, velocity.current[2]);
    }
  });

  return (
    <>
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
