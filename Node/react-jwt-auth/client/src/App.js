import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import Public from "./pages/Public";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
      </Router>
 
    </div>
  );
}

export default App;
