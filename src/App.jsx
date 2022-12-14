import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Input from "./components/Input";
import Services from "./components/Services";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import { FaTooth, FaThumbsUp, FaUserMd } from "react-icons/fa";
import blanqueamiento from "./assets/blanqueamiento.png";
import corona from "./assets/coronas.png";
import implante from "./assets/implantes.png";
import orto from "./assets/orto.png";
import smile from "./assets/smile.png";
import beneer from "./assets/carillas.png";
import drR from "./assets/equipo/drricardo.png"
import drN from "./assets/equipo/drnin.png"
import nBg from "./assets/equipo/dnt.png"
import clinicLogo from "./assets/nin_logo.png"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section className="nosotros" id="nosotros">
          <img src={clinicLogo} className="flogo"/>
          <h2 className="nosotros-h2" lang="esp">
            Contamos un equipo de
            profesionales que con <span className="hl">pasión</span> y <span className="hl">entrega</span> brindamos el mejor servicio a
            nuestros pacientes.
          </h2>
        </section>

        <section className="features--section" id="features">
          {/* svg divider */}
          <div class="custom-shape-divider-top-1667862197">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          {/* svg divider */}
          <h3>Aqui encontraras</h3>
          <div className="features--container">
            <Features
              icon={<FaUserMd />}
              titulo="Equipo Profesional"
              texto="Somos un equipo de profesionales altamente capasitados para resolver cualquier tipo de asistencia que necesites"
            />
          <Features
            icon={<FaTooth />}
            titulo="Tecnologia de Punta"
            texto="Contamos con instrumentos y equipos con tecnologia de punta que nos ayudan a brindar ese servicio que nos caracteriza."
          />
          <Features
            icon={<FaThumbsUp />}
            titulo="Satifaccion Garantizada"
            texto="Te aseguramos un puesto en nuestra agenda porque seguro que volveras y estaremos para ti en cualquier momento."
          />
          </div>
          {/* svg divider */}
          <div class="custom-shape-divider-bottom-1667862623">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          {/* svg divider */}
        </section>
        {/* form */}
        <section className="form--section" id="cita" >
          <form>
            <h2 className="h-cita">Agenda tu cita</h2>
            <section className="input--section">
            <div>
            <Input lable="Nombre" type="text" placeholder="Juan Perez" />
            <Input lable="Correo" type="email" placeholder="juanp@gmail.com" />
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
            <Input lable="Fecha" type="date" placeholde="Selecciona tu fecha" />
            </div>
            </section>
            <button className="boton--cita">Hacer cita</button>
          </form>
        </section>
        {/* equipo */}
        <section className="team--section" id="equipo"> 
        <div class="custom-shape-divider-top-1667952866">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        <h3>Equipo</h3>

       <div className="team">
       <Equipo img={drN} name='Dr. Francisco Nin' />
        <Equipo img={drR} name='Dr. Ricardo Brea' />
       </div>
        </section>
        {/* equipo */}

        {/* services */}
        <section className="services--section" id="servicios">
          <div>
          <h3>Servicios</h3>
          </div>
          <div className="services--cards">
          <Services
            className="services--img blanq"
            icono={blanqueamiento}
            titulo="Blanqueamiento"
            texto="Aplicamos la odontología estética para eliminar las manchas dentales y hacer que tus dientes adquieran una tono más blanco y brillante."
          />
          <Services
            className="services--img"
            icono={orto}
            titulo="Ortodoncia"
            texto="Especialidad de la odontología que se encarga de la corrección de los dientes y huesos posicionados de manera incorrecta."
          />
          <Services
            className="services--img"
            icono={corona}
            titulo="Coronas"
            texto="Es una prótesis dentaria hecha a medida para cada paciente en concreto. Son como pequeñas fundas que nos permiten recubrir completamente un diente que haya sufrido daños."
          />
          </div>
          <div className="services--cards">
          <Services
            className="services--img implante"
            icono={implante}
            titulo="Implantes"
            texto="Raíz dental artificial que se inserta en el hueso de la mandíbula o del maxilar para sustituir el diente que falta como si fuera un diente natural."
          />
          <Services
            className="services--img"
            icono={smile}
            titulo="Diseño de sonrisa"
            texto="Procedimiento dental que crea artísticamente sonrisas con armonía, estética y función."
          />
          <Services
            className="services--img"
            icono={beneer}
            titulo="Carillas"
            texto="Las carillas dentales son unas finas láminas de porcelana o composite que se adhieren a la cara visible del diente para mejorar su aspecto."
          />
          </div>

          {/* divider svg bottom */}
          <div class="custom-shape-divider-bottom-1668034141">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
