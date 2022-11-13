import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/lm-logo.png";

export default function Navbar() {
  const [active, setActive] = useState("bars");
  const [toggleIcon, setToggleIcon] = useState("active");
  const [navItems, setNavItems] = useState("nav_items");
  const [ scroll, setScroll ] = useState('')

  const style = {
    padding: "10px 20px",
    color: "var(--cyan)",
    fontSize: "24px",
    cursor: "pointer",
  };

  function toggleShow() {
    active === "bars" ? setActive("bars active") : setActive("bars");
    toggleIcon === "times" ? setToggleIcon("times active") : setToggleIcon("times");
    navItems === "nav_items"
      ? setNavItems("nav_items show")
      : setNavItems("nav_items");
  }

   // manage navbar on scrolling
   useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 0 ? setScroll('nav--scrolled') : setScroll('');
    }
  };
// navbar on scrolling

  return (
    <header onScroll={ stickNavbar } className= {scroll}>
    <nav>
      <img className="nav--logo" src={logo} alt="logo" />
      <div onClick={toggleShow} className="mobile--menu">
        <FaBars style={style} className={active} />
        <FaTimes style={style} className={toggleIcon} />
      </div>
      <ul className={navItems}>
        <li  onClick={toggleShow}>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li onClick={toggleShow}>
          <a href="#features">Caracteristicas</a>
        </li>
        <li onClick={toggleShow}>
          <a href="#cita">Haz tu cita</a>
        </li>
        <li onClick={toggleShow}>
          <a href="#servicios">Servicios</a>
        </li>
      </ul>
    </nav>
    </header>
  );
}
