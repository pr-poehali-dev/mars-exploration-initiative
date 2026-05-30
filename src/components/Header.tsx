interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-[0.3em] font-light">Г & В</div>
        <nav className="flex gap-8 items-center">
          <a
            href="#programme"
            className="text-white hover:text-rose-200 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Программа
          </a>
          <button
            onClick={() => {
              document.getElementById('print-overlay')!.style.display = 'block';
            }}
            className="text-white hover:text-rose-200 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Пригласительный
          </button>
        </nav>
      </div>
    </header>
  );
}