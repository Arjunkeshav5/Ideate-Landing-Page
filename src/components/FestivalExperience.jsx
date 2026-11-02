import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Globe2,
  Users2,
  Activity,
  Maximize2,
  Volume2,
  Radio
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function FestivalExperience() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 'exhibitions',
      tag: '01 // PROTOTYPES',
      title: 'INTERNATIONAL SKUNKWORKS EXHIBITIONS',
      quote: 'Where lab inventions step into the sunlight of public awe.',
      desc: 'Techfest transforms the IIT Bombay campus into an open-air laboratory. From humanoid androids and thought-controlled robotic prostheses to supersonic aerodynamic scale models, visitors experience technology before it hits commercial markets.',
      stats: '150+ Prototypes • 20+ Global Research Centers',
      themeColor: 'var(--accent-orange)',
      bgSvgGradient: 'linear-gradient(135deg, rgba(255, 77, 0, 0.15) 0%, rgba(13, 14, 18, 0.95) 75%)',
      highlights: ['Bionic limb testing', 'Autonomous eVTOL systems', 'Superconducting quantum levitation'],
    },
    {
      id: 'robowars',
      tag: '02 // COMBAT ARENA',
      title: 'ROBOWARS: STEEL & PURE KINETIC MIGHT',
      quote: 'The ultimate colosseum for mechanical warriors.',
      desc: 'Inside the bulletproof poly-carbonate battle cage, custom-built combat machines clash in devastating bouts of raw torque, pneumatics, and spinning steel drums. Sparks, tactical driving, and cheers reverberate across the outdoor stadium.',
      stats: '60kg & 15kg Categories • Live Stadium Crowd',
      themeColor: 'var(--accent-cyan)',
      bgSvgGradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(13, 14, 18, 0.95) 75%)',
      highlights: ['Hardened steel armor', '10,000 RPM spinners', 'International champion contenders'],
    },
    {
      id: 'science',
      tag: '03 // SCIENTIFIC FRONTIER',
      title: 'DIALOGUES WITH NOBEL MINDS',
      quote: 'Conversations that shift paradigms and ignite lifelong scientific vocations.',
      desc: 'Techfest’s lecture halls have hosted Nobel Laureates, fields medalists, NASA flight directors, and AI researchers. It provides students an intimate, democratic amphitheater to question the world’s foremost thinkers directly.',
      stats: 'Historical Nobel Laureates • Unfiltered Q&A Sessions',
      themeColor: '#f5f4ef',
      bgSvgGradient: 'linear-gradient(135deg, rgba(245, 244, 239, 0.12) 0%, rgba(13, 14, 18, 0.95) 75%)',
      highlights: ['Nobel lecture series', 'Deep-space mission briefings', 'Ethics of synthetic intelligence'],
    },
    {
      id: 'community',
      tag: '04 // SACRED GROUNDS',
      title: 'THE IIT BOMBAY CAMPUS PULSE',
      quote: 'A confluence of curiosity spanning every state and time zone.',
      desc: 'From the verdant shadows of Powai Lake and the monolithic heights of Sameer Hill to the vibrant corridors of the Student Activity Center, the energy is electric. Lifelong friendships, cross-university startups, and research collaborations ignite here.',
      stats: 'Powai Campus • 175,000+ Footfall Benchmark',
      themeColor: 'var(--accent-cyan)',
      bgSvgGradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(13, 14, 18, 0.95) 75%)',
      highlights: ['Campus wide installations', 'Cross-college hackathon lounges', 'Hackers & founders network'],
    },
    {
      id: 'technoholix',
      tag: '05 // SENSORY TRANSCENDENCE',
      title: 'TECHNOHOLIX: LASER, LIGHT & SOUND',
      quote: 'When the sun sets over Powai, science dissolves into spectacle.',
      desc: 'Technoholix is Techfest’s signature night show. World-renowned illusionists, synchronized drone fleets forming cosmic geometries in the night sky, and avant-garde laser choreography illuminate thousands of cheering spectators.',
      stats: 'Nightly Spectacle • Open Air Gymnasium Ground',
      themeColor: 'var(--accent-orange)',
      bgSvgGradient: 'linear-gradient(135deg, rgba(255, 77, 0, 0.18) 0%, rgba(13, 14, 18, 0.95) 75%)',
      highlights: ['Synchronized aerial drone swarms', '3D laser mapping', 'Pyrotechnic electronic orchestration'],
    },
  ];

  const current = stories[activeStory];

  return (
    <section
      id="experience"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #0d0e14 0%, #070709 100%)',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="editorial-tag editorial-tag-orange" style={{ marginBottom: '1.25rem' }}>
            <span>// 05. THE SENSORY CRUCIBLE</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5.2vw, 4.8rem)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                THE FESTIVAL <br />
                <span style={{ color: 'var(--accent-cyan)' }}>EXPERIENCE.</span>
              </h2>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: '460px',
                lineHeight: 1.6,
              }}
            >
              Beyond competitions and code, Techfest is an unforgettable cultural phenomenon where science transforms into high art and raw celebration.
            </p>
          </div>
        </div>

        {/* Interactive Experience Navigator */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {stories.map((s, idx) => {
            const isSelected = activeStory === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  playClickSound();
                  setActiveStory(idx);
                }}
                onMouseEnter={() => playHoverSound()}
                style={{
                  background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  borderTop: isSelected ? `2px solid ${s.themeColor}` : '2px solid transparent',
                  borderRight: '1px solid var(--border-subtle)',
                  borderBottom: '1px solid var(--border-subtle)',
                  borderLeft: '1px solid var(--border-subtle)',
                  padding: '1.2rem 1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.68rem',
                    color: isSelected ? s.themeColor : 'var(--text-dim)',
                    letterSpacing: '0.12em',
                    marginBottom: '0.4rem',
                  }}
                >
                  {s.tag}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--text-white)' : 'var(--text-muted)',
                    lineHeight: 1.2,
                  }}
                >
                  {s.id.toUpperCase()}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feature Narrative Exhibition Box */}
        <div
          style={{
            background: current.bgSvgGradient,
            border: `1px solid rgba(255, 255, 255, 0.12)`,
            borderRadius: '4px',
            padding: 'clamp(2rem, 4vw, 4rem)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: `0 20px 50px rgba(0, 0, 0, 0.6)`,
            transition: 'all 0.5s ease',
          }}
        >
          {/* Subtle background decorative tech rings (pure SVG) */}
          <svg
            style={{
              position: 'absolute',
              right: '-120px',
              bottom: '-120px',
              width: '450px',
              height: '450px',
              opacity: 0.15,
              pointerEvents: 'none',
            }}
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="85" fill="none" stroke={current.themeColor} strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="60" fill="none" stroke={current.themeColor} strokeWidth="2" />
            <circle cx="100" cy="100" r="35" fill="none" stroke="#fff" strokeWidth="1" />
            <line x1="10" y1="100" x2="190" y2="100" stroke={current.themeColor} strokeWidth="0.5" />
            <line x1="100" y1="10" x2="100" y2="190" stroke={current.themeColor} strokeWidth="0.5" />
          </svg>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Left Story narrative */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.16em',
                  color: current.themeColor,
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Radio size={14} />
                <span>{current.stats}</span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                }}
              >
                {current.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: current.themeColor,
                  lineHeight: 1.4,
                  marginBottom: '1.5rem',
                  borderLeft: `2px solid ${current.themeColor}`,
                  paddingLeft: '1rem',
                }}
              >
                "{current.quote}"
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.02rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}
              >
                {current.desc}
              </p>

              {/* Highlights badge row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {current.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.74rem',
                      padding: '0.35rem 0.8rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-white)',
                      borderRadius: '2px',
                    }}
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Abstract Visual Frame & Telemetry Matrix */}
            <div
              style={{
                background: 'rgba(7, 7, 9, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '4px',
                padding: '2.5rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '1rem',
                  marginBottom: '1.75rem',
                }}
              >
                <span>IIT BOMBAY SENSORY LOG</span>
                <span style={{ color: current.themeColor }}>STREAM: LIVE</span>
              </div>

              {/* Visual geometric kinetic graph */}
              <div
                style={{
                  height: '140px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '6px',
                  marginBottom: '1.75rem',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {[45, 80, 60, 95, 30, 75, 90, 65, 40, 85, 100, 70, 50, 92, 60, 78, 88].map((val, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${val}%`,
                      background: idx % 3 === 0 ? current.themeColor : 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '1px',
                      transition: 'height 0.4s ease',
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.8rem',
                  color: 'var(--text-white)',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: '0.2rem' }}>
                  CURATORIAL NOTE:
                </div>
                Techfest remains completely non-profit and managed entirely by the students of IIT Bombay. A celebration of pure, uncompromised intellectual ambition.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
