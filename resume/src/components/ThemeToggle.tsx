import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon" aria-hidden>
        {isDark ? '☀' : '☾'}
      </span>
      <span className="theme-toggle__text">
        {isDark ? 'Светлая' : 'Тёмная'}
      </span>
    </button>
  )
}
