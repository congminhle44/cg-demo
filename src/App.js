import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
