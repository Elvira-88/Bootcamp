import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from "./components/FirstComponent";
import Counter from "./components/Counter";

import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from "./components/UseContextComponent";

import { useState, createContext } from 'react';
import Router from "./Router";

export const GlobalContext = createContext();


function App() {

  const [show, setshow] = useState(true);


  return (
    <div className="App">
      {/* {show && <UseEffectComponent/>}
      <button onClick={() => setshow(!show)}>Show</button> */}
      
      {/* <Counter/> */}
      {/* <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="Otro título"/>  
      <SecondComponent/> 
      <ThirdComponent/>         */}

      {/* <GlobalContext.Provider value="Soy un string guardado en un contexto">
        <UseContextComponent/>
      </GlobalContext.Provider> */}

      <Router/>
      
    </div>
  );
}

export default App;
