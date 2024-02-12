import { MoreVertical } from "lucide-react";
import React from "react";
import ReactApexChart from "react-apexcharts";

const Customer = () => {
  const totalcustomers = [
    {
      data: [183, 124, 115, 85, 143],
    },
  ];
  const newCustomer = [
    {
      data: [400,600,1000,700,600],
    }
  ]
  return (
    <div className="bg-purple-100 p-4 rounded-lg h-full">
      <div className="flex justify-between">
        <h2 className=" mt-2 font-medium font-weight-800 text-xl">Customer</h2>
        <MoreVertical />
        {/*will update dynamic code to route to customer page  with id */}
      </div>
      <div>
        <h3 className="mt-5 text-sm text-gray-500 font-weight-800">Total Customer</h3>
        <div className="flex flex-wrap justify-between">
          <div className="flex-col w-1/4">
            <h1 className="text-xl font-bold font-weight-200 mt-3">5007K</h1>
            <h6 className="text-green-500">21.77%</h6>
          </div>
          <ReactApexChart
            type="bar"
            series={totalcustomers}
            options={{
              chart: {
                type: "bar",
                toolbar: {
                  show: false,
                },
              },
              colors: ["#A0D7E7"],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "55%",
                },
              },
              dataLabels: {
                enabled: false,
              },
              grid: {
                show: false,
              },
              stroke: {
                colors: ["transparent"],
                width: 4,
              },
              xaxis: {
                labels: {
                  show: false,
                },
              },
              yaxis: {
                show: false,
              },
            }}
            height="75%"
            width="80%"
          />
        </div>      
        <hr className="p-0 w-full border-gray-300" />
      </div>
      <div>
      <div className="mt-5 text-gray-500">
        New Customer This Month
      </div>
      <div className="flex flex-wrap justify-between align-bottom">
        <div>
        <h1 className="font-bold text-xl mt-3">12K</h1>
        <h6 className="text-green-500 mt-1">21.77%</h6>
        </div>
        <ReactApexChart
            type="bar"
            series={newCustomer}
            options={{
              chart: {
                type: "bar",
                toolbar: {
                  show: false,
                },
              },
              colors: ["#475BE8"],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "55%",
                },
              },
              dataLabels: {
                enabled: false,
              },
              grid: {
                show: false,
              },
              stroke: {
                colors: ["transparent"],
                width: 4,
              },
              xaxis: {
                labels: {
                  show: false,
                },
              },
              yaxis: {
                show: false,
              },
            }}
            height="75%"
            width="80%"
          />
      </div>
      </div>
    </div>
  );
};

export default Customer;
