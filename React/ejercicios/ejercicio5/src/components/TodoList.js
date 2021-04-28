import "./TodoList.css";

export default function TodoList({todos, setTodos}) {

    const removeTodo = (title) => setTodos(todos.filter(todo => todo.title !== title));

    const toggleCompleted = (e, index) => {
        if(e.target.tagName !== "BUTTON") {
            const newTodos = [...todos];
            newTodos[index].completed = !newTodos[index].completed;
            setTodos(newTodos);
        }        
    }

        
    return (                   
        <ul className="list-group">
             {todos.map((todo, index) => {
                return (
                    <li className={`list-group-item ${todo.completed ? "completed" : ""}`} 
                        onClick={e => toggleCompleted(e, index)}>
                        {index}: {todo.title}
                        <button className="btn btn-danger float-right" onClick={() => removeTodo(todo.title)}>x</button>
                    </li>
                )
            })}
        </ul>
    )       
}






