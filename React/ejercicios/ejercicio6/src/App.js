import {createContext, useState} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';

import App1 from "./pages/App1";
import App2 from "./pages/App2";
import App3 from "./pages/App3";
import App4 from "./pages/App4";

// import Fetch from "./hooks/useFetch";

export const GlobalContext = createContext();

function App() {

  const initialContactsState = [
    {name: "Fran", lastName: "Gómez Fernández", address: "Calle Primera, nº 1, 1ºA", city: "Málaga", postalCode: 29000, phone: 698456234},
    {name: "Lucía", lastName: "García Ruíz", address: "Calle Segunda, nº 2, 2ºB", city: "Madrid", postalCode: 45040, phone: 645963612},
    {name: "María", lastName: "Núñez Coronado", address: "Calle tercera, nº 3, 3ºC", city: "Albacete", postalCode: 11230, phone: 672645593},
  ];

  const [contacts, setContacts] = useState(initialContactsState);

  const [todos, setToDos] = useState([]);

  const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  useFetch(API_TODOS, setTodos, 20)

  return (
    <div className="App">

      <BrowserRouter>   

          <nav className="navbar bg-dark">
                <NavLink className="text-white" to="/pages/App1" activeClassName="active text-success">Ejercicio 1</NavLink>
                <NavLink className="text-white" to="/pages/App2" activeClassName="active text-success">Ejercicio 2</NavLink>
                <NavLink className="text-white" to="/pages/App3" activeClassName="active text-success">Ejercicio 3</NavLink>
                <NavLink className="text-white" to="/pages/App4" activeClassName="active text-success">Ejercicio 4</NavLink>
          </nav> 

          <GlobalContext.Provider value={{contacts, setContacts, todos, setTodos}}>
                <Switch>
                    <Route exact path="/pages/App1" component={App1}/>   
                    <Route path="/pages/App2" component={App2}/> 
                    <Route path="/pages/App3" component={App3}/>  
                    <Route path="/pages/App4" component={App4}/> 
                </Switch> 
          </GlobalContext.Provider>     
                   
      </BrowserRouter>
 
    </div>
  );
}

export default App;
