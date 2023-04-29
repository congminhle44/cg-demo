import { Joystick } from 'react-joystick-component'

const MovementJoystick = ({ setJoystickDirection }) => {
  const handleMove = (e) => {
    setJoystickDirection(e.direction)
  }
  const handleStop = () => {
    setJoystickDirection('')
  }
  return (
    <>
      {window.innerWidth < 1367 && (
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2
          }}
        >
          <Joystick
            size={100}
            stickSize={40}
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

export default MovementJoystick
