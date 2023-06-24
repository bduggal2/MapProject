import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  parkData,
  getFacilities,
  getFilteredFacilitiesParks,
} from "../data/data";
import { useMap } from "../hooks/CustomHooks";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { useState, useEffect } from "react";

// const defaultParkList = [
//   {
//     name: "Default Park",
//     parkid: "420",
//     coordinates: {
//       lat: 49.246292,
//       lng: -123.116226,
//     },
//     fav: true,
//   },
// ];

const Map = ({ washroomSelected, facility, favList, setFavlist }) => {
  const { position } = useMap();
  const [parks, setParks] = useState([]);
  // const [favPark, toggleFav] = useState(false);
  // const [favList, setFavlist] = useState(defaultParkList);

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

  const getFilteredWashroom = () => {
    washroomSelected
      ? setParks(
          parkData.records.filter((park) => park.fields.washrooms === "Y")
        )
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
            {`${parkItem.fields.neighbourhoodname}`} <br />
            {/* add to favorite list by clicking on icon */}
            {/* {favPark ? ( */}
            <MdFavorite
              onClick={() => {
               let newList = [
                  ...favList,
                  {
                    name: parkItem.fields.name,
                    parkid: parkItem.fields.parkid,
                    address: `${parkItem.fields.streetnumber} ${parkItem.fields.streetname}`,
                    coordinates: parkItem.fields.googlemapdest,
                    fav: true,
                  },
                ]
                const uniqueList = Array.from(new Set(newList));
                setFavlist(uniqueList);
                console.log(favList);
              }}
              color="#16a34a"
              className="inline-flex justify-center items-center w-[26px] h-[26px] cursor-pointer"
            />
            {/* ) : ( */}
            {/* <MdOutlineFavoriteBorder
                onClick={() => toggleFav(true)}
                color="#16a34a"
                className="inline-flex justify-center items-center w-[26px] h-[26px]"
              />
            )} */}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
