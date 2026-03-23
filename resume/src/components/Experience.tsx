import { resumeData } from '../data/resumeData'
import { Section } from './Section'

function formatPeriod(start: string, end: string | 'present') {
  const e = end === 'present' ? 'настоящее время' : end
  return `${start} — ${e}`
}

export function Experience() {
  return (
    <Section id="experience" title="Опыт">
      <ul className="timeline">
        {resumeData.experience.map((job) => (
          <li key={job.company + job.role} className="timeline__item">
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
