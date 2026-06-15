import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useLocale } from '../hooks/useLocale'

export function NotFoundPage() {
  const { t } = useTranslation()
  const { locale } = useLocale()

  return (
    <section className="not-found section-pad">
      <p className="eyebrow">404</p>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.body')}</p>
      <Link className="button primary" to={`/${locale}`}>
        {t('notFound.home')}
      </Link>
    </section>
  )
}
