import { useI18n } from '../i18n/useI18n'
import { Section } from './Section'

export function Projects() {
  const { bundle } = useI18n()
  const { ui, profile } = bundle

  return (
    <Section id="projects" title={ui.sections.projects}>
      <ul className="card-list">
        {profile.projects.map((p) => (
          <li key={p.title} className="card">
            <div className="card__head">
              <h3 className="card__title">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
            </div>
            <p className="card__desc">{p.description}</p>
            <ul className="chip-list chip-list--compact">
              {p.stack.map((s) => (
                <li key={s} className="chip chip--muted">
                  {s}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
