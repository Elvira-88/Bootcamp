import {useState} from "react";
import {useHistory} from "react-router-dom";

export default function MovieList({premiers}) {     

    // const [userID, setUserID] = useState(1);

    // const history = useHistory();

    // function handleClick(event) {
    //     history.push(`/record/${userID}`);
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
                    <button onClick={handleClick}className="btn bg-success">More details</button>
                    </>               
                )
            })}
        </div>
    )
}
