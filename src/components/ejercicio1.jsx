import React from "react";

const ejercicio1 = (props) => {
  return (
    <div>
      <h1>
        Hello {props.mensaje}
        {props.clave}
      </h1>
    </div>
  );
};

export default ejercicio1;
