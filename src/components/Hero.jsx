import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Compass, ShieldAlert, Cpu, Terminal } from 'lucide-react';
import LightTrailsCanvas from './LightTrailsCanvas';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function Hero({ onOpenRegister }) {
  // Countdown to 16 Dec 2026
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 14, minutes: 28, seconds: 19 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-12-16T09:00:00+05:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    const handleMouseMove = (e) => {
      setMousePos({
        x: Math.round((e.clientX / window.innerWidth) * 100),
        y: Math.round((e.clientY / window.innerHeight) * 100),
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        paddingTop: '3.5rem',
        paddingBottom: '3rem',
      }}
    >
      {/* 2D Light trails & energy canvas backdrop */}
      <LightTrailsCanvas />

      {/* Subtle geometric grid backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 45%, transparent 20%, #070709 85%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Top telemetry HUD bar */}
      <div className="site-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1rem',
            fontFamily: 'var(--font-tech)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="editorial-tag">30TH EDITION</span>
            <span style={{ color: 'var(--text-white)' }}>IIT BOMBAY</span>
          </div>

          <div style={{ display: 'none', gap: '2rem' }} className="telemetry-center">
            <span>COORDS: 19.1334° N, 72.9133° E</span>
            <span>SYSTEM: NOMINAL [NODE: {mousePos.x}:{mousePos.y}]</span>
          </div>

          <div style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>
            16–18 DECEMBER 2026
          </div>
        </div>
      </div>

      {/* Main Center Editorial Typography */}
      <div className="site-container" style={{ position: 'relative', zIndex: 2, width: '100%', margin: 'auto 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'end' }}>
          
          <div>
            {/* Concept Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-tech)',
                fontSize: '0.85rem',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              <Cpu size={14} />
              <span>AETHERIAL RENAISSANCE</span>
              <span style={{ width: '40px', height: '1px', background: 'var(--accent-cyan)', opacity: 0.5 }}></span>
            </div>

            {/* Oversized Stacked Headline: TECH FEST 2026 */}
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(3.8rem, 13vw, 12rem)',
                lineHeight: 0.88,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  color: 'var(--text-white)',
                  textShadow: '0 0 60px rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem',
                }}
              >
                <span>TECH</span>
                <span
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 2.4rem)',
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 400,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  // 30 YRS OF GENIUS
                </span>
              </span>

              <span
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.85)',
                  display: 'inline-block',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  playHoverSound();
                  e.currentTarget.style.color = 'var(--accent-orange)';
                  e.currentTarget.style.WebkitTextStroke = '2px var(--accent-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'transparent';
                  e.currentTarget.style.WebkitTextStroke = '2px rgba(255, 255, 255, 0.85)';
                }}
              >
                FEST
              </span>

              <span
                style={{
                  color: 'var(--accent-orange)',
                  textShadow: '0 0 40px var(--accent-orange-glow)',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1.5rem',
                }}
              >
                <span>2026</span>
                <span
                  style={{
                    fontSize: 'clamp(0.85rem, 1.8vw, 1.5rem)',
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: 'var(--accent-cyan)',
                    textShadow: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  [DECEMBER EDITION]
                </span>
              </span>
            </h1>

            {/* Supporting Headline: WHERE THE FUTURE TAKES FORM */}
            <div
              style={{
                marginTop: '2rem',
                maxWidth: '680px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.8vw, 2.2rem)',
                  fontWeight: 600,
                  color: 'var(--text-white)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.25,
                  marginBottom: '1rem',
                }}
              >
                WHERE THE FUTURE TAKES FORM.
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.12rem)',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  maxWidth: '560px',
                }}
              >
                The vanguard convergence of artificial intelligence, robotic combat, boundary-pushing exhibitions, and visionary scientific discourse at Indian Institute of Technology Bombay.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginTop: '2.5rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#explore"
                onClick={() => playClickSound()}
                className="btn-primary"
              >
                <Compass size={17} />
                <span>EXPLORE EVENTS</span>
              </a>

              <button
                onClick={() => {
                  playClickSound();
                  onOpenRegister();
                }}
                className="btn-secondary"
              >
                <Sparkles size={17} />
                <span>REGISTER NOW</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Bar with Countdown & Scroll Indicator */}
      <div className="site-container" style={{ position: 'relative', zIndex: 2, width: '100%', marginTop: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
          }}
        >
          {/* Live countdown */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.68rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}
            >
              COUNTDOWN TO CONVERGENCE
            </div>
            <div
              style={{
                display: 'flex',
                gap: '1.2rem',
                fontFamily: 'var(--font-tech)',
              }}
            >
              {[
                { val: timeLeft.days, label: 'DAYS' },
                { val: timeLeft.hours, label: 'HRS' },
                { val: timeLeft.minutes, label: 'MIN' },
                { val: timeLeft.seconds, label: 'SEC' },
              ].map((unit, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--text-white)',
                      lineHeight: 1,
                    }}
                  >
                    {String(unit.val).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Edition Milestone summary */}
          <div
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
              borderLeft: '2px solid rgba(255, 255, 255, 0.1)',
              paddingLeft: '1.2rem',
            }}
          >
            <div style={{ color: 'var(--text-white)', fontWeight: 600 }}>
              3 DECADES OF INTELLECTUAL MOMENTUM
            </div>
            <div>Asia's Premier Science & Technology Festival</div>
          </div>

          {/* Scroll down indicator */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <a
              href="#intro"
              onClick={() => playClickSound()}
              style={{
                textDecoration: 'none',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-tech)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-orange)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <span>DISCOVER ESSENCE</span>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowDown size={14} style={{ animation: 'bounceDown 2s infinite ease-in-out' }} />
              </div>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @media (min-width: 900px) {
          .telemetry-center {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
