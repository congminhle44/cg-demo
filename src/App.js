import { Physics } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Ground from './components/Ground'
import Player from './components/Player'
import * as THREE from 'three'
import House from './components/House'
import Crosshair from './components/Crosshair'
import Loading from './components/Loading'
import Pointlights from './components/Pointlights'
import Spotlights from './components/Spotlights'

const debug = false

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Crosshair />
      <Canvas
        gl={{
          toneMapping: THREE.NoToneMapping
        }}
        shadows
        camera={{ position: [2, 2, 2] }}
        style={{ height: '100vh' }}
      >
        {debug && <OrbitControls />}
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Pointlights />
          <Spotlights />
        </Suspense>
        <Physics gravity={[0, -30, 0]}>
          <Player debug={debug} position={[2, 0, 2]} />
          <House debug={debug} />
          <Ground receiveShadow position={[0, 0, 0]} />
        </Physics>
      </Canvas>
    </Suspense>
  )
}

export default App
