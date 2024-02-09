"use client";
import React from "react";
import PieChart from "./pieChart";
import { ArrowUpCircleIcon } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const Card = () => {
  const PropertyReferal = [
    {
      name: "Social Media",
      data: 64,
    },
    {
      name: "MarketPaces",
      data: 40,
    },
    {
      name: "Websites",
      data: 50,
    },
    {
      name: "Digital Ads",
      data: 80,
    },
    {
      name: "Others",
      data: 15,
    },
  ];
  const TotalRevenueSeries = [
    {
      name: "Last Month",
      data: [183, 124, 115, 85, 143, 143, 96],
    },
    {
      name: "Running Month",
      data: [95, 84, 72, 44, 108, 108, 47],
    },
  ];
  const TotalRevenueOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#475BE8", "#CFC8FF"],
    plotOptions: {
      bar: {
        borderRadius: 4,
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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    tooltip: {
      y: {
        formatter(val: number) {
          return `$ ${val} thousands`;
        },
      },
    },
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="flex flex-wrap gap-4">
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for rent"
          value={550}
          series={[60, 40]}
          colors={["#FD8539", "#e4e8ef"]}
        />
        <PieChart
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={["#2ED480", "#e4e8ef"]}
        />
        <PieChart
          title="Total Cities"
          value={555}
          series={[75, 25]}
          colors={["#FE6D8E", "#e4e8ef"]}
        />
      </div>
      <div className="flex gap-4">
        <div className="p-3.5 py-2 items-center space-x-2 min-h-110 rounded-lg w-2/3 mt-10 font-medium font-weight-800 text-xl bg-purple-100">
          Total Revenue
          <div className="flex flex-row gap-10 text-xl font-bold mt-4">
            $236,535
            <div className="text-xs">
              <ArrowUpCircleIcon className="fill-blue-500 text-white transition-lg" />
              0.8%
              <div>Than Last month</div>
            </div>
          </div>
          <ReactApexChart
            series={TotalRevenueSeries}
            type="bar"
            height={300}
            options={TotalRevenueOptions}
          />
        </div>
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
      </div>
    </div>
  );
};

export default Card;
