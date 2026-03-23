import { resumeData } from '../data/resumeData'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="Навыки">
      <div className="skill-grid">
        {resumeData.skills.map((group) => (
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
