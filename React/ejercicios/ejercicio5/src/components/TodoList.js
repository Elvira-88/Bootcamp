import "./List.css";

export default function List({tasks, setTasks}) {

    const removeTask = (title) => setTasks(tasks.filter(task => task.title !== title));

    const toggleCompleted = (e, index) => {
        if(e.target.tagName !== "BUTTON") {
            const newTasks = [...tasks];
            newTasks[index].completed = !newTasks[index].completed;
            setTasks(newTasks);
        }        
    }

        
    return (                   
        <ul className="list-group">
             {tasks.map((task, index) => {
                return (
                    <li className={`list-group-item ${task.completed ? "completed" : ""}`} 
                        onClick={e => toggleCompleted(e, index)}>
                        {index}: {task.title}
                        <button className="btn btn-danger float-right" onClick={() => removeTask(task.title)}>x</button>
                    </li>
                )
            })}
        </ul>
    )       
}






