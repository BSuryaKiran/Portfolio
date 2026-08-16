import { useEffect, useState } from 'react';

const roles = [
  'Full Stack Developer',
  'AI Engineering Enthusiast',
  'Cloud Practitioner',
  'UI/UX Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => { setDisplayed(currentRole.slice(0, charIndex)); setCharIndex(c => c + 1); }, 80);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => { setDisplayed(currentRole.slice(0, charIndex)); setCharIndex(c => c - 1); }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#09090b' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.12) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.25,
        }}
      />
      {/* Centre glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(#6d28d9, transparent 70%)',
          opacity: 0.1, filter: 'blur(60px)',
        }}
      />
      {/* Side glow */}
      <div
        className="absolute pointer-events-none"
        style={{ top: '25%', right: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(#0ea5e9, transparent 70%)', opacity: 0.07, filter: 'blur(50px)' }}
      />
      {/* Blob */}
      <div
        className="absolute blob-anim pointer-events-none"
        style={{ top: 80, right: 40, width: 260, height: 260, background: 'rgba(109,40,217,0.15)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pt-28 pb-16 text-center w-full">
        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
          style={{ background: '#1e1b2e', border: '1px solid #6d28d9', color: '#c4b5fd' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-ring" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 leading-tight">
          <span className="text-white">Bellamkonda</span>
          <br />
          <span className="gradient-text">Surya Kiran</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center justify-center mb-6" style={{ height: 40 }}>
          <p className="text-xl sm:text-2xl text-zinc-400 font-medium mono">
            <span style={{ color: '#38bdf8' }}>&gt;</span>{' '}
            <span className="text-zinc-200">{displayed}</span>
            <span className="animate-pulse" style={{ color: '#a78bfa' }}>|</span>
          </p>
        </div>

        {/* Bio */}
        <p className="mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed mb-10" style={{ maxWidth: 600 }}>
          B.Tech CSE undergraduate at{' '}
          <span style={{ color: '#a78bfa', fontWeight: 600 }}>KL University</span> with a{' '}
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>CGPA of 9.61</span>. Specializing in
          Generative AI &amp; Multimodal Intelligence. AWS CLF-C02 &amp; GitHub Copilot certified.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('#projects')}
            className="flex items-center gap-2 font-semibold text-sm transition-all hover:opacity-90"
            style={{
              padding: '14px 28px', borderRadius: 12, background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
              color: '#fff', boxShadow: '0 0 20px rgba(124,58,237,0.3)',
            }}
          >
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <a
            href="mailto:bskiran2068@gmail.com"
            className="flex items-center gap-2 font-semibold text-sm transition-all hover:opacity-90"
            style={{ padding: '14px 28px', borderRadius: 12, border: '1px solid #3f3f46', color: '#d4d4d8', background: 'transparent' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {[
            { value: '9.61', label: 'CGPA' },
            { value: '2+', label: 'Projects' },
            { value: '3', label: 'Certifications' },
            { value: 'AWS', label: 'CLF-C02' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: '#52525b' }}>
        <p className="text-xs">Scroll down</p>
        <div className="w-5 h-8 rounded-full flex items-start justify-center p-1" style={{ border: '1px solid #3f3f46' }}>
          <div className="w-1 h-2 rounded-full bg-violet-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
