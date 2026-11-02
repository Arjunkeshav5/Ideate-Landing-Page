import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ExploreFestival from './components/ExploreFestival';
import Competitions from './components/Competitions';
import Workshops from './components/Workshops';
import FestivalExperience from './components/FestivalExperience';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import { toggleAudio, playClickSound } from './utils/sound';

export default function App() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    const handleKeyDown = (e) => {
      // Shortcut 'r' or 'R' opens register modal when not in input
      if (
        (e.key === 'r' || e.key === 'R') &&
        !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)
      ) {
        setRegisterOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Scroll Progress Bar at very top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #ff4d00 0%, #00f2fe 100%)',
          boxShadow: '0 0 10px rgba(0, 242, 254, 0.6)',
          zIndex: 9999,
          transition: 'width 0.1s linear',
        }}
      />

      {/* Main Navigation */}
      <Navbar onOpenRegister={() => setRegisterOpen(true)} />

      {/* Main Editorial Sections */}
      <main id="main-content">
        {/* Section 1: Hero Screen */}
        <Hero onOpenRegister={() => setRegisterOpen(true)} />

        {/* Section 2: Introduction & Movement */}
        <Introduction />

        {/* Section 3: Explore the Festival - 6 Realms */}
        <ExploreFestival />

        {/* Section 4: Competitions Matrix */}
        <Competitions />

        {/* Section 5: Workshops Discovery */}
        <Workshops />

        {/* Section 6: Festival Sensory Experience */}
        <FestivalExperience />

        {/* Section 7: Final Call to Action */}
        <FinalCTA onOpenRegister={() => setRegisterOpen(true)} />
      </main>

      {/* Master Footer with Official Disclaimer */}
      <Footer />

      {/* Registration & Delegate Clearance Modal */}
      <RegistrationModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />

      {/* Floating Quick Action Pill on Desktop */}
      <aside
        aria-label="Festival quick telemetry"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 40,
          display: 'none',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(15, 17, 24, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-medium)',
          borderRadius: '9999px',
          padding: '0.4rem 0.8rem',
          fontFamily: 'var(--font-tech)',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        }}
        className="telemetry-float"
      >
        <span style={{ color: 'var(--accent-cyan)' }}>TF26 //</span>
        <span>{Math.round(scrollProgress)}% DEPTH</span>
      </aside>

      <style>{`
        @media (min-width: 1024px) {
          .telemetry-float {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
