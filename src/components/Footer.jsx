import React from "react";
import { FaInstagram, FaWhatsapp,FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import QuickLinks from "./QuickLinks";
import Socials from "./Socials";
export default function Footer() {
    return (
        <footer id="contacto">
            <h2>Mantente conectado con nosotros</h2>
            <div className="socials--container">
            <Socials
                link="https://www.instagram.com/clinicadentaldrfrancisconin/?hl=en"
                socialIcon={<FaInstagram/>}    
            />
            <Socials
                link="https://api.whatsapp.com/send?phone=18092832825"
                socialIcon={<FaWhatsapp/>}    
            />
            </div>

            <section className="aNl">
              <div>
              <div className="address">
                    <FaMapMarkerAlt className="address--icon" />
                    <p>Av. Pasteur No. 55, Suite 102, Gascue, Santo Domingo.</p>
                </div>
                
                <div className="address">
                    <FaEnvelope className="address--icon"/>
                    <p>juanp@gmail.com</p>
                </div>
              </div>
            <QuickLinks/>
            </section>
            
        </footer>
    )
}