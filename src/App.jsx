import { useState } from "react";
import "./App.css";
import OnBoardingFeatures from "./components/OnBoardingFeatures";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import("preline");

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<OnBoardingFeatures />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
