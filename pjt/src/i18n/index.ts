import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ko from "./locales/ko";
import en from "./locales/en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ko",
    debug: true,
    resources: {
      ko: ko,
      en: en,
    },
    ns: ["label"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
