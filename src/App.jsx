import { useState } from "react";
import "./App.css";
import OnBoardingFeatures from "./components/OnBoardingFeatures";
import NavBar from "./components/NavBar";
import MapPage from "./components/MapPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/Map";

import("preline");

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Routes>
          <Route path="/" element={<OnBoardingFeatures />} />
          <Route path="/map" element={<MapPage />} />
        </Routes> */}
        <Map/>

      </BrowserRouter>
    </>
  );
}

export default App;
