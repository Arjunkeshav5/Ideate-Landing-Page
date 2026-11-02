import React from 'react';
import { ArrowUp, ExternalLink, ShieldAlert, Heart, Terminal, Compass } from 'lucide-react';
import { playClickSound } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040406',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="site-container">
        
        {/* Prominent Mandatory Creative Redesign Disclaimer Notice */}
        <div
          style={{
            background: 'rgba(255, 77, 0, 0.05)',
            border: '1px solid var(--border-accent-orange)',
            borderRadius: '4px',
            padding: '1.25rem 1.75rem',
            marginBottom: '4rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <ShieldAlert size={20} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-white)', display: 'block', marginBottom: '0.2rem' }}>
              CREATIVE REDESIGN / IDEATION CONCEPT DISCLAIMER:
            </strong>
            This web experience is an independent creative redesign and ideation project conceptualized for the{' '}
            <span style={{ color: 'var(--accent-cyan)' }}>IIT Bombay Techfest College Ambassador Program (Domain: Web Development)</span>.
            It is not the official Techfest website, nor is it an officially approved redesign. For official announcements, registrations, and confirmed festival schedules, please visit the official website at{' '}
            <a
              href="https://techfest.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}
            >
              https://techfest.org/
            </a>.
          </div>
        </div>

        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-white)',
                letterSpacing: '0.04em',
                marginBottom: '0.5rem',
              }}
            >
              TECHFEST 2026
            </div>
            <div
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.75rem',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.14em',
                marginBottom: '1rem',
              }}
            >
              AETHERIAL RENAISSANCE
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              Asia's Largest Science and Technology Festival. Organized by the students of Indian Institute of Technology Bombay.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
              }}
            >
              30TH EDITION • POWAI, MUMBAI
            </div>
          </div>

          {/* Festival Realms Navigation */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                color: 'var(--text-white)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Festival Realms
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Competitions', href: '#competitions' },
                { name: 'Workshops', href: '#workshops' },
                { name: 'Robotics Arenas', href: '#explore' },
                { name: 'Tech Exhibitions', href: '#experience' },
                { name: 'Technoholix Nights', href: '#experience' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={() => playClickSound()}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-orange)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Techfest Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                color: 'var(--text-white)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Official Links
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Techfest Official Homepage', url: 'https://techfest.org/' },
                { name: 'Official Workshops Portal', url: 'https://techfest.org/workshops' },
                { name: 'Official Competitions Portal', url: 'https://techfest.org/competitions' },
                { name: 'IIT Bombay Official Website', url: 'https://www.iitb.ac.in/' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <span>{item.name}</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Submission Details */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                color: 'var(--text-white)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Project Specifications
            </div>
            <div
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
              }}
            >
              <div><strong>Program:</strong> Techfest CA 2026</div>
              <div><strong>Domain:</strong> Web Development</div>
              <div><strong>Task:</strong> Ideate Landing Page</div>
              <div><strong>Points:</strong> 100</div>
              <div><strong>Engine:</strong> React + Vite 2D</div>
              <div style={{ color: 'var(--accent-cyan)', marginTop: '0.5rem' }}>
                GitHub Pages Ready
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
            }}
          >
            © 2026 TECHFEST IIT BOMBAY • AETHERIAL RENAISSANCE CONCEPT • CRAFTED WITH 2D VECTOR & TYPOGRAPHIC EXCELLENCE
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-white)',
              padding: '0.6rem 1.1rem',
              borderRadius: '2px',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.75rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-orange)';
              e.currentTarget.style.color = 'var(--accent-orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-white)';
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
