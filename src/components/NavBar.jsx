const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export default function NavBar({ navItems, mobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          SA.dev
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <button type="button" className="nav-burger" onClick={onToggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={onCloseMobileMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
