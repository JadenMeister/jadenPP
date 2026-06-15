import { describe, expect, it } from 'vitest'
import {
  approvedProjects,
  findApprovedProject,
  projects,
} from '../data/projects'

describe('project approval gate', () => {
  it('publishes only explicitly approved projects', () => {
    expect(approvedProjects).toHaveLength(3)
    expect(
      approvedProjects.every((project) => project.status === 'approved'),
    ).toBe(true)
  })

  it('resolves the reviewed education platform as a public project', () => {
    expect(findApprovedProject('education-ai-workbook-platform')).toBeDefined()
  })

  it('keeps any future candidate projects out of the public collection', () => {
    expect(
      projects
        .filter((project) => project.status === 'candidate')
        .every(
          (candidate) =>
            !approvedProjects.some(
              (approved) => approved.slug === candidate.slug,
            ),
        ),
    ).toBe(true)
  })

  it('publishes the approved legal platform', () => {
    expect(
      projects.find(
        (project) => project.slug === 'legal-work-management-platform',
      )?.status,
    ).toBe('approved')
  })

  it('publishes the personal gallery with its public repository link', () => {
    expect(findApprovedProject('immersive-photo-gallery')?.repositoryUrl).toBe(
      'https://github.com/JadenMeister/gallery',
    )
    expect(findApprovedProject('immersive-photo-gallery')?.liveUrl).toBe(
      'https://gallery-wine-psi.vercel.app/',
    )
    expect(findApprovedProject('immersive-photo-gallery')?.image?.src).toBe(
      `${import.meta.env.BASE_URL}projects/gallery/overview.jpg`,
    )
  })
})
