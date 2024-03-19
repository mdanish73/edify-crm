'use client'
import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => ({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => ({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
};

const MiniBarChart = () => {
    return (
        <div><Bar data={data} options={options} /></div>
    )
}

export default MiniBarChart