import {useState, useEffect} from 'react';
import './App.css';
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

import PageMovieList from "../pages/PageMovieList";
import PageMovieDetails from "../pages/PageMovieDetails";

function App() {


  return (

    <div className="App">

    <BrowserRouter>                                    

        <GlobalContext.Provider value={{premiers, setPremiers}}>
              <Switch>
                  <Route exact path="/pages/PageMovieList" component={PageMovieList}/>   
                  <Route path="/pages/PageMovieDetails" component={PageMovieDetails}/>                      
              </Switch> 
        </GlobalContext.Provider>     
                 
    </BrowserRouter>

  </div>
 
  );
}

export default App;


