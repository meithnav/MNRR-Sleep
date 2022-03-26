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
              Sleep is important
              <br />
              Keep track of it to maintain your health
            </h1>
          </div>
          <a href="#" className="read">
            JOIN US
          </a>
        </div>
      </div>
    </>
  );
}
