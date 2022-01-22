import movieTrailer from "movie-trailer";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./row.css";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);

      setMovies(() => {
        return [...request.data.results];
      });

      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  ////handel click on img to play youtube video
  const handelonclick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // console.log(url);
          //url return full url but we dont need that so we do this
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  ////youtube option
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {movies.map((e) => {
          return (
            <img
              onClick={() => handelonclick(e)}
              className={`row_poster ${props.isLargeRow && "row_poster_large"}`}
              src={`${base_url}${
                props.isLargeRow ? e.poster_path : e.backdrop_path
              }`}
              alt={`${e.original_title}`}
              key={e.id}
            ></img>
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts}></YouTube>}
    </div>
  );
}

export default Row;
