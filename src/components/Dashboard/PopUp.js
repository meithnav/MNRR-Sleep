import { Button } from '@mui/material'
import React from 'react'
import insomnia from '../../assets/images/insomnia.png'
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export default function PopUp() {
  return (
    <div className="popUp">
      <div className="txt">
        <p>Felling tired and not able to have yourt Zen Sleep? Explore the Soothing Sleep enhancing Songs to help in relaxing mind.</p>
        <Button href="/asmr" variant="contained" className="Btn">
          <MusicNoteIcon sx={{ fontSize: "20px", pr: "5px", pt: "5px" }} />
          <small className="txt_btn">EXPLORE</small>
        </Button>
      </div>
      <img src={insomnia} alt="" />
    </div>
  );
}
