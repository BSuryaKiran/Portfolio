import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
    handleScroll();                    // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* ── close menu on resize to desktop ── */
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  /* ── smooth scroll helper ── */
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

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
