import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Search.css";
import Gallery from "./Gallery/Gallery";
import Topbar from "./Topbar/Topbar";

const Search = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      console.log(query);
    };
    fetchItem();
  }, [query]);

  return (
    <>
      <Topbar />
      <div className="container">
        <div className="content">
          <div className="searchBar">
            <input
              type="text"
              autoFocus
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search character by their name"
            />
          </div>
        </div>
        <Gallery items={items} />
      </div>
    </>
  );
};

export default Search;
