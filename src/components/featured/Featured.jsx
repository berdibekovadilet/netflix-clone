import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movie" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://data.nssmag.com/images/galleries/19188/Love-Death-and-Robots-Animated-Shorts.jpg"
        alt="banner"
      />
      <div className="info">
        <img
          src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdeXC0DwcqotEsKzpPXYyj30SYrsYYpvylkGZovJ-YFRW5p5t_Xo-WPtCmTQE0_o40qSgrLufiLAor3D-AmVva6g8Q9riE0QqIuiLL0GBMcJdVs-uy2Pq-0l3dvgiTJQFVA1Asx9x3dSoyv4ERkEoWQ5lkyZgIU_uZBL39FQGG_Jxv0EKBZvsw.png?r=d88"
          alt="product-logo"
        />
        <span className="desc">
          Terrifying creatures, wicked surprises and dark comedy converge in
          this NSFW anthology of animated stories presented by Tim Miller and
          David Fincher.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
