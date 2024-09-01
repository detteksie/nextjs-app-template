'use client';
import { ChartConfiguration } from 'chart.js';
import dynamic from 'next/dynamic';
import React from 'react';

import 'chart.js/auto';

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

const config: ChartConfiguration<'bar'> = {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: new Date().getFullYear().toString(),
        // fill: false,
        backgroundColor: '#ed64a6',
        borderColor: '#ed64a6',
        data: [30, 78, 56, 34, 100, 45, 13],
        barThickness: 8,
      },
      {
        label: (new Date().getFullYear() - 1).toString(),
        // fill: false,
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
        data: [27, 68, 86, 74, 10, 4, 87],
        barThickness: 8,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: false,
        // scaleLabel: {
        //   display: true,
        //   labelString: 'Month',
        // },
        border: {
          dash: [2],
          dashOffset: 2,
        },
        grid: {
          color: 'rgba(33, 37, 41, 0.3)',
          tickColor: 'rgba(33, 37, 41, 0.3)',
          tickBorderDash: [2],
          tickBorderDashOffset: 2,
        },
      },
      y: {
        display: true,
        // scaleLabel: {
        //   display: false,
        //   labelString: 'Value',
        // },
        border: {
          dash: [2],
          dashOffset: 2,
          display: false,
        },
        grid: {
          color: 'rgba(33, 37, 41, 0.2)',
          tickColor: 'rgba(33, 37, 41, 0.15)',
          tickBorderDash: [2],
          tickBorderDashOffset: 2,
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: 'Orders Chart',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        labels: {
          color: 'rgba(0, 0, 0, 0.4)',
        },
        align: 'end',
        position: 'bottom',
      },
    },
  },
};

export function CardBarChart() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">Performance</h6>
              <h2 className="text-slate-700 text-xl font-semibold">Total orders</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <Bar
              data={config.data}
              //
              options={config.options}
            />
          </div>
        </div>
      </div>
    </>
  );
}
