import { describe, expect, it } from 'vitest'
import { localize } from '../utils/localize'

describe('localize', () => {
  it('returns the requested locale', () => {
    expect(localize({ en: 'Hello', ko: '안녕하세요' }, 'ko')).toBe('안녕하세요')
  })

  it('falls back to English for an empty localized value', () => {
    expect(localize({ en: 'Fallback', ko: '' }, 'ko')).toBe('Fallback')
  })
})
