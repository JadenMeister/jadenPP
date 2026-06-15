import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  FolderKanban,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'

export function HomePage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  useDocumentTitle('Jaden | Full-stack Developer')

  return (
    <div className="theme-editorial" data-selected-design="editorial">
      <section className="hero home-hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1>{t('hero.title')}</h1>
          <p className="hero-intro">{t('hero.intro')}</p>
          <div className="contact-links">
            <a
              href="https://github.com/JadenMeister"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jaden-choi-16a541227/"
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <aside className="hero-panel">
          <span className="signal-dot" />
          <small>{t('home.currentFocus')}</small>
          <p>FastAPI · Machine Learning · Secure Web</p>
          <div className="hero-stack">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Python</span>
            <span>YOLO</span>
          </div>
        </aside>
      </section>

      <section className="page-gateway section-pad">
        <p className="eyebrow">{t('home.routeEyebrow')}</p>
        <div className="gateway-grid">
          <Link className="gateway-card" to={`/${locale}/resume`}>
            <span className="gateway-icon">
              <FileText size={28} />
            </span>
            <div>
              <small>01</small>
              <h2>{t('home.resumeTitle')}</h2>
              <p>{t('home.resumeBody')}</p>
              <strong>
                {t('home.open')} <ArrowUpRight size={17} />
              </strong>
            </div>
          </Link>
          <Link className="gateway-card" to={`/${locale}/portfolio`}>
            <span className="gateway-icon">
              <FolderKanban size={28} />
            </span>
            <div>
              <small>02</small>
              <h2>{t('home.portfolioTitle')}</h2>
              <p>{t('home.portfolioBody')}</p>
              <strong>
                {t('home.open')} <ArrowUpRight size={17} />
              </strong>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
