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
              <span className="font-semibold text-lg min-w-[52px]" style={{ color: "#2d5a27" }}>{item.time}</span>
              <div>
                <p className="font-semibold text-lg leading-tight mb-1" style={{ color: "#2d5a27" }}>{item.title}</p>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-rose-200 bg-white p-6">
          {!submitted ? (
            <>
              <p className="text-neutral-800 font-semibold text-xl mb-1">Вы придёте?</p>
              <p className="text-neutral-400 text-sm mb-5">Просим указать ответ до 1 августа</p>
              <div className="flex gap-3 mb-5">
                <button
                  onClick={() => setRsvp("yes")}
                  className={`px-8 py-2 text-sm uppercase tracking-wide border transition-all duration-200 ${
                    rsvp === "yes"
                      ? "bg-rose-400 text-white border-rose-400"
                      : "bg-white text-neutral-700 border-neutral-300 hover:border-rose-400"
                  }`}
                >
                  Да
                </button>
                <button
                  onClick={() => setRsvp("no")}
                  className={`px-8 py-2 text-sm uppercase tracking-wide border transition-all duration-200 ${
                    rsvp === "no"
                      ? "bg-neutral-700 text-white border-neutral-700"
                      : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-700"
                  }`}
                >
                  Нет
                </button>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!rsvp}
                className="bg-rose-400 text-white px-6 py-2 text-sm uppercase tracking-wide disabled:opacity-40 hover:bg-rose-500 transition-colors duration-200 cursor-pointer disabled:cursor-default"
              >
                Отправить ответ
              </button>
            </>
          ) : (
            <p className="text-neutral-700 text-lg">
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
