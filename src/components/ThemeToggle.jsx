export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button type="button" className="theme-btn" onClick={onToggle} aria-pressed={theme === "light"}>
      {theme === "dark" ? "☀ Light" : "◑ Dark"}
    </button>
  );
}