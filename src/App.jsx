import { useState } from "react";
import "./App.css";
import OnBoardingFeatures from "./components/OnBoardingFeatures";
import NavBar from "./components/NavBar";
import('preline')


function App() {
  return (
<>
<NavBar/>
<OnBoardingFeatures/>

</>
  );
}

export default App;
