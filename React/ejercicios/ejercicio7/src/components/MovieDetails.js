import {useState, useEffect} from 'react';



export default function MovieDetails() {


  const [premiers, setPremiers] = useState([]);

  useEffect(() => {

    const API_PREMIERS = "https://api.themoviedb.org/3/movie/upcoming?api_key=324e27dded078adf3d8c53b3ee955a39";

    fetch(API_PREMIERS)
    .then(response => response.json())
    .then(data => setPremiers(data.results))   
  },[])

    // const [details, setDetails] = useState([]);

    // useEffect(() => {
  
    //   const API_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=324e27dded078adf3d8c53b3ee955a39`;
  
    //   fetch(API_DETAILS)
    //   .then(response => response.json())
    //   .then(data => setDetails(data.results))   
    // },[])


    return (

    //     <div className="App">
    //     <h1>PREMIERS</h1>
    //     <MovieList premiers={premiers} setPremiers={setPremiers}/>
    //     <MovieDetails premiers={premiers} setPremiers={setPremiers}/>
    //   </div>

    )
}
