import { useState } from "react";
import "./App.css";
import OnBoardingFeatures from "./components/OnBoardingFeatures";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import('preline')


function App() {
  return (
<>
<NavBar/>
{/* <OnBoardingFeatures/> */}
<Map/>

</>
  );
}

export default App;
