import { Suspense, useState } from "react";
import Interface from "./components/Interface";
import Loading from "./components/Loading";
import HouseCanvas from "./components/Canvas";

const debug = false;

function App() {
  const [hover, setHover] = useState("");
  const [cursorSelected, setCursorSelected] = useState("");
  const [joyStick, setJoyStick] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
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
    setJoyStick({ ...joyStick, [e.target.name]: true });
  };
  const handleJoyStickRelease = (e) => {
    e.stopPropagation();
    setJoyStick({ ...joyStick, [e.target.name]: false });
  };

  return (
    <Suspense fallback={<Loading />}>
      <div id="container">
        <Interface
          setCursorSelected={setCursorSelected}
          hoverOn={isHover}
          cursorSelected={selectedLink}
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
