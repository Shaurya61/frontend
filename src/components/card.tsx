"use client";
import React from "react";
import PieChart from "./pieChart";
import PropertyReferals from "./PropertyReferals";
import Revenue from "./Revenue";

const Card = () => {
  
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
        <Revenue />
        <PropertyReferals />
      </div>
    </div>
  );
};

export default Card;
