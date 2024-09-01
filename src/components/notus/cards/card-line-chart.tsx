'use client';
import { ChartConfiguration } from 'chart.js';
import dynamic from 'next/dynamic';
import React from 'react';

import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const config: ChartConfiguration<'line'> = {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: new Date().getFullYear().toString(),
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
        data: [65, 78, 66, 44, 56, 67, 75],
        fill: false,
      },
      {
        label: (new Date().getFullYear() - 1).toString(),
        fill: false,
        backgroundColor: '#fff',
        borderColor: '#fff',
        data: [40, 68, 86, 74, 56, 60, 87],
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
    elements: {
      line: {
        cubicInterpolationMode: 'monotone',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        display: true,
        // scaleLabel: {
        //   display: false,
        //   labelString: 'Month',
        //   fontColor: 'white',
        // },
        border: {
          dash: [2],
          dashOffset: 2,
        },
        grid: {
          display: false,
          color: 'rgba(33, 37, 41, 0.3)',
          tickColor: 'rgba(0, 0, 0, 0)',
          tickBorderDash: [2],
          tickBorderDashOffset: 2,
        },
      },
      y: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        display: true,
        // scaleLabel: {
        //   display: false,
        //   labelString: 'Value',
        //   fontColor: 'white',
        // },
        border: {
          dash: [3],
          dashOffset: 3,
          display: false,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.15)',
          tickColor: 'rgba(33, 37, 41, 0)',
          tickBorderDash: [2],
          tickBorderDashOffset: 2,
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: 'Sales Charts',
        color: 'white',
      },
      legend: {
        labels: {
          color: 'white',
        },
        align: 'end',
        position: 'bottom',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  },
};

export function CardLineChart() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-100 mb-1 text-xs font-semibold">Overview</h6>
              <h2 className="text-white text-xl font-semibold">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <Line data={config.data} options={config.options} />
          </div>
        </div>
      </div>
    </>
  );
}
