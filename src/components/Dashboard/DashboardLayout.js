import React from "react";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import KingBedIcon from "@mui/icons-material/KingBed";
import HotelIcon from "@mui/icons-material/Hotel";
import LightModeIcon from "@mui/icons-material/LightMode";
import BoltIcon from "@mui/icons-material/Bolt";
import DurationChart from "./DurationChart";
import PieChart from "./PieChart";
import Snoring from "./Snoring";
import PopUp from "./PopUp";
import IntensityChart from "./IntensityChart";

export default function DashboardLayout({ value, setValue }) {
  const data = 
    {
      newUser: false,
      score: 5,
      avgDuration: "5h 37m",
      avgBed: "10:00 PM",
      avgWakeUp: "7:00 AM",
    }
    // {
    //   newUser: true,
    //   score: "--",
    //   avgDuration: "--",
    //   avgBed: "--",
    //   avgWakeUp: "--",
    // },
  

  return (
    <>
      <div className="dashGrid">
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="100"
          className="dashCard"
        >
          <NightlightRoundIcon className="icons " />
          <h2>{data.avgBed}</h2>
          <span>Avg Went To Bed</span>
        </div>

        <div
          className="dashCard"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <LightModeIcon className="icons wake" />
          <h2>{data.avgWakeUp}</h2>
          <span>Avg Wake Up</span>
        </div>

        <div
          className="dashCard"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <HotelIcon className="icons duration" />
          <h2>{data.avgDuration}</h2>
          <span>Avg Sleep</span>
        </div>

        <div
          className="dashCard"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <BoltIcon className="icons  score" />
          <h2>{data.score}</h2>
          <span>Sleep Score</span>
        </div>
      </div>
      <div className="dashGrid">
        <DurationChart
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-delay="300"
        />
        <PieChart
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-delay="300"
        />
      </div>
      <div className="dashGrid">
        {/* <Snoring /> */}
        <IntensityChart
          value={value}
          setValue={setValue}
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-delay="300"
        />
        <PopUp
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-delay="300"
        />
      </div>

      {/* <div className="dashGrid">
        <Snoring />
        <PopUp />
      </div> */}
    </>
  );
}
