import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const AnimatedBackground: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Track mouse position for subtle ambient glow spotlight
  useEffect(() => {
    if (reducedMotion) return;

    let timeoutId: number;
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle slightly with requestAnimationFrame
      cancelAnimationFrame(timeoutId);
      timeoutId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(timeoutId);
    };
  }, [reducedMotion]);

  // Subtle technology node canvas (very lightweight, GPU friendly, low particle count)
  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Developer lattice nodes (subtle geometric points)
    const nodeCount = Math.min(32, Math.floor((width * height) / 45000));
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const isDark = resolvedTheme === 'dark';
    const nodeColor = isDark ? 'rgba(129, 140, 248, 0.25)' : 'rgba(99, 102, 241, 0.15)';
    const lineColor = isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(79, 70, 229, 0.04)';

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines between close nodes
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.75 * (1 - dist / maxDistance);
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw subtle nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme, reducedMotion]);

  const isDark = resolvedTheme === 'dark';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#0b0f19' : '#f8fafc',
      }}
    >
      {/* Subtle Developer Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`
            : `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating Soft Blurred Gradient Orbs */}
      <div
        className={`absolute -top-40 -left-32 w-96 h-96 rounded-full blur-3xl opacity-40 dark:opacity-20 transition-all duration-1000 ${
          isDark ? 'bg-indigo-600/30' : 'bg-indigo-300/40'
        } ${reducedMotion ? '' : 'animate-pulse'}`}
        style={{ animationDuration: '9s' }}
      />
      <div
        className={`absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-35 dark:opacity-15 transition-all duration-1000 ${
          isDark ? 'bg-blue-600/25' : 'bg-sky-300/40'
        } ${reducedMotion ? '' : 'animate-pulse'}`}
        style={{ animationDuration: '12s' }}
      />
      <div
        className={`absolute bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-30 dark:opacity-15 transition-all duration-1000 ${
          isDark ? 'bg-cyan-600/20' : 'bg-teal-200/40'
        }`}
      />

      {/* Interactive Mouse Ambient Glow Spotlight */}
      {!reducedMotion && (
        <div
          className="absolute w-[36rem] h-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-300 blur-3xl"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: isDark
              ? 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(14, 165, 233, 0.03) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(14, 165, 233, 0.02) 50%, transparent 70%)',
            opacity: mousePos.x === -1000 ? 0 : 1,
          }}
        />
      )}

      {/* Gentle Node Lattice Canvas */}
      {!reducedMotion && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />}

      {/* Vignette Overlay for Crisp Readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 30%, transparent 20%, rgba(11, 15, 25, 0.65) 90%)'
            : 'radial-gradient(circle at 50% 30%, transparent 30%, rgba(248, 250, 252, 0.6) 95%)',
        }}
      />
    </div>
  );
};
