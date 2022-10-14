import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="searchboxWrapper">
      <div className="mb-2">
        <input
          type="text"
          className="searchInput"
          placeholder="Search Stories"
        />
      </div>
      <div className="mb-2">
        <input type="text" className="searchInput" placeholder="Search Tags" />
      </div>
      <a href="/" className="searchBtn">
        SEARCH
      </a>
    </div>
  );
};

export default Search;
