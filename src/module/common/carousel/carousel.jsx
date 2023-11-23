import React from "react";
import "./carousel.style.css"

function Carousel({ movies }) {
  return (
    <div className="container mt-5">
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner rounded-0 carousel-width-50">
        {movies &&
          movies.map((movie, i) => (
            <div className={`carousel-item  ${i === 0 ? "active" : ""}`} key={i}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  className="card-img d-block w-100" 
                  alt="..."
                />
                <div className="card-img-overlay" >
                  <div className="card text-bg-dark bg-opacity-50" >
                    <div className="row g-0" id="front">
                      <div className="col-md-4" id="back">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          className="img-fluid rounded-start "
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8" >
                        <div className="card-body" >
                          <h5 className="card-title" >{movie.title}</h5>
                          <p className="card-text" >{movie.overview}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>  
  );
}

export default Carousel;

