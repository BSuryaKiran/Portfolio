import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const ROLES = [
  'Full Stack Developer',
  'AI Engineering Enthusiast',
  'Cloud Practitioner (AWS CLF-C02)',
  'UI / UX Builder',
];

const STATS = [
  { value: '9.61', label: 'CGPA' },
  { value: '2+', label: 'Projects' },
  { value: '3', label: 'Certifications' },
  { value: 'AWS', label: 'CLF-C02' },
];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const timeout = useRef(null);

  /* Typewriter */
  useEffect(() => {
    const full = ROLES[roleIdx];

    if (!deleting && charIdx <= full.length) {
      timeout.current = setTimeout(() => {
        setDisplayed(full.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, 75);
    } else if (!deleting && charIdx > full.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx >= 0) {
      timeout.current = setTimeout(() => {
        setDisplayed(full.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, 35);
    } else {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, roleIdx]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Decorations */}
      <div className="hero-grid" aria-hidden />
      <div className="hero-glow-center" aria-hidden />
      <div className="hero-glow-right" aria-hidden />
      <div className="hero-blob blob-anim" aria-hidden />

      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot pulse-green" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="hero-name">
          <span className="line1">Bellamkonda</span>
          <span className="line2 gradient-text">Surya Kiran</span>
        </h1>

        {/* Typewriter */}
        <div className="hero-typewriter" aria-live="polite">
          <span className="prompt">&gt;</span>
          <span className="text">{displayed}</span>
          <span className="cursor cursor-blink">|</span>
        </div>

        {/* Bio */}
        <p className="hero-bio">
          B.Tech CSE undergraduate at{' '}
          <strong className="accent-violet">KL University</strong> with a{' '}
          <strong className="accent-sky">CGPA of 9.61</strong>.
          Specializing in Generative AI &amp; Multimodal Intelligence, building scalable
          full-stack apps with Vite&nbsp;+&nbsp;React and Spring Boot.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollTo('#projects')}>
            View My Work
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <a href="mailto:bskiran2006@gmail.com" className="btn-secondary">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map(s => (
            <div key={s.label} className="hero-stat-item">
              <p className="hero-stat-value gradient-text">{s.value}</p>
              <p className="hero-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden>
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-wheel">
          <span className="hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
