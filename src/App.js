import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Dashboard from "./screens/Dashboard";
import Blogs from "./screens/Blogs";
import Home from "./screens/Home";
import { Header } from "./components/Header";
import BlogDetails from "./screens/BlogDetails";
import ASMR from "./screens/ASMR";
import WebcamScreen from "./screens/WebcamScreen";
import QRCode from "./screens/QRCode";

import "./styles/index.css";
import "./styles/darkTheme.css";
import { useContext, useEffect } from "react";
import { UserContext } from "./utils/UserContext";
import {ThemeContext} from './utils/ThemeContext';
// Animations Library
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const { user, setUser } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);
  // ON SCROLL ANIMATIONS
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      startEvent: "load",
    });
  }, []);

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser && !user) {
      setUser(currUser);
    }
  }, [localStorage.getItem("user")]);

  return (
    <div className={darkMode ? "App darkBG" : "App lightBG"}>
      <Header />
      {/* <Router> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/asmr" exact element={<ASMR />} />
        {user && <Route path="/monitor" exact element={<WebcamScreen />} />}
        {!user && <Route path="/login" exact element={<SignInScreen />} />}
        {user && <Route path="/dashboard" exact element={<Dashboard />} />}
        <Route path="/blog" exact element={<Blogs />} />
        {user && <Route path="/qrcode" exact element={<QRCode />} />}
        {!user && <Route path="/signup" exact element={<SignUpScreen />} />}

        <Route
          path="/blog/get-single-blog/:id"
          exact
          element={<BlogDetails />}
        />

        {/* <Route path="*" elementw={<Navigate to="/" />} /> */}
        {/* {!user && <Route path="*" element={<Navigate to="/login" replace />} />} */}
      </Routes>
      {/* </Router> */}
      <Toaster />
    </div>
  );
}

export default App;
