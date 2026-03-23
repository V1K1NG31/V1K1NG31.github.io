import { useI18n } from '../i18n/useI18n'

export function LanguageSwitcher() {
  const { locale, setLocale, bundle } = useI18n()

  return (
    <div
      className="lang-switcher"
      role="group"
      aria-label={bundle.locale === 'en' ? 'Language' : 'Язык'}
    >
      {(['en', 'ru'] as const).map((code) => (
        <button
          key={code}
          type="button"
          className={
            code === locale
              ? 'lang-switcher__btn lang-switcher__btn--active'
              : 'lang-switcher__btn'
          }
          onClick={() => setLocale(code)}
          aria-pressed={code === locale}
          aria-label={
            code === 'en' ? bundle.ui.langSwitchToEn : bundle.ui.langSwitchToRu
          }
        >
          {code === 'en' ? bundle.ui.langEn : bundle.ui.langRu}
        </button>
      ))}
    </div>
  )
}
