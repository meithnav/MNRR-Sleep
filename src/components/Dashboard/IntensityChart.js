import React, { useEffect, useState, useContext } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line, Bar, Chart } from "react-chartjs-2";
import axios from "axios";
import { UserContext } from "../../utils/UserContext";
// import { intensity } from "../../data/data";

ChartJS.register(...registerables);

export default function IntensityChart() {
  const { user } = useContext(UserContext);
  const [intensity, setIntensity] = useState();
  let labels;
  //   let labels = intensity?.map(function (x) {
  //     return x * 30;
  //   });

  useEffect(() => {
    axios
      .get(`/frame-capture/give-data/`, {
        headers: {
          Authorization: `Token ${user}`,
        },
      })
      .then((res) => {
        setIntensity(res.data);
        console.log(intensity);
      }).catch = (err) => {
      console.log(err);
    };
  }, []);

  useEffect(() => {
    labels = intensity?.map(function (x) {
      return x * 30;
    });
  }, [intensity]);

  return (
    <div className="durationChart">
      <h1>Intensity of Movments Chart</h1>
      <Line
        data={{
          labels: labels ? labels : [],
          datasets: [
            {
              label: "INTENSITY OF MOVEMENTS WHILE ASLEEP",
              data: intensity ? intensity : [],
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
            x: [
              {
                gridLines: {
                  display: true,
                },
                type: "time",
                time: {
                  unit: "minute",
                  unitStepSize: 10,
                  displayFormats: {
                    minute: "HH:mm",
                  },
                  // min: firstprettyTime, // <- moment js object
                },
              },
            ],
            y: {
              // max: 24,
              min: 0,
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
