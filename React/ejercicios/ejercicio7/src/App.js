import './App.css';

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";


import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

   return (

    <div className="App">

        <h1>PREMIERS</h1>     

    <BrowserRouter>                                    

      <Switch>
          <Route exact path="/" component={MovieList}/>   
          <Route path="/details/:id" component={MovieDetails}/>                      
      </Switch> 
                    
    </BrowserRouter>

  </div>
 
  );
}

export default App;


