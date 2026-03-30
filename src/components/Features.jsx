import React from "react";

export default function Features({ icon, titulo, texto, className }) {
  return (
    <div className={`feature-card${className ? " " + className : ""}`}>
      <span className="feature-icon">{icon}</span>
      <h3 className="feature-title">{titulo}</h3>
      <p className="feature-text">{texto}</p>
    </div>
  );
}
