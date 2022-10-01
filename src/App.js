import "./App.css";
import Units from "./components/Units/Units";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Units />} />
      </Routes>
    </div>
  );
}

export default App;
