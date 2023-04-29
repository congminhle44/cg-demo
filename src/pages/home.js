import { useEffect, useState } from 'react'
import Crosshair from '../components/Crosshair'
import HouseCanvas from '../components/Canvas'
import IFrame from '../components/Iframe'
import CameraJoystick from '../components/CameraJoystick'
import MovementJoystick from '../components/MovementJoystick'
import Instruction from '../components/Instruction'
import DemoVideoFrame from '../components/DemoVideoFrame'
import { config } from '../config'
import axios from 'axios'

const debug = false

const Home = () => {
  const videoUrl = `${config.apiHost}/demo-video.mp4`
  const [hover, setHover] = useState('')
  const [joystickDirection, setJoystickDirection] = useState('')
  const [joystickRotation, setJoystickRotation] = useState({ x: 0 })
  const [instructDevice, setInstructDevice] = useState(
    window.innerWidth >= 1336 ? 'pc' : 'mobile'
  )
  const [showInstruct, setShowInstruct] = useState(false)
  const [cursorSelected, setCursorSelected] = useState('')
  const [showDemoCanvas, setShowDemoCanvas] = useState(false)
  const [linkData, setLinkData] = useState()

  const link = { ...linkData }
  const selectedLink = link[cursorSelected]
  const isHover = link[hover]

  useEffect(() => {
    setTimeout(() => setShowInstruct(true), 500)
    handleFetchLinks()
  }, [])

  const handleFetchLinks = () => {
    return axios
      .get(`${config.apiHost}/api/links`)
      .then((response) => {
        setLinkData(response.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div id="container">
      {showInstruct && (
        <Instruction
          instructDevice={instructDevice}
          setInstructDevice={setInstructDevice}
          setShowInstruct={setShowInstruct}
        />
      )}
      {!debug && (
        <>
          <Crosshair hoverOn={isHover} />
          <IFrame
            cursorSelected={selectedLink}
            setCursorSelected={setCursorSelected}
          />
          <CameraJoystick setJoystickRotation={setJoystickRotation} />
          <MovementJoystick setJoystickDirection={setJoystickDirection} />
        </>
      )}
      {showDemoCanvas && (
        <DemoVideoFrame
          videoUrl={videoUrl}
          setShowDemoCanvas={setShowDemoCanvas}
        />
      )}
      <HouseCanvas
        debug={debug}
        setShowDemoCanvas={setShowDemoCanvas}
        showInstruct={showInstruct}
        joystickRotation={joystickRotation}
        setHover={setHover}
        joystickDirection={joystickDirection}
        setCursorSelected={setCursorSelected}
        selectedLink={selectedLink}
      />
    </div>
  )
}

export default Home
