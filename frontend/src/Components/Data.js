import React from "react";
import add from "../images/add.png";
import explicit from "../images/explicit.png";
import dots from "../images/dots.png";
import "./Data.css"

// receive props from parent component
const Data = ({ data, addFavourite }) => {
  // display data that is searched on the search input on the search component
  return (
    <div className="data-container">
      <div className="data-wrapper">
        {/* artwork */}
        <img
          src={data.artworkUrl100.replace("100x100", "250x250")}
          alt="artwork"
          className="itunes-images"
        />
        <div>
          {/* track and artist name */}
          <p className="track-text">{data.trackName}<img src={explicit} alt="explicit" className="explicit" /></p>
          <p className="track-text">{data.artistName}<img src={dots} alt="dots" className="dots" /></p>
          {/* add to favourite */}
          <p className="add-fav" onClick={() => addFavourite(data)}>
            add to fav <img src={add} alt="add" className="add-song" />
          </p>
          {/* song preview */}
          <button className="audio-btn">
            <audio
              className="audio"
              controls
              src={data.previewUrl}
              type="audio/mp4"
            ></audio>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
