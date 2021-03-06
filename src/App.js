import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';

//would probably store in an environment variable if I wasn't putting this on gitHub
const POPULAR_API=  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3b65280afa92628c87d158aafe8bf52&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=a3b65280afa92628c87d158aafe8bf52&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function getMovies(API){
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)});
  } 

  useEffect( () => {getMovies(POPULAR_API)}, [])

  const handleOnsubmit = (e) =>{
    e.preventDefault();
      if(searchTerm){
        getMovies(SEARCH_API+searchTerm);
        setSearchTerm('');
      }
    }

  const handleOnChange = (e) =>{
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <header>
        <form onSubmit ={handleOnsubmit} >
          <input 
            className = "search" 
            type = "search" 
            placeholder="Search Movies"
            value = {searchTerm}
            onChange = {handleOnChange}/>
        </form>
      </header>
      <div className = "movie-container">
        { movies.length > 0 && movies.map(movie => (<Movie key = {movie.id} {...movie}/>))}
      </div>
    </>
      
  );

}

export default App;
