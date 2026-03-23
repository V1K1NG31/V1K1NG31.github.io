import { createContext } from 'react'

import type { Locale, ResumeBundle } from './types'

export type I18nContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  bundle: ResumeBundle
}

export const I18nContext = createContext<I18nContextValue | null>(null)
