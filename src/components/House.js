import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import ColliderBox from './ColliderBox'
const assetUrl = '/assets/umedalabo_nonright.glb'

const colliders = [
  { position: [0.65, 0.5, 1.86], scale: [1.25, 0.5, 2.4] },
  { position: [-2.54, 0.5, 1.86], scale: [1.25, 0.5, 2.4] },
  { position: [-5.32, 0.5, 1.86], scale: [1.25, 0.5, 2.4] },
  { position: [0.65, 0.5, 6], scale: [1.25, 0.5, 2.4] },
  { position: [-2.54, 0.5, 6], scale: [1.25, 0.5, 2.4] },
  { position: [-5.32, 0.5, 6], scale: [1.25, 0.5, 2.4] }
]

const House = ({ debug }) => {
  const { scene } = useGLTF(assetUrl)
  useMemo(() => {
    scene.traverse((sceneNode) => {
      if (sceneNode.isMesh) {
        // show shadow for model
        sceneNode.castShadow = true
        sceneNode.receiveShadow = true
      }
    })
  }, [scene])

  const handleRenderCollider = () => {
    return colliders.map((collider, index) => (
      <ColliderBox key={index} debug={debug} {...collider} />
    ))
  }

  return (
    <>
      <primitive
        onPointerEnter={(e) => console.log(e)}
        rotation={[0, -Math.PI / 2, 0]}
        castShadow
        object={scene}
      />
      {handleRenderCollider()}
    </>
  )
}

export default House
