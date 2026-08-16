import './Skills.css';

const CATEGORIES = [
  {
    name: 'Languages',
    icon: '💻',
    accent: 'skill-card-violet',
    iconBg: 'linear-gradient(135deg,#7c3aed,#6d28d9)',
    skills: ['JavaScript', 'Java', 'Python', 'C'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    accent: 'skill-card-sky',
    iconBg: 'linear-gradient(135deg,#0ea5e9,#2563eb)',
    skills: ['React.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    accent: 'skill-card-green',
    iconBg: 'linear-gradient(135deg,#10b981,#059669)',
    skills: ['Spring Boot', 'REST APIs', 'JWT Auth'],
  },
  {
    name: 'Database',
    icon: '🗄️',
    accent: 'skill-card-orange',
    iconBg: 'linear-gradient(135deg,#f97316,#d97706)',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    name: 'AI / ML',
    icon: '🤖',
    accent: 'skill-card-pink',
    iconBg: 'linear-gradient(135deg,#ec4899,#e11d48)',
    skills: ['ML Fundamentals', 'Generative AI', 'Prompt Engineering', 'GitHub Copilot'],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    accent: 'skill-card-cyan',
    iconBg: 'linear-gradient(135deg,#06b6d4,#0d9488)',
    skills: ['AWS (CLF-C02)', 'Git', 'GitHub', 'Maven'],
  },
];

const CORE_CS = ['OOP', 'Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks'];

export default function Skills() {
  return (
    <section id="skills" className="skills reveal">
      <div className="skills-glow" aria-hidden />

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            A curated set of technologies I work with to build scalable and intelligent applications.
          </p>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {CATEGORIES.map(cat => (
            <div key={cat.name} className={`skill-card ${cat.accent}`}>
              <div className="skill-card-header">
                <div
                  className="skill-card-icon"
                  style={{ background: cat.iconBg }}
                >
                  {cat.icon}
                </div>
                <span className="skill-card-name">{cat.name}</span>
              </div>
              <div className="skill-badges">
                {cat.skills.map(s => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Core CS — full width */}
          <div className={`skill-card skill-card-slate skill-card-full`}>
            <div className="skill-card-header">
              <div
                className="skill-card-icon"
                style={{ background: 'linear-gradient(135deg,#475569,#334155)' }}
              >
                🧠
              </div>
              <span className="skill-card-name">Core CS Fundamentals</span>
            </div>
            <div className="skill-badges">
              {CORE_CS.map(s => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
