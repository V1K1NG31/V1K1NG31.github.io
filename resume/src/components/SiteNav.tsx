import { useI18n } from '../i18n/useI18n'

export function SiteNav() {
  const { bundle } = useI18n()
  const { ui } = bundle
  const links = [
    { href: '#about', label: ui.nav.about },
    { href: '#experience', label: ui.nav.experience },
    { href: '#skills', label: ui.nav.skills },
    { href: '#projects', label: ui.nav.projects },
    { href: '#education', label: ui.nav.education },
    { href: '#contacts', label: ui.nav.contacts },
  ]

  return (
    <nav className="site-nav" aria-label={ui.navAria}>
      <ul className="site-nav__list">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="site-nav__link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
