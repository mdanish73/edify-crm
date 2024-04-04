import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from 'react-apexcharts';

export default class DefferedGraph extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Deffered Students',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
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
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
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
