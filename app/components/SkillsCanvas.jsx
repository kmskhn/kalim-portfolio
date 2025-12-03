"use client";

import React, { useEffect, useRef } from "react";

const SKILLS = [
  "React", "Next.js", "Remix", "Gatsby",
  "TypeScript", "JavaScript", "Redux", "GraphQL",
  "Vercel AI SDK", "ChatGPT-4", "LangChain", "Gemini",
  "Node.js", "Fastify", "Express", "Docker",
  "Vite", "Cypress", "Jest", "RTL",
  "Contentstack", "Ant Design", "Tailwind", "Sass",
  "Accessibility", "Performance", "Git", "CI/CD"
];


function SkillsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = window.devicePixelRatio || 1;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.scale(DPR, DPR);
    };

    resize();
    window.addEventListener("resize", resize);

    // init balls
    const rect = canvas.getBoundingClientRect();
    const balls: Ball[] = SKILLS.map((label, i) => {
      const r = 32; // circle radius
      return {
        x: Math.random() * (rect.width - 2 * r) + r,
        y: Math.random() * (rect.height - 2 * r) + r,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        r,
        label,
      };
    });

    let animationFrameId: number;

    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      // transparent box with border
      ctx.strokeStyle = "rgba(34, 211, 238, 0.35)"; // #22d3ee with alpha
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, width, height);

      balls.forEach((b) => {
        // move
        b.x += b.vx;
        b.y += b.vy;

        // wall collisions
        if (b.x - b.r < 0 || b.x + b.r > width) b.vx *= -1;
        if (b.y - b.r < 0 || b.y + b.r > height) b.vy *= -1;

        // draw circle
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.15)"; // light #22d3ee
        ctx.fill();
        ctx.strokeStyle = "#22d3ee";
        ctx.stroke();

        // label
        ctx.fillStyle = "rgba(34, 211, 238, 0.9)";
        ctx.font = "10px system-ui, -apple-system, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const maxLen = 14;
        const text =
          b.label.length > maxLen
            ? b.label.slice(0, maxLen - 1) + "…"
            : b.label;

        ctx.fillText(text, b.x, b.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-[360px] md:h-[420px] lg:h-[480px] rounded-2xl border border-cyan-400/30 bg-transparent">
      <canvas
        ref={canvasRef}
        className="w-full h-full block rounded-2xl"
      />
    </div>
  );
}

export default SkillsCanvas;
