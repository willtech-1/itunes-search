import React, { useState, useEffect } from "react";
import apple from "../images/apple.png";
import back from "../images/back.png";
import remove from "../images/remove.png";
import explicit from "../images/explicit.png";
import dots from "../images/dots.png";
import voice from "../images/voice.png";
import volume from "../images/volume.png";
import Footer from "./Footer"

const Favourites = () => {
  //favourites empty array default state
  const [displayFavourites, setdisplayFavourites] = useState([]);

  // remove item using id
  const removeItem = (id) => {
    // get favourites array of objects stored on the browser localStorage
    const favourites = JSON.parse(localStorage.getItem("Favourites"));
    // delete favourite by filtering using trackId
    const filteredFavourites = favourites.filter((x) => x.trackId !== id);
    // alert user song has been successfully removed!
    if (filteredFavourites) {
      alert("Removed from favourites!");
    }
    // set the favourites that were not removed into the localStorage
    localStorage.setItem("Favourites", JSON.stringify(filteredFavourites));
    // reload the page to display an updated favourites list
    window.location.reload();
  };

  // useEffect
  useEffect(() => {
    // handle local storage in every re-render
    setdisplayFavourites(JSON.parse(localStorage.getItem("Favourites")));
  }, []);

  return (
    <>
      <div className="fav-text"><img src={apple} alt="apple" /> <span>Favourites</span></div>
      <a href="/" className="back-home">
        <img src={back} alt="back" />
        <p>Home</p>
      </a>
     
      <div className="data-container">
        <div className="data-wrapper">
          {/* map over favourites */}
          {displayFavourites.map((data) => (
            <div>
              <img
                crossorigin="anonymous"
                src={data.artworkUrl100.replace("100x100", "250x250")}
                alt="artwork"
                className="itunes-images"
              />
              <p className="track-text">{data.trackName}<img crossorigin="anonymous" src={explicit} alt="explicit" className="explicit" /></p>
              <p className="track-text">{data.artistName}<img crossorigin="anonymous" src={dots} alt="dots" className="dots" /></p>

              {/* delete favourite */}
              <p className="add-fav" onClick={() => removeItem(data.trackId)}>
                remove <img crossorigin="anonymous" src={remove} alt="remove" className="remove" />
              </p>

              {/* audio btn */}
              <button className="audio-btn">
                <audio
                  className="audio"
                  controls
                  src={data.previewUrl}
                  type="audio/mp4"
                ></audio>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
