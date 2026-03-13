import React from "react";

export default function Services(props) {
  return (
    <div className="service--container">
      <img className={props.classN} src={props.icono} /> 

      <div className="service--text">
        <h3 >{props.titulo}</h3>
        <p>{props.texto}</p>
      </div>
    </div>
  );
}
