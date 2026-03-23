import { siteMeta } from '../data/resumeData'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        © {year} · Собрано на React и Vite ·{' '}
        <a href={siteMeta.siteUrl}>GitHub Pages</a>
      </p>
    </footer>
  )
}
