import { useEffect, useState } from "react";

const FavouriteList = () => {
  const [favListLocal, setFavListLocal] = useState([]);

  useEffect(() => {
    const favListLocalTemp = JSON.parse(localStorage.getItem("favList"));
    if (favListLocalTemp) {
      setFavListLocal(favListLocalTemp);
    }
  }, []);

  const deletePark = async (id) => {
    setFavListLocal(favListLocal.filter((item) => item.parkid !== id));
    localStorage.setItem("favList", JSON.stringify(favListLocal));
  };

  return (
    <>
      <div className="relative mx-4 px-4 sm:px-4 lg:px-8 mt-4 flex flex-col max-w-[85rem]">
        <p className="py-2 px-2 my-2 text-left block text-2xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-5xl dark:text-white">
          Your favorite parks
        </p>
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Park ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* table row: map this */}
                  {
                  favListLocal ?
                  favListLocal.map((item) => (
                    <tr
                      key={item.parkid}
                      className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.parkid}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <span
                          onClick={() => deletePark(item.parkid)}
                          className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  )):
                  <h3 className="py-2 px-2 my-2 text-left block text-2xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-5xl dark:text-white">
                  Your list is empty
                </h3>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  
  );
};

export default FavouriteList;
