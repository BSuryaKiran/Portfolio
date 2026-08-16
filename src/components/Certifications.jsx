import './Certifications.css';

const CERTS = [
  {
    id:       'copilot',
    variant:  'slate',
    icon:     '🤖',
    iconBg:   'linear-gradient(135deg,#475569,#334155)',
    name:     'GitHub Copilot Certification',
    issuer:   'GitHub',
    desc:     'Proficient in AI-assisted coding, prompt engineering, and integrating Copilot into production workflows.',
    tags:     [
      { label: 'AI Coding',         style: { background:'#1e293b', border:'1px solid #475569', color:'#94a3b8' } },
      { label: 'Prompt Engineering', style: { background:'#1e293b', border:'1px solid #475569', color:'#94a3b8' } },
      { label: 'Productivity',       style: { background:'#1e293b', border:'1px solid #475569', color:'#94a3b8' } },
    ],
  },
  {
    id:       'aws',
    variant:  'orange',
    icon:     '☁️',
    iconBg:   'linear-gradient(135deg,#f97316,#d97706)',
    name:     'AWS Cloud Practitioner (CLF-C02)',
    issuer:   'Amazon Web Services',
    desc:     'Validated knowledge of AWS architecture, IAM, core services, and cloud economics for deploying scalable AI applications.',
    tags:     [
      { label: 'CLF-C02',           style: { background:'#1c0a00', border:'1px solid #c2410c', color:'#fdba74' } },
      { label: 'Cloud Architecture', style: { background:'#1c0a00', border:'1px solid #c2410c', color:'#fdba74' } },
      { label: 'IAM',               style: { background:'#1c0a00', border:'1px solid #c2410c', color:'#fdba74' } },
    ],
  },
  {
    id:       'cambridge',
    variant:  'sky',
    icon:     '🗣️',
    iconBg:   'linear-gradient(135deg,#0ea5e9,#0d9488)',
    name:     'Cambridge LinguaSkill',
    issuer:   'Cambridge Assessment English',
    desc:     'Grade B2 · Upper-Intermediate proficiency for professional and technical communication.',
    tags:     [
      { label: 'B2 Level',           style: { background:'#082f49', border:'1px solid #0369a1', color:'#7dd3fc' } },
      { label: 'English Proficiency', style: { background:'#082f49', border:'1px solid #0369a1', color:'#7dd3fc' } },
    ],
  },
];

const ACHIEVEMENTS = [
  'Earned GitHub Copilot Certification — demonstrating advanced proficiency in AI-augmented software engineering.',
  'Earned AWS Cloud Practitioner (CLF-C02), validating cloud fundamentals essential for designing and scaling AI-powered systems.',
  'Architected and delivered NexStep, a production-grade multi-role platform solving a real institutional challenge.',
];

export default function Certifications() {
  return (
    <section id="certifications" className="certs reveal">
      <div className="certs-glow" aria-hidden />

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span> &amp; Achievements
          </h2>
          <p className="section-subtitle">
            Industry-recognised credentials across cloud computing, AI, and professional communication.
          </p>
        </div>

        {/* Cert cards */}
        <div className="certs-grid">
          {CERTS.map(c => (
            <div key={c.id} id={`cert-${c.id}`} className={`cert-card cert-card--${c.variant}`}>
              <div className="cert-top">
                <div className="cert-icon" style={{ background: c.iconBg }}>{c.icon}</div>
                <div className="cert-titles">
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
              </div>

              <div className="cert-verified">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified
              </div>

              <p className="cert-desc">{c.desc}</p>

              <div className="cert-tags">
                {c.tags.map(t => (
                  <span key={t.label} className="cert-tag" style={t.style}>{t.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements banner */}
        <div className="achievements-banner">
          <h3 className="achievements-title">🏆 Key Achievements</h3>
          <ul className="achievements-list">
            {ACHIEVEMENTS.map(a => (
              <li key={a} className="achievement-item">
                <span className="achievement-arrow">▸</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
