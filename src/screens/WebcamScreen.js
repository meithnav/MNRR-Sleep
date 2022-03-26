import React, { useContext, useEffect, useState } from "react";
import Webcam from "react-webcam";
import "../styles/monitor.css";
import { UserContext } from "../utils/UserContext";
import axios from "axios";
import { Button } from "@mui/material";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

let interval;

const WebcamScreen = () => {
  // let socketPath;
  // let chatSocket;
  const { user, userDetails } = useContext(UserContext);
  const webcamRef = React.useRef(null);

  // useEffect(() => {
  //   socketPath = `wss://485e-2409-4040-e10-c1ba-ddf7-3950-a2ea-4010.ngrok.io/receiver/`;
  //   chatSocket = new WebSocket(socketPath);

  //   chatSocket.onopen = (e) => {
  //     console.log("Opening a connection...");
  //     window.identified = false;
  //   };

  //   return () => {
  //     chatSocket.close();
  //   };
  // }, []);

  const [imageSrc, setImageSrc] = useState({
    frame: "",
    len: 0,
  });

  const capture = React.useCallback(() => {
    interval = setInterval(function () {
      const ss = webcamRef.current.getScreenshot();
      setImageSrc(() => ({
        frame: ss,
        len: ss.length,
      }));
    }, 30000);

    // if (imageSrc.frame !== "") {
    // console.log("INSIDE IF", imageSrc);
    // chatSocket.send(JSON.stringify(imageSrc));
    // }
  }, [webcamRef]);

  const stopCapture = () => {
    clearInterval(interval);
  };

  useEffect(() => {
    console.log(imageSrc);
    if (imageSrc.frame !== "") {
      axios
        .post("/frame-capture/receive-data/", imageSrc, {
          headers: {
            Authorization: `Token ${user}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [imageSrc, user]);

  return (
    <>
      <Webcam
        className="webCam"
        audio={false}
        // height={600}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        // width={1280}
        videoConstraints={videoConstraints}
      />

      <Button variant="contained" onClick={capture} className="donateBtn">
        Start Recording
      </Button>
      <Button
        variant="contained"
        onClick={stopCapture}
        className="donateBtn"
        style={{ marginLeft: "10px" }}
      >
        Stop Recording
      </Button>
    </>
  );
};

export default WebcamScreen;
