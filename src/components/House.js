import { useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import ColliderBox from './ColliderBox'
import DemoVideo from './DemoVideo'
const assetUrl = '/assets/umedalabo_nonright.glb'

const colliders = [
  //Tables
  { position: [0.65, 0.5, 1.86], scale: [1.25, 0.6, 2.4] },
  { position: [-2.54, 0.5, 1.86], scale: [1.25, 0.6, 2.4] },
  { position: [-5.32, 0.5, 1.86], scale: [1.25, 0.6, 2.4] },
  { position: [0.65, 0.5, 6], scale: [1.25, 0.6, 2.4] },
  { position: [-2.54, 0.5, 6], scale: [1.25, 0.6, 2.4] },
  { position: [-5.32, 0.5, 6], scale: [1.25, 0.6, 2.4] },
  // Bar
  { position: [4.8, 0.5, 1.6], scale: [0.8, 1, 7] },
  // Wall
  { position: [-8, 0.5, -4], scale: [30, 5, 1] },
  { position: [-4, 0.9, -3], scale: [6, 0.5, 1] },
  { position: [7.5, 0.9, -2], scale: [1, 5, 30] },
  { position: [-8, 0.5, 11], scale: [30, 5, 1] },
  { position: [-8.9, 0.9, -3], scale: [1, 5, 30] },
  { position: [0, 3.3, 0], scale: [30, 1, 30] },
  { position: [4.4, 0.5, 8.5], scale: [3, 5, 4] }
]

const House = ({ debug }) => {
  const { scene } = useGLTF(assetUrl)

  const handleRenderCollider = () => {
    return colliders.map((collider, index) => (
      <ColliderBox key={index} debug={debug} {...collider} />
    ))
  }

  return (
    <>
      <primitive rotation={[0, -Math.PI / 2, 0]} object={scene} />
      {/* Main screen at center of the house */}
      <Suspense fallback={null}>
        <DemoVideo position={[-0.99, 2.2, -2.98]} scale={[2.1, 1.2, 0]} />
      </Suspense>
      {handleRenderCollider()}
    </>
  )
}

export default House
