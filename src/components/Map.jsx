import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  parkData,
  getFacilities,
  getFilteredFacilitiesParks,
} from "../data/data";
import { useMap } from "../hooks/CustomHooks";
import { useState, useEffect } from "react";

const Map = ({ washroomSelected, facility }) => {
  const { position } = useMap();
  const [parks, setParks] = useState([]);
  // const [facilitiesParkData, setFacilitiesParkData] = useState([]);
  // const [washroomParks, setWashroomParks] = useState(
  //   parks.filter((park) => park.fields.washrooms === "Y")
  // );

  // const filterByWashroom = () => {
  //   setParks(washroomParks);
  // };

  const getFilterdFacilities = async (query) => {
    let filteredFacilityParks = await getFilteredFacilitiesParks(query);

    // console.log(filteredFacilityParks.data.records);
    facility && !washroomSelected
      ? setParks(
          parkData.records.filter((p) =>
            filteredFacilityParks.data.records.some(
              (f) => f.fields.parkid === p.fields.parkid
            )
          )
        )
      : setParks(parkData.records);
  };

  const getFilteredWashroom =() => {
    washroomSelected
      ? setParks(parkData.records.filter((park) => park.fields.washrooms === "Y"))
      : setParks(parkData.records);
  };


  // side effect handling when filters are selected
  useEffect(() => {
    getFilteredWashroom();
  }, [washroomSelected]);

  useEffect(() => {
    getFilterdFacilities(facility);
  }, [facility]);

  return (
    <MapContainer
      center={position}
      zoom={12.5}
      scrollWheelZoom={false}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {/* map parkData here */}
      {parks.map((parkItem) => (
        <Marker
          key={parkItem.recordid}
          position={parkItem.fields.googlemapdest}
        >
          <Popup>
            {`${parkItem.fields.name}`} <br />
            {`${parkItem.fields.neighbourhoodname}`}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
