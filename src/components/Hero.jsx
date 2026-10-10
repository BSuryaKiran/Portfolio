import { useState, useEffect, useRef } from 'react';
import { fireConfetti } from '../utils/confetti';
import './Hero.css';

const ROLES = [
  'Full Stack Developer',
  'AI Engineering Enthusiast',
  'Cloud Practitioner (AWS CLF-C02)',
  'Generative AI & Multimodal Intelligence',
];

const STATS = [
  { value: '9.61', label: 'CGPA', icon: '🎯', accent: '#a78bfa' },
  { value: '2+', label: 'Featured Projects', icon: '🚀', accent: '#38bdf8' },
  { value: '3', label: 'Certifications', icon: '🏅', accent: '#34d399' },
  { value: 'AWS', label: 'CLF-C02 Certified', icon: '☁️', accent: '#fb923c' },
];

const TECH_PILLS = [
  { name: 'Spring Boot', color: '#10b981' },
  { name: 'React 19', color: '#0ea5e9' },
  { name: 'AWS Cloud', color: '#f59e0b' },
  { name: 'GenAI & LLMs', color: '#a855f7' },
  { name: 'REST APIs', color: '#ec4899' },
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
      timeout.current = setTimeout(() => {
        setDeleting(false);
        setRoleIdx(i => (i + 1) % ROLES.length);
      }, 100);
    }

    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, roleIdx]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    if (e.clientX && e.clientY) {
      fireConfetti(e.clientX, e.clientY, 35);
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Decorative Grid & Aurora Backdrops */}
      <div className="hero-grid" aria-hidden />
      <div className="hero-glow-center" aria-hidden />
      <div className="hero-glow-right" aria-hidden />
      <div className="hero-glow-left" aria-hidden />
      <div className="hero-blob blob-anim" aria-hidden />

      {/* Floating Ambient Tech Badges */}
      <div className="hero-floating-pills" aria-hidden="true">
        {TECH_PILLS.map((pill, i) => (
          <span
            key={pill.name}
            className={`hero-floating-pill float-pill-${i + 1}`}
            style={{ '--pill-color': pill.color }}
          >
            <span className="hero-pill-dot" style={{ background: pill.color }} />
            {pill.name}
          </span>
        ))}
      </div>

      <div className="hero-content">
        {/* Availability Badge with animated colorful glowing border */}
        <div className="hero-badge hero-badge-rainbow">
          <span className="hero-badge-dot pulse-green" />
          <span className="hero-badge-text">Available for opportunities &amp; internships</span>
          <span className="hero-badge-sparkle">✨</span>
        </div>

        {/* Name */}
        <h1 className="hero-name">
          <span className="line1">Bellamkonda</span>
          <span className="line2 gradient-rainbow-text">Surya Kiran</span>
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
          <strong className="accent-violet">KL University</strong> with an exceptional{' '}
          <strong className="accent-sky">CGPA of 9.61</strong>.
          Specializing in Generative AI &amp; Multimodal Intelligence, architecting scalable
          full-stack applications with Vite&nbsp;+&nbsp;React and Spring Boot.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button
            className="btn-primary hero-btn-glow"
            onClick={(e) => scrollTo(e, '#projects')}
          >
            <span>View My Work</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <a
            href="mailto:bskiran2006@gmail.com"
            className="btn-secondary hero-btn-outline"
            onClick={(e) => fireConfetti(e.clientX, e.clientY, 35)}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map(s => (
            <div
              key={s.label}
              className="hero-stat-item"
              style={{ '--stat-accent': s.accent }}
            >
              <div className="hero-stat-top">
                <span className="hero-stat-icon">{s.icon}</span>
                <p className="hero-stat-value gradient-text">{s.value}</p>
              </div>
              <p className="hero-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to About section"
        onClick={(e) => scrollTo(e, '#about')}
      >
        <span className="hero-scroll-text">Explore</span>
        <div className="hero-scroll-wheel">
          <span className="hero-scroll-dot" />
        </div>
      </a>
    </section>
  );
}
