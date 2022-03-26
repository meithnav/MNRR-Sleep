import React, { useContext } from "react";
import { QRCodeSVG } from "qrcode.react";
import { UserContext } from '../utils/UserContext';
import '../styles/qrcode.css'
export default function QRCode() {

    const {user} = useContext(UserContext);
  return (
    <>
      <div className="qrcode">
        <h1 className="header">Connect to Mobile</h1>
        <QRCodeSVG value={user} className="qr" />
      </div>
    </>
  );
}

