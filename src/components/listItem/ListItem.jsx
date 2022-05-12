import React, { useState } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaiPJYh2nbVDSPS3IvwK10_FWelxVlnDvdotT3w4D-L4WwJueu2JjHCia_fnXEKV9VAG5SKv_vub3yBrMlMXhQlTBhNW3Qv28R3wrQ6DKsyWecOekFXMJUJsK_sH8AZqyiZJ.jpg?r=dfc"
        alt="movie-banner"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="ItemInfoTop">
              <span>1 Hour 14 Min</span>
              <span className="limit">+13</span>
              <span>2022</span>
            </div>
            <div className="desc">
              After accidentally crash-landing in 2022, time-traveling fighter
              pilot Adam Reed teams up with his 12-year-old self on a mission to
              save the future.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
