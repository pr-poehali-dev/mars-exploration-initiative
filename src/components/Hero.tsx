export default function Hero() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="relative w-full h-[60vh] md:h-[65vh] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/bucket/371e9636-dbde-40bc-a439-513ff8d08a40.jpg"
          alt="Глеб и Вероника"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, #0d0d0d 100%)' }} />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <p className="text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-light" style={{ color: 'rgba(255,255,255,0.85)' }}>
          приглашение на торжество
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#fff' }}>
          Глеб & Вероника
        </h1>
        <p className="text-lg md:text-2xl tracking-widest font-light mt-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
          11.09.2026
        </p>
      </div>
    </div>
  );
}