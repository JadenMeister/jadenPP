export type Locale = 'en' | 'ko'
export type LocalizedContent = Record<Locale, string>
export type ProjectStatus = 'candidate' | 'approved'

export interface ProjectSection {
  heading: LocalizedContent
  body: LocalizedContent
}

export interface Project {
  slug: string
  status: ProjectStatus
  repositoryUrl?: string
  liveUrl?: string
  image?: {
    src: string
    alt: LocalizedContent
  }
  title: LocalizedContent
  eyebrow: LocalizedContent
  summary: LocalizedContent
  role: LocalizedContent
  technologies: string[]
  sections: ProjectSection[]
  disclosure: LocalizedContent
}

export interface Experience {
  period: LocalizedContent
  title: LocalizedContent
  organization: LocalizedContent
  description: LocalizedContent
}

export interface Education {
  school: LocalizedContent
  program: LocalizedContent
  detail?: LocalizedContent
}

export interface Certification {
  name: LocalizedContent
  issuer: LocalizedContent
  expires: LocalizedContent
}

export interface SkillGroup {
  label: LocalizedContent
  skills: string[]
}
