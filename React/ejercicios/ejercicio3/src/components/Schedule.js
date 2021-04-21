export default function Schedule({category, contact}) {
    return (
        <>                             
            <ul>
               {contact.map(({category, name, lastName, address, city, postalCode, phone}) => {
               return (<li>{category}</li>)
                      (<li>{name}</li>)
                      (<li>{lastName}</li>)
                      (<li key={phone}>{phone}</li>)
                      (<li>{address}, {postalCode}, {city}</li>)
                      
               })}                     
           </ul>  
        </>
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