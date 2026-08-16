const certs = [
  {
    id: 'copilot',
    title: 'GitHub Copilot Certification',
    issuer: 'GitHub',
    description: 'Proficient in AI-assisted coding, prompt engineering, and integrating Copilot into production workflows.',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #475569, #334155)',
    borderColor: '#47556940',
    accentColor: '#94a3b8',
    tags: ['AI Coding', 'Prompt Engineering', 'Productivity'],
    tagStyle: { background: '#1e293b', border: '1px solid #475569', color: '#94a3b8' },
  },
  {
    id: 'aws',
    title: 'AWS Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    description: 'Validated knowledge of AWS architecture, IAM, core services, and cloud economics for deploying scalable AI applications.',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #f97316, #d97706)',
    borderColor: '#f9731640',
    accentColor: '#fb923c',
    tags: ['CLF-C02', 'Cloud Architecture', 'IAM'],
    tagStyle: { background: '#1c0f00', border: '1px solid #c2410c', color: '#fdba74' },
  },
  {
    id: 'cambridge',
    title: 'Cambridge LinguaSkill',
    issuer: 'Cambridge Assessment English',
    description: 'Grade B2 · Upper-Intermediate proficiency for professional and technical communication.',
    icon: '🗣️',
    gradient: 'linear-gradient(135deg, #0ea5e9, #0d9488)',
    borderColor: '#0ea5e940',
    accentColor: '#38bdf8',
    tags: ['B2 Level', 'English Proficiency'],
    tagStyle: { background: '#082f49', border: '1px solid #0369a1', color: '#7dd3fc' },
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden" style={{ background: '#09090b' }}>
      <div
        className="absolute top-0 right-1/3 pointer-events-none"
        style={{ width: 400, height: 200, borderRadius: '50%', background: 'radial-gradient(#0ea5e9, transparent 70%)', opacity: 0.06, filter: 'blur(60px)' }}
      />
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="mono text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: '#a78bfa' }}>
            Credentials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Certifications</span> &amp; Achievements
          </h2>
          <p className="text-zinc-400 text-base text-center mx-auto" style={{ maxWidth: 480 }}>
            Industry-recognized credentials across cloud, AI, and communication.
          </p>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              id={`cert-${cert.id}`}
              className="card-hover rounded-2xl p-6 flex flex-col"
              style={{ background: '#18181b', border: `1px solid ${cert.borderColor}` }}
            >
              {/* Icon + title row */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: cert.gradient }}
                >
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm leading-snug" style={{ color: cert.accentColor }}>
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="flex items-center gap-1.5 mb-3">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-400 text-xs font-medium">Verified</span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{cert.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono text-xs font-medium px-2.5 py-1 rounded-md"
                    style={cert.tagStyle}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements banner */}
        <div
          className="p-6 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #1e1b2e, #18181b)', border: '1px solid #4c1d9550' }}
        >
          <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
            🏆 Key Achievements
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Earned GitHub Copilot Certification — advanced proficiency in AI-augmented software engineering.',
              'Earned AWS Cloud Practitioner (CLF-C02) validating cloud fundamentals for AI-powered systems.',
              'Architected and delivered NexStep, a production-grade multi-role platform solving a real institutional challenge.',
            ].map((ach) => (
              <li key={ach} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="flex-shrink-0 mt-0.5" style={{ color: '#a78bfa' }}>▸</span>
                {ach}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
