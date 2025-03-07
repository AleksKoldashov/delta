import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../App.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export default function LineChart({ ...props }) {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
        text: "",
      },
      legend: {
        display: false, // отключить отображение легенды (если она есть)
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const labels = ["", "", "", "", "", "", ""];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data:
          props.a < props.b
            ? labels.map(() => getRandomFloat(props.a, props.b))
            : labels.map(() => getRandomFloat(props.a, props.b)),
        borderColor: "green",
        yAxisID: "y",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
