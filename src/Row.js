import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
// import bas_url from instance
// import requests form "./Requests";

function Row(props) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchUrl]);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((props.isLargeRow && movie.poster_path) ||
              (!props.isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${
                  props.isLargeRow && "row_posterLarge"
                }`}
                key={movie.id}
                src={`${base_url}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }
        `}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
