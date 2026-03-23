# V1K1NG31.github.io

Персональный сайт на [GitHub Pages](https://pages.github.com/).

- **Актуальная главная** — одностраничное резюме: исходники в каталоге [`resume/`](resume/), сборка **React + Vite + TypeScript**.
- **Архив** — старый сайт на Wowchemy в [`legacy/`](legacy/); при деплое копируется в **`dist/legacy/`**, на сайте доступен по **`/legacy/`**.

## Локальная разработка

```bash
cd resume
npm install
npm run dev
```

Сборка:

```bash
cd resume
npm run build
```

## Публикация (GitHub Actions → Pages)

### Настройки репозитория

**Settings → Pages → Build and deployment:**

- **Source:** **GitHub Actions** (не «Deploy from a branch»).

Первый запуск workflow может попросить одобрить окружение **`github-pages`** для `github-actions[bot]` — это нормально.

### Что делает workflow

Файл [`.github/workflows/deploy-resume.yml`](.github/workflows/deploy-resume.yml):

1. Запускается при **любом** пуше в **`master`** / **`main`** (и вручную: **Actions → Deploy resume to GitHub Pages → Run workflow**). Раньше стоял фильтр по путям — из‑за него коммиты без правок в `resume/`/`legacy/` не запускали сборку.
2. `npm ci`, `lint`, `build` в `resume/` → артефакт из **`resume/dist/`**.
3. Если в репозитории есть **`legacy/`**, оно **синхронизируется** в `resume/dist/legacy/` (чтобы работали ссылки вида `/legacy/…`).
4. **`actions/upload-pages-artifact`** + **`actions/deploy-pages`** публикуют сайт через API Pages.

Собранные `index.html` / `assets` **в корень ветки не коммитятся** — источник правды для опубликованного сайта только артефакт последнего успешного деплоя.

Тексты резюме (двуязычие **EN/RU**): [`resume/src/i18n/locales/en.ts`](resume/src/i18n/locales/en.ts), [`resume/src/i18n/locales/ru.ts`](resume/src/i18n/locales/ru.ts).

### Локальный предпросмотр «как на Pages»

```bash
cd resume && npm run build
rsync -a ../legacy/ dist/legacy/  # если нужен архив
npx --yes serve dist
```

### После восстановления старого `.git`

Если индекс Git не совпадает с файлами на диске:

```bash
git add -A
git status
git commit -m "chore: резюме в resume/, архив в legacy/, деплой через Pages Actions"
git push origin master
```

Убедитесь, что в **Pages** выбран источник **GitHub Actions**, иначе новый workflow не будет отдавать сайт.
