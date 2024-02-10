import React from 'react'

const PropertyReferals = () => {
  return (
      <div className="p-3.5 py-2 items-center space-x-2 space-y-3 min-h-110 rounded-lg w-1/3 mt-10 mr-4 bg-purple-100">
          <div className="font-medium font-weight-800 text-xl ml-2">
            Property Referals
          </div>
          <div className="flex justify-between mb-1 gap-4">
            <span className="text-base font-medium dark:text-white ">
              Social Media
            </span>
            <span className="text-sm font-medium dark:text-white">
              64%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: '64%' }}
            ></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium dark:text-white">
              MarketPaces
            </span>
            <span className="text-sm font-medium dark:text-white">
              40%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: '40%' }}
            ></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium dark:text-white">
              Websites
            </span>
            <span className="text-sm font-medium dark:text-white">
              50%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-yellow-200 h-2.5 rounded-full"
              style={{ width: '50%' }}
            ></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium dark:text-white">
              Digital Ads
            </span>
            <span className="text-sm font-medium dark:text-white">
              80%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-pink-400 h-2.5 rounded-full"
              style={{ width: '80%' }}
            ></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium dark:text-white">
              Others
            </span>
            <span className="text-sm font-medium dark:text-white">
              15%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{ width: '15%' }}
            ></div>
          </div>
        </div>   
  )
}

export default PropertyReferals