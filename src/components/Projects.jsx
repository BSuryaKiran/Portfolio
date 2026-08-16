import { useState } from 'react';

const projects = [
  {
    id: 'nexstep',
    title: 'NexStep',
    subtitle: 'Smart Placement Management Platform',
    description:
      'A full-stack placement management platform supporting Student, Recruiter, Placement Officer, and Admin roles to streamline campus recruitment. Implemented secure Spring Boot REST API with JWT authentication and RBAC.',
    tech: ['Vite + React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    links: { demo: 'https://nexstep-demo.vercel.app', github: 'https://github.com/BSuryaKiran/nexstep' },
    accentColor: '#a78bfa',
    borderColor: '#6d28d940',
    background: '#0f0a1e',
    icon: '🎓',
    highlights: [
      'Multi-role access: Student, Recruiter, Officer, Admin',
      'JWT Auth + Role-Based Access Control (RBAC)',
      'Responsive dashboards with job tracking & analytics',
      'Normalized MySQL schema with AI-assisted coding',
    ],
    techBadgeStyle: { background: '#1e1b2e', border: '1px solid #6d28d9', color: '#c4b5fd' },
    highlightColor: '#a78bfa',
    bottomBar: 'linear-gradient(to right, #7c3aed, #a78bfa)',
  },
  {
    id: 'foodconnect',
    title: 'FoodConnect',
    subtitle: 'Food Wastage Reduction Platform',
    description:
      'A web platform connecting food donors with receivers to reduce food wastage and improve food accessibility. Built responsive UI for food listing, browsing, and donor-recipient interactions with real-time updates.',
    tech: ['Vite + React', 'MongoDB', 'Node.js', 'REST API'],
    links: { demo: 'https://foodconnect-demo.vercel.app', github: 'https://github.com/BSuryaKiran/foodconnect' },
    accentColor: '#34d399',
    borderColor: '#05966940',
    background: '#071a12',
    icon: '🍱',
    highlights: [
      'Donor-Recipient matching system',
      'Real-time food listing with MongoDB',
      'Role-based dashboards for all user types',
      'AI-assisted development with GitHub Copilot',
    ],
    techBadgeStyle: { background: '#052e16', border: '1px solid #059669', color: '#6ee7b7' },
    highlightColor: '#34d399',
    bottomBar: 'linear-gradient(to right, #059669, #34d399)',
  },
];

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      id={`project-${project.id}`}
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: project.background,
        border: `1px solid ${project.borderColor}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-5px)' : 'none',
        boxShadow: hovered ? `0 20px 40px ${project.borderColor}` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-7 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: '#18181b', border: '1px solid #3f3f46' }}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="font-bold text-base" style={{ color: project.accentColor }}>{project.title}</h3>
              <p className="text-xs text-zinc-500 mt-0.5">{project.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              style={{ background: '#18181b', border: '1px solid #3f3f46' }}
            >
              <GitHubIcon />
            </a>
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              style={{ background: '#18181b', border: '1px solid #3f3f46' }}
            >
              <ExternalIcon />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6 flex-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-zinc-400">
              <span className="flex-shrink-0 mt-0.5" style={{ color: project.highlightColor }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="mono text-xs font-medium px-2.5 py-1 rounded-md"
              style={project.techBadgeStyle}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Animated bottom line */}
      <div
        style={{
          height: 2,
          background: project.bottomBar,
          width: hovered ? '100%' : '0%',
          transition: 'width 0.4s ease',
        }}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: '#0d0d0f' }}>
      <div
        className="absolute bottom-0 right-1/4 pointer-events-none"
        style={{ width: 400, height: 200, borderRadius: '50%', background: 'radial-gradient(#059669, transparent 70%)', opacity: 0.06, filter: 'blur(60px)' }}
      />
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-14">
          <p className="mono text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: '#a78bfa' }}>
            Featured Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-400 text-base text-center mx-auto" style={{ maxWidth: 480 }}>
            Production-grade applications solving real-world problems with modern tech stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
