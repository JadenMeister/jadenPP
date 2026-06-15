import type { Locale, LocalizedContent } from '../types/content'

export const localize = (content: LocalizedContent, locale: Locale) =>
  content[locale] || content.en
