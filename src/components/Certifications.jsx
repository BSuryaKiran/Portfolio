import { useState } from 'react';
import { fireConfetti } from '../utils/confetti';
import './Certifications.css';

const CERTS = [
  {
    id:       'copilot',
    variant:  'slate',
    accentColor: '#818cf8',
    icon:     '🤖',
    iconBg:   'linear-gradient(135deg,#6366f1,#4338ca)',
    name:     'GitHub Copilot Certification',
    issuer:   'GitHub',
    desc:     'Validated expertise in AI-assisted coding, prompt engineering, agentic development workflows, and integrating Copilot into production engineering pipelines.',
    tags:     ['AI-Assisted Coding', 'Prompt Engineering', 'Productivity & Testing', 'GitHub Copilot CLI'],
    date:     '2025',
  },
  {
    id:       'aws',
    variant:  'orange',
    accentColor: '#f97316',
    icon:     '☁️',
    iconBg:   'linear-gradient(135deg,#f97316,#d97706)',
    name:     'AWS Cloud Practitioner (CLF-C02)',
    issuer:   'Amazon Web Services',
    desc:     'Certified proficiency in AWS global cloud infrastructure, IAM security, S3/EC2/RDS core services, and cloud architectural best practices.',
    tags:     ['AWS CLF-C02', 'Cloud Architecture', 'IAM & Security', 'Cost Optimization'],
    date:     '2024',
  },
  {
    id:       'cambridge',
    variant:  'sky',
    accentColor: '#0ea5e9',
    icon:     '🗣️',
    iconBg:   'linear-gradient(135deg,#0ea5e9,#0d9488)',
    name:     'Cambridge LinguaSkill',
    issuer:   'Cambridge Assessment English',
    desc:     'Grade B2 · Upper-Intermediate proficiency for international and professional technical communication, cross-functional collaboration, and technical writing.',
    tags:     ['CEFR Level B2', 'Technical Communication', 'Global Collaboration'],
    date:     '2024',
  },
];

const ACHIEVEMENTS = [
  'Earned GitHub Copilot Certification — demonstrating advanced proficiency in AI-augmented software engineering.',
  'Earned AWS Cloud Practitioner (CLF-C02), validating cloud fundamentals essential for designing and scaling AI-powered systems.',
  'Architected and delivered NexStep, a production-grade multi-role platform solving a real institutional campus placement challenge.',
  'Maintained an exceptional 9.61 CGPA across foundational and advanced Computer Science Engineering courses at KL University.',
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertClick = (e, cert) => {
    fireConfetti(e.clientX, e.clientY, 35);
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" className="certs reveal">
      <div className="certs-glow" aria-hidden />

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Verified Qualifications</span>
          <h2 className="section-title">
            <span className="gradient-rainbow-text">Certifications</span> &amp; Achievements
          </h2>
          <p className="section-subtitle">
            Industry-recognized credentials across cloud architecture, artificial intelligence, and engineering excellence.
          </p>
        </div>

        {/* Cert cards */}
        <div className="certs-grid">
          {CERTS.map(c => (
            <div
              key={c.id}
              id={`cert-${c.id}`}
              className={`cert-card cert-card--${c.variant}`}
              style={{ '--cert-accent': c.accentColor }}
              onClick={(e) => handleCertClick(e, c)}
              title="Click to inspect credential"
            >
              {/* Shimmer overlay */}
              <div className="cert-shimmer" aria-hidden />

              <div className="cert-top">
                <div className="cert-icon" style={{ background: c.iconBg }}>{c.icon}</div>
                <div className="cert-titles">
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-issuer">{c.issuer} · {c.date}</p>
                </div>
              </div>

              <div className="cert-verified">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Verified Credential</span>
              </div>

              <p className="cert-desc">{c.desc}</p>

              <div className="cert-tags">
                {c.tags.map(t => (
                  <span key={t} className="cert-tag-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="cert-click-hint">
                <span>Click to inspect</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements banner */}
        <div className="achievements-banner">
          <div className="achievements-header">
            <span className="achievements-trophy">🏆</span>
            <h3 className="achievements-title">Key Milestones &amp; Academic Honors</h3>
          </div>
          <ul className="achievements-list">
            {ACHIEVEMENTS.map(a => (
              <li key={a} className="achievement-item">
                <span className="achievement-arrow">✦</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Credential Inspection Modal */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div className="cert-modal-badge-icon" style={{ background: selectedCert.iconBg }}>
                {selectedCert.icon}
              </div>
              <div>
                <h3 className="cert-modal-title">{selectedCert.name}</h3>
                <p className="cert-modal-issuer">{selectedCert.issuer} · Issued {selectedCert.date}</p>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="cert-modal-body">
              <div className="cert-modal-status">
                <span className="status-dot pulse-green" />
                <strong>Official Verified Credential</strong>
              </div>
              <p className="cert-modal-desc">{selectedCert.desc}</p>

              <div className="cert-modal-skills">
                <span className="cert-modal-label">Skills &amp; Competencies Validated:</span>
                <div className="cert-modal-pills">
                  {selectedCert.tags.map(t => (
                    <span key={t} className="cert-modal-pill">{t}</span>
                  ))}
                </div>
              </div>

              <button
                className="btn-primary cert-modal-btn"
                onClick={() => setSelectedCert(null)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
