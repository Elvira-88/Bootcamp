import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";


export default function MovieDetails() {

    const [details, setDetails] = useState({});
    const {id} = useParams();

    useEffect(() => {
  
      const API_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=324e27dded078adf3d8c53b3ee955a39`;
  
      fetch(API_DETAILS)
      .then(response => response.json())
      .then(data => setDetails(data))   
    },[])

    return (

        <div className="App">
            <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Title: {details.title}</h5>
                <p className="card-text">Synopsis: {details.overview}</p>
                <date>Estreno: {details.release_date}</date> 
                <p className="card-text">Rating: {details.vote_average}</p>          
            </div>   
            <a href={`https://www.imdb.com/title/${details.imdb_id}`}><button>IMdb</button></a>
            <footer>Footer</footer>     
       </div>

    )
}


