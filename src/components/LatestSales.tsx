import Image from "next/image";
import React from "react";

const LatestSales = () => {
    const sales = [
        {
            name: "Metro Jayakar Apartment",
            place: "North Carolina, USA",
            images: "/sales1.png",
            price: "+$35",
        },
        {
            name: "Letdo Ji Hotel & Aportment",
            place: "Carolina North, UK",
            images: "/sales2.png",
            price: "+$40",
        },
        {
            name: "Star Sun Hotel & Apartment",
            place: "North Carolina, USA",
            images: "/sales3.png",
            price: "+$50",
        },
        {
            name: "Metro Jayakar Apartment",
            place: "North Carolina, USA",
            images: "/sales4.png",
            price: "+$60",
        },
    ];
  return (
    <div className=" flex-row">
      <div className="rounded-lg bg-purple-100">
        <div className="flex flex-wrap justify-between">
          <p className="p-3 text-xl text-center font-medium font-weight-200">
            Latest sales
          </p>
        </div>
        <div className="pl-4 pr-4 pb-4">
          {sales.map((sales, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex gap-4 mt-6">
                <Image
                  src={sales.images}
                  alt="profile"
                  width="50"
                  height="20"
                  className="gap-4 rounded-lg"
                />
                <div className="flex-col">
                  <p className="font-medium pb-1">{sales.name}</p>
                  <p className="text-gray-500">{sales.place}</p>
                </div>
                </div>
                <p className="text-blue-500">{sales.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestSales;
