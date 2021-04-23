export default function Schedule({contacts}) {
    return (
        <div className="row">
            {contacts.map((contact, index) => {
                return (
                    <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contact.phone}>
                        <li className="list-group-item active">Contacto {index + 1}</li>
                        <li className="list-group-item">{contact.name}</li>
                        <li className="list-group-item">{contact.lastName}</li>
                        <li className="list-group-item">{contact.phone}</li>
                        <li className="list-group-item">{contact.address}, {contact.postalCode}, {contact.city}</li>
                       {/*  <li>
                            <button type="button" class="btn btn-warning">Eliminar</button>
                        </li> */}
                    </ul>
                )
            })}
        </div>
    )
}

