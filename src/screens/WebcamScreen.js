import React, { useContext, useEffect, useState } from "react";
import Webcam from "react-webcam";
import "../styles/monitor.css";
import { UserContext } from "../utils/UserContext";
import { Button } from "@mui/material";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamScreen = () => {
  let socketPath;
  let chatSocket;
  const { user } = useContext(UserContext);
  const webcamRef = React.useRef(null);

  useEffect(() => {
    socketPath = `wss://485e-2409-4040-e10-c1ba-ddf7-3950-a2ea-4010.ngrok.io/receiver/`;
    chatSocket = new WebSocket(socketPath);

    chatSocket.onopen = (e) => {
      console.log("Opening a connection...");
      window.identified = false;
    };

    return () => {
      chatSocket.close();
    };
  }, []);

  const [imageSrc, setImageSrc] = useState({ text: "" });

  const capture = React.useCallback(() => {
    setImageSrc(() => ({ text: webcamRef.current.getScreenshot() }));

    if (imageSrc.text !== "") {
      console.log("INSIDE IF", imageSrc);
      chatSocket.send(JSON.stringify(imageSrc));
    }
  }, [webcamRef]);

  const stopCapture = ()=>{
    alert(`Stopping Monitoring`)
  }

  useEffect(() => {
    console.log(imageSrc.text);
  }, [imageSrc]);

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
      <Button variant="contained" onClick={stopCapture} className="donateBtn" style={{marginLeft:"10px"}}>
        Stop Recording
      </Button>
    </>
  );
};

export default WebcamScreen;
