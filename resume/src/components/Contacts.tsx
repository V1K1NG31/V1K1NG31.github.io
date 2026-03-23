import { useI18n } from '../i18n/useI18n'
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
  const { bundle } = useI18n()
  const { ui, profile } = bundle

  return (
    <Section id="contacts" title={ui.sections.contacts}>
      {ui.contactsIntro ? (
        <p className="prose">{ui.contactsIntro}</p>
      ) : null}
      <ul className="contact-list">
        {profile.contacts.map((c) => (
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
