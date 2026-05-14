import { useState } from "react";
import func2url from "../../backend/func2url.json";

interface Guest {
  id: number;
  name: string;
  attending: "yes" | "no";
  guests_count: number;
  comment: string | null;
  created_at: string;
}

interface Stats {
  total_yes: number;
  total_no: number;
  total_people: number;
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [guests, setGuests] = useState<Guest[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "done">("idle");

  const load = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(func2url["rsvp-list"], {
        headers: { "X-Admin-Password": password },
      });
      if (res.status === 401) { setStatus("error"); return; }
      const data = JSON.parse(await res.json());
      setGuests(data.guests);
      setStats(data.stats);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status !== "done") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="w-full max-w-sm">
          <p className="uppercase text-lg tracking-[0.3em] text-black font-semibold mb-10 text-center">
            Г & В · Гости
          </p>
          <form onSubmit={load} className="flex flex-col gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-black/30 bg-transparent py-3 text-black text-lg outline-none focus:border-black transition-colors"
                autoFocus
              />
            </div>
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">Неверный пароль</p>
            )}
            <button
              type="submit"
              disabled={!password || status === "loading"}
              className="w-full border border-black text-black text-base uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-40"
            >
              {status === "loading" ? "Загрузка..." : "Войти"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12" style={{ backgroundColor: '#f5f2ec' }}>
      <div className="max-w-2xl mx-auto">
        <p className="uppercase text-lg tracking-[0.3em] text-black font-semibold mb-10 text-center">
          Г & В · Список гостей
        </p>

        {stats && (
          <div className="flex gap-6 mb-10 flex-wrap">
            <div className="flex-1 min-w-[120px] border border-black/15 p-5 text-center">
              <p className="text-3xl font-light text-black">{stats.total_yes}</p>
              <p className="text-xs uppercase tracking-widest text-black/50 mt-1">Придут</p>
            </div>
            <div className="flex-1 min-w-[120px] border border-black/15 p-5 text-center">
              <p className="text-3xl font-light text-black">{stats.total_people}</p>
              <p className="text-xs uppercase tracking-widest text-black/50 mt-1">Человек всего</p>
            </div>
            <div className="flex-1 min-w-[120px] border border-black/15 p-5 text-center">
              <p className="text-3xl font-light text-black">{stats.total_no}</p>
              <p className="text-xs uppercase tracking-widest text-black/50 mt-1">Не придут</p>
            </div>
          </div>
        )}

        {guests.length === 0 ? (
          <p className="text-center text-black/40 text-lg py-12">Ответов пока нет</p>
        ) : (
          <div className="flex flex-col gap-0">
            {guests.map((g) => (
              <div key={g.id} className="border-b border-black/10 py-5 flex justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-black font-semibold text-lg">{g.name}</p>
                  {g.attending === "yes" && (
                    <p className="text-black/50 text-sm">{g.guests_count} чел.</p>
                  )}
                  {g.comment && (
                    <p className="text-black/40 text-sm italic">«{g.comment}»</p>
                  )}
                  <p className="text-black/30 text-xs">{g.created_at}</p>
                </div>
                <span className={`text-sm uppercase tracking-wider font-medium shrink-0 ${
                  g.attending === "yes" ? "text-green-700" : "text-red-500"
                }`}>
                  {g.attending === "yes" ? "Придёт" : "Не придёт"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
