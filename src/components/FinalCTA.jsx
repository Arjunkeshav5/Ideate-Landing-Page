import React from 'react';
import { ArrowUpRight, Sparkles, Compass, ExternalLink } from 'lucide-react';
import { playClickSound } from '../utils/sound';

export default function FinalCTA({ onOpenRegister }) {
  return (
    <section
      id="cta"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #070709 0%, #10121a 50%, #070709 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center',
      }}
    >
      {/* Background ambient lighting pulse */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '450px',
          background: 'radial-gradient(ellipse at center, rgba(255, 77, 0, 0.12) 0%, rgba(0, 242, 254, 0.05) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Eyebrow badge */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="editorial-tag editorial-tag-orange">
            <Sparkles size={13} />
            <span>// 06. THE INVITATION</span>
          </div>
        </div>

        {/* Oversized High-Impact Headline */}
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(3.5rem, 9.5vw, 9rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            marginBottom: '2rem',
          }}
        >
          <span style={{ color: 'var(--text-white)', display: 'block' }}>
            THE FUTURE
          </span>
          <span
            style={{
              color: 'var(--accent-orange)',
              textShadow: '0 0 50px var(--accent-orange-glow)',
              display: 'block',
            }}
          >
            ISN'T WAITING.
          </span>
        </h2>

        {/* Supporting Line */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2.4vw, 1.8rem)',
            fontWeight: 500,
            color: 'var(--text-white)',
            maxWidth: '680px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.4,
          }}
        >
          Bring your curiosity. Build what comes next.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          <button
            onClick={() => {
              playClickSound();
              onOpenRegister();
            }}
            className="btn-primary"
            style={{
              padding: '1.2rem 2.8rem',
              fontSize: '1rem',
            }}
          >
            <Sparkles size={18} />
            <span>REGISTER FOR TECHFEST</span>
          </button>

          <a
            href="https://techfest.org/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="btn-secondary"
            style={{
              padding: '1.2rem 2.5rem',
              fontSize: '1rem',
            }}
          >
            <span>EXPLORE THE OFFICIAL WEBSITE</span>
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Date and Location Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontFamily: 'var(--font-tech)',
            fontSize: '0.82rem',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            padding: '0.8rem 1.6rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span>30TH EDITION</span>
          <span style={{ color: 'var(--accent-cyan)' }}>•</span>
          <span>16–18 DECEMBER 2026</span>
          <span style={{ color: 'var(--accent-cyan)' }}>•</span>
          <span>IIT BOMBAY, MUMBAI</span>
        </div>

      </div>
    </section>
  );
}
