/**
 * Единый источник текста резюме. Редактируйте этот файл — разметка подхватит изменения.
 */

export type ContactKind = 'github' | 'telegram' | 'email' | 'linkedin' | 'website'

export type ContactLink = {
  kind: ContactKind
  label: string
  href: string
}

export type ExperienceItem = {
  company: string
  role: string
  location?: string
  start: string
  end: string | 'present'
  bullets: string[]
}

export type ProjectItem = {
  title: string
  description: string
  stack: string[]
  href?: string
}

export type EducationItem = {
  institution: string
  degree: string
  period: string
  details?: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type LanguageItem = {
  name: string
  level: string
}

export const resumeData = {
  name: 'Юрченко Сергей',
  nameLatin: 'Sergey Yurchenko',
  headline: 'Аналитик и разработчик (Python, данные, веб)',
  /** Короткий питч для hero и meta description */
  tagline:
    'Фокус на данные, автоматизацию и понятные продукты. ' +
    'Опыт в аналитике и администрировании в EdTech; развиваюсь ' +
    'в сторону backend и инженерии данных.',
  location: 'Россия',
  /** Ссылка на PDF резюме, если выложите файл в public/ или на CDN */
  pdfHref: undefined as string | undefined,
  about: [
    'Студент направления фундаментальная информатика и информационные технологии. ' +
      'Интересуюсь тем, как данные и код помогают принимать решения и ускорять процессы.',
    'Работаю в онлайн-школе программирования: аналитика, отчётность, ' +
      'поддержка образовательных процессов и взаимодействие с данными.',
  ],
  contacts: [
    {
      kind: 'github' as const,
      label: 'GitHub',
      href: 'https://github.com/V1K1NG31',
    },
    {
      kind: 'email' as const,
      label: 'Email',
      href: 'mailto:hello@example.com',
    },
    {
      kind: 'telegram' as const,
      label: 'Telegram',
      href: 'https://t.me/username',
    },
  ] satisfies ContactLink[],
  experience: [
    {
      company: 'Онлайн-школа программирования',
      role: 'Аналитик / администратор аналитики',
      start: '2021',
      end: 'present',
      bullets: [
        'Сбор и подготовка данных для отчётности и операционных решений.',
        'Поддержка аналитических процессов и взаимодействие со смежными командами.',
        'Автоматизация рутины там, где это даёт устойчивый эффект.',
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: 'GitHub-профиль',
      description: 'Пет-проекты, эксперименты с кодом и учебные репозитории.',
      stack: ['Python', 'Git'],
      href: 'https://github.com/V1K1NG31',
    },
    {
      title: 'Личный сайт (этот проект)',
      description:
        'Статическое резюме на React и Vite, деплой на GitHub Pages.',
      stack: ['React', 'TypeScript', 'Vite'],
      href: 'https://github.com/V1K1NG31/V1K1NG31.github.io',
    },
  ] satisfies ProjectItem[],
  skills: [
    {
      title: 'Языки и runtime',
      items: ['Python', 'SQL', 'TypeScript (базово)', 'Bash'],
    },
    {
      title: 'Веб и API',
      items: ['FastAPI', 'REST', 'HTML/CSS'],
    },
    {
      title: 'Данные',
      items: ['Pandas', 'Excel / Google Sheets', 'визуализация и отчёты'],
    },
    {
      title: 'Инструменты',
      items: ['Git', 'Linux', 'Docker (базово)'],
    },
  ] satisfies SkillGroup[],
  education: [
    {
      institution: 'ВУЗ (уточните название)',
      degree: 'Фундаментальная информатика и ИТ',
      period: '20__ — настоящее время',
      details: 'Замените на реальный вуз и годы обучения.',
    },
  ] satisfies EducationItem[],
  languages: [
    { name: 'Русский', level: 'родной' },
    { name: 'Английский', level: 'B1 — B2 (уточните)' },
  ] satisfies LanguageItem[],
}

export const siteMeta = {
  title: `${resumeData.nameLatin} — резюме`,
  description: resumeData.tagline,
  siteUrl: 'https://V1K1NG31.github.io',
  locale: 'ru_RU',
}
