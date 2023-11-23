import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoaderIndicator from '../../../module/common/loaderIndicator';


function Movie() {
  const { movieName , movieId} = useParams();
  const [movie , setMovie] = useState("");

  useEffect(()=>{
    if(movieId){
    fetchMovieDetails();
    }
  },[movieId]);

  function fetchMovieDetails(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTMwN2Y2YjA1NGQ1NTg4YmM0ZjMwY2ExYTFjMTY0ZiIsInN1YiI6IjY1MmQwOTBlMWYzZTYwMDBhYzRmNjZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mr1Qn9sL2XlORsYbRm8C4Rtt6zvTU_fq70o1SPvDRk'
      },
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => console.error(err));
  }

  return (
    <div className="container">
      {movie ? (
        <div class="card text-bg-dark">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <div class="card text-bg-dark bg-opacity-50">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{movie.title}</h5>
                    <p class="card-text">{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoaderIndicator />
      )}
    </div>
  )
}

export default Movie;