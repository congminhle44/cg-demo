import { usePlane } from '@react-three/cannon'

const Ground = ({ ...props }) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

  return <mesh ref={ref} />
}

export default Ground
