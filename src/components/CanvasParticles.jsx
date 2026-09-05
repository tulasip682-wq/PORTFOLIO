import React, { useEffect, useRef } from 'react';

const CanvasParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.reset();
      }

      reset() {
        this.x = Math.random() * this.width;
        this.y = Math.random() * this.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.color = this.getRandomColor();
        this.alpha = Math.random() * 0.5 + 0.2;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      getRandomColor() {
        const colors = [
          'rgba(147, 51, 234, ',  // Purple
          'rgba(59, 130, 246, ',  // Blue
          'rgba(6, 182, 212, ',   // Cyan
          'rgba(255, 255, 255, '  // White
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap-around edges
        if (this.x < 0 || this.x > this.width) this.speedX *= -1;
        if (this.y < 0 || this.y > this.height) this.speedY *= -1;

        // Fade pulse
        this.alpha += this.fadeSpeed * this.fadeDirection;
        if (this.alpha > 0.8) {
          this.alpha = 0.8;
          this.fadeDirection = -1;
        } else if (this.alpha < 0.1) {
          this.alpha = 0.1;
          this.fadeDirection = 1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = this.color.includes('255') ? '#fff' : '#c084fc';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const particlesCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
    const particles = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
};

export default CanvasParticles;
