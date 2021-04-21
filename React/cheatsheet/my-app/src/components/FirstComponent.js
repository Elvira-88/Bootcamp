import {Fragment} from "react";
import Proptypes from "prop-types";

export default function FirstComponent(props) {

    // console.log(props, typeof props);
    // console.log(props.date);

    const mySimpleFunction = function (event) {
        console.log(event);
    }

    const myFunction = function (name) {
        return function (event) {
            console.log(name, event.target);
        } 
    };
   

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, omnis!</p>
            <button onClick={myFunction("Marta")}>Imprimir Marta</button>
            <button onClick={myFunction("Miguel")}>imprimir Miguel</button>
            <button onClick={mySimpleFunction}>Eliminar Book2</button>
        </Fragment>
    )
}

FirstComponent.defaultProps = {
    // title: "Sin título",
    date: "Sin fecha",
    products: [],
}

FirstComponent.propTypes = {
    title: Proptypes.string.isRequired,
    date: Proptypes.string,
    products: Proptypes.array,
}



// export default FirstComponent (Alternativa)
// SOLO se puede un export default por archivo

function SecondComponent() {
    return (
        <>
            <h1>Soy otro componente</h1>
        </>
    )
}

function ThirdComponent() {
    return (
        <div>
            <h1>Soy otro componente más</h1>
        </div>
    )
}

export {SecondComponent, ThirdComponent};

