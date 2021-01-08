import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from "./requests";
import './Banner.css';
import { IconButton } from "@material-ui/core";

function Banner() {
    const [movie,setMovie] =useState ([]);
    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1 )]
        );
                return request;
            }
            
        fetchData ();
    },[]);
    console.log(movie);
    /* to maintain the overflow for the description we are using overflow function below*/
    function truncate(str, n) {
        return str?.length.n ? str.substr(0, n-1) + "..." : str;
    }
    return (
        <header className = "banner"
        style={{
            backgroundSize : "cover",
            backgroundImage : `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center",
        }}
        >
        <div className = "banner__contents">
        <h1 className="banner__title"> { movie?.title || movie?.name || movie?.original_name }
        </h1>
        <div className = "banner__button" >
        <IconButton><button className = "banner__button">Play</button></IconButton>
        <IconButton><button className = "banner__button">My List</button></IconButton>
           
        </div>
        <h1 className="banner__description">
        {truncate (movie?.overview, 100)}</h1>
        </div>
        <div className = "banner__fadeBottom"/> 
        </header>
      
    )
}

export default Banner

