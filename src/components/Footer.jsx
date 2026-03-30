import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-divider" />
        <nav>
          <ul className="footer-links">
            <li><a href="#Nosotros">Nosotros</a></li>
            <li><a href="#Features">Características</a></li>
            <li><a href="#Equipo">Equipo</a></li>
            <li><a href="#Servicios">Servicios</a></li>
            <li><a href="#Cita">Agenda tu cita</a></li>
          </ul>
        </nav>
        <p className="footer-copy">
          © {year} Nin Dental Clinic · Santo Domingo, República Dominicana
        </p>
      </div>
    </footer>
  );
}
