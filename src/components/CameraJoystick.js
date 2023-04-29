import { memo } from 'react'
import { Joystick } from 'react-joystick-component'

const CameraJoystick = ({ setJoystickRotation }) => {
  const handleMove = (e) => {
    const { x } = e
    setJoystickRotation({ x })
  }
  const handleStop = () => {
    setJoystickRotation({ x: 0 })
  }
  return (
    <>
      {window.innerWidth < 1367 && (
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 64,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2
          }}
        >
          <Joystick
            size={80}
            stickSize={30}
            baseColor="rgba(0,0,0,0.65)"
            stickColor="#bdbdbd"
            move={handleMove}
            stop={handleStop}
          ></Joystick>
        </div>
      )}
    </>
  )
}

export default memo(CameraJoystick)
