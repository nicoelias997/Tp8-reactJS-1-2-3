import React from "react";
import Ejercicio1 from "./components/ejercicio1";

function App() {
  const [clave, setClave] = React.useState("");
  const [ejercicio1, setEjercicio1] = React.useState(false);
  const [ejercicio2, setEjercicio2] = React.useState(false);

  const mostrarEjercicio1 = () => {
    setClave("");
    setEjercicio1(false);
    setEjercicio2(false);
  };
  const mostrarEjercicio2 = () => {
    setEjercicio1(true);
    setEjercicio2(true);
  };
  const mostrarClave = () => {
    setClave("(changed from state)!");
    setEjercicio2(false);
  };

  return (
    <div className="container mt-5">
      <h1>Ejercicios 1 al 3 - TP8 - React JS</h1>
      <hr />

      {ejercicio1 === false ? (
        //condicion verdadera(si estamos en el ej 1)
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
        //condicion falsa(si estamos en el ej 2)

        <div>
          <Ejercicio1 mensaje="My friend" clave={clave}></Ejercicio1>
          {ejercicio2 === true ? (
            <button
              type="button"
              onClick={() => mostrarClave()}
              className="btn btn-dark"
            >
              Mostrar ejercicio 3
            </button>
          ) : (
            <button
              type="button"
              onClick={() => mostrarEjercicio1()}
              className="btn btn-warning"
            >
              Volver al ejercicio 1
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
