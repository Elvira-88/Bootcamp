import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";



export default function MovieList() {  
    
    const [premiers, setPremiers] = useState([]);

    useEffect(() => {
  
      const API_PREMIERS = "https://api.themoviedb.org/3/movie/upcoming?api_key=324e27dded078adf3d8c53b3ee955a39";
  
      fetch(API_PREMIERS)
      .then(response => response.json())
      .then(data => setPremiers(data.results))   
    },[])
  
    // const [movie_id, setMovie_id] = useState();

    // const history = useHistory();

    // function handleClick(event) {
    //     history.push(`/film/${event.target.id}`);
    // }      

    return (
        <div className="card w-50 m-auto">
            {premiers.map((premier) => {
                return (
                    <>
                    <img src={`https://image.tmdb.org/t/p/w500${premier.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Title: {premier.title}</h5>
                      <p className="card-text">Synopsis: {premier.overview}</p>
                      <date>Estreno: {premier.release_date}</date>           
                    </div> 
                    {/* <button onClick={handleClick}className="btn bg-success" id={id}>More details</button> */}
                    </>               
                )
            })}
        </div>
    )
}
