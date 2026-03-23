import { SITE_URL } from '../i18n/constants'
import { useI18n } from '../i18n/useI18n'

export function SiteFooter() {
  const { bundle } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>
        © {year} · {bundle.ui.footerBuilt} ·{' '}
        <a href={SITE_URL}>{bundle.ui.footerPages}</a>
      </p>
    </footer>
  )
}
