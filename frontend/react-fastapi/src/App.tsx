import "./App.css";
/* import { useState } from "react"; */
import { AiOutlineLogin } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
/* import { db } from "./firebase"; */
import { useTranslation } from "react-i18next";
import CustomHeader from "./components/Header/Header";
import CustomFooter from "./components/Footer/Footer";
import "./i18n";
import Tabs from "./components/App-tabs/Tabs";

import '@coreui/coreui/dist/css/coreui.min.css'

console.log('ENV COMPLETO:', import.meta.env);
console.log(import.meta.env.VITE_FIREBASE_API_KEY);

function App() {
  const { t } = useTranslation();

  return (
    
    <div className="page">
      <div className="custom-header"><CustomHeader /></div>
      <section className="core">
        <h2 className="title">{t("app.welcome")}
          <span className="sparkle s1">✧</span>
          <span className="sparkle s2">✦</span>
          <span className="sparkle s3">✧</span>
        </h2>
        <div className="row">
          <div className="col-11"></div>
          <div className="col-1"><AiOutlineLogin /><CiCirclePlus /></div>
        </div>
        <div className="gradient-line"></div>
{/*
        <div className="core-content">
          <div className="button-grid">
            <button>{t("app.home")}</button>
            <button>{t("app.services")}</button>
            <button className={activeTab === "contacts" ? "active" : ""} onClick={() => setActiveTab("contacts")}>{t("app.contacts")}</button>
            <button className={activeTab === "info" ? "active" : ""} onClick={() => setActiveTab("info")}>{t("app.info")}</button>
          </div>
        </div>
*/}
      </section>
      <main className="body">
        <div className="flex-grow-1 d-flex"><Tabs /></div> 
{/*        
        <div className={`tab-menu ${activeTab ? "show" : ""}`}>
          {activeTab === "contacts" && (<Contacts />)}
          {activeTab === "info" && (<Info />)}
        </div>
*/}
      </main>
      <div className="custom-footer"><CustomFooter /></div>
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
