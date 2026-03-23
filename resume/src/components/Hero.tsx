import { SITE_URL } from '../i18n/constants'
import { useI18n } from '../i18n/useI18n'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

export function Hero() {
  const { bundle } = useI18n()
  const { ui, profile } = bundle

  return (
    <header className="hero">
      <div className="hero__top">
        <a href="#main" className="skip-link">
          {ui.skipToContent}
        </a>
        <div className="hero__controls">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">
          {ui.resumeEyebrow} · {profile.location}
        </p>
        <h1 className="hero__name">{profile.name}</h1>
        {profile.nameSubtitle ? (
          <p className="hero__latin" lang="en">
            {profile.nameSubtitle}
          </p>
        ) : null}
        <p className="hero__headline">{profile.headline}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__open-to">
          <span className="hero__open-to-label">{ui.openToLabel}: </span>
          {profile.openTo}
        </p>
        <div className="hero__actions">
          {profile.pdfHref ? (
            <a className="button button--primary" href={profile.pdfHref}>
              {ui.downloadPdf}
            </a>
          ) : null}
          <a className="button button--ghost" href={`${SITE_URL}/legacy/`}>
            {ui.legacyArchive}
          </a>
        </div>
      </div>
    </header>
  )
}
