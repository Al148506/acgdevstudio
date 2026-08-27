import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es.json";

export const i18nReady = i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
    },
    lng: "es",
    fallbackLng: "es",
    supportedLngs: ["es"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
