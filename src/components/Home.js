import React, { useState } from "react";
import "../css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [keyword, setKeyword] = useState("");

  const searchKeyword = (e) => {
    e.preventDefault();
    if (keyword) {
      window.location.href = `https://www.google.com/search?q=${keyword}`;
    }
  };

  return (
    <div class='content-container'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
          alt='logo'
          className='main-logo'
        />{" "}
      </Link>
      <form className='search-box'>
        <div className='search-input-container'>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type='text'
            className='search-input'
            placeholder='Search Google or Type a URL'
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              console.log(keyword);
            }}
          ></input>
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
        <div class='btn-container'>
          <button className='search-btn' onClick={searchKeyword}>
            Google Search
          </button>
          <button className='search-btn'>I'm Feeling Lucky</button>
        </div>
      </form>
      <div>Google offered in: English</div>
    </div>
  );
};

export default Home;
