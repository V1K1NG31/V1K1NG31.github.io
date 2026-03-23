import { useI18n } from '../i18n/useI18n'
import { Section } from './Section'

export function About() {
  const { bundle } = useI18n()
  const { ui, profile } = bundle

  return (
    <Section id="about" title={ui.sections.about}>
      <div className="prose">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
