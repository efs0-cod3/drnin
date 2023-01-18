import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Input from "./components/Input";
import Services from "./components/Services";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import blanqueamiento from "./assets/blanqueamiento.png";
import corona from "./assets/coronas.png";
import implante from "./assets/implantes.png";
import orto from "./assets/orto.png";
import smile from "./assets/smile.png";
import beneer from "./assets/carillas.png";
import drR from "./assets/equipo/drricardo.png";
import drN from "./assets/equipo/drnin.png";
import nBg from "./assets/equipo/dnt.png";
import clinicLogo from "./assets/nin_logo.png";
import featuresData from "./featuresData";
import servicesData from "./servicesData";

export default function App() {
  const expresions = {
    name: /[^a-zA-ZÀ-ÿ\s]{1,40}$/g, // Letras y espacios, pueden llevar acentos.
    mail: /^[a-zA-Z0-9_.+-]+@^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g,
  };

  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('')

  const features = featuresData.map((item) => {
    return (
      <Features
        key={item.id}
        icon={item.icon}
        titulo={item.titulo}
        texto={item.texto}
      />
    );
  });

  const services = servicesData.map((item) => {
    return (
      <Services
        key={item.id}
        classN={item.classname}
        icono={item.icono}
        titulo={item.titulo}
        texto={item.texto}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <main>
        <section className="nosotros" id="nosotros">
          <img src={clinicLogo} className="flogo" />
          <h2 className="nosotros-h2" lang="esp">
            Contamos un equipo de profesionales que con{" "}
            <span className="hl">pasión</span> y{" "}
            <span className="hl">entrega</span> brindamos el mejor servicio a
            nuestros pacientes.
          </h2>
        </section>

        <section className="features--section" id="features">
          {/* svg divider */}
          <div className="custom-shape-divider-top-1667862197">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          {/* svg divider */}
          <h3>Aqui encontraras</h3>
          <div className="features--container">{features}</div>
          {/* svg divider */}
          <div className="custom-shape-divider-bottom-1667862623">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          {/* svg divider */}
        </section>
        {/* form */}
        <section className="form--section" id="cita">
          <form>
            <h2 className="h-cita">Agenda tu cita</h2>
            <section className="input--section">
              <div>
                <Input
                  lable="Nombre"
                  type="text"
                  placeholder="Juan Perez"
                  name='nombre'
                  expresionRegular={expresions.name}
                  state={name}
                  changeState={changeName}
                />
                <Input
                  name='email'
                  state={email}
                  changeState={changeEmail}
                  lable="Correo"
                  type="email"
                  placeholder="juanp@gmail.com"
                  expresionRegular={expresions.mail}
                />
              </div>
              <div>
                <section className="select--container">
                  <label className="label">Elije tu servicio</label>
                  <select className="select">
                    <option value="endodoncia">Blanqueamiento</option>
                    <option value="endodoncia">Endodoncía</option>
                    <option value="ortodoncia">Ortodoncía</option>
                    <option value="limpieza">Limpieza</option>
                    <option value="otros">Otros</option>
                  </select>
                </section>
                <Input
                  lable="Fecha"
                  type="date"
                  placeholde="Selecciona tu fecha"
                />
              </div>
            </section>
            <button className="boton--cita">Hacer cita</button>
          </form>
        </section>
        {/* equipo */}
        <section className="team--section" id="equipo">
          <div className="custom-shape-divider-top-1667952866">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <h3>Equipo</h3>

          <div className="team">
            <Equipo img={drN} name="Dr. Francisco Nin" />
            <Equipo img={drR} name="Dr. Ricardo Brea" />
          </div>
        </section>
        {/* equipo */}

        {/* services */}
        <section className="services--section" id="servicios">
          <div>
            <h3>Servicios</h3>
          </div>
          <div className="services--cards">{services}</div>

          {/* divider svg bottom */}
          <div className="custom-shape-divider-bottom-1668034141">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
