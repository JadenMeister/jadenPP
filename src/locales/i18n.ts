import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './en'
import { ko } from './ko'

void i18n.use(initReactI18next).init({
  resources: { en, ko },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'ko'],
  interpolation: { escapeValue: false },
})

export default i18n
