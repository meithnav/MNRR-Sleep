import React , {useEffect, useContext} from 'react'
import { Chart as ChartJS, registerables } from "chart.js";
import {  Bar } from "react-chartjs-2";
ChartJS.register(...registerables);



export default function DurationChart() {


  return (
    
      <div className="durationChart">
      <h1>Sleep Stage Chart</h1>
      <Bar
        data={{
          labels: ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"],
          datasets: [
            {
              label: "DAILY SLEEP HOURS PER WEEK",
              data: [6, 10, 3, 5, 6, 3, 7],
              backgroundColor: [
                "rgba(25, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
                "rgba(225, 99, 132, 0.8)",
              ],
              borderColor: [
                "rgba(25, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(225, 99, 132, 0.8)",
              ],
              borderWidth: 1,
            },
            

          ],
        }}
        options={{
          maintainAspectRatio: true,
          scales: {
            y: {
                // max: 24,
                min:0,
                ticks: {
                  beginAtZero: true,
                },
              },
          
          },
        }}
        height={180}
        width={380}
      />
    </div>

  );
}

