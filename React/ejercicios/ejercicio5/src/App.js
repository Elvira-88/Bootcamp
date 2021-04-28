import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';

import App1 from "./pages/App1";
import App2 from "./pages/App2";
import App3 from "./pages/App3";

function App() {
  return (
    <div className="App">

      <BrowserRouter>   

          <nav className="navbar bg-dark">
                <NavLink className="text-white" to="/pages/App1" activeClassName="active text-success">Ejercicio 1</NavLink>
                <NavLink className="text-white" to="/pages/App2" activeClassName="active text-success">Ejercicio 2</NavLink>
                <NavLink className="text-white" to="/pages/App3" activeClassName="active text-success">Ejercicio 3</NavLink>
          </nav> 
      
                
                
                <Switch>
                    <Route exact path="/pages/App1" component={App1}/>   
                    <Route path="/pages/App2" component={App2}/> 
                    <Route path="/pages/App3" component={App3}/>  
                </Switch>  
      
      </BrowserRouter>
 
    </div>
  );
}

export default App;
