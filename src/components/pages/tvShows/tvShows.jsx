import React, { useState } from "react";
import LoaderIndicator from "../../../module/common/loaderIndicator";
import { useEffect } from "react";  
import "./tvShows.style.css";

function LandPage() {
  const [tvShows, setTvShows] = useState("");

  useEffect(() => {
    fetchTvShows();
  }, []);

  async function fetchTvShows() {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTMwN2Y2YjA1NGQ1NTg4YmM0ZjMwY2ExYTFjMTY0ZiIsInN1YiI6IjY1MmQwOTBlMWYzZTYwMDBhYzRmNjZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mr1Qn9sL2XlORsYbRm8C4Rtt6zvTU_fq70o1SPvDRk",
        },
      }
    );
    const data = await res.json();
    setTvShows(data.results);
  }

  return (
    <div className="container">
      <h3 className="mb-5 mt-5">Top Rated TvShows</h3>
      {tvShows ? (
        <div className="row row-cols-2 row-cols-lg-4 g-1">
          {tvShows.map((movie, i) => {
            return (
              <div className="col">
                <div class="cardm" key={i}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{movie.name}</h5>
                    <p class="card-text text-truncate">{movie.overview}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <LoaderIndicator />
      )}
    </div>
  );
}

export default LandPage;
