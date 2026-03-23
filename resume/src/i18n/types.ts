export type Locale = 'en' | 'ru'

export type ContactKind =
  | 'github'
  | 'telegram'
  | 'email'
  | 'linkedin'
  | 'website'

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
  /** Краткий вводный абзац; можно опустить, если заданы bullets */
  description?: string
  bullets?: string[]
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

export type ResumeUiStrings = {
  skipToContent: string
  resumeEyebrow: string
  downloadPdf: string
  legacyArchive: string
  openToLabel: string
  sections: {
    about: string
    experience: string
    skills: string
    projects: string
    education: string
    contacts: string
  }
  educationSub: string
  languagesSub: string
  footerBuilt: string
  footerPages: string
  periodPresent: string
  navAria: string
  nav: {
    about: string
    experience: string
    skills: string
    projects: string
    education: string
    contacts: string
  }
  contactsIntro: string
  langEn: string
  langRu: string
  langSwitchToEn: string
  langSwitchToRu: string
  themeLight: string
  themeDark: string
  themeAriaLight: string
  themeAriaDark: string
}

export type ResumeBundle = {
  locale: Locale
  ui: ResumeUiStrings
  meta: {
    title: string
    description: string
    htmlLang: string
  }
  profile: {
    name: string
    nameSubtitle?: string
    headline: string
    tagline: string
    location: string
    openTo: string
    pdfHref?: string
    about: string[]
    contacts: ContactLink[]
    experience: ExperienceItem[]
    projects: ProjectItem[]
    skills: SkillGroup[]
    education: EducationItem[]
    languages: LanguageItem[]
  }
}
