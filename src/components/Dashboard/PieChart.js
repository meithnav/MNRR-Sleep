import React from 'react'
import { Line } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {pie} from '../../data/data' 
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {



  return (
    <div className="pieChart">
      <h1>Pie Chart</h1>
      <Pie data={pie} redraw={true}  />
    </div>
  );


}


 