import React from 'react';
//API stuff should be in an environment variable but having this on github
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function setVoteClass(vote){
    if(vote >= 8){
        return 'green';
    } else if( vote >= 5){
        return 'orange';
    } else if( vote > 2){
        return 'red';
    } else{
        return 'grey';
    }
}
const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className = "movie">
        <img src={ poster_path ? IMG_API + poster_path : "https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"} alt = {title}/>
        <div className= "movie-info">
            <h3>{title}</h3>
            <span className = {`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className ="movie-overview">
            <h2>{title}</h2>
            <p>{overview}</p>
        </div>
    </div>
    //LEFT OFF AT 4:35 
);

export default Movie;