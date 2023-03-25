import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import ColliderBox from './ColliderBox'
import { demoVideoTexture } from '../libs/demoVideoTexture'
import { useFrame } from '@react-three/fiber'
const assetUrl = '/assets/umedalabo_nonright_fix.glb'

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
  const { scene, nodes } = useGLTF(assetUrl)
  const [videoTexture, videocanvasctx, video] = demoVideoTexture()

  useFrame(() => {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      //draw video to canvas starting from upper left corner
      videocanvasctx.drawImage(video, 0, 0)
      //tell texture object it needs to be updated
      videoTexture.needsUpdate = true
    }
  })
  console.log(nodes['moniter-l'])
  useEffect(() => {
    nodes['moniter-l'].material.map = videoTexture
  }, [videoTexture, nodes])

  const handleRenderCollider = () => {
    return colliders.map((collider, index) => (
      <ColliderBox key={index} debug={debug} {...collider} />
    ))
  }

  return (
    <>
      <primitive rotation={[0, -Math.PI / 2, 0]} castShadow object={scene} />
      {handleRenderCollider()}
    </>
  )
}

export default House
