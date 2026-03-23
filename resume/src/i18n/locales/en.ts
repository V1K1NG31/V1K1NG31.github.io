import type { ResumeBundle } from '../types'

export const en: ResumeBundle = {
  locale: 'en',
  meta: {
    title: 'Sergei Iurchenko — CV',
    description:
      'Python backend developer / Dev team lead. FastAPI, Django, PostgreSQL, ' +
      'Docker, CI/CD. Remote, part-time, project-based.',
    htmlLang: 'en',
  },
  ui: {
    skipToContent: 'Skip to main content',
    resumeEyebrow: 'CV',
    downloadPdf: 'Download PDF',
    legacyArchive: 'Legacy site archive',
    openToLabel: 'Open to',
    sections: {
      about: 'Summary',
      experience: 'Experience',
      skills: 'Tech stack',
      projects: 'Selected projects',
      education: 'Education & languages',
      contacts: 'Contact',
    },
    educationSub: 'Education',
    languagesSub: 'Languages',
    footerBuilt: 'Built with React & Vite',
    footerPages: 'GitHub Pages',
    periodPresent: 'Present',
    navAria: 'Resume sections',
    nav: {
      about: 'Summary',
      experience: 'Experience',
      skills: 'Stack',
      projects: 'Projects',
      education: 'Education',
      contacts: 'Contact',
    },
    contactsIntro: 'Email or LinkedIn work best for a quick reply.',
    langEn: 'EN',
    langRu: 'RU',
    langSwitchToEn: 'Switch to English',
    langSwitchToRu: 'Switch to Russian',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeAriaLight: 'Use light theme',
    themeAriaDark: 'Use dark theme',
  },
  profile: {
    name: 'Sergei Iurchenko',
    headline: 'Python Backend Developer / Dev Team Lead',
    tagline:
      'Python backend developer with 3+ years of hands-on experience building ' +
      'and maintaining production APIs, backend services, and integrations.',
    location: 'Belgrade, Serbia (UTC+1)',
    openTo: 'Remote, long-term part-time, project-based contracts',
    about: [
      'Strong in Python, FastAPI, Django, PostgreSQL, Docker, CI/CD, Redis, ' +
        'RabbitMQ, Celery, and Linux, with a solid DevOps mindset.',
      'Used to owning features end-to-end: from clarifying requirements and ' +
        'designing the solution to deployment and support.',
    ],
    contacts: [
      {
        kind: 'email',
        label: 'Email',
        href: 'mailto:v1k1ngserz@gmail.com',
      },
      {
        kind: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sergei-iurchenko-276730354/',
      },
      {
        kind: 'github',
        label: 'GitHub',
        href: 'https://github.com/V1K1NG31',
      },
    ],
    experience: [
      {
        company: 'Product company (NDA)',
        role: 'Dev Team Lead (Backend)',
        location: 'Belgrade (remote)',
        start: '2024',
        end: 'present',
        bullets: [
          'Lead a small backend-focused team: planning, breakdown, estimates, ' +
            'code reviews, mentoring.',
          'Design architecture for new services and integrations with a focus ' +
            'on reliability and maintainability.',
          'Own CI/CD and basic DevOps: Dockerized services, GitLab CI pipelines, ' +
            'Nginx/Caddy setup, release flow.',
          'Work with non-technical stakeholders: clarify requirements and ' +
            'align technical decisions with business goals.',
        ],
      },
      {
        company: 'Product company (NDA)',
        role: 'Python Backend Developer',
        location: 'Belgrade (remote)',
        start: '2023',
        end: 'present',
        bullets: [
          'Build and maintain backend services and REST APIs (FastAPI, Django).',
          'Integrate third-party REST APIs: auth, pagination, rate limits, ' +
            'webhooks, error handling.',
          'Design and optimize data models and queries in PostgreSQL/MySQL; ' +
            'Redis, RabbitMQ, Celery for async workloads.',
          'Automated tests (pytest), code reviews, incremental refactors.',
        ],
      },
      {
        company: 'Kodland',
        role: 'Data Analyst',
        location: 'Remote',
        start: '2021',
        end: '2022',
        bullets: [
          'Payroll and sales performance reporting for teams and individual reps.',
          'KPI analysis from quality control and operations; bottlenecks and ' +
            'optimization opportunities.',
          'SQL against the data warehouse; dashboards in Amazon QuickSight / ' +
            'Power BI.',
          'Documentation, procedures, and meetings to improve business processes.',
        ],
      },
    ],
    skills: [
      {
        title: 'Backend',
        items: [
          'Python',
          'FastAPI',
          'Django',
          'Django REST Framework',
          'REST API design',
          'OOP, clean code',
        ],
      },
      {
        title: 'Databases & caching',
        items: ['PostgreSQL', 'MySQL', 'Redis'],
      },
      {
        title: 'Messaging & async',
        items: ['RabbitMQ', 'Celery'],
      },
      {
        title: 'DevOps & infrastructure',
        items: [
          'Docker',
          'Docker Compose',
          'GitLab CI',
          'Nginx',
          'Caddy',
          'Linux',
          'Bash',
          'Monitoring & logging',
          'Reverse proxy & SSL',
        ],
      },
      {
        title: 'Other',
        items: [
          'Go (join existing codebases)',
          'SQL',
          'Data analysis',
          'Power BI',
          'Amazon QuickSight',
          'Google Sheets',
          'Excel',
        ],
      },
    ],
    projects: [
      {
        title: 'REST APIs & integrations',
        description:
          'Production-ready REST APIs for internal and external consumers; ' +
          'integrations with payments, CRMs, and other SaaS (retries, logging, ' +
          'error handling). Docker-based deployments on VPS/cloud.',
        stack: ['Python', 'FastAPI', 'Docker'],
      },
      {
        title: 'Automation & Telegram bots',
        description:
          'Telegram bots for business workflows (notifications, lightweight ' +
          'dashboards, internal tools). Python scripts across APIs, databases, ' +
          'and Google Sheets; self-hosted orchestration (e.g. n8n).',
        stack: ['Python', 'Telegram', 'n8n'],
      },
      {
        title: 'This CV site',
        description:
          'Static bilingual resume on React and Vite, deployed to GitHub Pages.',
        stack: ['React', 'TypeScript', 'Vite'],
        href: 'https://github.com/V1K1NG31/V1K1NG31.github.io',
      },
    ],
    education: [
      {
        institution:
          "RUDN University (Peoples' Friendship University of Russia)",
        degree:
          'Faculty of Information Technologies — 4 years completed, ' +
          'degree not awarded',
        period: '2019 — 2023',
      },
    ],
    languages: [
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'Professional working proficiency' },
      { name: 'Serbian', level: 'Living in Serbia — conversational' },
    ],
  },
}
