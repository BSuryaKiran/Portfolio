import { useState } from 'react';

const socials = [
  {
    name: 'Email',
    handle: 'bskiran2068@gmail.com',
    href: 'mailto:bskiran2068@gmail.com',
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    isStroke: true,
    hoverColor: '#a78bfa',
    borderStyle: { background: '#18181b', border: '1px solid #3f3f46' },
  },
  {
    name: 'GitHub',
    handle: '@BSuryaKiran',
    href: 'https://github.com/BSuryaKiran',
    iconFill: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
    isStroke: false,
    hoverColor: '#e4e4e7',
    borderStyle: { background: '#18181b', border: '1px solid #3f3f46' },
  },
  {
    name: 'LinkedIn',
    handle: 'Bellamkonda Surya Kiran',
    href: 'https://linkedin.com/in/bellamkonda-surya-kiran',
    iconFill: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    isStroke: false,
    hoverColor: '#38bdf8',
    borderStyle: { background: '#18181b', border: '1px solid #3f3f46' },
  },
  {
    name: 'Phone',
    handle: '+91 9281420060',
    href: 'tel:+919281420060',
    iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    isStroke: true,
    hoverColor: '#4ade80',
    borderStyle: { background: '#18181b', border: '1px solid #3f3f46' },
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError('Please fill in all fields.'); return; }
    const link = `mailto:bskiran2068@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = link;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    background: '#18181b',
    border: '1px solid #3f3f46',
    color: '#e4e4e7',
    borderRadius: 12,
    padding: '12px 16px',
    fontSize: 14,
    width: '100%',
    outline: 'none',
    fontFamily: 'inherit',
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#0d0d0f' }}>
      <div
        className="absolute bottom-0 left-1/4 pointer-events-none"
        style={{ width: 400, height: 200, borderRadius: '50%', background: 'radial-gradient(#7c3aed, transparent 70%)', opacity: 0.06, filter: 'blur(60px)' }}
      />
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-14">
          <p className="mono text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: '#a78bfa' }}>
            Let's Connect
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-zinc-400 text-base text-center mx-auto" style={{ maxWidth: 480 }}>
            Open to internships, collaborations, or just a good tech conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left panel */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl p-6" style={{ background: '#18181b', border: '1px solid #3f3f46' }}>
              <h3 className="text-white font-bold text-base mb-1">Bellamkonda Surya Kiran</h3>
              <p className="text-zinc-400 text-sm mb-0.5">B.Tech CSE · KL University, Vijayawada</p>
              <p className="mono text-sm mb-4" style={{ color: '#a78bfa' }}>CGPA: 9.61</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Seeking internship and collaboration opportunities in full-stack development, AI engineering,
                and cloud-native applications. Let's build something impactful together.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.name !== 'Email' && s.name !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl text-zinc-400 hover:text-zinc-200 transition-all group"
                  style={s.borderStyle}
                >
                  <span className="flex-shrink-0 w-5 h-5">
                    {s.isStroke ? (
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.iconPath} />
                      </svg>
                    ) : (
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d={s.iconFill} />
                      </svg>
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500 mb-0.5">{s.name}</p>
                    <p className="text-xs font-medium truncate">{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-7 flex flex-col gap-4"
            style={{ background: '#18181b', border: '1px solid #3f3f46' }}
          >
            <h3 className="text-white font-bold text-base">Send a Message</h3>

            {sent && (
              <div className="p-3 rounded-xl text-sm flex items-center gap-2" style={{ background: '#052e16', border: '1px solid #15803d', color: '#4ade80' }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Opening your email client...
              </div>
            )}
            {error && (
              <div className="p-3 rounded-xl text-sm" style={{ background: '#1c0000', border: '1px solid #991b1b', color: '#f87171' }}>{error}</div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-zinc-400 text-xs font-medium">Your Name</label>
              <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Doe" style={inputStyle} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-zinc-400 text-xs font-medium">Email Address</label>
              <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" style={inputStyle} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-zinc-400 text-xs font-medium">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Surya, I'd like to discuss..."
                style={{ ...inputStyle, resize: 'none' }}
              />
            </div>

            <button
              id="contact-submit"
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}
            >
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
