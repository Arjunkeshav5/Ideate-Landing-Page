import React, { useState } from 'react';
import {
  ShieldAlert,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  Users,
  Compass
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function Competitions() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expandedId, setExpandedId] = useState(null);

  const filterTabs = [
    { id: 'ALL', label: 'All Domains' },
    { id: 'ROBOTICS', label: 'Robotics' },
    { id: 'AI', label: 'AI & Computing' },
    { id: 'ENGINEERING', label: 'Engineering' },
    { id: 'INNOVATION', label: 'Innovation' },
  ];

  const tracks = [
    {
      id: 'comp-1',
      num: '01',
      category: 'ROBOTICS',
      title: 'KINETIC ROBOTICS & ARENA COMBAT',
      subtitle: 'High-torque kinetic weaponry, radio telemetry, and autonomous micro-navigation.',
      accent: 'var(--accent-orange)',
      overview:
        'Engage in premier hardware showdowns ranging from full-contact combat arenas to ultra-precise autonomous obstacle avoidance.',
      disciplines: ['Kinematic Architecture', 'High-Discharge Power Systems', 'Radio Frequency Control'],
      teamFormat: 'Collegiate Squads (1–5 Members)',
      evaluation: 'Combat Performance • Chassis Integrity • Autonomy Precision',
    },
    {
      id: 'comp-2',
      num: '02',
      category: 'AI',
      title: 'NEURAL COMPUTING & ALGORITHMIC SPEED',
      subtitle: 'Distributed systems, heuristic search algorithms, and competitive machine intelligence.',
      accent: 'var(--accent-cyan)',
      overview:
        'Tackle algorithmic bottlenecks under tight execution constraints, solving complex real-time computational problems.',
      disciplines: ['Algorithmic Complexity', 'Neural Inference Optimization', 'Distributed Consensus'],
      teamFormat: 'Individual or Duos',
      evaluation: 'Time Complexity • Code Purity • Edge-case Robustness',
    },
    {
      id: 'comp-3',
      num: '03',
      category: 'ENGINEERING',
      title: 'AEROSPACE & AUTONOMOUS UAV DYNAMICS',
      subtitle: 'Fixed-wing aerodynamic design, autonomous waypoint payload drops, and RC maneuvering.',
      accent: '#f5f4ef',
      overview:
        'Test student-engineered aircraft in aerodynamic efficiency, flight endurance, and precision mission execution.',
      disciplines: ['Avionics Microcontrollers', 'Lift-to-Drag Optimization', 'Telemetry Tracking'],
      teamFormat: 'Engineering Squads (2–6 Members)',
      evaluation: 'Payload Accuracy • Flight Stability • Structural Innovation',
    },
    {
      id: 'comp-4',
      num: '04',
      category: 'ENGINEERING',
      title: 'MECHATRONIC PRODUCT HARDWARE',
      subtitle: 'Additive manufacturing, rapid prototyping, sensor fusion, and embedded firmware.',
      accent: 'var(--accent-orange)',
      overview:
        'Transform concept schematics into functional hardware prototypes addressing tangible industrial and social challenges.',
      disciplines: ['SolidWorks / CAD Modeling', 'Custom PCB Layout', 'Microcontroller Firmware'],
      teamFormat: 'Multi-disciplinary Teams',
      evaluation: 'Mechanical Durability • Sensor Accuracy • Prototype Viability',
    },
    {
      id: 'comp-5',
      num: '05',
      category: 'INNOVATION',
      title: 'CLIMATE TECH & SUSTAINABLE SYSTEMS',
      subtitle: 'Decarbonization, microgrid thermodynamics, and next-generation clean materials.',
      accent: 'var(--accent-cyan)',
      overview:
        'Develop actionable engineering blueprints and laboratory prototypes to tackle pressing ecological crises.',
      disciplines: ['Thermodynamic Modeling', 'Circular Material Science', 'Decentralized Energy'],
      teamFormat: 'Collegiate Innovators (1–4 Members)',
      evaluation: 'Scalability • Carbon Abatement Potential • Scientific Rigor',
    },
    {
      id: 'comp-6',
      num: '06',
      category: 'AI',
      title: 'CYBERSECURITY & REVERSE ENGINEERING',
      subtitle: 'Capture the flag, cryptography puzzles, network vulnerability penetration testing.',
      accent: '#f5f4ef',
      overview:
        'Collegiate security researchers audit target instances, crack cryptographic ciphers, and defend digital infrastructure.',
      disciplines: ['Binary Exploitation', 'Applied Cryptography', 'Forensic Packet Analysis'],
      teamFormat: 'Squads (Up to 4 Members)',
      evaluation: 'Flag Capture Speed • Exploit Documentation • Attack Defense',
    },
  ];

  const filteredTracks = activeFilter === 'ALL'
    ? tracks
    : tracks.filter((t) => t.category === activeFilter);

  return (
    <section
      id="competitions"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #070709 0%, #0d0e14 100%)',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="site-container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="editorial-tag editorial-tag-orange" style={{ marginBottom: '1.25rem' }}>
            <span>// 03. COMPETITIVE ARENAS</span>
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
                PROVE YOUR METTLE. <br />
                <span style={{ color: 'var(--accent-cyan)' }}>CLAIM SUPREMACY.</span>
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
              Explore Techfest's flagship competition domains. Detailed problem statements, rulebooks, and registration portals are maintained on the official site.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '3rem',
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playClickSound();
                  setActiveFilter(tab.id);
                }}
                style={{
                  background: isActive ? 'var(--text-white)' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#070709' : 'var(--text-muted)',
                  border: isActive ? '1px solid var(--text-white)' : '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Asymmetric Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredTracks.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => playHoverSound()}
                style={{
                  background: 'rgba(15, 17, 24, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '3px',
                  padding: '2.4rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'var(--transition-smooth)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Top Numbering and Category Badge */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                      paddingBottom: '1.25rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: 'var(--text-white)',
                        lineHeight: 1,
                      }}
                    >
                      {item.num}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.14em',
                        color: item.accent,
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '2px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: 'var(--text-white)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {item.subtitle}
                  </p>

                  {/* Expanded detail toggle */}
                  {isExpanded && (
                    <div
                      style={{
                        background: 'rgba(7, 7, 9, 0.7)',
                        padding: '1.2rem',
                        borderRadius: '2px',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        marginBottom: '1.5rem',
                        animation: 'fadeIn 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-tech)',
                          fontSize: '0.7rem',
                          color: 'var(--accent-cyan)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: '0.6rem',
                        }}
                      >
                        CORE DISCIPLINES
                      </div>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          fontSize: '0.85rem',
                          color: 'var(--text-white)',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.disciplines.map((d, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ color: 'var(--accent-orange)' }}>›</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        style={{
                          marginTop: '0.8rem',
                          fontFamily: 'var(--font-tech)',
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                          paddingTop: '0.6rem',
                        }}
                      >
                        FORMAT: {item.teamFormat}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <button
                    onClick={() => {
                      playClickSound();
                      setExpandedId(isExpanded ? null : item.id);
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      padding: 0,
                      textTransform: 'uppercase',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {isExpanded ? '[- HIDE BREAKDOWN]' : '[+ VIEW BREAKDOWN]'}
                  </button>

                  <a
                    href="https://techfest.org/competitions"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    style={{
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-white)',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-orange)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                  >
                    <span>OFFICIAL RULEBOOK</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitions CTA bar */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
          }}
        >
          <a
            href="https://techfest.org/competitions"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="btn-primary"
            style={{ padding: '1rem 2.5rem' }}
          >
            <span>EXPLORE ALL COMPETITIONS ON TECHFEST.ORG</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
