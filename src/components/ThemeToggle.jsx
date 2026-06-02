export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button type="button" className="theme-toggle" onClick={onToggle} aria-pressed={theme === 'light'}>
      <span className="theme-toggle__label">{theme === 'light' ? 'Light theme' : 'Dark theme'}</span>
      <span className="theme-toggle__track" aria-hidden="true">
        <span className={`theme-toggle__thumb theme-toggle__thumb--${theme}`} />
      </span>
    </button>
  );
}