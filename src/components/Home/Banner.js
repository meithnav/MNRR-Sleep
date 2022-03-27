import React , { useContext} from "react";
import rightPic from "../../assets/images/sleep.jpeg";
import "../../styles/banner.css";
import "../../styles/darkTheme.css";
import { ThemeContext } from "../../utils/ThemeContext";


export default function Banner() {
    const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "banner darkMode" : "banner"}>
        <img src={rightPic} className="rightpic" alt="rightpic" />

        <div className="banner_txt">
          <p>Monitor your sleep</p>
          <h1>Anything that isn't managed will decline</h1>
          <a href="/monitor">Monitor</a>
          <a className="a_last" href="/blog">
            Blogs
          </a>
        </div>
      </div>
    </>
  );
}
