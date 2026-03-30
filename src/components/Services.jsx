import React from "react";

export default function Services({ classN, icono, titulo, texto, className }) {
  return (
    <div className={`service-card${className ? " " + className : ""}`}>
      <img className="service-card__icon" src={icono} alt={titulo} />
      <div className="service-card__body">
        <h3 className="service-card__title">{titulo}</h3>
        <p className="service-card__text">{texto}</p>
      </div>
    </div>
  );
}
