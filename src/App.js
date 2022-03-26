import "./App.css";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Dashboard from "./screens/Dashboard";
import Blogs from "./screens/Blogs";
import Home from "./screens/Home";
import {Header} from  './components/Header'
import ASMR from "./screens/ASMR";

import "./styles/index.css";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/asmr" exact element={<ASMR />} />

        <Route path="/login" exact element={<SignInScreen />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/blog" exact element={<Blogs />} />
        <Route path="/signup" exact element={<SignUpScreen />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
