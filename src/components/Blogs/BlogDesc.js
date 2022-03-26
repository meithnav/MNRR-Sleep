import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ShareIcon from "@mui/icons-material/Share";

export default function BlogDesc({ card }) {
  const [item, setItem] = useState(card);

  const handleUpVote = () => {
    // console.log(item.likes)
    setItem({ ...card, likes: card.likes + 1 });
  };

  useEffect(() => {}, [item]);

  return (
    <>
      <h1 className="header">{item?.title}</h1>

      <div className="desc">
        {/* {item?.blog.split("\n").map((p, index) => (
          <p key={index}>{p}</p>
        ))} */}
        <p>{item?.blog}</p>
      </div>

      <div className="action_btns">
        <Button variant="contained" href="#" className="donateBtn">
          <ShareIcon sx={{ fontSize: "23px", pr: "9px", pt: "5px" }} />
          <span className="txt">SHARE</span>
        </Button>

        <div className="upVote">
          <ArrowUpwardIcon
            className="upVoteBtn"
            onClick={handleUpVote}
            sx={{ fontSize: "23px", pr: "9px", pt: "5px" }}
          />
          <span className="txt">{item?.likes}</span>
        </div>
      </div>
    </>
  );
}
