import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/ninlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "nav--scrolled" : ""}>
      <nav>
        <img className="nav--logo" src={logo} alt="Nin Dental Clinic" />

        <ul className={`nav_items${menuOpen ? " show" : ""}`}>
          <li onClick={close}><a href="#Nosotros">Nosotros</a></li>
          <li onClick={close}><a href="#Features">Características</a></li>
          <li onClick={close}><a href="#Equipo">Equipo</a></li>
          <li onClick={close}><a href="#Servicios">Servicios</a></li>
          <li onClick={close}><a href="#Cita" className="nav-cta">Agenda tu cita</a></li>
        </ul>

        <button
          className="mobile--menu"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}
