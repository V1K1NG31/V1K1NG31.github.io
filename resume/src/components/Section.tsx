import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="section__title">
        {title}
      </h2>
      <div className="section__body">{children}</div>
    </section>
  )
}
