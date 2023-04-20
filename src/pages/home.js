import { useEffect, useState } from "react";
import Crosshair from "../components/Crosshair";
import HouseCanvas from "../components/Canvas";
import IFrame from "../components/Iframe";
import CameraJoystick from "../components/CameraJoystick";
import MovementJoystick from "../components/MovementJoystick";
import Instruction from "../components/Instruction";
import DemoVideoFrame from "../components/DemoVideoFrame";

const debug = false;

const Home = () => {
  const [hover, setHover] = useState("");
  const [instructDevice, setInstructDevice] = useState(
    window.innerWidth >= 1336 ? "pc" : "mobile"
  );
  const [showInstruct, setShowInstruct] = useState(false);
  const [cursorSelected, setCursorSelected] = useState("");
  const [showDemoCanvas, setShowDemoCanvas] = useState(false);
  const [joyStick, setJoyStick] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    lookUp: false,
    lookLeft: false,
    lookRight: false,
    lookDown: false,
  });

  const link = {
    guildboard: "https://meta-heroes.io/#surveice",
    PC001: "https://meta-heroes.io/#company",
    平面: "https://meta-heroes.io/#work",
    平面001: "https://meta-heroes.io/#work",
    bar001: "https://meta-heroes.io/#work",
    "counter-table001": "https://meta-heroes.io/#news",
  };
  const selectedLink = link[cursorSelected];
  const isHover = link[hover];

  useEffect(() => {
    setTimeout(() => setShowInstruct(true), 500);
  }, []);

  const handleJoyStickPress = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setJoyStick({ ...joyStick, [e.target.name]: true });
  };
  const handleJoyStickRelease = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setJoyStick({ ...joyStick, [e.target.name]: false });
  };

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
        <DemoVideoFrame setShowDemoCanvas={setShowDemoCanvas} />
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
  );
};

export default Home;
