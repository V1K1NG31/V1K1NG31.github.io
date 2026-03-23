import { resumeData, siteMeta } from '../data/resumeData'
import { ThemeToggle } from './ThemeToggle'

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__top">
        <a href="#main" className="skip-link">
          К основному содержимому
        </a>
        <ThemeToggle />
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">Резюме · {resumeData.location}</p>
        <h1 className="hero__name">{resumeData.name}</h1>
        <p className="hero__latin" lang="en">
          {resumeData.nameLatin}
        </p>
        <p className="hero__headline">{resumeData.headline}</p>
        <p className="hero__tagline">{resumeData.tagline}</p>
        <div className="hero__actions">
          {resumeData.pdfHref ? (
            <a className="button button--primary" href={resumeData.pdfHref}>
              Скачать PDF
            </a>
          ) : null}
          <a
            className="button button--ghost"
            href={siteMeta.siteUrl + '/legacy/'}
          >
            Архив старого сайта
          </a>
        </div>
      </div>
    </header>
  )
}
