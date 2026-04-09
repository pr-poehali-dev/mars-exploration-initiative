import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/bucket/45de628d-7f57-4311-b441-e870b139a964.jpg"
          alt="Глеб и Вероника"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6" style={{ color: '#2c2420' }}>
        <p className="text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-light" style={{ color: '#5a4a44', textShadow: '0 1px 8px rgba(255,255,255,0.6)' }}>
          приглашение на торжество
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#1e1a18', textShadow: '0 2px 16px rgba(255,255,255,0.5)' }}>
          Глеб & Вероника
        </h1>
        <p className="text-lg md:text-2xl tracking-widest font-light mt-6" style={{ color: '#4a3f3a', textShadow: '0 1px 8px rgba(255,255,255,0.6)' }}>
          14 июня 2025 · Подмосковье
        </p>
      </div>
    </div>
  );
}