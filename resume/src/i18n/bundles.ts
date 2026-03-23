import type { Locale, ResumeBundle } from './types'
import { en } from './locales/en'
import { ru } from './locales/ru'

export const bundles: Record<Locale, ResumeBundle> = {
  en,
  ru,
}
