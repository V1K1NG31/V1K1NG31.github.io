import type { ResumeBundle } from '../types'

export const ru: ResumeBundle = {
  locale: 'ru',
  meta: {
    title: 'Сергей Юрченко — резюме',
    description:
      'Python backend-разработчик / тимлид бэкенда. FastAPI, Django, PostgreSQL, ' +
      'Docker, CI/CD. Удалёнка, part-time, проектные контракты.',
    htmlLang: 'ru',
  },
  ui: {
    skipToContent: 'К основному содержимому',
    resumeEyebrow: 'Резюме',
    downloadPdf: 'Скачать PDF',
    legacyArchive: 'Архив старого сайта',
    openToLabel: 'Формат работы',
    sections: {
      about: 'О себе',
      experience: 'Опыт',
      skills: 'Стек',
      projects: 'Проекты',
      education: 'Образование и языки',
      contacts: 'Контакты',
    },
    educationSub: 'Образование',
    languagesSub: 'Языки',
    footerBuilt: 'Собрано на React и Vite',
    footerPages: 'GitHub Pages',
    periodPresent: 'настоящее время',
    navAria: 'Разделы резюме',
    nav: {
      about: 'О себе',
      experience: 'Опыт',
      skills: 'Стек',
      projects: 'Проекты',
      education: 'Образование',
      contacts: 'Контакты',
    },
    contactsIntro: 'Быстрее всего отвечу на почте или в LinkedIn.',
    langEn: 'EN',
    langRu: 'RU',
    langSwitchToEn: 'Переключить на английский',
    langSwitchToRu: 'Переключить на русский',
    themeLight: 'Светлая',
    themeDark: 'Тёмная',
    themeAriaLight: 'Включить светлую тему',
    themeAriaDark: 'Включить тёмную тему',
  },
  profile: {
    name: 'Сергей Юрченко',
    nameSubtitle: 'Sergei Iurchenko',
    headline: 'Python backend-разработчик / тимлид бэкенда',
    tagline:
      'Более 3 лет практики в продакшене: API, бэкенд-сервисы и интеграции.',
    location: 'Белград, Сербия (UTC+1)',
    openTo:
      'Удалёнка, долгосрочный part-time, проектные контракты',
    about: [
      'Сильные стороны: Python, FastAPI, Django, PostgreSQL, Docker, CI/CD, ' +
        'Redis, RabbitMQ, Celery, Linux и практичный DevOps-подход.',
      'Веду фичи от требований и проектирования до деплоя и сопровождения.',
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
        company: 'Продуктовая компания (NDA)',
        role: 'Тимлид команды (бэкенд)',
        location: 'Белград (удалённо)',
        start: '2024',
        end: 'present',
        bullets: [
          'Руковожу небольшой backend-командой: планирование, декомпозиция, ' +
            'оценки, ревью, менторинг.',
          'Проектирование архитектуры сервисов и интеграций: надёжность и ' +
            'поддерживаемость.',
          'CI/CD и базовый DevOps: Docker, GitLab CI, Nginx/Caddy, релизный процесс.',
          'Взаимодействие с нетехническими стейкхолдерами и согласование решений ' +
            'с бизнес-целями.',
        ],
      },
      {
        company: 'Продуктовая компания (NDA)',
        role: 'Python backend-разработчик',
        location: 'Белград (удалённо)',
        start: '2023',
        end: 'present',
        bullets: [
          'Разработка и сопровождение сервисов и REST API (FastAPI, Django).',
          'Интеграции с внешними REST API: авторизация, пагинация, лимиты, ' +
            'вебхуки, обработка ошибок.',
          'Модели данных и запросы PostgreSQL/MySQL; Redis, RabbitMQ, Celery.',
          'Автотесты (pytest), код-ревью, итерационные улучшения кодовой базы.',
        ],
      },
      {
        company: 'Kodland',
        role: 'Аналитик данных',
        location: 'Удалённо',
        start: '2021',
        end: '2022',
        bullets: [
          'Отчётность по зарплатам и продажам для команд и менеджеров.',
          'Анализ KPI по контролю качества и операционным данным; узкие места.',
          'SQL к витрине данных; дашборды в Amazon QuickSight / Power BI.',
          'Документация, регламенты, встречи для улучшения процессов.',
        ],
      },
    ],
    skills: [
      {
        title: 'Бэкенд',
        items: [
          'Python',
          'FastAPI',
          'Django',
          'Django REST Framework',
          'Проектирование REST API',
          'ООП, чистый код',
        ],
      },
      {
        title: 'БД и кэш',
        items: ['PostgreSQL', 'MySQL', 'Redis'],
      },
      {
        title: 'Очереди и асинхронность',
        items: ['RabbitMQ', 'Celery'],
      },
      {
        title: 'DevOps и инфраструктура',
        items: [
          'Docker',
          'Docker Compose',
          'GitLab CI',
          'Nginx',
          'Caddy',
          'Linux',
          'Bash',
          'Мониторинг и логи',
          'Reverse proxy и SSL',
        ],
      },
      {
        title: 'Прочее',
        items: [
          'Go (подключение к существующим проектам)',
          'SQL',
          'Анализ данных',
          'Power BI',
          'Amazon QuickSight',
          'Google Sheets',
          'Excel',
        ],
      },
    ],
    projects: [
      {
        title: 'REST API и интеграции',
        description:
          'Продакшен REST API для внутренних и внешних потребителей; ' +
          'интеграции (платежи, CRM, SaaS) с ретраями, логированием и ошибками. ' +
          'Docker-окружения под VPS/облако.',
        stack: ['Python', 'FastAPI', 'Docker'],
      },
      {
        title: 'Автоматизация и Telegram-боты',
        description:
          'Telegram-боты под бизнес-процессы (уведомления, простые дашборды, ' +
          'внутренние инструменты). Скрипты Python между API, БД и Google Sheets; ' +
          'self-hosted оркестрация (например n8n).',
        stack: ['Python', 'Telegram', 'n8n'],
      },
      {
        title: 'Этот сайт-резюме',
        description:
          'Статическое двуязычное резюме на React и Vite, деплой на GitHub Pages.',
        stack: ['React', 'TypeScript', 'Vite'],
        href: 'https://github.com/V1K1NG31/V1K1NG31.github.io',
      },
    ],
    education: [
      {
        institution:
          'РУДН (Российский университет дружбы народов)',
        degree:
          'Институт/факультет информатики — 4 года обучения, диплом не получен',
        period: '2019 — 2023',
      },
    ],
    languages: [
      { name: 'Русский', level: 'Родной' },
      { name: 'Английский', level: 'Рабочий профессиональный уровень' },
      { name: 'Сербский', level: 'Бытовой (проживание в Сербии)' },
    ],
  },
}
