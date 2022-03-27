import React, { useContext, useEffect } from "react";
import Banner from "../components/Home/Banner";
import Request from "../components/Home/Request";
import { ThemeContext } from "../utils/ThemeContext";
import "../styles/home.css";

export default function Home() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {}, [darkMode]);

  return (
    <>
      <Banner />
      <Request />
    </>
  );
}
