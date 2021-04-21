import './App.css';
import Schedule from "./components/Schedule";
import Form from "./components/Form"

function App() {
  const contacts = {
    contact1: [
      {name: "Fran", lastName: "Gómez Fernández", address: "Calle Primera, nº 1, 1ºA", city: "Málaga", postalCode: 29000, phone: 698456234},
    ],
    contact2: [
      {name: "Lucía", lastName: "García Ruíz", address: "Calle Segunda, nº 2, 2ºB", city: "Madrid", postalCode: 45040, phone: 645963612},
    ],
    contact3: [
      {name: "María", lastName: "Núñez Coronado", address: "Calle tercera, nº 3, 3ºC", city: "Albacete", postalCode: 11230, phone: 672645593}, 
    ]
}

return (
    <div className="App">
        <Schedule category="Contact 1" contact={contacts.contact1} />
        <Schedule category="Contact 2" contact={contacts.contact2}/>
        <Schedule category="Contact 3" contact={contacts.contact3}/>
    </div>
)
}

export default App;
