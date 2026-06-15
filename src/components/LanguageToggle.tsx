import type { Locale } from '../types/content'

interface LanguageToggleProps {
  locale: Locale
  onChange: (locale: Locale) => void
}

export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  return (
    <div className="language-toggle" aria-label="Language selector">
      {(['en', 'ko'] as const).map((item) => (
        <button
          key={item}
          type="button"
          className={locale === item ? 'is-active' : ''}
          onClick={() => onChange(item)}
          aria-pressed={locale === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
