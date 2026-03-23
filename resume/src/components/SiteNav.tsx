const links = [
  { href: '#about', label: 'О себе' },
  { href: '#experience', label: 'Опыт' },
  { href: '#skills', label: 'Навыки' },
  { href: '#projects', label: 'Проекты' },
  { href: '#education', label: 'Образование' },
  { href: '#contacts', label: 'Контакты' },
]

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Разделы резюме">
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
