'use client'
import { React, useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, registerables } from 'chart.js';
import axios from 'axios';
Chart.register(ArcElement, ...registerables);

const MyDoughnutChart = () => {
    const [res, setRes] = useState(null);

    useEffect(() => {
        const axiosConfig = {
            headers: {
                Accept: "application/json"
            }
        }

        axios.get('https://admin.edifycit.com/api/employees', axiosConfig).then((response) => {
            const data = response.data.message.data;

            if (data.length > 0) {
                const departmentsCount = {};

                data.forEach((employee) => {
                    const department = employee.department;
                    if (departmentsCount.hasOwnProperty(department)) {
                        departmentsCount[department]++;
                    } else {
                        departmentsCount[department] = 1;
                    }
                });

                const uniqueDepartments = Object.keys(departmentsCount);

                const chartData = {
                    labels: uniqueDepartments,
                    datasets: [{
                        label: 'Department',
                        data: uniqueDepartments.map((department) => departmentsCount[department]),
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
        cutout: '80%',
        radius: '80%',
        maintainAspectRatio: true
    };

    return (
        <div>
            {(res !== null) ? <Doughnut data={res} options={options} /> : <div>Employees data can not be found...</div>}
        </div>
    );
}

export default MyDoughnutChart;
