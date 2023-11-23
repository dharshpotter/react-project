import React, { Fragment, useState, useEffect } from "react";
import LoaderIndicator from "../../../module/common/loaderIndicator";
import Carousel from "../../../module/common/carousel/carousel";
import "./ReactPage.style.css";

function ReactPage() {
  const [popularMovies, setPopularMovies] = useState("");
  const [upcomeMovies, setUpcomeMovies] = useState("");

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  useEffect(() => {
    fetchUpcomeMovies();
  }, []);

  async function fetchPopularMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular`, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTMwN2Y2YjA1NGQ1NTg4YmM0ZjMwY2ExYTFjMTY0ZiIsInN1YiI6IjY1MmQwOTBlMWYzZTYwMDBhYzRmNjZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mr1Qn9sL2XlORsYbRm8C4Rtt6zvTU_fq70o1SPvDRk",
      },
      params: {
        language: "en-US",
        page: 1,
      },
    });
    const data = await res.json();
    setPopularMovies(data);
  }

  async function fetchUpcomeMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTMwN2Y2YjA1NGQ1NTg4YmM0ZjMwY2ExYTFjMTY0ZiIsInN1YiI6IjY1MmQwOTBlMWYzZTYwMDBhYzRmNjZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mr1Qn9sL2XlORsYbRm8C4Rtt6zvTU_fq70o1SPvDRk",
        },
        params: {
          language: "en-US",
          page: 1,
        },
      }
    );
    const data = await res.json();
    setUpcomeMovies(data.results);
  }

  return (
    <Fragment>
      <div className="background2">
        {popularMovies ? (
          <Carousel movies={popularMovies.results} />
        ) : (
          <LoaderIndicator />
        )}
      </div>

      <div className="container">
      <h3 className="mb-5 mt-3">Upcoming Movies</h3>
      {upcomeMovies ? (
        <div className="row row-cols-2 row-cols-lg-4 g-1">
          {upcomeMovies.map((movie, i) => {
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

    </Fragment>

    
  );
}
export default ReactPage;
