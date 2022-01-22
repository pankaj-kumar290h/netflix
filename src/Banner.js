import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./banner.css";

import d from "./request";

function Banner() {
  const [banner_movie, setBanner_movie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(d.fetchNetflixOriginals);

      setBanner_movie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner_movie?.backdrop_path}")`,
        height: "45rem",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_box">
        <h2>{banner_movie.name}</h2>
        <div className="buttons">
          <a href="#">Watch</a>
          <a href="#">Add</a>
        </div>
        <p>{banner_movie.overview}</p>
      </div>
      <div className="boarder_fad"></div>
    </header>
  );
}

export default Banner;
