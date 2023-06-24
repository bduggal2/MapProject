import React from 'react'

const FavouriteList = () => {
  return (
    <>
    <div className="flex flex-col lg:mx-16">
    <caption className="py-2 px-2 my-2 text-left block text-2xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-5xl dark:text-white">Your favorite parks</caption>
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
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                John Brown
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                45
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                New York No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-500 hover:text-blue-700" href="#">
                  Delete
                </a>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                Jim Green
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                27
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                London No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-500 hover:text-blue-700" href="#">
                  Delete
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                Joe Black
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                31
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                Sidney No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-500 hover:text-blue-700" href="#">
                  Delete
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                Edward King
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                16
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                LA No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-500 hover:text-blue-700" href="#">
                  Delete
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                Jim Red
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                45
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                Melbourne No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-500 hover:text-blue-700" href="#">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default FavouriteList