# Changelog

## [Unreleased]

### Added

- Одностраничное резюме на React, Vite и TypeScript в каталоге `resume/`.
- Перенос прежнего сайта Wowchemy в каталог `legacy/` (в публикации — под путём `/legacy/`).

### Changed

- Деплой на GitHub Pages через **GitHub Actions** (`upload-pages-artifact` + `deploy-pages`), без коммита собранных файлов в корень ветки; в настройках Pages источник — **GitHub Actions**, не «Deploy from a branch».

### Added

- Двуязычное резюме (**EN** / **RU**): локали в `resume/src/i18n/locales/`, переключатель в шапке, обновление `<title>` и meta при смене языка.
