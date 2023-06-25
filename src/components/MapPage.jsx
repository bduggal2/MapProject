import Map from "./Map";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const MapPage = ({favList, setFavlist}) => {
  const [washroomBtnActive, setWashroomBtnActive] = useState(false);
  const [dogBtnActive, toggleDogBtnActive] = useState(false);
  const [tennisBtnActive, toggleTennisBtnActive] = useState(false);
  const [bballBtnActive, toggleBBallBtnActive] = useState(false);

  const [facility, setFacility] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    if (dogBtnActive) {
      setFacility("Dogs Off-Leash Areas");
    } else if (tennisBtnActive) {
      setFacility("Tennis Courts");
    } else if (bballBtnActive) {
      setFacility("Basketball Courts");
    } else {
      setFacility("");
    }
  }, [dogBtnActive, bballBtnActive, tennisBtnActive]);

  return (
    <>
      {/* Hero */}
      <div className="max-w-[85rem] mx-4 px-4 sm:px-4 lg:px-8 mt-4">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center ml-5">
          <div className="lg:col-span-2 lg:-translate-y-12">
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Filters
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Introducing a new way for you to explore Vancouver
              parks.
            </p>

            {/* Filter Checkbox */}

            <div className="mt-6 lg:mt-12">
              <button
                onClick={async (e) => {
                  e.stopPropagation()
                  toggleBBallBtnActive(false)
                  toggleTennisBtnActive(false)
                  toggleDogBtnActive(false)
                  setFacility("");
                  setWashroomBtnActive(!washroomBtnActive);
                }}
                className={`${
                  washroomBtnActive
                    ? "bg-slate-400 font-bold"
                    : "bg-gray-100 hover:bg-gray-200"
                } m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm  text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200`}
              >
                Washrooms
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleBBallBtnActive(false)
                  toggleTennisBtnActive(false)
                  setWashroomBtnActive(false)
                  toggleDogBtnActive(!dogBtnActive);
                }}
                className={`${
                  dogBtnActive
                    ? "bg-slate-400 font-bold"
                    : "bg-gray-100 hover:bg-gray-200"
                } m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm  text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200`}
              >
                Dog Friendly
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setWashroomBtnActive(false)
                  toggleBBallBtnActive(false)
                  toggleDogBtnActive(false)
                  toggleTennisBtnActive(!tennisBtnActive);
                }}
                className={`${
                  tennisBtnActive
                    ? "bg-slate-400 font-bold"
                    : "bg-gray-100 hover:bg-gray-200"
                } m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm  text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200`}
              >
                Tennis Courts
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setWashroomBtnActive(false)
                  toggleTennisBtnActive(false)
                  toggleDogBtnActive(false)
                  toggleBBallBtnActive(!bballBtnActive);
                }}
                className={`${
                  bballBtnActive
                    ? "bg-slate-400 font-bold"
                    : "bg-gray-100 hover:bg-gray-200"
                } m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm  text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200`}
              >
                Basketball Courts
              </button>
            </div>
            {/* End Filter Checkbox  */}

            {/* Other Filter */}
            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <p className="w-full sm:w-auto text-gray-600 font-medium">
             Click on the map pin to view details and click on 💚 to add to your list!
              </p>
              <button
                className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-green-600 hover:bg-green-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-3 dark:focus:ring-offset-gray-800"
                onClick={()=>{navigate("/fav")}}
              >
              Saved List
              </button>
            </div>
          </div>
          {/* End Col */}
          <div className="lg:col-span-5 mt-10 lg:mt-0 overflow-hidden">
            <Map className="overflow-hidden w-full"
              washroomSelected={washroomBtnActive}
              facility={facility}
              dogBtn={dogBtnActive}
              favList={favList}
              setFavlist={setFavlist}
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default MapPage;
