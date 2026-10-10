import { fireConfetti } from '../utils/confetti';
import './About.css';

const STATS_DATA = [
  { emoji: '🎯', value: '9.61', label: 'CGPA Score', color: '#a78bfa' },
  { emoji: '🚀', value: '2+',   label: 'Full-Stack Apps', color: '#38bdf8' },
  { emoji: '🏅', value: '3',    label: 'Industry Certs', color: '#34d399' },
  { emoji: '📚', value: '3rd',  label: 'B.Tech Year', color: '#fb923c' },
];

export default function About() {
  const handleAvailClick = (e) => {
    fireConfetti(e.clientX, e.clientY, 40);
  };

  return (
    <section id="about" className="about reveal">
      <div className="about-glow" aria-hidden />

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Background &amp; Profile</span>
          <h2 className="section-title">
            About <span className="gradient-rainbow-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate software craftsman bridging foundational computer science with cutting-edge artificial intelligence.
          </p>
        </div>

        {/* Grid */}
        <div className="about-grid">

          {/* ── Left: Text ── */}
          <div className="about-text">
            <p>
              I'm a <span className="hi-violet">B.Tech Computer Science Engineering</span> undergraduate
              (3rd year) at KL University, specializing in{' '}
              <span className="hi-sky">Generative AI and Multimodal Intelligence</span>, with an exceptional academic CGPA of 9.61.
            </p>
            <p>
              Experienced in architecting and deploying scalable full-stack applications using{' '}
              <span className="hi-white">Vite + React</span> and{' '}
              <span className="hi-white">Spring Boot</span> with normalized MySQL and MongoDB data layers. Proud holder of the{' '}
              <span className="hi-orange">AWS Certified Cloud Practitioner (CLF-C02)</span> and{' '}
              <span className="hi-white">GitHub Copilot Certification</span>, with an active drive for designing performant, user-centric software systems.
            </p>

            {/* Education timeline */}
            <div className="edu-block">
              <p className="edu-title">
                <span className="icon">◈</span> Education &amp; Academic Track
              </p>
              <div className="edu-entry">
                <div className="edu-line">
                  <div className="edu-dot" />
                  <div className="edu-vline" />
                </div>
                <div>
                  <p className="edu-year">2024 – Present</p>
                  <p className="edu-deg">B.Tech — Computer Science &amp; Engineering</p>
                  <p className="edu-org">Koneru Lakshmaiah Education Foundation (KL University), Vijayawada</p>
                  <p className="edu-grade">CGPA: <strong>9.61 / 10.0</strong> · Specialization: Generative AI &amp; Multimodal Intelligence</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Stats & Availability ── */}
          <div className="about-stats-col">
            <div className="stats-grid">
              {STATS_DATA.map(s => (
                <div
                  key={s.label}
                  className="stat-card"
                  style={{ '--stat-glow': s.color }}
                >
                  <span className="emoji">{s.emoji}</span>
                  <p className="value gradient-text">{s.value}</p>
                  <p className="label">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div
              className="availability-card"
              onClick={handleAvailClick}
              title="Click to celebrate availability!"
            >
              <div className="avail-icon">💼</div>
              <div className="avail-text">
                <strong>Open to Opportunities &amp; Internships</strong>
                <span>Seeking roles in Full-Stack Engineering, Generative AI, and Cloud Architecture.</span>
              </div>
              <div className="avail-badge">
                <span className="avail-badge-dot pulse-green" />
                <span>Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
