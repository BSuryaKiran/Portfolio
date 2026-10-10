import { useState, useEffect } from 'react';
import Navbar             from './components/Navbar';
import Hero               from './components/Hero';
import About              from './components/About';
import Skills             from './components/Skills';
import Projects           from './components/Projects';
import Certifications     from './components/Certifications';
import Contact            from './components/Contact';
import Footer             from './components/Footer';
import WelcomeLoader      from './components/WelcomeLoader';
import AnimatedBackground from './components/AnimatedBackground';
import MarqueeBanner      from './components/MarqueeBanner';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  /* Scroll-reveal: add 'visible' to .reveal elements when they enter viewport */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once only
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showWelcome]);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)', position: 'relative' }}>
      {/* Opening Welcoming & Loading Animation */}
      {showWelcome && (
        <WelcomeLoader onComplete={() => setShowWelcome(false)} />
      )}

      {/* Ambient Animated Colorful Background (Orbs + Particles) */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar onReplayIntro={() => setShowWelcome(true)} />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <MarqueeBanner />
        <About />
        <Skills />
        <Projects />
        <MarqueeBanner reverse={true} />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onReplayIntro={() => setShowWelcome(true)} />
    </div>
  );
}
