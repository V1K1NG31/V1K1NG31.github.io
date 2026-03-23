import type { ResumeBundle } from '../types'

export const en: ResumeBundle = {
  locale: 'en',
  meta: {
    title: 'Backend developer · CV',
    description:
      'Python backend developer and team lead. Product development, integrations, ' +
      'DevOps. FastAPI, Django, PostgreSQL, Docker, GitLab CI.',
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
    langGroupAria: 'Language',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeAriaLight: 'Use light theme',
    themeAriaDark: 'Use dark theme',
  },
  profile: {
    name: 'Sergei Iurchenko',
    headline: 'Python Backend Developer / Dev Team Lead',
    tagline:
      'Python backend developer and team lead with 3+ years in product ' +
      'development, integrations, and DevOps.',
    location: 'Belgrade, Serbia (UTC+1)',
    openTo: 'Remote / hybrid, long-term projects, part-time',
    about: [
      'Python backend developer and team lead with 3+ years of experience in ' +
        'product development, integrations, and DevOps.',
      'Grew from support and integration engineering to leading a backend team, ' +
        'combining hands-on coding with architecture and process ownership.',
      'Quick to understand existing systems, integrate complex third-party ' +
        'APIs, and keep production services stable.',
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
        role: 'Dev Team Lead / Lead Backend Engineer',
        location: 'Belgrade, hybrid/remote',
        start: 'Feb 2025',
        end: 'present',
        bullets: [
          'Lead a backend-focused team: planning, task breakdown, estimations, ' +
            'mentoring, code reviews.',
          'Design architecture for backend services and integrations; define ' +
            'technical standards (code style, testing, CI/CD).',
          'Own release flow and basic DevOps: Docker-based deployments, GitLab CI ' +
            'pipelines, Nginx/Caddy configuration, basic monitoring and alerting.',
          'Work with product and business stakeholders: feature prioritization, ' +
            'sprint planning, balancing tech debt vs. new work, protecting the ' +
            "team's focus.",
        ],
      },
      {
        company: 'Product company (NDA)',
        role: 'Software Engineer / Head of Integrations',
        location: 'Remote',
        start: 'Jun 2023',
        end: 'Jan 2025',
        bullets: [
          'Developed backend services and REST APIs in Python (FastAPI, Django).',
          'Implemented integrations with third-party services (auth, billing, ' +
            'notifications, webhooks).',
          'Led integration projects: planning, partner communication, API/protocol ' +
            'analysis, change coordination.',
          'Prioritized the integrations backlog and coordinated with support and ' +
            'sales so integrations solved real business problems.',
          'Set up infrastructure: Docker environments, GitLab CI/CD pipelines, ' +
            'basic service orchestration, Nginx/Caddy configuration.',
          'Combined development and integration leadership: partner communication ' +
            'during the day, hands-on coding when needed.',
        ],
      },
      {
        company: 'Product company (NDA)',
        role: 'L2 Support / Integration Engineer (PSP Allocation, internal)',
        location: 'Remote',
        start: 'Mar 2023',
        end: 'May 2023',
        bullets: [
          'Second-line incidents, critical cases, escalation to engineering.',
          'Owned operational metrics for the region and coordinated between tech ' +
            'and business without a formal «country manager» title.',
          'Launched first integrations: partner communication, basic process ' +
            'setup, requirements for future development.',
        ],
      },
      {
        company: 'Kodland',
        role: 'Data Analyst',
        location: 'Remote',
        start: 'May 2021',
        end: 'Jul 2022',
        bullets: [
          'Payroll and sales performance reports for teams and individual reps.',
          'KPIs from quality control and operational data; trends and process ' +
            'improvements.',
          'SQL for the data warehouse; dashboards in Power BI / Amazon QuickSight.',
          'Reporting automation in Google Sheets/Excel; documentation and ' +
            'working procedures.',
        ],
      },
    ],
    skills: [
      {
        title: 'Languages',
        items: ['Python', 'Go (comfortable in existing projects)', 'SQL'],
      },
      {
        title: 'Backend',
        items: [
          'FastAPI',
          'Django',
          'aiogram (Telegram bots)',
          'REST APIs',
          'Webhooks',
          'Background jobs',
        ],
      },
      {
        title: 'Databases & caching',
        items: ['PostgreSQL', 'MySQL', 'Redis'],
      },
      {
        title: 'Messaging / async',
        items: ['RabbitMQ', 'Celery'],
      },
      {
        title: 'DevOps / infra',
        items: [
          'Docker',
          'Docker Compose / Podman',
          'GitLab CI/CD',
          'Linux',
          'systemd',
          'Nginx',
          'Caddy',
        ],
      },
      {
        title: 'Analytics / BI (previous role)',
        items: [
          'SQL',
          'Google Sheets',
          'Excel',
          'Power BI',
          'Amazon QuickSight',
          'KPI / sales analytics',
        ],
      },
      {
        title: 'Architecture / practices',
        items: [
          'REST API design',
          'Microservices',
          'Clean code',
          'DRY / SOLID',
          'Code review',
          'CI/CD',
          'Monitoring and stability of integrations',
        ],
      },
    ],
    projects: [
      {
        title: 'Internal API platform',
        bullets: [
          'Designed and implemented a set of REST APIs for internal services: ' +
            'auth, quotas, logging, error handling.',
          'Consistent patterns for new services and integrations; easier ' +
            'onboarding for developers.',
        ],
        stack: ['Python', 'FastAPI', 'REST'],
      },
      {
        title: 'Third-party integrations',
        bullets: [
          'Multiple integrations with external APIs (payments, partner ' +
            'platforms, notifications).',
          'Rate limits, retries, idempotency, and monitoring for reliable ' +
            'production behavior.',
        ],
        stack: ['Python', 'REST', 'Webhooks'],
      },
      {
        title: 'Analytics & KPI tooling (Kodland)',
        bullets: [
          'Reporting for sales and KPIs based on SQL and BI (QuickSight / ' +
            'Power BI).',
          'Clear performance view for management across teams and individuals.',
        ],
        stack: ['SQL', 'Power BI', 'QuickSight'],
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
          'Faculty of Information Technologies — 4 years completed, degree not ' +
          "finished (incomplete bachelor's)",
        period: '2019 — 2023',
      },
    ],
    languages: [
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'B2, working proficiency' },
    ],
  },
}
