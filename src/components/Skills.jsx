import { useState } from 'react';
import './Skills.css';

const CATEGORIES = [
  {
    id: 'languages',
    name: 'Languages',
    icon: '💻',
    accent: 'skill-card-violet',
    accentColor: '#a78bfa',
    iconBg: 'linear-gradient(135deg,#7c3aed,#6d28d9)',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Java', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C', level: 'Intermediate' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: '🎨',
    accent: 'skill-card-sky',
    accentColor: '#38bdf8',
    iconBg: 'linear-gradient(135deg,#0ea5e9,#2563eb)',
    skills: [
      { name: 'React.js 19', level: 'Advanced' },
      { name: 'Vite', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & Modern CSS3', level: 'Advanced' },
      { name: 'Responsive UI/UX', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: '⚙️',
    accent: 'skill-card-green',
    accentColor: '#34d399',
    iconBg: 'linear-gradient(135deg,#10b981,#059669)',
    skills: [
      { name: 'Spring Boot', level: 'Advanced' },
      { name: 'RESTful API Architecture', level: 'Advanced' },
      { name: 'JWT & Spring Security', level: 'Proficient' },
      { name: 'RBAC Access Control', level: 'Proficient' },
    ],
  },
  {
    id: 'database',
    name: 'Databases',
    icon: '🗄️',
    accent: 'skill-card-orange',
    accentColor: '#fb923c',
    iconBg: 'linear-gradient(135deg,#f97316,#d97706)',
    skills: [
      { name: 'MySQL Relational DB', level: 'Advanced' },
      { name: 'MongoDB NoSQL', level: 'Proficient' },
      { name: 'Spring Data JPA', level: 'Proficient' },
      { name: 'Database Normalization', level: 'Advanced' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Intelligence',
    icon: '🤖',
    accent: 'skill-card-pink',
    accentColor: '#f472b6',
    iconBg: 'linear-gradient(135deg,#ec4899,#e11d48)',
    skills: [
      { name: 'Generative AI & LLMs', level: 'Specialization' },
      { name: 'Prompt Engineering', level: 'Certified' },
      { name: 'GitHub Copilot Workflows', level: 'Certified' },
      { name: 'Multimodal Intelligence', level: 'Specialization' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: '☁️',
    accent: 'skill-card-cyan',
    accentColor: '#22d3ee',
    iconBg: 'linear-gradient(135deg,#06b6d4,#0d9488)',
    skills: [
      { name: 'AWS Cloud (CLF-C02)', level: 'Certified' },
      { name: 'Git & GitHub Version Control', level: 'Advanced' },
      { name: 'Maven Build Tool', level: 'Proficient' },
      { name: 'Cloud Deployment (Render)', level: 'Proficient' },
    ],
  },
];

const CORE_CS = [
  'Object-Oriented Programming (OOP)',
  'Data Structures & Algorithms (DSA)',
  'Operating Systems',
  'Database Management Systems (DBMS)',
  'Computer Networks',
];

const FILTER_TABS = [
  { id: 'all', label: 'All Tech' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'database', label: 'Databases' },
  { id: 'languages', label: 'Languages' },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.id === activeFilter);

  return (
    <section id="skills" className="skills reveal">
      <div className="skills-glow" aria-hidden />

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Technical Competencies</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-rainbow-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            A production-proven technology stack spanning cloud computing, backend microservices, generative AI, and modern UI engineering.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="skills-filter-tabs" role="tablist" aria-label="Filter skills by domain">
            {FILTER_TABS.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeFilter === tab.id}
                className={`skill-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {filteredCategories.map(cat => (
            <div
              key={cat.name}
              className={`skill-card ${cat.accent}`}
              style={{ '--cat-accent': cat.accentColor }}
            >
              <div className="skill-card-header">
                <div
                  className="skill-card-icon"
                  style={{ background: cat.iconBg }}
                >
                  {cat.icon}
                </div>
                <div>
                  <span className="skill-card-name">{cat.name}</span>
                  <span className="skill-card-count">{cat.skills.length} competencies</span>
                </div>
              </div>
              <div className="skill-badges">
                {cat.skills.map(s => (
                  <div key={s.name} className="skill-badge-item">
                    <span className="skill-badge-name">{s.name}</span>
                    <span className="skill-badge-level">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Core CS — full width when viewing all */}
          {activeFilter === 'all' && (
            <div className="skill-card skill-card-slate skill-card-full">
              <div className="skill-card-header">
                <div
                  className="skill-card-icon"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#4338ca)' }}
                >
                  🧠
                </div>
                <div>
                  <span className="skill-card-name">Core Computer Science Foundations</span>
                  <span className="skill-card-count">Essential engineering rigor &amp; academic excellence</span>
                </div>
              </div>
              <div className="skill-badges core-cs-badges">
                {CORE_CS.map(s => (
                  <span key={s} className="skill-badge-pill">
                    <span className="pill-check">✓</span>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
