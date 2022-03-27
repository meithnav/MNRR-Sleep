import React from "react";
import "../../styles/home.css";
import volunteer from "../../assets/images/day.png";

export default function Request() {
  return (
    <>
      <div className="request_cover">
        <div className="request">
          <img src={volunteer} alt="request" />
          <div>
            <h1>
            Trouble in sleeping ?
              <br />
              ASMR helps to activate regions of the brain associated with calming, sleep-inducing
              hormones like dopamine and oxytocin. 
            </h1>
          </div>
          <a href="/asmr" className="read">
            EXPLORE
          </a>
        </div>
      </div>
    </>
  );
}
