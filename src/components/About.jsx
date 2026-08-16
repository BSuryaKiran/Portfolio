import './About.css';

export default function About() {
  return (
    <section id="about" className="about reveal">
      <div className="about-glow" aria-hidden />

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="about-grid">

          {/* ── Left: Text ── */}
          <div className="about-text">
            <p>
              I'm a <span className="hi-violet">B.Tech Computer Science Engineering</span> undergraduate
              (3rd year) at KL University, specializing in{' '}
              <span className="hi-sky">Generative AI and Multimodal Intelligence</span>, with a CGPA of 9.61.
            </p>
            <p>
              Experienced in building scalable full-stack applications using{' '}
              <span className="hi-white">Vite + React</span> and{' '}
              <span className="hi-white">Spring Boot</span>. Proud holder of the{' '}
              <span className="hi-orange">AWS Certified Cloud Practitioner (CLF-C02)</span> and{' '}
              <span className="hi-white">GitHub Copilot Certification</span>, with a strong
              interest in Artificial Intelligence, Machine Learning, Cloud Computing, and
              Software Development.
            </p>

            {/* Education */}
            <div className="edu-block">
              <p className="edu-title">
                <span className="icon">◈</span> Education
              </p>
              <div className="edu-entry">
                <div className="edu-line">
                  <div className="edu-dot" />
                  <div className="edu-vline" />
                </div>
                <div>
                  <p className="edu-year">2024 – Present</p>
                  <p className="edu-deg">B.Tech — Computer Science Engineering</p>
                  <p className="edu-org">KL University, Vijayawada</p>
                  <p className="edu-grade">CGPA: 9.61 · Specializing in Generative AI &amp; Multimodal Intelligence</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Stats ── */}
          <div className="about-stats-col">
            <div className="stats-grid">
              {[
                { emoji: '🎯', value: '9.61', label: 'CGPA' },
                { emoji: '🚀', value: '2+',   label: 'Projects Built' },
                { emoji: '🏅', value: '3',    label: 'Certifications' },
                { emoji: '📚', value: '3rd',  label: 'Year of Study' },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <span className="emoji">{s.emoji}</span>
                  <p className="value gradient-text">{s.value}</p>
                  <p className="label">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="availability-card">
              <div className="avail-icon">💼</div>
              <div className="avail-text">
                <strong>Open to Opportunities</strong>
                <span>Seeking internships in Full-Stack, AI/ML &amp; Cloud Engineering.</span>
              </div>
              <div className="avail-badge">
                <span className="avail-badge-dot pulse-green" />
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
