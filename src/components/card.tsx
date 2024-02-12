"use client";
import React from "react";
import PieChart from "./pieChart";    
import PropertyReferals from "./PropertyReferals";
import Revenue from "./Revenue";
import AgentList from "./agentList";
import Customer from "./customer";
import LatestSales from "./LatestSales";

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
      <div className="flex flex-1 gap-4">
        <Revenue />
        <PropertyReferals />
      </div>
        <div className="flex">
          <div className="mb-4 w-3/12">
          <AgentList />
          </div>
          <div className="pt-4 pr-4 pl-4 w-4/12 mb-4">
          <Customer />
          </div>
          <div className="pt-4 pr-4 pl-4 mb-4 w-5/12 bg-purple-100 mt-4 rounded-lg">
            <LatestSales />
          </div>
          </div>
    </div>
  );
};

export default Card;
