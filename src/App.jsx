import { useState } from "react";
import "./App.css";
import OnBoardingFeatures from "./components/OnBoardingFeatures";
import NavBar from "./components/NavBar";
import MapPage from "./components/MapPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/Map";
import FavouriteList from "./components/FavouriteList";
import("preline");

const defaultParkList = [
  {
    name: "Default Park",
    parkid: "420",
    address: "somewhere in vancouver",
    coordinates: {
      lat: 49.246292,
      lng: -123.116226,
    },
    fav: true,
  },
];



function App() {
  const [favList, setFavlist] = useState(defaultParkList);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<OnBoardingFeatures />} />
          <Route path="/map" element={<MapPage favList={favList} setFavlist={setFavlist}/>} />
          <Route path="/fav" element={<FavouriteList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
