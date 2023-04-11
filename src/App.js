import { Suspense, useState } from "react";
import Crosshair from "./components/Crosshair";
import Loading from "./components/Loading";
import HouseCanvas from "./components/Canvas";
import IFrame from "./components/Iframe";
import CameraJoystick from "./components/CameraJoystick";
import MovementJoystick from "./components/MovementJoystick";

const debug = false;

function App() {
  const [hover, setHover] = useState("");
  const [cursorSelected, setCursorSelected] = useState("");
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
    <Suspense fallback={<Loading />}>
      <div id="container">
        <Crosshair hoverOn={isHover} />
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
        <HouseCanvas
          debug={debug}
          setHover={setHover}
          joyStick={joyStick}
          setCursorSelected={setCursorSelected}
          selectedLink={selectedLink}
        />
      </div>
    </Suspense>
  );
}

export default App;
