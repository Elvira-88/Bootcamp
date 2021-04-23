import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from "./components/FirstComponent";
import Counter from "./components/Counter";
import UseEffectComponent from './components/UseEffectComponent';
import { useState } from 'react';

function App() {

  const [show, setshow] = useState(true);


  return (
    <div className="App">
      {show && <UseEffectComponent/>}
      <button onClick={() => setshow(!show)}>Show</button>
      
      {/* <Counter/> */}
      {/* <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="Otro título"/>  
      <SecondComponent/> 
      <ThirdComponent/>         */}
    </div>
  );
}

export default App;
