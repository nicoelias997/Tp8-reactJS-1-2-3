import React from "react";
import Ejercicio1 from "./components/ejercicio1";


function App() {

  const [clave, setClave] = React.useState("")

  const mostrarClave = () => {
    setClave("(changed from state)!")
  }

  return (
    <div className="container mt-5">
      <h1>Ejercicios 1 al 3 - TP8 - React JS</h1>
    <Ejercicio1 mensaje="world"></Ejercicio1>
    <Ejercicio1 mensaje="My friend" clave={clave}></Ejercicio1>
    <button 
    type="button"
    onClick={() => mostrarClave()}
    className="btn btn-dark">Mostrar clave
    </button>
    </div>
  );
}

export default App;
