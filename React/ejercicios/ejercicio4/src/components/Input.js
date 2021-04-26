import {useState} from "react";

export default function Input({setTasks}) {

    const [newTask, setNewTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setTasks(currentTasks => [{title: newTask, completed: false}, ...currentTasks]);

        setNewTask("");
        
    }

    return (       
       <form onSubmit={handleSubmit} className="my-4 mx-4">
           <input type="text"
                placeholder="Introduce un nuevo to-do"
                className="form-control"
                onChange={e => setNewTask(e.target.value)}
                value={newTask}
           />
       </form>
    )
}