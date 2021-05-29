import React from "react";
import "../App.css"

function Movie(props){
    return(
        
            <div className="movie">
                <img src={props.image} alt="movie_image"/>
                <div className="movie-info">
                    <h1>{props.title}</h1>
                    <span className="green">{props.vote_average}</span>
                </div>
                <div className="overview">
                    <h2>Overview</h2>
                    <p>
                        {props.overview}
                    </p>
                </div>
            </div>
       
    );
}

export default Movie;