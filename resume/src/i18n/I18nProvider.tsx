import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { bundles } from './bundles'
import { I18nContext } from './context'
import type { Locale } from './types'

const STORAGE_KEY = 'resume-locale'

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'ru') {
    return stored
  }
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('ru')) {
    return 'ru'
  }
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next)
    setLocaleState(next)
  }, [])

  const bundle = bundles[locale]

  useEffect(() => {
    document.documentElement.lang = bundle.meta.htmlLang
    document.title = bundle.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) {
      desc.setAttribute('content', bundle.meta.description)
    }
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', bundle.meta.title)
    }
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute('content', bundle.meta.description)
    }
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) {
      ogLocale.setAttribute(
        'content',
        bundle.locale === 'ru' ? 'ru_RU' : 'en_US',
      )
    }
  }, [bundle])

  const value = useMemo(
    () => ({ locale, setLocale, bundle }),
    [locale, setLocale, bundle],
  )

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  )
}
