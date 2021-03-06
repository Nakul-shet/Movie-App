import React from "react";
import "../App.css"

function Movie(props){

    function popularity(vote){
        if(vote >= 7.5){
            return "green"
        }else if(vote >= 5){
            return "purple"
        }else {
            return "red"
        }
    }

    return(
        
            <div className="movie">
                <img src={props.image} alt="movie_image"/>
                <div className="movie-info">
                    <div>
                        <h1>{props.title}</h1>
                        <h2 style={{color:"greenyellow"}}>{String(props.release.substr(0,4))}</h2>
                    </div>

                    <span className={popularity(props.vote_average)}>{props.vote_average}</span>
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