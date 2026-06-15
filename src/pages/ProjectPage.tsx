import { Navigate, useParams } from 'react-router-dom'
import { ProjectCaseStudy } from '../components/ProjectCaseStudy'
import { findApprovedProject } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../utils/localize'

export function ProjectPage() {
  const { slug } = useParams()
  const { locale } = useLocale()
  const project = slug ? findApprovedProject(slug) : undefined

  useDocumentTitle(
    project ? `${localize(project.title, locale)} | Jaden` : 'Project | Jaden',
  )

  if (!project) {
    return <Navigate to={`/${locale}/not-found`} replace />
  }

  return (
    <ProjectCaseStudy
      project={project}
      locale={locale}
      backTo={`/${locale}/portfolio`}
    />
  )
}
