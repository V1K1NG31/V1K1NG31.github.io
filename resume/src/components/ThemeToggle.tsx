import { useI18n } from '../i18n/useI18n'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { bundle } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const { ui } = bundle

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? ui.themeAriaLight : ui.themeAriaDark}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon" aria-hidden>
        {isDark ? '☀' : '☾'}
      </span>
      <span className="theme-toggle__text">
        {isDark ? ui.themeLight : ui.themeDark}
      </span>
    </button>
  )
}
