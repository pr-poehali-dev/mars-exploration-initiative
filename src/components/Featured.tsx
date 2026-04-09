export default function Featured() {
  const programme = [
    { time: "15:00", title: "Церемония бракосочетания", desc: "Торжественная регистрация в кругу самых близких" },
    { time: "16:30", title: "Фуршет и фотосессия", desc: "Лёгкие закуски, игристое и первые совместные снимки" },
    { time: "18:00", title: "Праздничный банкет", desc: "Ужин, тосты, живая музыка и много тепла" },
    { time: "21:00", title: "Вечеринка до утра", desc: "Танцы, веселье и незабываемые воспоминания" },
  ];

  return (
    <div id="programme" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-rose-50">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/files/bb94ab41-5471-42bb-aa56-e9f33239dfcc.jpg"
          alt="Молодожёны на закате"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-6 text-sm tracking-[0.3em] text-rose-400">Программа торжества</h3>
        <div className="flex flex-col gap-6 mb-10">
          {programme.map((item) => (
            <div key={item.time} className="flex gap-6 items-start border-b border-rose-100 pb-6">
              <span className="text-rose-300 font-light text-lg min-w-[52px]">{item.time}</span>
              <div>
                <p className="text-neutral-900 font-semibold text-lg leading-tight mb-1">{item.title}</p>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#details"
          className="bg-rose-400 text-white border border-rose-400 px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-rose-400 cursor-pointer w-fit uppercase tracking-wide"
        >
          Подтвердить участие
        </a>
      </div>
    </div>
  );
}
