import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from 'https://esm.sh/@faker-js/faker';
  import '../App.css';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

export default function LineChart({...props}) {
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
        text: '',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
    },
  };
  
  const labels = ['', '', '', '', '', '', ''];
const data = {
    labels,
    datasets: [
      {
        label: '',
        data: props.a < props.b 
        ? 
        labels.map(() => faker.datatype.number({ min: props.a, max: props.b+100 })) 
        : 
        labels.map(() => faker.datatype.number({ min: props.b, max: props.a+100 })),
        borderColor: 'green',
        // backgroundColor:  'green',
        yAxisID: 'y',
      },
    ],
  };
    return (
    <>
        <Line options={options} data={data}/>
    </>
  )
}
