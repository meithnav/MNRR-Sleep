import React, { useContext } from "react";
import rightPic from "../../assets/images/sleep.jpeg";
import "../../styles/banner.css";
import { ThemeContext } from "../../utils/ThemeContext";

export default function Banner() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "banner darkMode" : "banner"}>
        <img
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="400"
          src={rightPic}
          className="rightpic"
          alt="rightpic"
        />

        <div className="banner_txt">
          <p data-aos="fade-down" data-aos-duration="600" data-aos-delay="100">
            Monitor your sleep
          </p>
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            Anything that isn't managed will decline
          </h1>
          <a
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            href="/monitor"
          >
            Monitor
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className="a_last"
            href="/blog"
          >
            Blogs
          </a>
        </div>
      </div>
    </>
  );
}
