import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


import "./Footer.css";

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="app-footer">
      <div className={`language-selector lang-${i18n.language}`}>
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="it">🇮🇹 Italiano</option>
          <option value="en">🇬🇧 English</option>
          <option value="es">🇪🇸 Español</option>
          <option value="de">🇩🇪 Deutsch</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </div>

      <div className="datetime">
        {dateTime.toLocaleDateString()} — {dateTime.toLocaleTimeString()}
      </div>
    </footer>
  );
}

export default Footer;
