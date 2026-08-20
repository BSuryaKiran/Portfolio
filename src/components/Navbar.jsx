import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

/* ── Icons ── */
function SunIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggle } = useTheme();

  /* ── scroll handler ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    let current = '';
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && window.scrollY + 90 >= el.offsetTop) current = id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* close mobile menu on resize */
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  /* smooth scroll helper */
  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <a href="#" className="navbar-logo" onClick={(e) => scrollTo(e, '#')}>
            BSK<span className="logo-dot">.</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                  onClick={(e) => scrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-side controls */}
          <div className="navbar-controls">
            {/* CTA */}
            <a
              href="#contact"
              className="navbar-cta"
              onClick={(e) => scrollTo(e, '#contact')}
            >
              Hire Me
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Theme toggle */}
            <button
              id="theme-toggle"
              className="theme-toggle"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {/* key forces re-mount → triggers spinIn animation on every switch */}
              <span key={theme}>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </span>
            </button>

            {/* Hamburger (mobile) */}
            <button
              id="menu-toggle"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
              onClick={(e) => scrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-cta"
            onClick={(e) => scrollTo(e, '#contact')}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
