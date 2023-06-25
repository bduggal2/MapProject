import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import ToastAlert from "./ToastAlert";
import marker from "../assets/marker-icon-2x.png";

import {
  parkData,
  getFacilities,
  getFilteredFacilitiesParks,
} from "../data/data";
import { useMap } from "../hooks/CustomHooks";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { useState, useEffect } from "react";

const Map = ({ washroomSelected, facility, favList, setFavlist }) => {
  const { position } = useMap();
  const [parks, setParks] = useState([]);
  const [displayToast, setDisplayToast] = useState(false);



  const getFilterdFacilities = async (query) => {
    let filteredFacilityParks = await getFilteredFacilitiesParks(query);

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

  useEffect(() => {
    let oldData = JSON.parse(localStorage.getItem("favList"))
    if (oldData) {
      const newData = [...favList, ...oldData];

      const uniqueData = newData.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.parkid === current.parkid)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
      // ! removing duplicates from array was a challenge
      // const uniqueData = [...new Set(newData)];

      //   let uniqueData = newData.filter((element, index) => {
      //     return newData.indexOf(element) === index;
      // });
      localStorage.setItem("favList", JSON.stringify(uniqueData));
    } else if (favList.length === 1) {
      localStorage.setItem("favList", JSON.stringify(favList));
    }
  }, [favList]);

  return (
    <>
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

        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
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
                  ];
                  const uniqueList = Array.from(new Set(newList));
                  setFavlist(uniqueList);
                  setDisplayToast(true);

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
      {displayToast && <ToastAlert setDisplayToast={setDisplayToast} />}
    </>
  );
};

export default Map;
