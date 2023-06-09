import React, {useEffect , useState} from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import "./chart3.scss";
import moment from "moment";

const Chart = require("react-chartjs-2").Chart;

function Chart3({title}) {
  const [chart, setChart] = useState([]);
  var baseUrl =
    "https://r14rbqmmxc.execute-api.ap-northeast-1.amazonaws.com/prod/vehicle";

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.vehicleData);
            setChart(json.vehicleData);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCoin();
  }, [baseUrl]);


  const chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)"
  };
  
  const color = Chart.helpers.color;
  const data = {
    datasets: [
      {
        label: "Dataset 1 (linear interpolation)",
        backgroundColor: color(chartColors.red)
          .alpha(0.5)
          .rgbString(),
        borderColor: chartColors.red,
        fill: false,
        lineTension: 0,
        borderDash: [8, 4],
        data: []
      }
    ]
  };
  
  const options = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      xAxes: [
        {
          type: "realtime",
          distribution: "linear",
          realtime: {
            onRefresh: function(chartData) {
              chartData.data.datasets[0].data.push({
                x: moment(),
                y: chart?.map((x) => x.field3)
              });
            },
            delay: 3000,
            time: {
              displayFormat: "h:mm"
            }
          },
          ticks: {
            displayFormats: 1,
            maxRotation: 0,
            minRotation: 0,
            stepSize: 1,
            maxTicksLimit: 30,
            minUnit: "second",
            source: "auto",
            autoSkip: true,
            callback: function(value) {
              return moment(value, "HH:mm:ss").format("mm:ss");
            }
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 1
          }
        }
      ]
  
    }
  };
  
  return (
    <div className="chart">
      <h1>{title}</h1>
      <div className="lineChart__Box">
        <Line
          className="linechart"
          // style={{ width: "300px", height: "320px" }}
          data={data}
          height={80}
          options={options}
        />
      </div>
    </div>
  );
}

export default Chart3;
