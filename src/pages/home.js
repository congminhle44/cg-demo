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

const defaultJoyStick = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  jump: false,
  lookUp: false,
  lookLeft: false,
  lookRight: false,
  lookDown: false
}

const Home = () => {
  const videoUrl = `${config.apiHost}/demo-video.mp4`
  const [hover, setHover] = useState('')
  const [instructDevice, setInstructDevice] = useState(
    window.innerWidth >= 1336 ? 'pc' : 'mobile'
  )
  const [showInstruct, setShowInstruct] = useState(false)
  const [cursorSelected, setCursorSelected] = useState('')
  const [showDemoCanvas, setShowDemoCanvas] = useState(false)
  const [linkData, setLinkData] = useState()
  const [joyStick, setJoyStick] = useState(defaultJoyStick)

  const link = { ...linkData }
  const selectedLink = link[cursorSelected]
  const isHover = link[hover]

  useEffect(() => {
    setTimeout(() => setShowInstruct(true), 500)
    handleFetchLinks()
  }, [])

  const handleJoyStickPress = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setJoyStick({ ...joyStick, [e.target.name]: true })
  }
  const handleJoyStickRelease = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setJoyStick({ ...joyStick, [e.target.name]: false })
  }
  const handleDisableZooming = (e) => {
    setJoyStick(defaultJoyStick)
  }
  useEffect(() => {
    document.addEventListener('touchend', handleDisableZooming)
    return () => {
      document.removeEventListener('touchend', handleDisableZooming)
    }
  })

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
      <Crosshair hoverOn={isHover} />
      {showInstruct && (
        <Instruction
          instructDevice={instructDevice}
          setInstructDevice={setInstructDevice}
          setShowInstruct={setShowInstruct}
        />
      )}
      <IFrame
        cursorSelected={selectedLink}
        setCursorSelected={setCursorSelected}
      />
      <CameraJoystick
        handleJoyStickPress={handleJoyStickPress}
        handleJoyStickRelease={handleJoyStickRelease}
      />
      <MovementJoystick
        handleJoyStickPress={handleJoyStickPress}
        handleJoyStickRelease={handleJoyStickRelease}
      />
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
        setHover={setHover}
        joyStick={joyStick}
        setCursorSelected={setCursorSelected}
        selectedLink={selectedLink}
      />
    </div>
  )
}

export default Home
