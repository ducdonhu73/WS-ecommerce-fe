import * as i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import vi from "./vi.json"
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    resources: {
      en
      ,vi
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
