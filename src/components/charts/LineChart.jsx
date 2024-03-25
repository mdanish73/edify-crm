'use client'
import { Line } from 'react-chartjs-2';
import React from 'react'

const LineChart = () => {
  return (
        <div>
            <div className='text-sm font-semibold mb-2'>Enquiries Data</div>
            <Line
                datasetIdKey='id'
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            id: 1,
                            label: '',
                            data: [5, 6, 7, 5, 6, 7, 5, 6, 7,1,4,3,6,9,3,6],
                        },
                        {
                            id: 2,
                            label: '',
                            data: [3, 2, 1, 5,3,6,8,3,7,4,9,2,1,4]
                        }
                    ],
                }}
                />
            </div>
    )
}

export default LineChart