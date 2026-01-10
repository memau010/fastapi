import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Footer from "./Footer/Footer";
import Info from "./App-menu/Info";
import Contacts from "./App-menu/Contacts";

function App() {
  const [activeTab, setActiveTab] = useState<"contacts" | "info" | null>(null);
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <div className="main-content">

        <h1 className="title">
          {t("app.welcome")}
          <span className="sparkle s1">✧</span>
          <span className="sparkle s2">✦</span>
          <span className="sparkle s3">✧</span>
        </h1>

        <p className="subtitle">{t("app.subtitle")}</p>
        <div className="gradient-line"></div>

        <div className="button-grid">
          <button>{t("app.home")}</button>
          <button>{t("app.services")}</button>
          <button className={activeTab === "contacts" ? "active" : ""} onClick={() => setActiveTab("contacts")}>{t("app.contacts")}</button>
          <button className={activeTab === "info" ? "active" : ""} onClick={() => setActiveTab("info")}>{t("app.info")}</button>
        </div>
      </div>
      <Footer />

      {/* TAB MENU – UNICO */}
      <div className={`tab-menu ${activeTab ? "show" : ""}`}>
        {activeTab === "contacts" && (<Contacts />)}
        {activeTab === "info" && (<Info />)}

        <div className="close-wrapper">
          <span className="line"></span>
          <button className="close-x" onClick={() => setActiveTab(null)} aria-label="Chiudi pannello">X</button>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
