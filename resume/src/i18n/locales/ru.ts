import type { ResumeBundle } from '../types'

export const ru: ResumeBundle = {
  locale: 'ru',
  meta: {
    title: 'Backend · резюме',
    description:
      'Python backend-разработчик и тимлид. Продукт, интеграции, DevOps. ' +
      'FastAPI, Django, PostgreSQL, Docker, GitLab CI.',
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
    langGroupAria: 'Язык',
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
      'Python backend-разработчик и тимлид: более 3 лет в продукте, ' +
      'интеграциях и DevOps.',
    location: 'Белград, Сербия (UTC+1)',
    openTo: 'Удалёнка / гибрид, долгосрочные проекты, part-time',
    about: [
      'Python backend-разработчик и тимлид с более чем 3 годами опыта в ' +
        'продуктовой разработке, интеграциях и DevOps.',
      'Путь от поддержки и инженерии интеграций до руководства backend-командой: ' +
        'и код руками, и архитектура, и процессы.',
      'Быстро вникаю в существующие системы, подключаю сложные внешние API и ' +
        'держу продакшен стабильным.',
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
        role: 'Тимлид / Lead Backend Engineer',
        location: 'Белград, гибрид / удалённо',
        start: 'февр. 2025',
        end: 'present',
        bullets: [
          'Руководство backend-командой: планирование, декомпозиция задач, оценки, ' +
            'менторинг, код-ревью.',
          'Архитектура сервисов и интеграций; технические стандарты (стиль кода, ' +
            'тесты, CI/CD).',
          'Релизный процесс и базовый DevOps: деплой на Docker, пайплайны GitLab ' +
            'CI, Nginx/Caddy, мониторинг и алерты.',
          'Взаимодействие с продуктом и бизнесом: приоритизация фич, спринты, ' +
            'баланс техдолга и новых задач, защита фокуса команды.',
        ],
      },
      {
        company: 'Продуктовая компания (NDA)',
        role: 'Software Engineer / руководитель интеграций',
        location: 'Удалённо',
        start: 'июнь 2023',
        end: 'янв. 2025',
        bullets: [
          'Разработка backend-сервисов и REST API на Python (FastAPI, Django).',
          'Интеграции со сторонними сервисами (авторизация, биллинг, уведомления, ' +
            'вебхуки).',
          'Ведение интеграционных проектов: планирование, коммуникация с ' +
            'партнёрами, разбор API и протоколов, координация изменений.',
          'Приоритизация бэклога интеграций и работа с поддержкой и продажами, ' +
            'чтобы интеграции решали бизнес-задачи.',
          'Инфраструктура: Docker-окружения, GitLab CI/CD, базовая оркестрация ' +
            'сервисов, Nginx/Caddy.',
          'Совмещение разработки и интеграций: днём коммуникации с партнёрами, ' +
            'при необходимости — код.',
        ],
      },
      {
        company: 'Продуктовая компания (NDA)',
        role: 'L2 поддержка / инженер по интеграциям (PSP Allocation, internal)',
        location: 'Удалённо',
        start: 'мар. 2023',
        end: 'май 2023',
        bullets: [
          'Вторая линия: инциденты, критические кейсы, эскалации в разработку.',
          'Операционные метрики по региону, связка техники и бизнеса без ' +
            'формального тайтла «country manager».',
          'Первые интеграции: контакт с партнёрами, базовые процессы, сбор ' +
            'требований для дальнейшей разработки.',
        ],
      },
      {
        company: 'Kodland',
        role: 'Аналитик данных',
        location: 'Удалённо',
        start: 'май 2021',
        end: 'июль 2022',
        bullets: [
          'Отчёты по зарплатам и продажам для команд и менеджеров.',
          'KPI по контролю качества и операционным данным; тренды и улучшения ' +
            'процессов.',
          'SQL к витрине данных; дашборды в Power BI / Amazon QuickSight.',
          'Автоматизация отчётности в Google Sheets/Excel; документация и ' +
            'рабочие регламенты.',
        ],
      },
    ],
    skills: [
      {
        title: 'Языки',
        items: [
          'Python',
          'Go (комфортно в существующих проектах)',
          'SQL',
        ],
      },
      {
        title: 'Бэкенд',
        items: [
          'FastAPI',
          'Django',
          'aiogram (Telegram-боты)',
          'REST API',
          'Вебхуки',
          'Фоновые задачи',
        ],
      },
      {
        title: 'БД и кэш',
        items: ['PostgreSQL', 'MySQL', 'Redis'],
      },
      {
        title: 'Очереди / асинхронность',
        items: ['RabbitMQ', 'Celery'],
      },
      {
        title: 'DevOps / инфраструктура',
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
        title: 'Аналитика / BI (прошлая роль)',
        items: [
          'SQL',
          'Google Sheets',
          'Excel',
          'Power BI',
          'Amazon QuickSight',
          'KPI и аналитика продаж',
        ],
      },
      {
        title: 'Архитектура и практики',
        items: [
          'Проектирование REST API',
          'Микросервисы',
          'Чистый код',
          'DRY / SOLID',
          'Код-ревью',
          'CI/CD',
          'Мониторинг и стабильность интеграций',
        ],
      },
    ],
    projects: [
      {
        title: 'Внутренняя API-платформа',
        bullets: [
          'Набор REST API для внутренних сервисов: авторизация, квоты, логирование, ' +
            'обработка ошибок.',
          'Единые паттерны для новых сервисов и интеграций; проще онбординг ' +
            'разработчиков.',
        ],
        stack: ['Python', 'FastAPI', 'REST'],
      },
      {
        title: 'Интеграции со сторонними сервисами',
        bullets: [
          'Несколько интеграций с внешними API (платежи, партнёрские платформы, ' +
            'уведомления).',
          'Лимиты, ретраи, идемпотентность и мониторинг для стабильной работы в ' +
            'продакшене.',
        ],
        stack: ['Python', 'REST', 'Webhooks'],
      },
      {
        title: 'Аналитика и KPI (Kodland)',
        bullets: [
          'Отчётность по продажам и KPI на SQL и BI (QuickSight / Power BI).',
          'Прозрачная картина эффективности для руководства по командам и людям.',
        ],
        stack: ['SQL', 'Power BI', 'QuickSight'],
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
        institution: 'РУДН (Российский университет дружбы народов)',
        degree:
          'Факультет информатики — 4 года обучения, диплом не получен ' +
          '(незавершённый бакалавриат)',
        period: '2019 — 2023',
      },
    ],
    languages: [
      { name: 'Русский', level: 'Родной' },
      { name: 'Английский', level: 'B2, рабочий уровень' },
    ],
  },
}
