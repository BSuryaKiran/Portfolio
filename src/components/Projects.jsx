import { useState } from 'react';
import { fireConfetti } from '../utils/confetti';
import './Projects.css';

const PROJECTS = [
  {
    id: 'nexstep',
    variant: 'violet',
    accentColor: '#a78bfa',
    icon: '🎓',
    title: 'NexStep',
    subtitle: 'Smart Placement Management Platform',
    desc: 'A full-stack enterprise placement management system supporting Student, Recruiter, Placement Officer, and Admin roles to streamline university campus recruitment pipelines. Engineered secure Spring Boot REST APIs with JWT authentication and strict RBAC.',
    tech: ['React 19', 'Spring Boot', 'MySQL', 'JWT Auth', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/BSuryaKiran/nexstep',
    demo: 'https://nexstep-frontend.onrender.com/',
    highlights: [
      'Multi-role access: Student, Recruiter, Placement Officer, Admin',
      'JWT Auth + Role-Based Access Control (RBAC) security filters',
      'Interactive dashboards with job application tracking & analytics',
      'Normalized relational MySQL schema with 3NF database design',
    ],
    architecture: [
      { step: 'Client Tier', desc: 'Vite + React SPA with responsive role-tailored dashboards' },
      { step: 'Security Filter', desc: 'Spring Security JWT bearer token authentication & RBAC authorization' },
      { step: 'Service Layer', desc: 'REST Controllers orchestrating job postings, applications & interviews' },
      { step: 'Persistence', desc: 'Spring Data JPA & Hibernate connected to normalized MySQL database' },
    ],
    status: 'Live on Render',
  },
  {
    id: 'foodconnect',
    variant: 'green',
    accentColor: '#34d399',
    icon: '🍱',
    title: 'FoodConnect',
    subtitle: 'Food Wastage Reduction Platform',
    desc: 'A community-driven web platform connecting food donors (restaurants, events, caterers) with verified recipients and NGOs to minimize edible food wastage and improve nutrition accessibility in urban regions.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API', 'GitHub Copilot'],
    github: 'https://github.com/BSuryaKiran/foodconnect',
    demo: 'https://bsuryakiran.github.io/FoodConnect/',
    highlights: [
      'Donor-to-Recipient matching with location & expiry filtering',
      'Real-time food listing management with NoSQL MongoDB storage',
      'Dedicated dashboards for donors, food shelters, and administrators',
      'Accelerated development with GitHub Copilot AI-pair programming',
    ],
    architecture: [
      { step: 'Client Interface', desc: 'Mobile-responsive React UI for instant food donation listing' },
      { step: 'API Gateway', desc: 'Node.js & Express REST endpoints for donations, claims & alerts' },
      { step: 'Matching Engine', desc: 'Status-driven inventory tracking & pickup scheduling' },
      { step: 'Database', desc: 'MongoDB Atlas documents with flexible geo-tagging schema' },
    ],
    status: 'Live on GitHub Pages',
  },
];

function GithubIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleDemoClick = (e) => {
    if (e.clientX && e.clientY) {
      fireConfetti(e.clientX, e.clientY, 35);
    }
  };

  return (
    <section id="projects" className="projects reveal">
      <div className="projects-glow" aria-hidden />

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Featured Work &amp; Architecture</span>
          <h2 className="section-title">
            Featured <span className="gradient-rainbow-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production-grade systems designed with enterprise standards, clean architecture, and modern tech stacks.
          </p>
        </div>

        {/* Cards */}
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <article
              key={p.id}
              id={`project-${p.id}`}
              className={`project-card project-card--${p.variant}`}
              onMouseMove={handleMouseMove}
            >
              {/* Dynamic spotlight follow on hover */}
              <div className="project-spotlight" aria-hidden="true" />

              <div className="project-card-inner">
                {/* Top bar with icon & status */}
                <div className="project-top">
                  <div className="project-meta">
                    <div className="project-icon">{p.icon}</div>
                    <div className="project-title-block">
                      <div className="project-heading-row">
                        <h3 className="project-title">{p.title}</h3>
                        <span className="project-status-pill">
                          <span className="status-dot pulse-green" />
                          {p.status}
                        </span>
                      </div>
                      <p className="project-subtitle">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="project-links">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="View GitHub Repository"
                      onClick={(e) => handleDemoClick(e, p.github)}
                    >
                      <GithubIcon />
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="Launch Live Application"
                      onClick={(e) => handleDemoClick(e, p.demo)}
                    >
                      <ExternalIcon />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="project-desc">{p.desc}</p>

                {/* Highlights */}
                <ul className="project-highlights">
                  {p.highlights.map(h => (
                    <li key={h} className="project-highlight">
                      <span className="project-highlight-arrow">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Action Buttons */}
                <div className="project-actions-row">
                  <button
                    className="project-details-btn"
                    onClick={() => setActiveModalProject(p)}
                  >
                    <span>View Architecture &amp; Details</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-btn"
                    onClick={(e) => handleDemoClick(e, p.demo)}
                  >
                    <span>Live Demo</span>
                    <ExternalIcon />
                  </a>
                </div>

                {/* Tech Badges */}
                <div className="project-tech">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className={`project-tech-badge project-badge--${p.variant}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated bottom accent bar */}
              <div className="project-bar" aria-hidden />
            </article>
          ))}
        </div>
      </div>

      {/* Modal for Project Architecture & Details */}
      {activeModalProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-header">
              <div className="modal-title-left">
                <span className="modal-project-icon">{activeModalProject.icon}</span>
                <div>
                  <h3 className="modal-project-title">{activeModalProject.title}</h3>
                  <p className="modal-project-sub">{activeModalProject.subtitle}</p>
                </div>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{activeModalProject.desc}</p>

              {/* Architecture Steps */}
              <div className="modal-arch-section">
                <h4 className="modal-section-title">
                  <span>🏛️ System Architecture Flow</span>
                </h4>
                <div className="modal-arch-steps">
                  {activeModalProject.architecture.map((item, idx) => (
                    <div key={idx} className="modal-arch-step-item">
                      <div className="arch-step-num">0{idx + 1}</div>
                      <div className="arch-step-content">
                        <strong>{item.step}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="modal-tech-section">
                <h4 className="modal-section-title">
                  <span>🛠️ Technology Stack</span>
                </h4>
                <div className="modal-tech-tags">
                  {activeModalProject.tech.map(t => (
                    <span key={t} className="modal-tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Footer CTA links */}
              <div className="modal-footer-links">
                <a
                  href={activeModalProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary modal-cta-btn"
                  onClick={(e) => handleDemoClick(e, activeModalProject.demo)}
                >
                  <span>Launch Live Demo</span>
                  <ExternalIcon />
                </a>
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary modal-github-btn"
                >
                  <GithubIcon />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
