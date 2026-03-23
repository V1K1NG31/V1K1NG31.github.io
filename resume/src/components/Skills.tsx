import { useI18n } from '../i18n/useI18n'
import { Section } from './Section'

export function Skills() {
  const { bundle } = useI18n()
  const { ui, profile } = bundle

  return (
    <Section id="skills" title={ui.sections.skills}>
      <div className="skill-grid">
        {profile.skills.map((group) => (
          <div key={group.title} className="skill-group">
            <h3 className="skill-group__title">{group.title}</h3>
            <ul className="chip-list">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
