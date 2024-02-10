import React from 'react';
import ReactApexChart from 'react-apexcharts';
type pieChartProps = {
  title: string;
  value: number;
  series: any[];
  colors: string[];
};

const pieChart = ({title,value,series,colors} : pieChartProps) => {
  return (
    <div className="flex flex-1 bg-fcfcfc rounded-md p-3.5 py-2 items-center space-x-2 min-h-110 bg-gray-100 justify-between">
      <div className="flex flex-col">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-bold text-black">{value}</div>
      </div>
      <ReactApexChart
        options={{
          chart: { type: 'donut' },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
          plotOptions: {
            pie: {
              donut: {
                size: '50%',
              },
            },
          },
        }}
        series={series}
        type="donut"
        width="50%"  // Use "100%" to occupy full width
      />
    </div>
  );
};

export default pieChart;