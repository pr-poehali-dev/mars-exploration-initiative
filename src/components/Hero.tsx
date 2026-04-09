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
          src="https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/files/58cd108a-077b-4002-b494-938ce6fb32b6.jpg"
          alt="Свадебная церемония"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-[0.4em] mb-6 opacity-80 font-light">
          приглашение на торжество
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Алексей & Мария
        </h1>
        <p className="text-lg md:text-2xl opacity-90 tracking-widest font-light mt-6">
          14 июня 2025 · Подмосковье
        </p>
      </div>
    </div>
  );
}