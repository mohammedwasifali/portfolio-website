import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Vivid tech colors for Lava Lamp
    const colors = [
      'rgba(16, 42, 67,',    // Midnight Blue
      'rgba(37, 99, 235,',   // Sapphire
      'rgba(100, 116, 139,', // Titanium Gray
      'rgba(6, 182, 212,',   // Cyber Cyan
      'rgba(16, 185, 129,'   // Emerald Green
    ];

    const orbs = [];
    // Lava lamps have a small number of massive, slow-moving blobs
    for (let i = 0; i < 15; i++) { 
      orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5, // Slow horizontal sway
        vy: (Math.random() - 0.5) * 3.0, // Faster vertical drift like rising/falling lava
        baseRadius: Math.random() * (width * 0.15) + 150, // Absolute Behemoths
        radius: 0,
        colorBase: colors[i % colors.length],
        angle: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // 'screen' makes overlapping lava blobs merge brightly and beautifully like glowing liquid
      ctx.globalCompositeOperation = 'screen';

      orbs.forEach((orb, i) => {
        // Morphing size to simulate liquid stretching
        orb.angle += orb.pulseSpeed;
        orb.radius = orb.baseRadius + Math.sin(orb.angle) * (orb.baseRadius * 0.4);

        orb.x += orb.vx;
        orb.y += orb.vy;

        // Smooth boundary bouncing
        if (orb.x < -orb.radius) orb.vx *= -1;
        if (orb.x > width + orb.radius) orb.vx *= -1;
        if (orb.y < -orb.radius) orb.vy *= -1;
        if (orb.y > height + orb.radius) orb.vy *= -1;

        // Gentle, soft repulsion so the lava flows around the cursor
        const dx = orb.x - mouseX;
        const dy = orb.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 400) {
          const force = (400 - dist) / 400;
          orb.x += (dx / dist) * force * 3;
          orb.y += (dy / dist) * force * 3;
        }

        // Lava Blob Gradient
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.colorBase + '0.7)'); // Solid, vibrant glowing core
        grad.addColorStop(0.5, orb.colorBase + '0.3)'); // Soft melting body
        grad.addColorStop(1, orb.colorBase + '0)'); // Invisible edge to melt into other blobs
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default CanvasBackground;
