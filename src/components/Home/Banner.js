import React from "react";
import rightPic from "../../assets/images/sleep.jpeg";

import "../../styles/banner.css";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <img src={rightPic} className="rightpic" alt="rightpic" />

        <div className="banner_txt">
          <p>Monitor your sleep</p>
          <h1>Anything that isn't managed will decline</h1>
          <a href="#">Monitor</a>
          <a className="a_last" href="#">
            Explore
          </a>
        </div>
      </div>
    </>
  );
}
