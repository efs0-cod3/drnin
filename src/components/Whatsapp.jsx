import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  const phone = "18091234567";
  const message = "Hola, quiero información sobre sus servicios";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      className="whatsapp-container"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="tooltip">Escríbenos</span>
      <div className="whatsapp-button">
        <FaWhatsapp />
      </div>
    </a>
  );
}