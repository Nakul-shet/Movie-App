import Movie from "./component/movie.jsx"
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState([]);
  const [search , setSearch] = useState("");
  const [query , setQuery] = useState('harry')

 const SEARCH_URl = `https://api.themoviedb.org/3/search/movie?api_key=7c050ad9d485032359d1098e1b0c76ec&query=${query}`;

  useEffect(() => {
    gettMovies(SEARCH_URl)
  });

  const gettMovies = async (url) => {

    const response = await fetch(url);

    const data = await response.json();

    setData(data.results)
  }
 
 const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const updateSearch = e => {

    setSearch(e.target.value)
  }

  const getSearch = (e) => {

   e.preventDefault();
    setQuery(search)
  }

  return (

    <div className="App">
      <header>
          <div className={"appname"}>MOVIE APP </div>
            <form id="form" onSubmit={getSearch}>
                <input               
                name="searchTerm"       
                type="search" 
                onChange={updateSearch}
                placeholder="search" 
                className="search" 
                id="search" 
                autoComplete="off"
                value={search}
                />
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
                release = {x.release_date}
              />
            </div>
          );
        })}
          <div className={"footer"}>Copyrighted @Nakul 2021-22</div>
      </main>
    </div>


  );
}

export default App;
