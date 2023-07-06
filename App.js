import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  
  const [resultado, mostrarResultado] = useState('');

  function click(c){
    mostrarResultado(resultado.concat(c.target.name));
  }

  function calcular(){
    try {
      mostrarResultado(eval(resultado).toString());
    } catch (error) {
      mostrarResultado('Error');
    }
  }

  function borrar(){
    mostrarResultado('');
  }

  return (
    <div className="App">
      <Stack direction="horizontal" gap={2} className='titulo'>
        <Badge bg="success">Calculadora</Badge>
      </Stack>
      <div className="calcu">
        <input type="text" value={resultado}/>
        <div className="keypad">
          <Button variant="light" name="7" onClick={click}>7</Button>
          <Button variant="light" name="8" onClick={click}>8</Button>
          <Button variant="light" name="9" onClick={click}>9</Button>
          <Button variant="warning" name="/" onClick={click}>/</Button><br></br>
          <Button variant="light" name="4" onClick={click}>4</Button>
          <Button variant="light" name="5" onClick={click}>5</Button>
          <Button variant="light" name="6" onClick={click}>6</Button>
          <Button variant="warning" name="*" onClick={click}>*</Button><br></br>
          <Button variant="light" name="1" onClick={click}>1</Button>
          <Button variant="light" name="2" onClick={click}>2</Button>
          <Button variant="light" name="3" onClick={click}>3</Button>
          <Button variant="warning" name="-" onClick={click}>-</Button><br></br>
          <Button variant="light" name="0" onClick={click}>0</Button>
          <Button variant="light" name="." onClick={click}>.</Button>
          <Button variant="secondary" name="=" onClick={calcular}>=</Button>
          <Button variant="warning" name="+" onClick={click}>+</Button><br></br>
          <Button variant="danger" className="boton" onClick={borrar}>Borrar</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
