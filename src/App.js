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

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser && !user) {
      setUser(currUser);
    }
  }, [localStorage.getItem("user")]);

  return (
    <div className="App">
      <Header />
      {/* <Router> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/asmr" exact element={<ASMR />} />
        <Route path="/monitor" exact element={<WebcamScreen />} />
        <Route path="/login" exact element={<SignInScreen />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/blog" exact element={<Blogs />} />
        <Route path="/qrcode" exact element={<QRCode />} />
        <Route path="/signup" exact element={<SignUpScreen />} />

        <Route
          path="/blog/get-single-blog/:id"
          exact
          element={<BlogDetails />}
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      {/* </Router> */}
      <Toaster />
    </div>
  );
}

export default App;
