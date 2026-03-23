import { useI18n } from '../i18n/useI18n'
import { Section } from './Section'

export function Experience() {
  const { bundle } = useI18n()
  const { ui, profile } = bundle

  function formatPeriod(start: string, end: string | 'present') {
    const e = end === 'present' ? ui.periodPresent : end
    return `${start} — ${e}`
  }

  return (
    <Section id="experience" title={ui.sections.experience}>
      <ul className="timeline">
        {profile.experience.map((job) => (
          <li
            key={`${job.company}-${job.role}-${job.start}-${job.end}`}
            className="timeline__item"
          >
            <div className="timeline__header">
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__company">{job.company}</p>
              {job.location ? (
                <p className="timeline__meta">{job.location}</p>
              ) : null}
              <p className="timeline__meta">
                {formatPeriod(job.start, job.end)}
              </p>
            </div>
            <ul className="bullet-list">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
