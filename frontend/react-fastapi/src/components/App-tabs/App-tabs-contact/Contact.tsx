import { FaFacebook, FaDropbox, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useContext } from "react";
import { ConfigContext } from "../../../config/ConfigProvider";
import "./Contact.css";

  type Contact = {
    phone: string;
    email: string;
  };
  type Social = {
    facebook: string;
    instagram: string;
    linkedin: string;
  };

  function Contacts(){

  const config = useContext(ConfigContext);
  if (!config) return null;

  type ContactItem = {
    key: string; icon: React.ReactNode;
    content: (_contact: Contact, _social: Social, key: string) => React.ReactNode;
  };

  const contactItems: ContactItem[] = [
    {
      key: "phone", icon: <FaPhone className="icon" />,
      content: (contact, social, key) => key,
    },
    {
      key: "email", icon: <FaEnvelope className="icon" />,
      content: (contact, social, key) => key,
    },
    {
      key: "dropbox", icon: <FaDropbox className="icon" />,
      content: (_contact, _social) => "Dropbox",
    },
    {
      key: "instagram", icon: <FaInstagram className="icon" />,
      content: (contact, social,) => (
        <a href={social.instagram} target="_blank" rel="noreferrer">Instagram</a>
      ),
    },
    {
      key: "facebook",
      icon: <FaFacebook className="icon" />,
      content: (contact, social,) => (
        <a href={social.facebook} target="_blank" rel="noreferrer">Facebook</a>
      ),
    },
    {
      key: "linkedin",
      icon: <FaLinkedin className="icon" />,
      content: (_contact, social) => (
        <a href={social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      ),
    },
  ];

  return (
    <div className="row h-100">
        <div className="col-3 item d-flex flex-column h-100 overflow-auto">
            {contactItems.map((item) => (
            <div
                key={item.key}
                className="item mb-2 d-flex align-items-center gap-2"
            >
                {item.icon}
            </div>
            ))}
        </div>

        <div className="col-9 item">

        </div>
    </div>
  );
}

export default Contacts;
