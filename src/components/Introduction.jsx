import React, { useState, useEffect } from 'react';
import { Award, Globe2, School, Users, Zap, ShieldCheck } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export default function Introduction() {
  const [activeTab, setActiveTab] = useState(0);

  // Benchmarked facts & historical highlights
  const metrics = [
    {
      num: '30',
      suffix: 'TH',
      label: 'EDITION REACHED',
      detail: 'Three continuous decades of student-driven innovation, engineering leadership, and scientific discovery.',
    },
    {
      num: '2,500',
      suffix: '+',
      label: 'COLLEGES ENGAGED',
      detail: 'A nationwide academic footprint inspiring students, researchers, and creators across the subcontinent.',
    },
    {
      num: '60',
      suffix: '+',
      label: 'NATIONS CONNECTED',
      detail: 'International participation in robotics, orbital technology, computational linguistics, and open challenges.',
    },
    {
      num: '175K',
      suffix: '+',
      label: 'FOOTFALL BENCHMARK',
      detail: 'One of the world’s most energetic gatherings of innovators, scientists, artists, and engineers.',
    },
  ];

  const pillars = [
    {
      title: 'Vanguard Pedagogy',
      desc: 'Hands-on exposure to quantum mechanics, aerospace autonomy, neural computing, and synthetic bio-interfaces.',
    },
    {
      title: 'Global Battleground',
      desc: 'From intense Robowars combat arenas to global algorithmic hackathons, ideas are tested in high-stakes environments.',
    },
    {
      title: 'Democratic Access',
      desc: 'Empowering tier-1 to tier-3 colleges through open lectures with Nobel laureates, astronauts, and tech architects.',
    },
  ];

  return (
    <section
      id="intro"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #070709 0%, #0d0e13 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 77, 0, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="site-container">
        
        {/* Section Header with Eyebrow */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="editorial-tag editorial-tag-orange" style={{ marginBottom: '1.25rem' }}>
            <span>// 01. PHILOSOPHICAL ESSENCE</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                }}
              >
                NOT JUST A FESTIVAL.
                <br />
                <span
                  style={{
                    color: 'var(--accent-cyan)',
                    textShadow: '0 0 35px var(--accent-cyan-glow)',
                  }}
                >
                  A MOVEMENT.
                </span>
              </h2>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.08rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                borderLeft: '1px solid var(--border-medium)',
                paddingLeft: '1.75rem',
              }}
            >
              <p style={{ marginBottom: '1rem' }}>
                Born in <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>1998</span> within the crucible of{' '}
                <strong style={{ color: 'var(--text-white)' }}>IIT Bombay</strong>, Techfest has evolved from an ambitious campus initiative into Asia's premier celebration of science and technology.
              </p>
              <p>
                Under the 2026 curatorial theme of <span style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>Aetherial Renaissance</span>, we synthesize raw engineering discipline with philosophical imagination, turning ideas into tangible reality.
              </p>
            </div>
          </div>
        </div>

        {/* Asymmetrical Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              onMouseEnter={() => playHoverSound()}
              style={{
                padding: '2.2rem 1.8rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition-smooth)',
                background: 'rgba(15, 17, 24, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
              }}
            >
              {/* Corner tech accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '28px',
                  height: '28px',
                  borderTop: '2px solid var(--accent-orange)',
                  borderRight: '2px solid var(--accent-orange)',
                  opacity: 0.7,
                }}
              />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.2rem',
                  fontFamily: 'var(--font-display)',
                  marginBottom: '0.8rem',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(3rem, 4.5vw, 4.2rem)',
                    fontWeight: 800,
                    color: 'var(--text-white)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {item.num}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: idx % 2 === 0 ? 'var(--accent-orange)' : 'var(--accent-cyan)',
                  }}
                >
                  {item.suffix}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.14em',
                  color: 'var(--text-white)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                {item.label}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Philosophy Pillars */}
        <div
          style={{
            border: '1px solid var(--border-subtle)',
            background: 'rgba(18, 20, 28, 0.45)',
            padding: '2.5rem',
            borderRadius: '4px',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              color: 'var(--accent-cyan)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Zap size={14} />
            <span>FOUNDATIONAL CORNERSTONES</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {pillars.map((pillar, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.9rem',
                    color: 'var(--accent-orange)',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                  }}
                >
                  0{i + 1}. // {pillar.title}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Kinetic Editorial Marquee Ticker */}
      <div
        style={{
          marginTop: '5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(7, 7, 9, 0.9)',
          padding: '1rem 0',
        }}
      >
        <div className="marquee-container">
          <div className="marquee-content">
            {[
              'AUTONOMOUS FLIGHT',
              '•',
              'KINETIC ROBOTICS',
              '•',
              'QUANTUM TELEMETRY',
              '•',
              'SYNTHETIC NEURAL ARCHITECTURES',
              '•',
              'HIGH-OCTANE ROBOWARS',
              '•',
              'AETHERIAL RENAISSANCE',
              '•',
              'IIT BOMBAY POWAI',
              '•',
              'DECEMBER 16–18 2026',
              '•',
            ].map((text, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: text === '•' ? 'var(--accent-orange)' : 'var(--text-white)',
                  letterSpacing: '0.08em',
                  margin: '0 1.25rem',
                  opacity: text === '•' ? 1 : 0.85,
                }}
              >
                {text}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless infinite loop */}
          <div className="marquee-content" aria-hidden="true">
            {[
              'AUTONOMOUS FLIGHT',
              '•',
              'KINETIC ROBOTICS',
              '•',
              'QUANTUM TELEMETRY',
              '•',
              'SYNTHETIC NEURAL ARCHITECTURES',
              '•',
              'HIGH-OCTANE ROBOWARS',
              '•',
              'AETHERIAL RENAISSANCE',
              '•',
              'IIT BOMBAY POWAI',
              '•',
              'DECEMBER 16–18 2026',
              '•',
            ].map((text, idx) => (
              <span
                key={`dup-${idx}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: text === '•' ? 'var(--accent-orange)' : 'var(--text-white)',
                  letterSpacing: '0.08em',
                  margin: '0 1.25rem',
                  opacity: text === '•' ? 1 : 0.85,
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
