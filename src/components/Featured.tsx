import { useState } from "react";

export default function Featured() {
  const [rsvp, setRsvp] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const programme = [
    { time: "12:00", title: "Церемония бракосочетания", desc: "Торжественная регистрация в кругу самых близких" },
    { time: "14:00", title: "Венчание", desc: "Священный обряд в старинной церкви" },
    { time: "16:00", title: "Праздничный банкет", desc: "Ужин, тосты, живая музыка и много тепла" },
    { time: "23:00", title: "Завершение торжества", desc: "Финальный танец и тёплые объятия на прощание" },
  ];

  const handleSubmit = () => {
    if (rsvp) setSubmitted(true);
  };

  return (
    <div id="programme" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ backgroundColor: '#e8ede0' }}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/bucket/38d34505-5d32-45a9-a836-a8ca550c1b18.jpg"
          alt="Молодожёны на закате"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-6 text-base tracking-[0.3em] text-black font-semibold">Программа торжества</h3>
        <div className="flex flex-col gap-6 mb-10">
          {programme.map((item) => (
            <div key={item.time} className="flex gap-6 items-start border-b border-black/15 pb-6">
              <span className="font-semibold text-xl min-w-[52px] text-black">{item.time}</span>
              <div>
                <p className="font-semibold text-xl leading-tight mb-1 text-black">{item.title}</p>
                <p className="text-black/60 text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-black/20 p-6" style={{ backgroundColor: '#f2f5ec' }}>
          {!submitted ? (
            <>
              <p className="text-black font-semibold text-2xl mb-1">Вы придёте?</p>
              <p className="text-black/50 text-base mb-5">Просим указать ответ до 1 августа</p>
              <div className="flex gap-3 mb-5">
                <button
                  onClick={() => setRsvp("yes")}
                  className={`px-8 py-2 text-sm uppercase tracking-wide border transition-all duration-200 ${
                    rsvp === "yes"
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-black/40 hover:border-black"
                  }`}
                >
                  Да
                </button>
                <button
                  onClick={() => setRsvp("no")}
                  className={`px-8 py-2 text-sm uppercase tracking-wide border transition-all duration-200 ${
                    rsvp === "no"
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-black/40 hover:border-black"
                  }`}
                >
                  Нет
                </button>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!rsvp}
                className="bg-black text-white px-6 py-2 text-sm uppercase tracking-wide disabled:opacity-30 hover:bg-black/80 transition-colors duration-200 cursor-pointer disabled:cursor-default"
              >
                Отправить ответ
              </button>
            </>
          ) : (
            <p className="text-black text-lg">
              {rsvp === "yes"
                ? "Спасибо! Будем вас ждать с нетерпением 🤍"
                : "Спасибо за ответ. Будем скучать!"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}