import { Suspense, useState } from "react";
import Crosshair from "./components/Crosshair";
import Loading from "./components/Loading";
import HouseCanvas from "./components/Canvas";

const debug = false;

function App() {
  const [hover, setHover] = useState("");
  const [cursorSelected, setCursorSelected] = useState("");
  // Define active links
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

  return (
    <Suspense fallback={<Loading />}>
      <Crosshair
        setCursorSelected={setCursorSelected}
        hoverOn={isHover}
        cursorSelected={selectedLink}
      />
      <HouseCanvas
        debug={debug}
        setHover={setHover}
        setCursorSelected={setCursorSelected}
        selectedLink={selectedLink}
      />
    </Suspense>
  );
}

export default App;
