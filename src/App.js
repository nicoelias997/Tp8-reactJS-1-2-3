import React from "react";
import Ejercicio1 from "./components/ejercicio1";

function App() {
  const [clave, setClave] = React.useState("");
  const [ejercicio1, setEjercicio1] = React.useState(false);

  const mostrarClave = () => {
    setClave("(changed from state)!");
  };
  const mostrarEjercicio2 = () => {
    setEjercicio1(true);
  };

  return (
    <div className="container mt-5">
      <h1>Ejercicios 1 al 3 - TP8 - React JS</h1>
      <hr />

      {ejercicio1 === false ? ( //condicion verdadera
        <div>
          <Ejercicio1 mensaje="world"></Ejercicio1>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => mostrarEjercicio2()}
          >
            Mostrar ejercicio 2
          </button>
        </div>
      ) : (
        //condicion falsa
        <div>
          <Ejercicio1 mensaje="My friend" clave={clave}></Ejercicio1>
          <button
            type="button"
            onClick={() => mostrarClave()}
            className="btn btn-dark"
          >
            Mostrar ejercicio 3
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
