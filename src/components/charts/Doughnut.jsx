'use client'
import { React, useState, useLayoutEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, registerables } from 'chart.js';
import axios from 'axios';
Chart.register(ArcElement, ...registerables);

const MyDoughnutChart = () => {
    const [res, setRes] = useState(null);

    useLayoutEffect(() => {
        const axiosConfig = {
            headers: {
                Accept: "application/json"
            }
        }

        axios.get('https://admin.edifycit.com/api/employees?limit=73', axiosConfig).then((response) => {
            const data = response.data.message.data;

            if (data.length > 0) {
                const statusCount = {};

                data.forEach((employee) => {
                    const status = employee.status;
                    if (statusCount.hasOwnProperty(status)) {
                        statusCount[status]++;
                    } else {
                        statusCount[status] = 1;
                    }
                });

                const uniqueStatus = Object.keys(statusCount);

                const chartData = {
                    labels: uniqueStatus,
                    datasets: [{
                        label: 'No. of Employees',
                        data: uniqueStatus.map((status) => statusCount[status]),
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 3
                    }]
                };

                setRes(chartData);
            } else {
                console.log("No data found...");
            }
        }).catch((error) => {
            console.log(error.message);
        });

    }, []);

    const options = {
        responsive: true,
        cutout: '85%',
        radius: '70%',
        maintainAspectRatio: true
    };

    return (
        <div>
            <div className='text-sm font-semibold mb-2'>Employees Data</div>
            {(res !== null) ? <Doughnut data={res} options={options} /> : <div>Employees data can not be found...</div>}
        </div>
    );
}

export default MyDoughnutChart;
