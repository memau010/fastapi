import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    it: {
      translation: {
        common:{ 
            save: "Salva"
        },
        app: {
          welcome: "Benvenuto",
          homepage: "HomePage",
          services: "Servizi",
          subtitle: "A cosa vorresti accedere? scegli una categoria ..",
          contacts: "Contatti",
          info: "Info"
        }
      }
    },
    en: {
      translation: {
        common: {
          save: "Save"
        },
        app: {
          welcome: "Welcome",
          home: "HomePage",
          services: "Services",
          subtitle: "What are you interested in? Choose a category ..",
          contacts: "Contacts",
          info: "Info"
        }
      }
    },
    es: {
      translation: {
        common: {
          save: "Guardar"
        },
        app: {
          welcome: "Bienvenido",
          homepage: "Página principal",
          services: "Servicios",
          subtitle: "¿A qué te gustaría acceder? Elige una categoría..",
          contacts: "Contactos",
          info: "Información"
        }
      }
    },
    de: {
        translation: {
            common: {
                save: "Speichern"
            },
            app: {
                welcome: "Willkommen",
                homepage: "Startseite",
                services: "Dienstleistungen",
                subtitle: "Worauf möchtest du zugreifen? Wähle eine Kategorie..",
                contacts: "Kontakt",
                info: "Info"
            }
        }
    },
    fr:{
        translation: {
            common: {
                save: "Enregistrer"
            },
            app: {
                welcome: "Bienvenue",
                homepage: "Page d’accueil",
                services: "Services",
                subtitle: "À quoi souhaitez-vous accéder ? Choisissez une catégorie..",
                contacts: "Contacts",
                info: "Infos"
            }
        }
    }
  },
  lng: "it",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
