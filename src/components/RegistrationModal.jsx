import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, Copy, Download, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playChime } from '../utils/sound';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    domain: 'Competitions',
    role: 'Participant',
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();

    // Generate random pass id
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const newId = `TF26-AR-${randomHex}`;
    setTicketId(newId);
    setSubmitted(true);

    // Audio chime & confetti
    playChime(659.25, 987.77);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4d00', '#00f2fe', '#ffffff', '#8e94a5'],
    });
  };

  const handleCopyId = () => {
    playClickSound();
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(5, 5, 7, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playClickSound();
          onClose();
        }
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '540px',
          background: '#0d0f15',
          border: '1px solid var(--border-medium)',
          borderRadius: '4px',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 77, 0, 0.15)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playClickSound();
            onClose();
          }}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Modal Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="editorial-tag editorial-tag-orange" style={{ marginBottom: '0.75rem' }}>
                <span>// REGISTRATION PORTAL</span>
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: '1.9rem',
                  fontWeight: 800,
                  color: 'var(--text-white)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                JOIN THE AETHERIAL RENAISSANCE.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.5rem',
                  lineHeight: 1.5,
                }}
              >
                Reserve your delegate interest for Techfest 2026 at IIT Bombay.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.74rem',
                    color: 'var(--text-white)',
                    letterSpacing: '0.08em',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.8rem 1rem',
                    borderRadius: '2px',
                    color: 'var(--text-white)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.74rem',
                    color: 'var(--text-white)',
                    letterSpacing: '0.08em',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Institutional Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@college.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.8rem 1rem',
                    borderRadius: '2px',
                    color: 'var(--text-white)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.74rem',
                    color: 'var(--text-white)',
                    letterSpacing: '0.08em',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  College / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. National Institute of Technology"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.8rem 1rem',
                    borderRadius: '2px',
                    color: 'var(--text-white)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.74rem',
                      color: 'var(--text-white)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Primary Focus
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#151821',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.8rem',
                      borderRadius: '2px',
                      color: 'var(--text-white)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Competitions">Competitions</option>
                    <option value="Robotics">Robotics & Robowars</option>
                    <option value="Workshops">Certified Workshops</option>
                    <option value="Exhibitions">Tech Exhibitions</option>
                    <option value="Speaker Sessions">Keynote Lectures</option>
                    <option value="Technoholix">Technoholix Shows</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.74rem',
                      color: 'var(--text-white)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Delegate Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#151821',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.8rem',
                      borderRadius: '2px',
                      color: 'var(--text-white)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Participant">Competitor / Participant</option>
                    <option value="College Ambassador">College Ambassador (CA)</option>
                    <option value="Attendee">General Attendee</option>
                    <option value="Academic">Faculty / Researcher</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '0.75rem', padding: '1.05rem' }}
              >
                <Sparkles size={16} />
                <span>GENERATE DELEGATE PASS</span>
              </button>
            </form>
          </>
        ) : (
          /* Success Screen with Pass */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: 'var(--accent-cyan)',
              }}
            >
              <CheckCircle size={32} />
            </div>

            <div className="editorial-tag" style={{ marginBottom: '0.75rem' }}>
              <span>DELEGATE CLEARANCE CONFIRMED</span>
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--text-white)',
                marginBottom: '0.5rem',
              }}
            >
              WELCOME TO TECHFEST 2026
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
              }}
            >
              Greetings, <strong style={{ color: 'var(--text-white)' }}>{formData.name}</strong>. Your provisional pass token has been verified.
            </p>

            {/* Pass Preview Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #181b24 0%, #0a0c11 100%)',
                border: '1px dashed var(--accent-orange)',
                borderRadius: '4px',
                padding: '1.5rem',
                marginBottom: '2rem',
                textAlign: 'left',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
                  IIT BOMBAY • 30TH EDITION
                </span>
                <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.7rem', color: 'var(--accent-orange)' }}>
                  {formData.role.toUpperCase()}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--text-white)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.75rem',
                }}
              >
                {ticketId}
              </div>

              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <div>Institution: {formData.college}</div>
                <div>Focus: {formData.domain}</div>
                <div>Dates: 16–18 December 2026 • Powai Campus</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                onClick={handleCopyId}
                className="btn-secondary"
                style={{ padding: '0.75rem 1.4rem', fontSize: '0.82rem' }}
              >
                <Copy size={15} />
                <span>{copied ? 'TOKEN COPIED!' : 'COPY TOKEN'}</span>
              </button>

              <a
                href="https://techfest.org/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="btn-primary"
                style={{ padding: '0.75rem 1.4rem', fontSize: '0.82rem' }}
              >
                <span>OFFICIAL SITE</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
