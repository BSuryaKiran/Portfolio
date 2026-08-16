const timeline = [
  {
    year: '2024 – Present',
    title: 'B.Tech Computer Science Engineering',
    org: 'KL University, Vijayawada',
    detail: 'CGPA: 9.61 · Specializing in Generative AI & Multimodal Intelligence',
  },
];

const stats = [
  { label: 'CGPA', value: '9.61', icon: '🎯' },
  { label: 'Projects Built', value: '2+', icon: '🚀' },
  { label: 'Certifications', value: '3', icon: '🏅' },
  { label: 'Year of Study', value: '3rd', icon: '📚' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#111113' }}>
      {/* glow */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{ width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(#7c3aed, transparent 70%)', opacity: 0.06, filter: 'blur(60px)' }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="mono text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: '#a78bfa' }}>
            Who I Am
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Text */}
          <div className="space-y-5">
            <p className="text-zinc-300 text-base leading-relaxed">
              I'm a{' '}
              <span style={{ color: '#a78bfa', fontWeight: 600 }}>B.Tech Computer Science Engineering</span>{' '}
              undergraduate (3rd year) at KL University, specializing in{' '}
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>Generative AI and Multimodal Intelligence</span>,
              with a CGPA of 9.61.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              Experienced in building scalable full-stack applications using{' '}
              <span className="text-white font-medium">Vite + React</span> and{' '}
              <span className="text-white font-medium">Spring Boot</span>. I'm{' '}
              <span style={{ color: '#fb923c', fontWeight: 500 }}>AWS Certified Cloud Practitioner (CLF-C02)</span> and{' '}
              <span className="text-zinc-200 font-medium">GitHub Copilot Certified</span>, with a strong interest
              in AI, Machine Learning, Cloud Computing, and Software Development.
            </p>

            {/* Education */}
            <div className="pt-2">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
                <span style={{ color: '#a78bfa' }}>◈</span> Education
              </h3>
              {timeline.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ background: '#7c3aed' }} />
                    <div className="w-px flex-1 mt-1" style={{ background: '#3f3f46' }} />
                  </div>
                  <div className="pb-4">
                    <p className="mono text-xs font-semibold mb-0.5" style={{ color: '#c4b5fd' }}>{item.year}</p>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-zinc-400 text-xs mt-0.5">{item.org}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-hover p-6 rounded-2xl text-center"
                  style={{ background: '#18181b', border: '1px solid #3f3f46' }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-3xl font-black gradient-text mb-1">{stat.value}</p>
                  <p className="text-zinc-500 text-xs font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div
              className="p-5 rounded-2xl flex items-center gap-4"
              style={{
                background: 'linear-gradient(135deg, #1e1b2e, #18181b)',
                border: '1px solid #4c1d9540',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: '#2e1065', border: '1px solid #6d28d9' }}
              >
                💼
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">Open to Opportunities</p>
                <p className="text-zinc-400 text-xs mt-0.5">
                  Actively seeking internships in Full-Stack, AI/ML &amp; Cloud Engineering.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: '#052e16', border: '1px solid #15803d', color: '#4ade80' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
