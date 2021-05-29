import Movie from "./component/movie.jsx"
import { useEffect, useState } from 'react';

function App() {

  const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c050ad9d485032359d1098e1b0c76ec&page=1&query=harry";


  const [data , setData] = useState([]);
  
  useEffect(() => {
    getMovies(API_URL)
  });

  const getMovies = async (url) => {

    const response = await fetch(url);

    const data = await response.json();

    setData(data.results)
  }
 
 const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (

    <div className="App">
      <header>
            <form id="form">
                <input               
                name="searchTerm" 
                       
                type="search" 
                placeholder="search" 
                className="search" 
                id="search" 
                autoComplete="off"/>
            </form>
        </header>
      <main>
      {data.map((x) => {
          return(
            <div>
              <Movie
                key={x.genre_ids}
                title={x.title}
                vote_average = {x.vote_average}
                image = {IMG_PATH + x.poster_path}
                overview = {x.overview}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
