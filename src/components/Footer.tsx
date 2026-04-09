export default function Footer() {
  return (
    <div
      id="details"
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-stone-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-rose-300 text-xs sm:text-sm tracking-widest">Место</h3>
                <p className="text-white text-sm sm:text-base">Усадьба «Берёзки»</p>
                <p className="text-neutral-400 text-sm">Подмосковье, Рублёво-Успенское ш.</p>
                <p className="text-neutral-400 text-sm">14 июня 2025</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-rose-300 text-xs sm:text-sm tracking-widest">Контакты</h3>
                <a
                  href="tel:+79001234567"
                  className="text-white hover:text-rose-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  +7 (900) 123-45-67
                </a>
                <a
                  href="https://wa.me/79001234567"
                  className="text-white hover:text-rose-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                A & M
              </h1>
              <p className="text-rose-300 text-sm sm:text-base tracking-widest uppercase">14 · 06 · 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
