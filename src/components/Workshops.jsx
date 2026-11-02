import React, { useState } from 'react';
import {
  BrainCircuit,
  Cpu,
  Lock,
  Palette,
  Briefcase,
  Clock,
  Award,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function Workshops() {
  const [selectedDomain, setSelectedDomain] = useState('AI_DATA');

  const domains = [
    { id: 'AI_DATA', label: 'AI and Data', icon: BrainCircuit, color: 'var(--accent-cyan)' },
    { id: 'ROBOTICS', label: 'Robotics & Engineering', icon: Cpu, color: 'var(--accent-orange)' },
    { id: 'CYBERSECURITY', label: 'Cybersecurity', icon: Lock, color: '#f5f4ef' },
    { id: 'DESIGN', label: 'Design & Creative Tech', icon: Palette, color: 'var(--accent-cyan)' },
    { id: 'BUSINESS', label: 'Business & Management', icon: Briefcase, color: 'var(--accent-orange)' },
  ];

  const workshopsData = {
    AI_DATA: [
      {
        id: 'ws-ai-1',
        title: 'Deep Generative Models & LLM Architecture',
        level: 'Intermediate to Advanced',
        duration: '16 Hours • 2 Days',
        prereq: 'Python, Basic Linear Algebra',
        description: 'Hands-on training dissecting transformer self-attention mechanisms, parameter-efficient fine-tuning (LoRA), and retrieval-augmented generation pipelines.',
        modules: [
          'Transformer Multi-Head Attention Mechanisms',
          'RAG Pipelines with Vector Embeddings',
          'Fine-Tuning Open Source LLMs Locally',
          'Production Deployment & Latency Optimization'
        ],
        certification: 'IIT Bombay Techfest Certified',
      },
      {
        id: 'ws-ai-2',
        title: 'Computer Vision & Edge Perception Systems',
        level: 'All Levels',
        duration: '14 Hours • 2 Days',
        prereq: 'Foundational Programming',
        description: 'Building real-time computer vision models for autonomous systems, spatial object tracking, and edge deployment on micro-tensor acceleration units.',
        modules: [
          'Spatial Object Detection & Segmentation',
          'TensorRT & Quantization for Edge Hardware',
          'Multi-Camera Visual SLAM Foundations',
          'Interactive Hardware Deployment Lab'
        ],
        certification: 'IIT Bombay Techfest Certified',
      },
    ],
    ROBOTICS: [
      {
        id: 'ws-rob-1',
        title: 'Autonomous Mobile Robotics (AMR) & ROS 2',
        level: 'Intermediate',
        duration: '16 Hours • 2 Days',
        prereq: 'C++ or Python, Linux basics',
        description: 'Practical immersion in Robot Operating System 2 (ROS 2), sensor fusion with LiDAR and IMUs, and autonomous path planning in dynamic environments.',
        modules: [
          'ROS 2 Node Architecture & DDS Middleware',
          'LiDAR Odometry & 2D/3D Occupancy Mapping',
          'Nav2 Stack Configuration for Mobile Bases',
          'Hardware-in-the-Loop Simulation with Gazebo'
        ],
        certification: 'IIT Bombay Techfest Certified',
      },
      {
        id: 'ws-rob-2',
        title: 'Embedded Drone Avionics & Autopilot Systems',
        level: 'Beginner to Intermediate',
        duration: '14 Hours • 2 Days',
        prereq: 'Basic Electronics',
        description: 'From brushless ESC timing to PID flight controllers, construct and calibrate a functional quadrotor flight stack from scratch.',
        modules: [
          'Aerodynamic Thrust & Motor Sizing Calculations',
          'Flight Controller Firmware Architecture',
          'PID Tuning & Stabilization Telemetry',
          'Autonomous Waypoint Mission Execution'
        ],
        certification: 'IIT Bombay Techfest Certified',
      },
    ],
    CYBERSECURITY: [
      {
        id: 'ws-sec-1',
        title: 'Offensive Security & Cloud Infrastructure Auditing',
        level: 'Intermediate',
        duration: '14 Hours • 2 Days',
        prereq: 'Networking Basics, Linux Terminal',
        description: 'Master penetration testing frameworks, container breakout vectors, IAM privilege escalation, and modern red-team operational tactics.',
        modules: [
          'Modern Reconnaissance & Attack Surface Mapping',
          'Privilege Escalation & Lateral Movement',
          'Kubernetes & Cloud Security Posture Review',
          'Live CTF Defense & Incident Response Drills'
        ],
        certification: 'IIT Bombay Techfest Certified',
      },
    ],
    DESIGN: [
      {
        id: 'ws-des-1',
        title: 'Generative Creative Coding & Interactive Shaders',
        level: 'All Levels',
        duration: '12 Hours • 2 Days',
        prereq: 'Interest in Design & Code',
        description: 'Harness GLSL fragment shaders, algorithmic art mathematics, and reactive typography to craft award-winning digital installations.',
        modules: [
          'Vector Mathematics for Visual Artists',
          'Procedural Noise & Particle Flow Fields',
          'Audio-Reactive Synthesizer Visualizers',
          'Exporting Interactive Production Experiences'
        ],
        certification: 'IIT Bombay Techfest Certified',
      },
    ],
    BUSINESS: [
      {
        id: 'ws-biz-1',
        title: 'Deeptech Venture Building & Capital Raising',
        level: 'All Levels',
        duration: '10 Hours • 2 Days',
        prereq: 'Entrepreneurial Curiosity',
        description: 'Structured framework for commercializing academic patents, crafting compelling investor memorandums, and navigating deep-tech venture finance.',
        modules: [
          'From Lab IP to Scalable Commercial Product',
          'Deeptech Cap-Table & Valuation Realities',
          'Go-to-Market Strategy for Enterprise Tech',
          'Mock VC Investment Committee Presentations'
        ],
        certification: 'IIT Bombay Techfest Certified',
      },
    ],
  };

  const activeWorkshops = workshopsData[selectedDomain] || [];

  return (
    <section
      id="workshops"
      className="section-padding"
      style={{
        background: '#070709',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="editorial-tag" style={{ marginBottom: '1.25rem' }}>
            <span>// 04. PEDAGOGICAL IMMERSION</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.8rem)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                ACCELERATE YOUR <br />
                <span style={{ color: 'var(--accent-orange)' }}>TECHNICAL MASTERY.</span>
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
              Intensive, certified masterclasses designed with world-class faculty and industry pioneers. Learn directly by building, breaking, and shipping.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {domains.map((dom) => {
            const Icon = dom.icon;
            const isSelected = selectedDomain === dom.id;

            return (
              <button
                key={dom.id}
                onClick={() => {
                  playClickSound();
                  setSelectedDomain(dom.id);
                }}
                style={{
                  background: isSelected ? 'rgba(255, 77, 0, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected ? '1px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                  color: isSelected ? 'var(--accent-orange)' : 'var(--text-muted)',
                  padding: '0.75rem 1.35rem',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <Icon size={16} />
                <span>{dom.label}</span>
              </button>
            );
          })}
        </div>

        {/* Workshop Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem',
          }}
        >
          {activeWorkshops.map((ws) => (
            <div
              key={ws.id}
              className="glass-panel"
              onMouseEnter={() => playHoverSound()}
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: 'rgba(15, 17, 24, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                {/* Meta details header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.25rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent-cyan)',
                      background: 'rgba(0, 242, 254, 0.08)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2px',
                    }}
                  >
                    {ws.level}
                  </span>

                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={13} />
                    {ws.duration}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--text-white)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                  }}
                >
                  {ws.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.75rem',
                  }}
                >
                  {ws.description}
                </p>

                {/* Modules Outline */}
                <div
                  style={{
                    background: 'rgba(7, 7, 9, 0.6)',
                    padding: '1.25rem',
                    borderRadius: '2px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.7rem',
                      color: 'var(--text-white)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <BookOpen size={13} color="var(--accent-orange)" />
                    <span>CURRICULAR HIGHLIGHTS</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {ws.modules.map((mod, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.5rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <span style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>0{mIdx + 1}.</span>
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '1.25rem',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.72rem',
                    color: 'var(--accent-orange)',
                  }}
                >
                  <Award size={14} />
                  <span>{ws.certification}</span>
                </div>

                <a
                  href="https://techfest.org/workshops"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound()}
                  className="btn-secondary"
                  style={{ padding: '0.55rem 1.1rem', fontSize: '0.75rem' }}
                >
                  <span>OFFICIAL SYLLABUS</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Link to Workshops */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            background: 'rgba(255, 77, 0, 0.04)',
            border: '1px solid var(--border-accent-orange)',
            borderRadius: '4px',
            padding: '2.5rem 1.5rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: 'var(--text-white)',
              marginBottom: '0.75rem',
            }}
          >
            Ready to secure your workshop certification?
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              maxWidth: '540px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            Official registrations, hands-on kit prerequisites, and seat availability are managed directly on Techfest's official workshop portal.
          </p>
          <a
            href="https://techfest.org/workshops"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="btn-primary"
          >
            <span>VIEW ALL WORKSHOPS ON TECHFEST.ORG</span>
            <ExternalLink size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
