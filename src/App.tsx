import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { DesignPreviewPage } from './pages/DesignPreviewPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { ProjectPage } from './pages/ProjectPage'
import { ReviewPage } from './pages/ReviewPage'
import { ReviewProjectPage } from './pages/ReviewProjectPage'
import { ResumePage } from './pages/ResumePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:locale" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="projects/:slug" element={<ProjectPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="review/:variant" element={<DesignPreviewPage />} />
        <Route path="review/projects/:slug" element={<ReviewProjectPage />} />
        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/en/not-found" replace />} />
    </Routes>
  )
}
