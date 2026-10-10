import './MarqueeBanner.css';

const ITEMS = [
  { text: 'FULL STACK ARCHITECTURE', color: '#a78bfa' },
  { text: 'GENERATIVE AI & MULTIMODAL INTELLIGENCE', color: '#38bdf8' },
  { text: 'SPRING BOOT & REST APIS', color: '#34d399' },
  { text: 'REACT 19 & VITE', color: '#60a5fa' },
  { text: 'AWS CLF-C02 CERTIFIED', color: '#fb923c' },
  { text: 'GITHUB COPILOT CERTIFIED', color: '#f472b6' },
  { text: '9.61 CGPA · KL UNIVERSITY', color: '#facc15' },
];

export default function MarqueeBanner({ reverse = false }) {
  const content = [...ITEMS, ...ITEMS];

  return (
    <div className={`marquee-wrapper ${reverse ? 'marquee-reverse' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {content.map((item, idx) => (
          <div key={idx} className="marquee-item">
            <span className="marquee-dot" style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
            <span className="marquee-text" style={{ '--item-accent': item.color }}>
              {item.text}
            </span>
            <span className="marquee-star">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
