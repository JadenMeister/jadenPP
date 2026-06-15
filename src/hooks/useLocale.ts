import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import type { Locale } from '../types/content'

const supportedLocales: Locale[] = ['en', 'ko']

/**
 * Keeps the URL locale and i18next language synchronized, and returns a
 * navigator that preserves the current route when the language changes.
 */
export const useLocale = () => {
  const { locale: localeParam } = useParams()
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const locale: Locale = supportedLocales.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : 'en'

  useEffect(() => {
    if (i18n.resolvedLanguage !== locale) {
      void i18n.changeLanguage(locale)
    }
    document.documentElement.lang = locale
  }, [i18n, locale])

  const switchLocale = (nextLocale: Locale) => {
    const segments = location.pathname.split('/')
    segments[1] = nextLocale
    navigate(`${segments.join('/')}${location.search}${location.hash}`)
  }

  return { locale, switchLocale }
}
