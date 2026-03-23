import { resumeData } from '../data/resumeData'
import { Section } from './Section'

function contactIcon(kind: string) {
  switch (kind) {
    case 'github':
      return '⌘'
    case 'email':
      return '✉'
    case 'telegram':
      return '✈'
    case 'linkedin':
      return 'in'
    default:
      return '↗'
  }
}

export function Contacts() {
  return (
    <Section id="contacts" title="Контакты">
      <p className="prose">
        Укажите реальные контакты в файле <code>src/data/resumeData.ts</code>.
      </p>
      <ul className="contact-list">
        {resumeData.contacts.map((c) => (
          <li key={c.href}>
            <a className="contact-link" href={c.href}>
              <span className="contact-link__icon" aria-hidden>
                {contactIcon(c.kind)}
              </span>
              <span>{c.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
