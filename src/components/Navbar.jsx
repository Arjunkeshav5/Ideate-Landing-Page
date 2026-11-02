import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { playClickSound, toggleAudio } from '../utils/sound';

export default function Navbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const active = toggleAudio();
    setAudioActive(active);
  };

  const navLinks = [
    { label: 'Overview', href: '#intro', num: '01' },
    { label: 'Explore', href: '#explore', num: '02' },
    { label: 'Competitions', href: '#competitions', num: '03' },
    { label: 'Workshops', href: '#workshops', num: '04' },
    { label: 'Experience', href: '#experience', num: '05' },
  ];

  const handleLinkClick = (e, href) => {
    playClickSound();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-announcement bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #070709 0%, #151821 50%, #070709 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-tech)',
          color: 'var(--text-muted)',
          padding: '0.4rem 1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 60,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', display: 'inline-block', boxShadow: '0 0 8px #00f2fe' }}></span>
            30TH EDITION CELEBRATION
          </span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>IIT BOMBAY • 16–18 DECEMBER 2026</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span style={{ color: 'var(--accent-orange)' }}>CAMPUS AMBASSADOR IDEATION ENTRY</span>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.35s ease',
          background: scrolled
            ? 'rgba(7, 7, 9, 0.88)'
            : 'rgba(7, 7, 9, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid transparent',
          padding: scrolled ? '0.75rem 0' : '1.2rem 0',
        }}
      >
        <div className="site-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo brand */}
          <a
            href="#"
            onClick={(e) => {
              playClickSound();
            }}
            style={{
              textDecoration: 'none',
              color: 'var(--text-white)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                border: '1.5px solid var(--accent-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'rgba(255, 77, 0, 0.08)',
                boxShadow: '0 0 16px rgba(255, 77, 0, 0.25)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: 'var(--text-white)',
                  letterSpacing: '-0.05em',
                }}
              >
                TF
              </span>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-3px',
                  right: '-3px',
                  width: '6px',
                  height: '6px',
                  background: 'var(--accent-cyan)',
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>TECHFEST</span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontFamily: 'var(--font-tech)',
                    padding: '0.15rem 0.4rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '2px',
                    color: 'var(--accent-orange)',
                    fontWeight: 700,
                  }}
                >
                  2026
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  color: 'var(--text-muted)',
                  marginTop: '0.15rem',
                  textTransform: 'uppercase',
                }}
              >
                Aetherial Renaissance
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.2rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '0.35rem',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <span style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', opacity: 0.8 }}>
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Audio Synth Toggle */}
            <button
              onClick={handleSoundToggle}
              title={audioActive ? 'Mute ambient soundscape' : 'Enable ambient soundscape'}
              aria-label="Sound synthesizer toggle"
              style={{
                background: audioActive ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                border: audioActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                color: audioActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
            >
              {audioActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Register Action CTA */}
            <button
              onClick={() => {
                playClickSound();
                onOpenRegister();
              }}
              className="btn-primary"
              style={{
                padding: '0.65rem 1.35rem',
                fontSize: '0.78rem',
              }}
            >
              <Sparkles size={14} />
              <span>Register</span>
            </button>

            {/* Mobile Hamburger button */}
            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
              style={{
                display: 'none',
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-white)',
                width: '38px',
                height: '38px',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '85px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(7, 7, 9, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-white)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingBottom: '0.8rem',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
                  {link.num}
                </span>
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="btn-primary"
            style={{ width: '100%', padding: '1rem' }}
          >
            REGISTER NOW
          </button>
        </div>
      )}

      {/* Media Query Helpers inline */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
