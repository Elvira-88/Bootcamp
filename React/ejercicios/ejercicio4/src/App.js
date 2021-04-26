import {useState, useEffect} from "react";

import './App.css';
import List from "./components/List"
import Input from "./components/Input"

function App() {

  const [toDo, setToDo] = useState([]);

  useEffect(() => {

    const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

    fetch(URL)
    .then(response => response.json())
    .then(data => setToDo(data.splice(0, 20)))    
  },[])
  
  return (
    <div className="container">
      <h2 className="my-4">Todo List</h2>
      <List tasks={toDo}/>
      <Input/>            
    </div>
  );
}

  export default App;
