import { resumeData } from '../data/resumeData'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="О себе">
      <div className="prose">
        {resumeData.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
