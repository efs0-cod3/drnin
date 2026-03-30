import React from "react";

export default function Equipo({ img, name, role, className }) {
  return (
    <div className={`team-card${className ? " " + className : ""}`}>
      <div className="team-card__img-wrap">
        <img className="team-card__img" src={img} alt={name} />
      </div>
      <h3 className="team-card__name">{name}</h3>
      {role && <p className="team-card__role">{role}</p>}
    </div>
  );
}
