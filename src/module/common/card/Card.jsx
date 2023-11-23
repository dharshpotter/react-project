import React from "react";
import { Link } from "react-router-dom";

function Card({ movie }) {
  const { title, overview, poster_path } = movie;
  return (
    <div class="cardm">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text text-truncate">{overview}</p>
        <Link to={`/${movie.title}/${movie.id}`} class="btn btn-primary">
          Watch or More Details
        </Link>
      </div>
    </div>
  );
}


export default Card;

