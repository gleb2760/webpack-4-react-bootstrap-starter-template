import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en.json';
import translationChi from './locales/chi.json';
import translationKo from './locales/ko.json';
import translationRu from './locales/ru.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
 chi: {
    translation: translationChi
  },
  ko: {
    translation: translationKo
  },
  ru: {
    translation: translationRu
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;