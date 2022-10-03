import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Units from "./components/Units/Units";
import UnitDetail from "./components/UnitDetail/UnitDetail";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Units />} />
        <Route path="/units/:unitId" element={<UnitDetail />} />
      </Routes>
    </div>
  );
}

export default App;
