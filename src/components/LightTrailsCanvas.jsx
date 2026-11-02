import React, { useEffect, useRef } from 'react';

/**
 * High-performance 2D Canvas Light Trails & Energy Visual
 * Pure HTML5 Canvas 2D - No 3D libraries or WebGL.
 * Features flowing electric orange (#ff4d00) and cyan (#00f2fe) energy streams,
 * reactive to cursor dynamics and natural fluid drift.
 */
export default function LightTrailsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const mouse = {
      x: width * 0.5,
      y: height * 0.45,
      targetX: width * 0.5,
      targetY: height * 0.45,
      isActive: false,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Particle nodes for energy trails
    const numTrails = 18;
    const trails = [];

    for (let i = 0; i < numTrails; i++) {
      trails.push({
        angle: (i / numTrails) * Math.PI * 2,
        radius: 120 + (i % 6) * 45,
        speed: 0.004 + (i % 5) * 0.0025,
        color: i % 2 === 0 ? 'rgba(255, 77, 0, ' : 'rgba(0, 242, 254, ',
        glowColor: i % 2 === 0 ? '#ff4d00' : '#00f2fe',
        alpha: 0.35 + Math.random() * 0.4,
        size: 1.5 + Math.random() * 2,
        history: [],
        maxHistory: 24,
        driftOffset: Math.random() * 100,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Soft trail fade for motion blur
      ctx.fillStyle = 'rgba(7, 7, 9, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // Draw faint kinetic grid backdrop
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      const step = 80;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render each energy light stream
      trails.forEach((trail) => {
        trail.angle += trail.speed;

        // Parametric orbital math influenced by mouse
        const baseRadiusX = trail.radius * 1.4;
        const baseRadiusY = trail.radius * 0.75;
        const wobble = Math.sin(time * 2 + trail.driftOffset) * 25;

        // Anchor center moves slightly towards mouse
        const centerX = width * 0.5 + (mouse.x - width * 0.5) * 0.15;
        const centerY = height * 0.48 + (mouse.y - height * 0.48) * 0.15;

        const posX = centerX + Math.cos(trail.angle) * (baseRadiusX + wobble);
        const posY = centerY + Math.sin(trail.angle * 1.5) * (baseRadiusY + wobble * 0.5);

        // Store history for smooth light ribbon
        trail.history.push({ x: posX, y: posY });
        if (trail.history.length > trail.maxHistory) {
          trail.history.shift();
        }

        // Draw light trail line
        if (trail.history.length > 2) {
          ctx.beginPath();
          ctx.moveTo(trail.history[0].x, trail.history[0].y);

          for (let h = 1; h < trail.history.length - 1; h++) {
            const xc = (trail.history[h].x + trail.history[h + 1].x) / 2;
            const yc = (trail.history[h].y + trail.history[h + 1].y) / 2;
            ctx.quadraticCurveTo(trail.history[h].x, trail.history[h].y, xc, yc);
          }

          ctx.strokeStyle = trail.color + trail.alpha + ')';
          ctx.lineWidth = trail.size;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }

        // Leading head particle glow
        const head = trail.history[trail.history.length - 1];
        if (head) {
          const grad = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 14);
          grad.addColorStop(0, trail.color + '0.95)');
          grad.addColorStop(0.4, trail.color + '0.4)');
          grad.addColorStop(1, 'transparent');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(head.x, head.y, 14, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(head.x, head.y, trail.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Central energy pulse
      const centerGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.48,
        0,
        width * 0.5,
        height * 0.48,
        width * 0.4
      );
      centerGrad.addColorStop(0, 'rgba(255, 77, 0, 0.07)');
      centerGrad.addColorStop(0.3, 'rgba(0, 242, 254, 0.04)');
      centerGrad.addColorStop(0.8, 'rgba(7, 7, 9, 0)');
      ctx.fillStyle = centerGrad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.9,
      }}
      aria-hidden="true"
    />
  );
}
