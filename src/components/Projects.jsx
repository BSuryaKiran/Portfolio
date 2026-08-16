import './Projects.css';

const PROJECTS = [
  {
    id: 'nexstep',
    variant: 'violet',
    icon: '🎓',
    title: 'NexStep',
    subtitle: 'Smart Placement Management Platform',
    desc: 'A full-stack placement management platform supporting Student, Recruiter, Placement Officer, and Admin roles to streamline campus recruitment. Implemented secure Spring Boot REST API with JWT authentication and RBAC.',
    tech: ['Vite + React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    github: 'https://github.com/BSuryaKiran/nexstep',
    demo: 'https://nexstep-frontend.onrender.com/',
    highlights: [
      'Multi-role access: Student, Recruiter, Officer, Admin',
      'JWT Auth + Role-Based Access Control (RBAC)',
      'Responsive dashboards with job tracking & analytics',
      'Normalized MySQL schema with AI-assisted coding',
    ],
  },
  {
    id: 'foodconnect',
    variant: 'green',
    icon: '🍱',
    title: 'FoodConnect',
    subtitle: 'Food Wastage Reduction Platform',
    desc: 'A web platform connecting food donors with receivers to reduce food wastage and improve food accessibility. Built responsive UI for food listing, browsing, and donor-recipient interactions with real-time updates.',
    tech: ['Vite + React', 'MongoDB', 'Node.js', 'REST API'],
    github: 'https://github.com/BSuryaKiran/foodconnect',
    demo: 'https://bsuryakiran.github.io/FoodConnect/',
    highlights: [
      'Donor-Recipient smart matching system',
      'Real-time food listing with MongoDB',
      'Role-based dashboards for all user types',
      'AI-assisted development with GitHub Copilot',
    ],
  },
];

function GithubIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects reveal">
      <div className="projects-glow" aria-hidden />

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production-grade applications solving real-world problems with modern tech stacks.
          </p>
        </div>

        {/* Cards */}
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <article
              key={p.id}
              id={`project-${p.id}`}
              className={`project-card project-card--${p.variant}`}
            >
              <div className="project-card-inner">
                {/* Top */}
                <div className="project-top">
                  <div className="project-meta">
                    <div className="project-icon">{p.icon}</div>
                    <div className="project-title-block">
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-subtitle">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub">
                      <GithubIcon />
                    </a>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Demo">
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
                      <span className="project-highlight-arrow">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
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
    </section>
  );
}
