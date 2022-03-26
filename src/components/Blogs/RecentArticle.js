import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React , {useContext} from "react";
import {LoadingContext} from '../../utils/LoadingContext'
import { base_url } from "../../data/data";

export default function RecentArticle({ card }) {
  const href = `/blog/${card.id}`;
  // const { isLoading, setIsLoading } = React.useContext(LoadingContext);

  return (
    <div key={card.id} className="recentArticle">
      <a href={href}>
        <div className="imgLeft">
          <img src={base_url + card.image} alt="" />
        </div>

        <div className="txtLeft">
          <h6 className="title_recent">
            <AccountCircleIcon
              sx={{ fontSize: "1px", ml: "4px", mt: "2px", pr: "5px" }}
            />
            <span>{card.author}</span>
          </h6>
          {/* <h6>
            <AccessTimeIcon
              sx={{ fontSize: "17px", ml: "4px", mt: "2px", pr: "5px" }}
            />
            <span>12th JAN</span>
          </h6> */}
          <h6>{card.title}</h6>
        </div>
      </a>
    </div>
  );
}
