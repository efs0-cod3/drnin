import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Input from "./components/Input";
import Services from "./components/Services";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import WhatsAppButton from "./components/Whatsapp";
import featuresData from "./featuresData";
import servicesData from "./servicesData";
import doctorsData from "./doctorsData";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const VITE_EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const VITE_EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const VITE_EMAIL_PUBLIC_KEY  = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export default function App() {
  const [name,   changeName]  = useState("");
  const [email,  changeEmail] = useState("");
  const [tratamiento, setTratamiento] = useState("Carillas");
  const [fecha,  setFecha]    = useState("");
  const [modal,  setModal]    = useState(false);
  const [phone,  setPhone]    = useState("");
  const [error,  setError]    = useState(null);
  const [consentimientoWhatsapp, setConsentimientoWhatsapp] = useState(false);

  /* ── Scroll-reveal observer ───────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Helpers ──────────────────────────── */
  const flashError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 3200);
  };

  const expresions = {
    name:  /[^a-zA-ZÀ-ÿ\s]{1,40}$/g,
    mail:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{3}-?\d{3}-?\d{4}$/,
  };

  const handleConsentimientoWhatsapp = (e) =>
    setConsentimientoWhatsapp(e.target.checked);

  /* ── Submit ───────────────────────────── */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !fecha)
      return flashError("Por favor completa todos los campos.");
    if (!phone || !expresions.phone.test(phone))
      return flashError("Teléfono inválido. Usa el formato 809-222-3333.");
    if (!consentimientoWhatsapp)
      return flashError("Por favor autoriza el contacto vía WhatsApp o teléfono.");

    const data = {
      nombre: name,
      email,
      tratamiento,
      phone,
      fecha,
      consentimientoWhatsapp: consentimientoWhatsapp
        ? "Sí autorizó contacto por WhatsApp"
        : "No autorizó contacto",
    };

    const sendToSheet = () => {
      fetch("https://sheetdb.io/api/v1/tlwc1lp5do13o", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            fecha: new Date().toLocaleDateString("es-DO"),
            nombre: name,
            email,
            telefono: phone,
            tratamiento,
            fecha_cita_solicitada: fecha,
            consentimiento: consentimientoWhatsapp ? "Autorizado" : "No autorizado",
          }],
        }),
      });
    };

    emailjs
      .send(VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, data, VITE_EMAIL_PUBLIC_KEY)
      .then(() => { sendToSheet(); setModal(true); })
      .catch(() => flashError("Error al enviar. Intenta de nuevo."));
  };

  /* ── Data maps ────────────────────────── */
  const features = featuresData.map((item, i) => (
    <Features
      key={item.id}
      icon={item.icon}
      titulo={item.titulo}
      texto={item.texto}
      className={`reveal reveal-d${i + 1}`}
    />
  ));

  const doctores = doctorsData.map((doc, i) => (
    <Equipo
      key={doc.id}
      img={doc.img}
      name={doc.name}
      role={doc.role}
      className={`reveal reveal-d${i + 1}`}
    />
  ));

  const serviceCards = servicesData.map((item, i) => (
    <Services
      key={item.id}
      classN={item.classname}
      icono={item.icono}
      titulo={item.titulo}
      texto={item.texto}
      className={`reveal reveal-d${i + 1}`}
    />
  ));

  /* ── Render ───────────────────────────── */
  return (
    <div className="App">
      <Navbar />
      <WhatsAppButton />

      {/* ── HERO ── */}
      <section className="hero" id="Nosotros">
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__badge">Nin Dental Clinic · Santo Domingo</span>
          <h1 className="hero__heading">
            Tu Sonrisa,<br /><em>Nuestra Pasión</em>
          </h1>
          <p className="hero__sub">
            Odontología de excelencia en el corazón de Gascue.
            Un equipo comprometido con tu bienestar y con resultados que transforman vidas.
          </p>
          <div className="hero__ctas">
            <a href="#Cita" className="btn btn--primary">Agenda tu cita</a>
            <a href="#Servicios" className="btn btn--outline">Nuestros servicios</a>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>Descubre más</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-wrap" id="Features">
        <div className="section-header reveal">
          <span className="section-label">¿Por qué elegirnos?</span>
          <h2 className="section-title">Excelencia en cada detalle</h2>
        </div>
        <div className="features-grid">{features}</div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-wrap" id="Equipo">
        <div className="section-header reveal">
          <span className="section-label">Nuestro equipo</span>
          <h2 className="section-title">Profesionales a tu servicio</h2>
        </div>
        <div className="team-grid">{doctores}</div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-wrap" id="Servicios">
        <div className="section-header reveal">
          <span className="section-label">Lo que ofrecemos</span>
          <h2 className="section-title">Nuestros servicios</h2>
        </div>
        <div className="services-grid">{serviceCards}</div>
      </section>

      {/* ── CONTACT + FORM ── */}
      <section className="contact-wrap" id="Cita">
        <div className="contact-inner">
          {/* info */}
          <div className="contact-info reveal">
            <span className="section-label">Mantente en contacto</span>
            <h2 className="section-title">Visítanos</h2>

            <div className="contact-info-body">
              <div className="contact-detail">
                <div className="contact-detail__icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="contact-detail__label">Ubicación</p>
                  <p className="contact-detail__text">
                    <a href="#">Av. Pasteur No. 55, Suite 102, Gascue, Santo Domingo.</a><br />
                    <a href="#">Av. Simón Bolívar No. 105, Suite 102, Gascue, Santo Domingo.</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail__icon">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="contact-detail__label">Email</p>
                  <p className="contact-detail__text">
                    <a href="mailto:clinicadentaldr.nin@gmail.com">
                      clinicadentaldr.nin@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <Socials
                link="https://www.instagram.com/nindentalclinic/?hl=en"
                socialIcon={<FaInstagram />}
              />
              <Socials
                link="https://api.whatsapp.com/send?phone=18092832825"
                socialIcon={<FaWhatsapp />}
              />
            </div>
          </div>

          {/* form */}
          <div className="form-container reveal reveal-d2">
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">Agenda tu cita</h2>

              <div className="form-row">
                <Input
                  lable="Nombre"
                  type="text"
                  placeholder="Juan Pérez"
                  name="nombre"
                  expresionRegular={expresions.name}
                  state={name}
                  changeState={changeName}
                />
                <Input
                  lable="Correo electrónico"
                  name="email"
                  type="email"
                  placeholder="juan@email.com"
                  state={email}
                  changeState={changeEmail}
                />
              </div>

              <div className="form-row">
                <Input
                  lable="Teléfono"
                  name="phone"
                  type="tel"
                  placeholder="809-222-3333"
                  state={phone}
                  changeState={setPhone}
                />
                <div className="field-group">
                  <label className="field-label">Tratamiento de interés</label>
                  <select
                    className="field-select"
                    value={tratamiento}
                    onChange={(e) => setTratamiento(e.target.value)}
                  >
                    <option value="Carillas">Carillas</option>
                    <option value="Blanqueamiento">Blanqueamiento</option>
                    <option value="Implantes">Implantes</option>
                    <option value="Diseño de sonrisa">Diseño de sonrisa</option>
                    <option value="Coronas o puentes">Coronas / Puentes</option>
                    <option value="Endodoncia">Endodoncía</option>
                    <option value="Ortodoncia">Ortodoncía</option>
                    <option value="Limpieza">Limpieza</option>
                    <option value="Urgencia">Dolor / Urgencia</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>
              </div>

              <Input
                lable="Fecha preferida"
                type="date"
                state={fecha}
                changeState={setFecha}
              />

              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={consentimientoWhatsapp}
                  onChange={handleConsentimientoWhatsapp}
                />
                Autorizo que me contacten vía WhatsApp o teléfono.
              </label>

              <button type="submit" className="submit-btn">
                Solicitar cita
              </button>

              {error && <div className="error-banner">{error}</div>}
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── SUCCESS MODAL ── */}
      {modal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal__check">✓</div>
            <h3 className="modal__title">¡Solicitud enviada!</h3>
            <p className="modal__text">
              Hola <strong>{name}</strong>, hemos recibido tu solicitud de cita.
              Nuestro equipo te responderá en breve para confirmar la fecha de tu consulta.
              <br /><br />
              <strong>¡Gracias por confiar en nosotros!</strong>
            </p>
            <button className="modal__btn" onClick={() => setModal(false)}>
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
