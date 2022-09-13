import React, { useContext } from "react";
import "../../styles/home.css";
import volunteer from "../../assets/images/day.png";
import { ThemeContext } from "../../utils/ThemeContext";

export default function Request() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={darkMode ? "request_cover darkBG" : "request_cover lightBG"}
      >
        <div className="request">
          <img
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="100"
            src={volunteer}
            alt="request"
          />
          <div>
            <h1
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="0"
              className={darkMode ? "darkBG_txt" : ""}
            >
              Trouble in sleeping ?
              <br />
              ASMR helps to activate regions of the brain associated with
              calming, sleep-inducing hormones like dopamine and oxytocin.
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
