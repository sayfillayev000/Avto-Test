import "./App.scss";
import { Route, Routes, } from "react-router-dom";
import { Error, Home, Test } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biletlar" element={<Test />} />
      <Route path="/mavzular" element={<Test />} />
      <Route path="/imtihon" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
