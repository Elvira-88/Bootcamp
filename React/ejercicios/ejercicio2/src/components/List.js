import Shop from "./Shop";

export default function List(props) {
       return (
           <div>
                <h3>{props.category}</h3>
                <ul>
                    {
                        props.products.map(product => {
                            return <li>{product.products} {product.brand} {product.model} {product.price}</li> 
                        })
                    }            
                </ul>  
           </div>
        )
}