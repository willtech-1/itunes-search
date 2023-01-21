import arrow from "../images/circle-arrow.png";
import search from "../images/itunes.png";
import apple from "../images/apple.png";
import shuffle from "../images/shuffle.png";
import rewind from "../images/rewind-it.png";
import playIt from "../images/play.png";
import forward from "../images/fast-forward.png";
import loop from "../images/arrow.png";
// react router hook
import React, { useState, useEffect } from "react";
import axios from "axios";
// react router link
import { Link } from "react-router-dom";
// react bootstrap for dropdown media types
import { Dropdown, ButtonGroup, DropdownButton } from "react-bootstrap";
import Data from "./Data.js";


const Search = () => {
  // name and type of media state
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  // searched results empty array
  const [itunesData, setItunesData] = useState([]);
  // favourites
  const [favourites, setFavourites] = useState([]);
  // media type button state
  const [open, setOpen] = useState(false);


  // add to favourite function which adds song or any media type clicked to favourites
  const addFavourite = (favourite) => {
    // add the current favourite to the already existing list of favourites
    if (favourite) {
      setFavourites([...favourites, favourite]);
      alert('Added to Favourites!')
    }
  };


  // after song/media type is added save it the localStorage
  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(favourites));
    // show favourites list on every render
  }, [favourites]);

  // searched input
  let nameEntry = "";
  // function
  const nameSubmit = (e) => {
    // input string
    const entry = e.target.value;
    // make searched string = e.target.value
    nameEntry = entry;
    // save it to setName on the state
    setName(nameEntry);
  };

  // object of diffrent media types categories
  const categories = {
    All: "allTrack",
    MUSIC: "music",
    "MUSIC VIDEOS": "musicVideo",
    APPS: "software",
    EBOOKS: "ebook",
    "AUDIO BOOKS": "audiobook",
    PODCASTS: "podcast",
    MOVIES: "movie",
    "TV SHOWS": "tvSeason",
    "SHORT FILMS": "shortFilm",
  };

  // handleClick to toggle media type button
  const handleClick = () => {
    setOpen(!open);
  };

  // search button function
  const submitSearch = (e) => {
    e.preventDefault();

    // axios get request from itunes search API
    axios
      .get(`/search?name=${name}&type=${type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // successful results from the promise
        const searchedName = res.data.results;
        setItunesData(searchedName ? searchedName : []);
      })
      // catch the error
      .catch((err) => {
        console.log("error => " + err);
      });
  };

  return (
    <div>
      
      <div className="container">
        {/* search input */}
        <div className="my-search">
          <input
            type="text"
            placeholder="Search..."
            name="name"
            className="search-input"
            onChange={(e) => nameSubmit(e)}
          />

          {/* search button */}
          <Link to={`/search`}>
            <button
              className="search-btn"
              type="submit"
              onClick={(e) => submitSearch(e)}
            >
              <img src={search} alt="itunes" className="itunes-search" />
            </button>
          </Link>
        </div>

        {/* favourites link */}
        <a href="/favourites" className="fav-link">
          My Favourites{" "}
          <img src={arrow} alt="circle" className="circle-arrow" />
        </a>

        <span className="itunes-apple">
          <img src={apple} alt="apple-icon" className="apple-icon" />
          <b className="music-text">Music</b>
        </span>

        <span>
          <img src={shuffle} alt="shufffle" className="shuffle" />
          <img src={rewind} alt="rewind" className="rewind" />
          <img src={playIt} alt="playIt" className="play" />
          <img src={forward} alt="forward" className="next" />
          <img src={loop} alt="arrow" className="arrow" />
        </span>
      

        {/* Dropdown */}
        <button onClick={handleClick} className="toggle-categories-button">
          Media Type
        </button>
        
        {open && (
          <DropdownButton
            as={ButtonGroup}
            variant="info"
            id="drop-down-btn"
            drop="right"
            title="CATEGORIES"
            size="md"
          >
            
            {Object.keys(categories).map((category, i) => (
              <Dropdown.Item
                as="button"
                key={i}
                type="submit"
                name="category"
                id="drop-down-list"
                value={category.value}
                active={type === category.value}
                onClick={() => setType(categories[category])}
              >
                {category}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        )}
      </div>
      <span className="select-type">Seleted: {type.toUpperCase()}</span>
      <div>
        <div>
          {itunesData.map((data, i) => (
            <Data key={i} addFavourite={addFavourite} data={data} />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Search;
