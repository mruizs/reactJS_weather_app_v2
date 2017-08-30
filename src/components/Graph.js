import React from "react"
import {Line as LineChart} from "react-chartjs-2"
import moment from 'moment'
import PropTypes from 'prop-types'

class Graph extends React.Component {
  render() {
    const { days } = this.props
    // console.log(days)
    const chartData = {
      labels: [
        moment.unix(days[0].dt).format("ddd"),
        moment.unix(days[1].dt).format("ddd"),
        moment.unix(days[2].dt).format("ddd"),
        moment.unix(days[3].dt).format("ddd"),
        moment.unix(days[4].dt).format("ddd"),
        moment.unix(days[5].dt).format("ddd"),
        moment.unix(days[6].dt).format("ddd")
      ],
      datasets: [
        {
          label: "Max",
          data: [
            Math.round(days[0].temp.max),
            Math.round(days[1].temp.max),
            Math.round(days[2].temp.max),
            Math.round(days[3].temp.max),
            Math.round(days[4].temp.max),
            Math.round(days[5].temp.max),
            Math.round(days[6].temp.max)
          ],
          borderColor: '#e24040',
          backgroundColor: 'rgba(226, 64, 64, 0)'
        },
        {
          label: "Min",
          data: [
            Math.round(days[0].temp.min),
            Math.round(days[1].temp.min),
            Math.round(days[2].temp.min),
            Math.round(days[3].temp.min),
            Math.round(days[4].temp.min),
            Math.round(days[5].temp.min),
            Math.round(days[6].temp.min)
          ],
          borderColor: '#40d0e2',
          backgroundColor: 'rgba(226, 64, 64, 0)'
        }
      ]
    }
    const options = {
      scaleShowGridLines: true,
      scaleGridLineColor: 'rgba(0,0,0,.05)',
      scaleGridLineWidth: 1,
      scaleShowHorizontalLines: true,
      scaleShowVerticalLines: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      },
      bezierCurve: true,
      bezierCurveTension: 0.4,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 1,
      pointHitDetectionRadius: 20,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: false
    }

    const styles = {
      graphContainer: {
        border: '1px solid black',
        padding: '15px'
      }
    }

    return (
      <div id="chart">
        <LineChart
          data={chartData}
          options={options}
          styles={styles}
          width={800}
          height={300} />
      </div>
    )
  }
}

Graph.PropTypes = {
  days: PropTypes.object.isRequired
}

export default Graph
