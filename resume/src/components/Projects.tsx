import { resumeData } from '../data/resumeData'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" title="Проекты">
      <ul className="card-list">
        {resumeData.projects.map((p) => (
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
