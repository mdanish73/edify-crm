'use client'
import { Line } from 'react-chartjs-2';
import React from 'react'

const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                id: 1,
                label: '',
                data: [25, 46, 37, 54, 56, 73, 51, 56, 3, 7, 41, 4],
            },
            {
                id: 2,
                label: '',
                data: [25, 46, 37, 54, 56, 73, 51, 56, 3, 7, 41, 4].reverse()
            }
        ],
    }
    
    const config = {
        type: 'line',
        data: data,
        options: {
          animations: {
            tension: {
              duration: 370,
              easing: 'linear',
              from: 0,
              to: 0.5
            }
          },
          scales: {
            y: {
              min: 0,
              max: 100
            }
          }
        }
      };
    
    return (
        <div>
            <div className='text-sm font-semibold mb-2'>Enquiries Data</div>
            <Line
                datasetIdKey='id'
                data={config.data}
                options={config.options}
            />
            </div>
    )
}

export default LineChart
