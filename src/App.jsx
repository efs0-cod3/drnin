import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Input from "./components/Input";
import Services from "./components/Services";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import drR from "./assets/equipo/drricardo.png";
import drN from "./assets/equipo/drnin.png";
import clinicLogo from "./assets/ninlogo.png";
import featuresData from "./featuresData";
import servicesData from "./servicesData";
import Socials from "./components/Socials";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import WhatsAppButton from "./components/Whatsapp";
const VITE_EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const VITE_EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const VITE_EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export default function App() {
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [tratamiento, setTratamiento] = useState("Carillas");
  const [fecha, setFecha] = useState("");
  const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [consentimientoWhatsapp, setConsentimientoWhatsapp] = useState(false);
  const serviceID = "service_u9cfz5q";
  const templateID = "template_12zth9c";
  const publicID = "Sbc5UpLfa7BKk2r2R";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !fecha) {
      setError("Por favor completa todos los campos");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    if (!name) {
      setError("Por favor completa casilla nombre");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    if (!phone || !expresions.phone.test(phone)) {
      setError("Por favor completa casilla telefono");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    if (!email) {
      setError("Por favor completa casilla email");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    if (!consentimientoWhatsapp) {
      setError("Por favor autoriza contacto via whatsapp o telefono.");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    const data = {
      nombre: name,
      email: email,
      tratamiento,
      phone,
      fecha,
      consentimientoWhatsapp: consentimientoWhatsapp
        ? "Sí autorizó contacto por WhatsApp"
        : "No autorizó contacto",
    };

    emailjs.send(
      VITE_EMAIL_SERVICE_ID,
      VITE_EMAIL_TEMPLATE_ID,
      {
        ...data,
      },
      VITE_EMAIL_PUBLIC_KEY,
    ).then(()=>{
      setModal(true);
    }).catch(()=>{
      setError("Error al enviar msj")
    });

  };

  const handleConsentimientoWhatsapp = (e) => {
    // Access the boolean checked state using event.target.checked
    setConsentimientoWhatsapp(e.target.checked);
  };

  const expresions = {
    name: /[^a-zA-ZÀ-ÿ\s]{1,40}$/g, // Letras y espacios, pueden llevar acentos.
    mail: /^[a-zA-Z0-9_.+-]+@^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g,
    phone: /^\d{3}-?\d{3}-?\d{4}$/,
  };

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

  const Service = servicesData.map((item) => {
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
        <WhatsAppButton />
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
          {/* <div className="custom-shape-divider-top-1667862197">
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
          svg divider */}
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
        {/* equipo */}

        {/* services */}
        <section className="services--section" id="servicios">
          <div>
            <h3 className="h3">Servicios</h3>
          </div>
          <div className="services--cards">{Service}</div>
        </section>
        {/* form */}
        <section className="form--section" id="cita">
          <div className="encuentranos">
            <div className="contacto_title">
              <h2>Mantente conectado con nosotros</h2>
            </div>

            <section className="aNl">
              <div>
                <div className="address ubicacion">
                  <div className="ubicacion_title">
                    <div>
                      <FaMapMarkerAlt className="address--icon" />
                    </div>
                    <h3>Ubicación</h3>
                  </div>
                  <div>
                    <p>
                      <a className="encuentranos_links" href="">
                        Av. Pasteur No. 55, Suite 102, Gascue, Santo Domingo.
                      </a>
                    </p>
                    <p>
                      <a className="encuentranos_links" href="">
                        Av. Simon Bolivar No. 105, Suite 102, Gascue, Santo
                        Domingo.
                      </a>
                    </p>
                  </div>
                </div>

                <div className="address mail">
                  <div className="mail_title">
                    <div>
                      <FaEnvelope className="address--icon" />
                    </div>
                    <h3>Email</h3>
                  </div>
                  <p>
                    <a
                      className="encuentranos_links"
                      href="mailto:clinicadentaldr.nin@gmail.com"
                    >
                      clinicadentaldr.nin@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="socials--container">
                <Socials
                  link="https://www.instagram.com/nindentalclinic/?hl=en"
                  socialIcon={<FaInstagram />}
                />
                <Socials
                  link="https://api.whatsapp.com/send?phone=18092832825"
                  socialIcon={<FaWhatsapp />}
                />
              </div>
            </section>
          </div>
          <>
            <form onSubmit={handleSubmit}>
              <h2 className="h-cita">Agenda tu cita</h2>
              <section className="input--section">
                <div className="form_div">
                  <Input
                    lable="Nombre"
                    type="text"
                    placeholder="Juan Perez"
                    name="nombre"
                    expresionRegular={expresions.name}
                    state={name}
                    changeState={changeName}
                  />
                  <Input
                    name="email"
                    state={email}
                    changeState={changeEmail}
                    lable="Correo"
                    type="email"
                    placeholder="juanp@gmail.com"
                    expresionRegular={expresions.mail}
                  />
                  <Input
                    name="phone"
                    type="tel"
                    state={phone}
                    placeholder="8092223333"
                    changeState={setPhone}
                    lable="Telefono"
                  />
                </div>
                <div className="form_div">
                  <section className="select--container input--container">
                    <label className="label">Tratamiento de interes:</label>
                    <select
                      className="select"
                      value={tratamiento}
                      onChange={(e) => setTratamiento(e.target.value)}
                    >
                      <option value="Carillas">Carillas</option>
                      <option value="Blanqueamiento">Blanqueamiento</option>
                      <option value="Implantes">Implantes</option>
                      <option value="Diseño de sonrisa">
                        Diseño de sonrisa
                      </option>
                      <option value="Coronas o puentes">Coronas/Puentes</option>
                      <option value="Endodoncia">Endodoncía</option>
                      <option value="Ortodoncia">Ortodoncía</option>
                      <option value="Limpieza">Limpieza</option>
                      <option value="Urgencia">Dolor/Urgencia</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </section>
                  <Input
                    lable="Fecha prevista"
                    type="date"
                    placeholde="Selecciona tu fecha"
                    changeState={setFecha}
                  />
                </div>
              </section>
              <label className="checkbox_label">
                <input
                  name="consentimientoWhatsapp"
                  type="checkbox"
                  checked={consentimientoWhatsapp} // Controls the checkbox's state
                  onChange={handleConsentimientoWhatsapp} // Updates the state on change
                />
                Autorizo que me contacten via Whatsapp o telefono.
              </label>
              <button className="boton--cita">Hacer cita</button>
              {error && (
                <div className="error-modal">
                  <p className="error">{error}</p>
                </div>
              )}
            </form>
            {/* confirmacion de envio */}
            {modal && (
              <div className="modal-overlay">
                {" "}
                <div className="modal">
                  {" "}
                  <div className="check">✓</div> <h3>Solicitud enviada</h3>{" "}
                  <p>
                    {" "}
                    Hola '{name}' Hemos recibido tu solicitud de cita. Nuestro
                    equipo te responderá en breve para confirmar la fecha de tu
                    consulta o tratamiento.
                    <br />
                    <strong>Gracias por confiar en nosotros!</strong>{" "}
                  </p>{" "}
                  <button className="modal-btn" onClick={() => setModal(false)}>
                    {" "}
                    Entendido{" "}
                  </button>{" "}
                </div>{" "}
              </div>
            )}
          </>
        </section>
      </main>
      <Footer />
    </div>
  );
}
