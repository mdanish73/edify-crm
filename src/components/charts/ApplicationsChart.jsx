import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from 'react-apexcharts';

export default class ApplicationsChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Net Profit',
          data: [30, 70, 37, 73, 30, 70, 21, 90, 25]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 100,
            width: 120,
            toolbar: {
                show: false
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ['#0000ffAA','#00ff0005','#00ff0007','#00ff0009'], 
              inverseColors: true,
              opacityFrom: 0.3,
              opacityTo: 0.9,
              stops: [0, 50, 100],
              colorStops: [0, 30, 50, 70, 90]
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '100%',
              borderRadius: 2
            },
          },
          dataLabels: {
            enabled: false,
            show: false
          },
          stroke: {
            width: 1,
            colors: ['transparent']
          },
          xaxis: {
            show: false,
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
                show: false
            },
            tooltip: {
                show: false
            }
          },
          yaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          fill: {
            opacity: 1
          }
        },
      };
    }

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={90} width={70} />
          </div>
        </div>
      );
    }
  }
