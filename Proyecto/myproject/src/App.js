import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import login from "./pages/login";
import register from "./pages/register";
import courses from "./pages/courses";
import team from "./pages/team";
// import company from "./pages/company";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Navbar/>

        <Switch>
          <Route path="/pages/login" component={login}/>
          <Route path="/pages/register" component={register}/>
          <Route path="/pages/courses" component={courses}/>
          <Route path="/pages/team" component={team}/>
          
        </Switch>

      </BrowserRouter>

      <Footer/>
 
    </div>
  );
}

export default App;
