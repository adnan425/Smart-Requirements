import React from 'react'
import Chart from 'react-apexcharts';
export default function DonutChart({label="", series = ""}) {
    const chartData = {
        options: {
            labels: label,
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: false,
                        }
                    },
 
                },
            }, dataLabels: {
                enabled: false
            },

        },
        series: series,

    }
  return (
    <div id="chart">
    <div className="donut">
        <Chart options={chartData.options} series={chartData.series} type="donut" width="380" />
    </div>
</div>
  )
}
