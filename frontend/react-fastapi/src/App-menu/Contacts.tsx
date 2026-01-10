
import {FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone} from "react-icons/fa";

function Contacts() {
  return (
    <>
      <div className="contact-row">
        <FaEnvelope className="icon" />
        <span className="label">Email</span>
        <a href="mailto:info@example.com">info@example.com</a>
      </div>
      <div className="contact-row">
        <FaPhone className="icon" />
        <span className="label">Telefono</span>
        <a href="tel:+39123456789">+39 123 456 789</a>
      </div>
      <div className="contact-row">
        <FaFacebook className="icon facebook" />
        <span className="label">Facebook</span>
        <a href="#" target="_blank" rel="noreferrer">facebook.com/tuapagina </a>
      </div>
      <div className="contact-row">
        <FaLinkedin className="icon linkedin" />
        <span className="label">LinkedIn</span>
        <a href="#" target="_blank" rel="noreferrer">linkedin.com/in/tuoprofilo</a>
      </div>
      <div className="contact-row">
        <FaInstagram className="icon instagram" />
        <span className="label">Instagram</span>
        <a href="#" target="_blank" rel="noreferrer">@tuoprofilo</a>
      </div>
    </>
  );
}

export default Contacts;