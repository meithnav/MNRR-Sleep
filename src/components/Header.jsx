import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { ThemeContext } from "../utils/ThemeContext";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import navLogo from "../assets/images/logo.png";
import navLogoDark from "../assets/images/logo.png";
import lighttheme from "../assets/images/lighttheme.png";
import { BorderAll } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: "120px",
    display: "flex",
    paddingTop: "2.5vh",
  },
  logo: {
    justifyContent: "center",
    alignItems: "cenetr",
    flexGrow: "1",
    cursor: "pointer",
    color: "#979797",
    fontSize: "2.5vh",
  },
  roots: {
    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "rgb(242, 240 ,236)",
    },
    "&.MuiPaper-elevation4": {
      boxShadow: "none",
    },
  },
  link: {
    backgroundColor: "inherit",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#979797",
    fontSize: "18px",
    marginLeft: "10px",
    marginRight: "15px",
    fontWeight: "450",
    "&:hover": {
      color: "black",
    },
  },
  darklink: {
    backgroundColor: "inherit",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: "20PX",
    marginRight: "25px",
    fontWeight: "450",
    "&:hover": {
      color: "#979797",
    },
  },
}));

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const {user ,setUser} = useContext(UserContext);
  const navigate = useNavigate()
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const HandleTheme = ()=> {
  //   setDarkMode(!darkMode);
  // }

  return (
    <div className={darkMode ? "darkBG" : "lightBG"}>
      <AppBar className={classes.roots} style={{ position: "relative" }}>
        <Toolbar>
          {isMobile ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "10% 80% 10%",
                width: "100%",
              }}
            >
              <DrawerComponent style={{ backgroundColor: "#E5E5E5" }} />
              <Link to="/">
                <div style={{ display: "grid", gridTemplateColumns: "100%" }}>
                  {/* <div >
                <img src={logo} alt="logo" style={{width:"80px" , height:"45px" , overflow:"hidden"}}/>
                </div>
                <div > */}
                  {darkMode ? (
                    <img
                      src={navLogoDark}
                      style={{
                        height: "41px",
                        paddingTop: "10px",
                        width: "200px",
                      }}
                      alt="logo"
                    />
                  ) : (
                    <img
                      src={navLogo}
                      style={{
                        height: "35px",
                        marginTop: "10px",
                        width: "200px",
                      }}
                      alt="logo"
                    />
                  )}
                  {/* <Typography className={classes.logo} style={{marginLeft:"10px"}}>
                Google's Developer Students Club
                </Typography> */}
                </div>
              </Link>

              <div onClick={() => setDarkMode(!darkMode)}>
                <img
                  src={lighttheme}
                  alt="logo"
                  style={{
                    width: "45px",
                    height: "50px",
                    paddingTop: "1.5vh",
                    alignItems: "flex-end",
                  }}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "40% 60%",
                width: "100%",
              }}
            >
              <Link to="/">
                <div style={{ display: "grid", gridTemplateColumns: "100%" }}>
                  {/* <div >
                <img src={logo} alt="logo" style={{width:"80px" , height:"45px" , overflow:"hidden"}}/>
                </div>
                <div > */}
                  {darkMode ? (
                    <img
                      src={navLogoDark}
                      style={{
                        height: "60px",
                        paddingTop: "10px",
                        paddingLeft: "20px",
                        width: "60px",
                      }}
                      alt="logo"
                    />
                  ) : (
                    <img
                      src={navLogo}
                      style={{
                        height: "60px",
                        paddingTop: "10px",
                        paddingLeft: "20px",
                        width: "60px",
                      }}
                      alt="logo"
                    />
                  )}
                  {/* <Typography className={classes.logo} style={{marginLeft:"10px"}}>
                Google's Developer Students Club
                </Typography> */}
                </div>
              </Link>

              <div
                className={classes.navlinks}
                style={{
                  justifyContent: "right",
                  alignItems: "right",
                  paddingBottom: "1.5vh",
                  paddingTop: "1.8vh",
                }}
              >
                <Link
                  to="/"
                  className={darkMode ? classes.darklink : classes.link}
                  style={{
                    paddingTop: "0.8vh",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className={darkMode ? classes.darklink : classes.link}
                  style={{
                    paddingTop: "0.8vh",
                  }}
                >
                  Dashboard
                </Link>
                <Link
                  to="/blog"
                  className={darkMode ? classes.darklink : classes.link}
                  style={{
                    paddingTop: "0.8vh",
                  }}
                >
                  Blogs
                </Link>

                <Link
                  to="/asmr"
                  style={{
                    paddingTop: "0.8vh",
                  }}
                  className={darkMode ? classes.darklink : classes.link}
                >
                  ASMR
                </Link>

                {/* <Link
                  to="/contact"
                  style={{
                    paddingTop: "0.8vh",
                  }}
                  className={darkMode ? classes.darklink : classes.link}
                >
                  Contact
                </Link> */}

                {!user && (
                  <Button
                    style={{
                      width: "120px",
                      height: "35px",
                      fontSize: "18px",
                      backgroundImage: `linear-gradient(to right,#2871FA, #0214FC)`,
                      color: "white",
                    }}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Button>
                )}

                {user && (
                  <Button
                    style={{
                      width: "120px",
                      height: "35px",
                      fontSize: "18px",
                      backgroundImage: `linear-gradient(to right,#2871FA, #0214FC)`,
                      color: "white",
                    }}
                    onClick={() => {
                      localStorage.removeItem("user")
                      setUser(null)
                    }}
                  >
                    Logout
                  </Button>
                )}

                <Link to="#" onClick={() => setDarkMode(!darkMode)}>
                  <img
                    src={lighttheme}
                    alt="logo"
                    style={{
                      width: "35px",
                      height: "35px",
                      marginLeft: "2vh",
                      alignItems: "center",
                    }}
                  />
                </Link>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
