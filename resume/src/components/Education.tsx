import { resumeData } from '../data/resumeData'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" title="Образование и языки">
      <div className="two-col">
        <div>
          <h3 className="subsection-title">Образование</h3>
          <ul className="plain-list">
            {resumeData.education.map((e) => (
              <li key={e.institution + e.period}>
                <strong>{e.institution}</strong>
                <div className="muted">{e.degree}</div>
                <div className="muted">{e.period}</div>
                {e.details ? <p className="prose small">{e.details}</p> : null}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="subsection-title">Языки</h3>
          <ul className="plain-list">
            {resumeData.languages.map((l) => (
              <li key={l.name}>
                <strong>{l.name}</strong>
                <span className="muted"> — {l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
