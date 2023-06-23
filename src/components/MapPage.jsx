import Map from "./Map";
import { useState } from "react";

const MapPage = () => {
  const [washroomBtnActive, setWashroomBtnActive] = useState(false);

  return (
    <>
      {/* Hero */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-2 lg:-translate-y-12">
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Filter
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Introducing a new way for your brand to reach the creative
              community.
            </p>

            {/* Filter Checkbox */}

            <div className="mt-6 lg:mt-12">
              <button
              onClick={()=>setWashroomBtnActive(!washroomBtnActive)}
                className={`${
                  washroomBtnActive
                    ? "bg-slate-400 font-bold"
                    : "bg-gray-100 hover:bg-gray-200"
                } m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm  text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200`}
              >
                Washrooms
              </button>
              <button className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
                Dog Friendly
              </button>
              <button className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
                Facility 3
              </button>
              <button className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
                Facility 4
              </button>
            </div>
            {/* End Filter Checkbox  */}

            {/* Other Filter */}
            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full sm:w-auto">
                <label htmlFor="hero-input" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-3 px-2 block w-full xl:min-w-[15rem] border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-green-500 focus:ring-green-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Enter work email"
                />
              </div>
              <a
                className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-green-600 hover:bg-green-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-3 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Request demo
              </a>
            </div>
          </div>
          {/* End Col */}
          <div className="lg:col-span-5 mt-10 lg:mt-0">
            {/* <img
                className="w-full rounded-xl"
                src="https://images.unsplash.com/photo-1594935975218-a3596da034a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&h=700&q=80"
                alt="Image Description"
              /> */}
            <Map washroomSelected={washroomBtnActive}/>
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
