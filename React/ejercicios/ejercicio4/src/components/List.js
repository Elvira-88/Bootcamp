export default function List({tasks, setToDo}) {

    // function crossOut(e) {
    //     setToDo(tasks.map((task) => {
    //         if (task.completed == true) {
    //         }

    //         return task.completed.toggle("red")
    //     }
    //     ))}

        
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <ul className="list-group" key={task.title}>
                        <li className="list-group-item">{task.userId}: {task.title}
                        onClick={handleClick}
                        <button className="btn btn-danger float-right">x</button>
                        </li>
                        {/* <li className="list-group-item">{task.completed}</li> */}
                    </ul>
                )
            })}
            
        </div>
    )
}




