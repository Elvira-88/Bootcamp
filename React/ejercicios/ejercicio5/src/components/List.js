import Shop from "./Shop";

export default function List(props) {
       return (
           <div className="container">                             
                <h3>{props.category}</h3>
                <ul className="list-group">
                    {
                        props.products.map(product => {
                            return <li key={product.id} className="list-group-item">
                                {product.products} {product.brand} {product.model} {product.price}</li> 
                        })
                    }            
                </ul>  
           </div>
        )
}

// export default function List({category, products}) {
//     return (
//         <>                             
//            <h2>{category}</h2>
//            <ol>
//                {products.map(({id, name, brand, model, price}) => {
//                return (<li key={id}>{name} {brand} {model}. Precio: {price}€</li>)
//                })}                     
//            </ol>  
//         </>
//      )
// }