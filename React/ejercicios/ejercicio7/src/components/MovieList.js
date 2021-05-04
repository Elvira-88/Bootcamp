import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function MovieList() {  
    
    const [premieres, setPremieres] = useState([]);

    useEffect(() => {
  
      const API_PREMIERES = "https://api.themoviedb.org/3/movie/upcoming?api_key=324e27dded078adf3d8c53b3ee955a39";
  
      fetch(API_PREMIERES)
      .then(response => response.json())
      .then(data => setPremieres(data.results))   
    },[])

    const history = useHistory();
  
    function handleClick(movie_id) {
        history.push(`/details/${movie_id}`);
    }      

    return (
        <div>
            <input type="text"/>
            <div className="card w-50 m-auto">
            {premieres.map((premiere) => {
                return (
                    <>
                    <img src={`https://image.tmdb.org/t/p/w500${premiere.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Title: {premiere.title}</h5>
                      <p className="card-text">Synopsis: {premiere.overview}</p>
                      <date>Estreno: {premiere.release_date}</date>           
                    </div> 
                    <button onClick={() => handleClick(premiere.id)} className="btn bg-success">More details</button>
                    <footer>Footer</footer> 
                    </>               
                )
            })}
        </div>

        </div>
   
    )
}

