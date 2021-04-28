import {useState, useEffect} from "react";

import NewTodo from "../components/NewTodo"
import TodoList from "../components/TodoList"

function App4() {

  const [todos, setToDos] = useState([]);

  useEffect(() => {

    const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

    fetch(API_TODOS)
    .then(response => response.json())
    .then(data => setToDos(data.slice(0, 20)))    
  },[])
  
  return (
    <div className="container">
      <h2 className="my-4">Todo List</h2>
      <NewTodo setTodos={setToDos}/>
      <TodoList todos={todos} setTodos={setToDos}/>                    
    </div>
  );
}

  export default App4;

  
