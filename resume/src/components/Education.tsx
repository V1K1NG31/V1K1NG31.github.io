import { useI18n } from '../i18n/useI18n'
import { Section } from './Section'

export function Education() {
  const { bundle } = useI18n()
  const { ui, profile } = bundle

  return (
    <Section id="education" title={ui.sections.education}>
      <div className="two-col">
        <div>
          <h3 className="subsection-title">{ui.educationSub}</h3>
          <ul className="plain-list">
            {profile.education.map((e) => (
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
          <h3 className="subsection-title">{ui.languagesSub}</h3>
          <ul className="plain-list">
            {profile.languages.map((l) => (
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
