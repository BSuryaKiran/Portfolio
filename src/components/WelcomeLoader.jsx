import { useState, useEffect, useRef, useCallback } from 'react';
import { fireConfetti } from '../utils/confetti';
import './WelcomeLoader.css';

const GREETINGS = [
  'Welcome',
  'Namaste',
  'Hello World',
  'Bienvenue',
  'Hola',
];

export default function WelcomeLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [greetingIdx, setGreetingIdx] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [subText, setSubText] = useState('Initializing portfolio experience...');
  const hasFinishedRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsClosing(true);

    // Fire celebratory confetti burst
    setTimeout(() => {
      fireConfetti(window.innerWidth / 2, window.innerHeight / 2, 70);
    }, 150);

    // Complete transition
    setTimeout(() => {
      onComplete?.();
    }, 700);
  }, [onComplete]);

  // Cycle greeting words quickly
  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setGreetingIdx(prev => (prev + 1) % GREETINGS.length);
    }, 450);
    return () => clearInterval(greetingInterval);
  }, []);

  // Animate progress smoothly
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2100; // 2.1 seconds total

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 30) {
        setSubText('Preparing interactive tech stack...');
      } else if (pct < 65) {
        setSubText('Loading AI engineering showcases & projects...');
      } else if (pct < 95) {
        setSubText('Calibrating responsive themes & animations...');
      } else {
        setSubText('Welcome! Entering portfolio...');
      }

      if (pct >= 100) {
        clearInterval(interval);
        handleFinish();
      }
    }, 28);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleFinish]);

  return (
    <div
      className={`welcome-overlay ${isClosing ? 'welcome-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Loading Animation"
    >
      {/* Background Animated Glow Meshes */}
      <div className="welcome-glow-orb welcome-glow-1" aria-hidden />
      <div className="welcome-glow-orb welcome-glow-2" aria-hidden />
      <div className="welcome-glow-orb welcome-glow-3" aria-hidden />
      <div className="welcome-mesh-grid" aria-hidden />

      {/* Skip Button */}
      <button
        className="welcome-skip-btn"
        onClick={handleFinish}
        title="Skip welcoming animation (Esc)"
      >
        <span>Skip Intro</span>
        <kbd className="welcome-kbd">Esc</kbd>
      </button>

      {/* Main Content Modal Card */}
      <div className="welcome-container">
        {/* Animated Glowing Monogram */}
        <div className="welcome-avatar-wrapper">
          <div className="welcome-avatar-ring welcome-spin" />
          <div className="welcome-avatar-ring-inner welcome-spin-reverse" />
          <div className="welcome-avatar-core">
            <span className="welcome-initials">BSK</span>
          </div>
          <div className="welcome-sparkle-dot s1" />
          <div className="welcome-sparkle-dot s2" />
          <div className="welcome-sparkle-dot s3" />
        </div>

        {/* Dynamic Greeting */}
        <div className="welcome-greeting-badge">
          <span className="welcome-greeting-pulse" />
          <span className="welcome-greeting-word">{GREETINGS[greetingIdx]}</span>
          <span className="welcome-greeting-divider">·</span>
          <span>Explore Portfolio</span>
        </div>

        {/* Name Title */}
        <h1 className="welcome-title">
          <span className="welcome-prefix">Hello, I'm</span>
          <span className="welcome-name gradient-rainbow-text">Bellamkonda Surya Kiran</span>
        </h1>

        {/* Subtitle / Roles */}
        <p className="welcome-role">
          Full Stack Developer <span className="welcome-role-dot">✦</span> AI Engineering Enthusiast <span className="welcome-role-dot">✦</span> AWS Certified
        </p>

        {/* Progress Bar */}
        <div className="welcome-progress-block">
          <div className="welcome-progress-meta">
            <span className="welcome-status-text">{subText}</span>
            <span className="welcome-pct-text">{progress}%</span>
          </div>
          <div className="welcome-progress-track">
            <div
              className="welcome-progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="welcome-progress-glow" />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="welcome-enter-btn"
          onClick={handleFinish}
        >
          <span>{progress >= 100 ? 'Explore Portfolio' : 'Enter Portfolio'}</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        {/* Trust Badges */}
        <div className="welcome-tags">
          <span className="welcome-tag">🎓 KL University (9.61 CGPA)</span>
          <span className="welcome-tag">☁️ AWS CLF-C02</span>
          <span className="welcome-tag">🤖 GitHub Copilot</span>
        </div>
      </div>
    </div>
  );
}
