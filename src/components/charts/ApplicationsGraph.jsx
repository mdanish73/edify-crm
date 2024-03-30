import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ApplicationsGraph = () => {
    const data = {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        datasets: [
          {
            labels: 'data',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            line: {
                pointRadius: 5
            }
          }
        ]
    };

    const options = {
        layout: {
            padding: 10,
            height: 10
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false,
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };
      
    return (
        <div className='w-32'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default ApplicationsGraph