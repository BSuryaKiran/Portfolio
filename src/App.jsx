import { useEffect } from 'react';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Skills         from './components/Skills';
import Projects       from './components/Projects';
import Certifications from './components/Certifications';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

export default function App() {
  /* Scroll-reveal: add 'visible' to .reveal elements when they enter the viewport */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: '#09090b', minHeight: '100vh', color: '#fafafa' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
