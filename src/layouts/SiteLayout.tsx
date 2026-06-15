import { BriefcaseBusiness, Code2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLocale } from '../hooks/useLocale'

export function SiteLayout() {
  const { t } = useTranslation()
  const { locale, switchLocale } = useLocale()

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="wordmark" to={`/${locale}`} aria-label="Jaden home">
          JADEN<span>.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <NavLink to={`/${locale}`}>{t('nav.home')}</NavLink>
          <NavLink to={`/${locale}/resume`}>{t('nav.resume')}</NavLink>
          <NavLink to={`/${locale}/portfolio`}>{t('nav.portfolio')}</NavLink>
        </nav>
        <LanguageToggle locale={locale} onChange={switchLocale} />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Jaden. Built with care and restraint.
        </p>
        <div>
          <a
            href="https://github.com/JadenMeister"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jaden-choi-16a541227/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={18} />
          </a>
        </div>
      </footer>
    </div>
  )
}
