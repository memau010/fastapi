import {FaFacebook, FaDropbox, FaInstagram, FaLinkedin, FaEnvelope, FaPhone} from "react-icons/fa";
import { useContext } from "react";
import { ConfigContext } from "../config/ConfigProvider";
import "./Contacts.css";

function Contacts() {
  const config = useContext(ConfigContext);
  if (!config) return null;
    const { contact, social } = config;

  return (
    <>
      <div className="row">
        <div className="col-2 item"><FaPhone className="icon"/><a>Phone: {contact.phone}</a></div>
        <div className="col-2 item"><FaEnvelope className="icon" /><a>{contact.email}</a></div>
        <div className="col-2 item"><FaDropbox className="icon" /><a>Dropbox</a></div>
        <div className="col-2 item"><FaInstagram className="icon" /><a href={social.instagram} target="_blank" rel="noreferrer">Instagram</a></div>
        <div className="col-2 item"><FaFacebook className="icon" /><a href={social.facebook} target="_blank" rel="noreferrer">Facebook</a></div>
        <div className="col-2 item"><FaLinkedin className="icon" /><a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
    </>
  );
}

export default Contacts;
