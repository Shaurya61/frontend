import { ApexOptions } from 'apexcharts';
import { ArrowUpCircleIcon } from 'lucide-react';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Revenue = () => {
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
  )
}

export default Revenue