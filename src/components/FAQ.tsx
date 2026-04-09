import { useState } from "react";

const dresscodeColors = [
  { hex: "#3b2e27", label: "Тёмный шоколад" },
  { hex: "#5c4033", label: "Кофе" },
  { hex: "#a67c5b", label: "Карамель" },
  { hex: "#d4c4a8", label: "Светлый беж" },
  { hex: "#c8bfa8", label: "Песок" },
  { hex: "#a8b89a", label: "Шалфей" },
  { hex: "#6b7c5e", label: "Оливка" },
];

const faqs = [
  {
    question: "Можно ли прийти с детьми?",
    answer: "Чтобы все могли как следует отдохнуть и повеселиться на нашем празднике, очень просим мам и пап приходить без маленьких деток.",
    type: "text",
  },
  {
    question: "Что подарить молодожёнам?",
    answer: "Лучший подарок — это вклад в нашу общую мечту. Мы будем искренне рады, если вы поддержите нас конвертом: так мы сможем сами выбрать то, о чём давно мечтаем — будь то путешествие, уютное гнёздышко или что-то ещё. Ваше присутствие и тепло — уже самое главное.",
    type: "text",
  },
  {
    question: "Будет ли дресс-код?",
    answer: "",
    type: "dresscode",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div id="faq" className="min-h-screen px-6 py-16 lg:py-24 flex flex-col items-center justify-center" style={{ backgroundColor: '#f5f2ec' }}>
      <div className="w-full max-w-2xl">
        <p className="uppercase text-lg tracking-[0.3em] text-black font-semibold mb-12 text-center">
          Ответы на вопросы
        </p>

        <div className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/15">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-7 text-left gap-4"
              >
                <span className="text-black font-semibold text-xl">{faq.question}</span>
                <span className="text-3xl text-black/40 flex-shrink-0 leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="pb-7">
                  {faq.type === "text" && (
                    <p className="text-black/70 text-lg leading-relaxed">{faq.answer}</p>
                  )}
                  {faq.type === "dresscode" && (
                    <div>
                      <p className="text-black/70 text-lg leading-relaxed mb-6">
                        Да! Мы будем очень рады, если вы поддержите цветовую гамму праздника. Наша палитра — тёплые земляные оттенки и приглушённая зелень:
                      </p>
                      <div className="flex gap-4 flex-wrap">
                        {dresscodeColors.map((c) => (
                          <div key={c.hex} className="flex flex-col items-center gap-1">
                            <div
                              className="w-14 h-14 rounded-full border border-black/10 shadow-sm"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="text-sm text-black/40">{c.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-black/50 text-base uppercase tracking-[0.3em] mb-5">Детали торжества</p>
          <a
            href="#details"
            className="inline-block border border-black text-black text-base uppercase tracking-widest px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300"
          >
            Место и контакты
          </a>
        </div>
      </div>
    </div>
  );
}