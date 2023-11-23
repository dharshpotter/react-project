import React, { useState, useEffect, useContext} from "react";
import { AppContext } from "../../../context/AppContext";
import LoaderIndicator from "../../../module/common/loaderIndicator";
import Card from "../../../module/common/card/Card";

const SearchPage = () => {
    const { searchMovies } = useContext(AppContext);
    const [searchResults, setSearchResults] = useState("");

    useEffect(() => { 
      if(searchMovies){
      fetchSearchMovies();
      }
    }, [searchMovies]);

    async function fetchSearchMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovies}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTMwN2Y2YjA1NGQ1NTg4YmM0ZjMwY2ExYTFjMTY0ZiIsInN1YiI6IjY1MmQwOTBlMWYzZTYwMDBhYzRmNjZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mr1Qn9sL2XlORsYbRm8C4Rtt6zvTU_fq70o1SPvDRk",
          },
        }
      );
      const data = await res.json();
      setSearchResults(data);
    }
    return (
      <div className="container">

        {searchResults && searchMovies ? (
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-1">
            {searchResults.results.map((movie, i) => (
              <div className="col" key={i}>
                <Card movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <LoaderIndicator />
        )}
      </div>
    );
  
  };

  export default SearchPage;
