const skillCategories = [
  {
    category: 'Languages',
    icon: '💻',
    gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    borderColor: '#7c3aed40',
    skills: ['JavaScript', 'Java', 'Python', 'C'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
    borderColor: '#0ea5e940',
    skills: ['React.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    borderColor: '#10b98140',
    skills: ['Spring Boot', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    gradient: 'linear-gradient(135deg, #f97316, #d97706)',
    borderColor: '#f9731640',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #ec4899, #e11d48)',
    borderColor: '#ec489940',
    skills: ['ML Fundamentals', 'Generative AI', 'Prompt Engineering', 'GitHub Copilot'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #06b6d4, #0d9488)',
    borderColor: '#06b6d440',
    skills: ['AWS (CLF-C02)', 'Git', 'GitHub', 'Maven'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* top glow */}
      <div
        className="absolute top-0 left-1/3 pointer-events-none"
        style={{ width: 400, height: 200, borderRadius: '50%', background: 'radial-gradient(#7c3aed, transparent 70%)', opacity: 0.08, filter: 'blur(40px)' }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="mono text-sm font-semibold mb-3 tracking-widest uppercase"
            style={{ color: '#a78bfa' }}
          >
            Technical Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills &amp; <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-zinc-400 text-base mx-auto text-center" style={{ maxWidth: 480 }}>
            A curated set of technologies I work with to build scalable and intelligent applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="card-hover rounded-2xl p-6"
              style={{
                background: '#18181b',
                border: `1px solid ${cat.borderColor}`,
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: cat.gradient }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-zinc-100 text-sm">{cat.category}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="mono text-xs font-medium px-3 py-1.5 rounded-lg"
                    style={{
                      background: '#27272a',
                      border: '1px solid #3f3f46',
                      color: '#d4d4d8',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core CS row */}
        <div
          className="mt-4 rounded-2xl p-6"
          style={{ background: '#18181b', border: '1px solid #3f3f46' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #475569, #334155)' }}
            >
              🧠
            </div>
            <h3 className="font-semibold text-zinc-100 text-sm">Core CS Fundamentals</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['OOP', 'Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks'].map((s) => (
              <span
                key={s}
                className="mono text-xs font-medium px-3 py-1.5 rounded-lg"
                style={{ background: '#27272a', border: '1px solid #3f3f46', color: '#d4d4d8' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
