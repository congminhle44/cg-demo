import { Physics } from '@react-three/cannon'
import { OrbitControls, PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import Ground from './Ground'
import House from './House'
import Player from './Player'
import Pointlights from './Pointlights'
import Spotlights from './Spotlights'
import ConeInstructions from './ConeInstructions'

const HouseCanvas = ({
  debug,
  setHover,
  setCursorSelected,
  selectedLink,
  showInstruct,
  setShowDemoCanvas,
  joystickDirection,
  videoUrl,
  joystickRotation,
  setJoystickRotation
}) => {
  const [xDown, setXDown] = useState(null)
  const pointerLockRef = useRef(null)

  setTimeout(() => {
    if (pointerLockRef?.current && selectedLink) {
      setTimeout(() => {
        pointerLockRef?.current?.unlock()
      }, 5)
    } else {
      setTimeout(() => {
        pointerLockRef?.current?.lock()
      }, 5)
    }
  }, [pointerLockRef, selectedLink])

  const handleTouchStart = (e) => {
    const firstTouch = e.touches[0]
    setXDown(firstTouch.clientX)
  }

  const handleTouchMove = (e) => {
    if (!xDown) return

    var xUp = e.touches[0].clientX

    var xDiff = xDown - xUp

    if (xDiff > 0) {
      /* right swipe */
      setJoystickRotation({ x: xDiff })
    } else {
      /* left swipe */
      setJoystickRotation({ x: xDiff })
    }
  }

  const handleTouchEnd = () => {
    /* reset values */
    setXDown(null)
  }
  return (
    <Canvas
      gl={{
        toneMapping: THREE.NoToneMapping
      }}
      camera={{ position: [0, 0, 0] }}
      style={{ height: '100vh' }}
      dpr={[1, 2]}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {debug && <OrbitControls />}
      {!debug && window.innerWidth > 1367 && !showInstruct && (
        <PointerLockControls ref={pointerLockRef} pointerSpeed={0.3} />
      )}
      <ambientLight intensity={0.7} />
      <Suspense fallback={null}>
        <ConeInstructions setCursorSelected={setCursorSelected} />
        <Pointlights />
        <Spotlights />
      </Suspense>
      <Physics gravity={[0, -30, 0]}>
        <Player
          debug={debug}
          position={[2, 0, 2]}
          joystickDirection={joystickDirection}
          joystickRotation={joystickRotation}
        />
        <House
          debug={debug}
          setHover={setHover}
          videoUrl={videoUrl}
          setShowDemoCanvas={setShowDemoCanvas}
          setCursorSelected={setCursorSelected}
        />
        <Ground receiveShadow position={[0, 0, 0]} />
      </Physics>
    </Canvas>
  )
}

export default HouseCanvas
