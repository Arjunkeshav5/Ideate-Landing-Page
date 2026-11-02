import React, { useState } from 'react';
import {
  Trophy,
  Bot,
  GraduationCap,
  Sparkles,
  Mic,
  Moon,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function ExploreFestival({ onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: 'competitions',
      num: '01',
      title: 'COMPETITIONS',
      subtitle: 'THE ARENA OF SUPREMACY',
      icon: Trophy,
      color: '#ff4d00',
      bgGradient: 'radial-gradient(circle at 10% 20%, rgba(255, 77, 0, 0.15) 0%, rgba(13, 14, 18, 0.8) 80%)',
      desc: 'High-stakes collegiate challenges testing algorithmic precision, structural endurance, aeromodelling, and groundbreaking engineering solutions.',
      tags: ['CODING', 'AEROSPACE', 'MECHATRONICS', 'SUSTAINABILITY'],
      officialLink: 'https://techfest.org/competitions',
      features: ['Nationwide Participation', 'Rigorous Technical Evaluation', 'Championship Accolades'],
    },
    {
      id: 'robotics',
      num: '02',
      title: 'ROBOTICS',
      subtitle: 'HARDWARE & KINETIC COMBAT',
      icon: Bot,
      color: '#00f2fe',
      bgGradient: 'radial-gradient(circle at 90% 20%, rgba(0, 242, 254, 0.15) 0%, rgba(13, 14, 18, 0.8) 80%)',
      desc: 'High-octane flagship combat arenas, autonomous maze-solvers, amphibious rovers, and cutting-edge mechatronic engineering on the frontline.',
      tags: ['ROBOWARS', 'LINE FOLLOWER', 'DRONE SWARMS', 'ALL-TERRAIN'],
      officialLink: 'https://techfest.org/competitions',
      features: ['Heavyweight Combat Arenas', 'Autonomous Rover Trials', 'International Challengers'],
    },
    {
      id: 'workshops',
      num: '03',
      title: 'WORKSHOPS',
      subtitle: 'HANDS-ON SPECIALIZATION',
      icon: GraduationCap,
      color: '#f5f4ef',
      bgGradient: 'radial-gradient(circle at 20% 80%, rgba(245, 244, 239, 0.1) 0%, rgba(13, 14, 18, 0.8) 80%)',
      desc: 'Immersive masterclasses and certified workshops led by prominent researchers and industry stalwarts covering generative AI, cybersecurity, and robotics.',
      tags: ['APPLIED AI', 'CYBER INTELLIGENCE', 'IoT & ROBOTICS', 'CREATIVE TECH'],
      officialLink: 'https://techfest.org/workshops',
      features: ['Industry-Certified Modules', 'Hands-on Kits & Code', 'Mentorship Sessions'],
    },
    {
      id: 'exhibitions',
      num: '04',
      title: 'TECHNOLOGY EXHIBITIONS',
      subtitle: 'GLOBAL PROTOTYPES',
      icon: Sparkles,
      color: '#00f2fe',
      bgGradient: 'radial-gradient(circle at 80% 80%, rgba(0, 242, 254, 0.12) 0%, rgba(13, 14, 18, 0.8) 80%)',
      desc: 'Direct interaction with cutting-edge innovations from international defense labs, research consortia, space agencies, and vanguard innovators worldwide.',
      tags: ['BIONICS', 'DEFENSE TECH', 'AEROSPACE PROTOTYPES', 'HOLOGRAPHIC SYSTEMS'],
      officialLink: 'https://techfest.org/',
      features: ['Global Skunkworks Displays', 'Interactive Demonstrations', 'Direct Inventor Dialogues'],
    },
    {
      id: 'speakers',
      num: '05',
      title: 'SPEAKER SESSIONS',
      subtitle: 'INTELLECTUAL DISCOURSE',
      icon: Mic,
      color: '#ff4d00',
      bgGradient: 'radial-gradient(circle at 50% 10%, rgba(255, 77, 0, 0.12) 0%, rgba(13, 14, 18, 0.8) 80%)',
      desc: 'Unprecedented keynotes and fireside dialogues with Nobel Laureates, astronauts, pioneering researchers, and founders reshaping humanity’s trajectory.',
      tags: ['KEYNOTE LECTURES', 'NOBEL LAUREATES', 'TECH TITANS', 'OPEN Q&A'],
      officialLink: 'https://techfest.org/',
      features: ['Auditorium Keynotes', 'Interactive Fireside Chats', 'Unfiltered Visionary Insight'],
    },
    {
      id: 'technoholix',
      num: '06',
      title: 'TECHNOHOLIX',
      subtitle: 'NIGHT SPECTACLES & ARTS',
      icon: Moon,
      color: '#f5f4ef',
      bgGradient: 'radial-gradient(circle at 50% 90%, rgba(255, 77, 0, 0.14) 0%, rgba(0, 242, 254, 0.08) 50%, rgba(13, 14, 18, 0.8) 80%)',
      desc: 'The sensory climax of Techfest — combining breathtaking pyrotechnics, synchronized drone shows, 3D laser mapping, and world-class audiovisual performances.',
      tags: ['LASER PROJECTIONS', 'DRONE ILLUMINATION', 'ELECTRONIC SYNTHESIS', 'A/V SHOWS'],
      officialLink: 'https://techfest.org/',
      features: ['Open-Air Amphitheater Shows', 'Global Aerial Performers', 'Electric Night Atmosphere'],
    },
  ];

  return (
    <section
      id="explore"
      className="section-padding"
      style={{
        background: '#070709',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="editorial-tag" style={{ marginBottom: '1.25rem' }}>
            <span>// 02. EXPLORE THE FESTIVAL</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.6rem)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                SIX REALMS OF <br />
                <span style={{ color: 'var(--accent-orange)' }}>IMMERSIVE INNOVATION.</span>
              </h2>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: '440px',
                lineHeight: 1.6,
              }}
            >
              Every facet of Techfest 2026 is curated to inspire, challenge, and propel students toward breakthroughs at the frontiers of science and technology.
            </p>
          </div>
        </div>

        {/* 6 Category Distinct Editorial Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isHovered = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => {
                  playHoverSound();
                  setActiveCategory(cat.id);
                }}
                onMouseLeave={() => setActiveCategory(null)}
                style={{
                  background: cat.bgGradient,
                  border: isHovered
                    ? `1px solid ${cat.color}`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '4px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '380px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  boxShadow: isHovered
                    ? `0 12px 35px ${cat.color}22`
                    : 'none',
                }}
              >
                {/* Tech Bracket corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.72rem',
                      color: cat.color,
                      letterSpacing: '0.1em',
                    }}
                  >
                    CAT {cat.num}
                  </span>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      background: cat.color,
                      borderRadius: '50%',
                    }}
                  />
                </div>

                {/* Top Title & Subtitle */}
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '46px',
                      height: '46px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${cat.color}44`,
                      color: cat.color,
                      marginBottom: '1.75rem',
                      borderRadius: '2px',
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {cat.subtitle}
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.9rem',
                      fontWeight: 800,
                      color: 'var(--text-white)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      marginBottom: '1rem',
                    }}
                  >
                    {cat.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>

                {/* Tags and Action */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {cat.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-tech)',
                          fontSize: '0.66rem',
                          letterSpacing: '0.08em',
                          padding: '0.2rem 0.55rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: 'var(--text-white)',
                          borderRadius: '2px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cat.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    style={{
                      textDecoration: 'none',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: cat.color,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      transition: 'gap 0.2s ease',
                    }}
                  >
                    <span>OFFICIAL PORTAL</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Portal Notice */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.25rem 1.75rem',
            background: 'rgba(18, 20, 28, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            borderRadius: '2px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--accent-orange)' }}>●</span>
            <span
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
              }}
            >
              Exact competition schedules, speaker reveals, and workshop slots are published through the official portal.
            </span>
          </div>

          <a
            href="https://techfest.org/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="btn-secondary"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.75rem' }}
          >
            <span>VISIT TECHFEST.ORG</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
