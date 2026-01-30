import "./App.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomHeader from "./Header/Header";
import CustomFooter from "./Footer/Footer";
import Info from "./App-menu/Info";
import Contacts from "./App-menu/Contacts";
import "./i18n";
function App() {
  const [activeTab, setActiveTab] = useState<"contacts" | "info" | null>(null);
  const { t } = useTranslation();

  return (
    <div className="page">
      <header className="header"><CustomHeader /></header>
      <section className="core">
        <h1 className="title">
          {t("app.welcome")}
          <span className="sparkle s1">✧</span>
          <span className="sparkle s2">✦</span>
          <span className="sparkle s3">✧</span>
        </h1>
        <p className="subtitle">{t("app.subtitle")}</p>
        <div className="gradient-line"></div>
        <div className="core-content">
          <div className="button-grid">
            <button>{t("app.home")}</button>
            <button>{t("app.services")}</button>
            <button className={activeTab === "contacts" ? "active" : ""} onClick={() => setActiveTab("contacts")}>{t("app.contacts")}</button>
            <button className={activeTab === "info" ? "active" : ""} onClick={() => setActiveTab("info")}>{t("app.info")}</button>
          </div>
        </div>
      </section>
      <main className="body">
        <div className={`tab-menu ${activeTab ? "show" : ""}`}>
          {activeTab === "contacts" && (<Contacts />)}
          {activeTab === "info" && (<Info />)}
        </div>
      </main>
      <footer className="footer"><CustomFooter /></footer>
    </div>
  /*
  <div className="close">
    <span className="line"></span>
    <button className="close-x" onClick={() => setActiveTab(null)} aria-label="Chiudi pannello">X</button>
    <span className="line"></span>
  </div>
  */  
  );
}

export default App;
