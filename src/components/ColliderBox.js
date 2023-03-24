import { useBox } from '@react-three/cannon'

const ColliderBox = ({ debug, position, scale }) => {
  useBox(() => ({
    type: 'Static',
    args: scale,
    position
  }))

  return (
    <>
      {debug && (
        <mesh position={position}>
          <boxGeometry args={scale} />
          <meshBasicMaterial transparent={true} opacity={0.5} color="#00be00" />
        </mesh>
      )}
    </>
  )
}

export default ColliderBox
