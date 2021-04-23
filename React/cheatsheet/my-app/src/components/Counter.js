import {useState} from "react";
import FirstComponent from "./FirstComponent";

export default function Counter() {
    // const state = useState(0);  //El 0 es el valor inicial
    // const count = state[0];
    // const setCount = state[1];

    const [count, setCount] = useState(0);

    const handleClick = function (evento) {
        if (count < 10) {
            setCount(count + 1);
        }        
    };

    return (
        <div>
            <FirstComponent count={count}/>
            <p>Has hecho click {count} veces.</p>
            <button onClick={handleClick}>Hazme click</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>Bajar</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}