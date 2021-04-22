import {useState} from "react";

export default function Form({setContacts}) {

    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    // const [postalCode, setPostalCode] = useState("");
    // const [city, setCity] = useState("");

    // function handleName(e) {
    //     setName(e.target.value);
    // };

    // function handleLastName(e) {
    //     setLastName(e.target.value);
    // };

    // function handlePhone(e) {
    //     setPhone(e.target.value);
    // };

    // function handleAddress(e) {
    //     setAddress(e.target.value);
    // };

    // function handlePostalCode(e) {
    //     setPostalCode(e.target.value);
    // };

    // function handleCity(e) {
    //     setCity(e.target.value);
    // };

    const initialContactsState = {
        name:"",
        lastName:"",
        address:"",
        postalCode:"",
        city:"",
        phone:""
    }

    const [form, setForm] = useState(initialContactsState)

    function handleInput(e) {
        const inputName = e.target.id;
        const newValue = e.target.value;

        setForm({...form, ...{[inputName]: newValue}})
    }
    

    function submit(e) {
        e.preventDefault();

        // const newContact = {name, lastName, address, postalCode, city, phone};

         const newContact = {
            name: name,
            lastName: lastName,
            address: address,
            postalCode: postalCode,
            city: city,
            phone: phone
        };

        setContacts(currentContacts => [...currentContacts, newContact]);

        // // e.target.reset();
        setForm(initialContactsState)
        // setName("");
        // setLastName("");
        // setAddress("");
        // setPostalCode("");
        // setCity("");

    }

    return (
        <form className="form-group" onSubmit={submit}>
            <input id="name"         onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce un nombre"/>
            <input id="lastName"     onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce los apellidos"/>
            <input id="phone"        onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce un nombre"/>
            <input id="address"      onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la dirección"/>
            <input id="postalCode"   onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el código postal"/>
            <input id="city"         onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el número de teléfono"/>
            <input type="submit" class="btn btn-success" value="Registrar"/>
        </form>
    )
}




