import React, { useContext, useEffect, useState } from "react";
import Webcam from "react-webcam";
import "../styles/monitor.css";
import { UserContext } from "../utils/UserContext";

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

  useEffect(() => {
    console.log(imageSrc);
  }, [imageSrc]);

  return (
    <>
      <Webcam
        className="webCam"
        audio={false}
        height={600}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button className="click" onClick={capture}>
        Capture photo
      </button>
    </>
  );
};

export default WebcamScreen;
