import { useState } from "react";
import func2url from "../../backend/func2url.json";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [guestsCount, setGuestsCount] = useState(1);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attending) return;
    setStatus("loading");
    try {
      const res = await fetch(func2url.rsvp, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attending, guests_count: guestsCount, comment }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#efefef' }}>
        <div className="text-center max-w-md">
          <p className="text-4xl mb-6">✦</p>
          <h2 className="text-2xl font-semibold text-black mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Спасибо!
          </h2>
          <p className="text-black/60 text-lg leading-relaxed">
            {attending === "yes"
              ? "Мы очень рады, что ты будешь с нами в этот день."
              : "Жаль, что не получится. Мы будем помнить о тебе."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="rsvp" className="min-h-screen flex items-center justify-center px-6 py-16" style={{ backgroundColor: '#efefef' }}>
      <div className="w-full max-w-lg">
        <p className="uppercase text-lg tracking-[0.3em] text-black font-semibold mb-12 text-center">
          Подтверждение присутствия
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div>
            <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">Имя и фамилия</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов"
              className="w-full border-b border-black/30 bg-transparent py-3 text-black text-lg outline-none focus:border-black transition-colors placeholder:text-black/25"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-black/50 mb-4">Вы придёте?</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setAttending("yes")}
                className={`flex-1 py-4 border text-base uppercase tracking-widest transition-colors duration-200 ${
                  attending === "yes"
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-black/30 hover:border-black"
                }`}
              >
                Да, буду
              </button>
              <button
                type="button"
                onClick={() => setAttending("no")}
                className={`flex-1 py-4 border text-base uppercase tracking-widest transition-colors duration-200 ${
                  attending === "no"
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-black/30 hover:border-black"
                }`}
              >
                Не смогу
              </button>
            </div>
          </div>

          {attending === "yes" && (
            <div>
              <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
                Сколько вас будет (включая вас)?
              </label>
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                  className="w-10 h-10 border border-black/30 text-xl hover:border-black transition-colors"
                >
                  −
                </button>
                <span className="text-2xl font-light w-8 text-center">{guestsCount}</span>
                <button
                  type="button"
                  onClick={() => setGuestsCount(Math.min(10, guestsCount + 1))}
                  className="w-10 h-10 border border-black/30 text-xl hover:border-black transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">Комментарий (необязательно)</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Пожелания, вопросы..."
              rows={3}
              className="w-full border-b border-black/30 bg-transparent py-3 text-black text-base outline-none focus:border-black transition-colors resize-none placeholder:text-black/25"
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">Что-то пошло не так. Попробуйте ещё раз.</p>
          )}

          <button
            type="submit"
            disabled={!name || !attending || status === "loading"}
            className="w-full border border-black text-black text-base uppercase tracking-widest py-5 hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Отправляем..." : "Отправить"}
          </button>
        </form>
      </div>
    </div>
  );
}