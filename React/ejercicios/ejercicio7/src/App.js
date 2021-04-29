import {useState, useEffect} from 'react';
import './App.css';
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";



function App() {

  const [premiers, setPremiers] = useState([]);

  useEffect(() => {

    const API_PREMIERS = "https://api.themoviedb.org/3/movie/upcoming?api_key=324e27dded078adf3d8c53b3ee955a39";

    fetch(API_PREMIERS)
    .then(response => response.json())
    .then(data => setPremiers(data.results))   
  },[])

  return (
    <div className="App">
      <h1>PREMIERS</h1>
      <MovieList premiers={premiers} setPremiers={setPremiers}/>
      <MovieDetails premiers={premiers} setPremiers={setPremiers}/>
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=324e27dded078adf3d8c53b3ee955a39
