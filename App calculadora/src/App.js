import './App.css';
import freecodecampLogo from './imagenes/logofree.jpg';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import  'mathjs'

function App() {

  const [input, setInput] = useState ('0');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluete(input));
    }else {
      alert("ingrese un nùmero")
    }
    setInput(evaluete(input));
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src= {freecodecampLogo} 
        className='freecodecamp-logo'
        alt='logo-de-freecodecamp'/>
  </div>
  <div className='contenedor-calculadora'>
    <div><Pantalla input = { input } /></div>
    <div className='fila'>
      <Boton manejarClic= {agregarInput}>1</Boton>
      <Boton manejarClic= {agregarInput}>2</Boton>
      <Boton manejarClic= {agregarInput}>3</Boton>
      <Boton manejarClic= {agregarInput}>+</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic= {agregarInput}>4</Boton>
      <Boton manejarClic= {agregarInput}>5</Boton>
      <Boton manejarClic= {agregarInput}>6</Boton>
      <Boton manejarClic= {agregarInput}>-</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic= {agregarInput}>7</Boton>
      <Boton manejarClic= {agregarInput}>8</Boton>
      <Boton manejarClic= {agregarInput}>9</Boton>
      <Boton manejarClic= {agregarInput}>*</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic= {calcularResultado}>=</Boton>
      <Boton manejarClic= {agregarInput}>0</Boton>
      <Boton manejarClic= {agregarInput}>.</Boton>
      <Boton manejarClic= {agregarInput}>/</Boton>
    </div>
    <div className='fila'>
      <BotonClear manejarClear= {() => setInput('')}>Clear</BotonClear>
    </div>

  </div>
  
      
    </div>
  );
}

export default App;
