import { get } from "../data/httpClient";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

import './MovieDetails.css'

export function MovieDetails() {
  // Get the userId param from the URL.
  let { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenres(data.genres[0]);
      console.log(data);
    });
  }, [movieId]);
  const imgUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img className="col movieImage" src={imgUrl} alt={movie.title} />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title:</strong>
          {movie.title}
        </p>
        <p>
          <strong>Gender:</strong>
          {genres.name}
        </p>
        <p>
          <strong>Synopsis:</strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
