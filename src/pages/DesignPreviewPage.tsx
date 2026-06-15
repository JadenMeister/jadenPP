import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PortfolioSections } from '../components/PortfolioSections'
import { useLocale } from '../hooks/useLocale'

const variants = ['editorial', 'terminal', 'kinetic', 'minimal', 'blueprint']

export function DesignPreviewPage() {
  const { variant } = useParams()
  const { locale } = useLocale()

  if (!variant || !variants.includes(variant)) {
    return <Navigate to={`/${locale}/review`} replace />
  }

  return (
    <div className={`design-preview theme-${variant}`}>
      <div className="preview-toolbar">
        <Link to={`/${locale}/review`}>
          <ArrowLeft size={15} /> Back to review room
        </Link>
        <span>UI candidate · {variant}</span>
      </div>
      <PortfolioSections reviewMode />
    </div>
  )
}
