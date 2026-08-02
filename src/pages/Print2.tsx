const dresscodeColors = [
  { hex: "#3b2e27", label: "Тёмный шоколад" },
  { hex: "#5c4033", label: "Кофе" },
  { hex: "#a67c5b", label: "Карамель" },
  { hex: "#d4c4a8", label: "Светлый беж" },
  { hex: "#c8bfa8", label: "Песок" },
  { hex: "#a8b89a", label: "Шалфей" },
  { hex: "#6b7c5e", label: "Оливка" },
];

const timing = [
  { time: "14:00", text: "— фуршет: можно пообщаться, выпить аперитив и немного расслабиться перед главным моментом." },
  { time: "14:40", text: "— торжественная регистрация: именно здесь мы скажем друг другу «да» — будем очень рады видеть вас рядом." },
  { time: "15:15", text: "— банкет: продолжение праздника, тосты, танцы и много приятных эмоций." },
];

export default function Print2() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { background: #888; }

        .page {
          width: 559px;
          min-height: 794px;
          margin: 0 auto 24px;
          position: relative;
          overflow: hidden;
          background-color: #d8dccd;
        }

        @media print {
          .page {
            width: 148mm;
            height: 210mm;
            margin: 0;
          }
        }

        .invite-single {
          display: flex;
          flex-direction: column;
        }

        .invite-text-block {
          padding: 6mm 9mm 8mm;
        }

        .letter-greeting {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15pt;
          font-weight: 600;
          font-style: italic;
          color: #3b2e27;
          margin-bottom: 3mm;
        }

        .letter-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 7pt;
          line-height: 1.5;
          color: #3b2e27;
          margin-bottom: 2.5mm;
        }

        .letter-detail {
          font-family: 'Montserrat', sans-serif;
          font-size: 7.5pt;
          font-weight: 600;
          line-height: 1.5;
          color: #3b2e27;
          margin-bottom: 1.5mm;
        }

        .letter-photo {
          width: 100%;
          height: 55mm;
          background-image: url('https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/bucket/371e9636-dbde-40bc-a439-513ff8d08a40.jpg');
          background-size: cover;
          background-position: center top;
          filter: grayscale(1) brightness(0.6) contrast(0.95);
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .letter-subheading {
          font-family: 'Montserrat', sans-serif;
          font-size: 8pt;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #3b2e27;
          margin-bottom: 2.5mm;
        }

        .timing-item {
          display: flex;
          gap: 2.5mm;
          align-items: baseline;
          margin-bottom: 2mm;
        }

        .timing-time {
          font-family: 'Montserrat', sans-serif;
          font-size: 7.5pt;
          font-weight: 600;
          color: #a67c5b;
          min-width: 10mm;
          text-align: right;
          flex-shrink: 0;
        }

        .timing-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 7pt;
          line-height: 1.5;
          color: #3b2e27;
        }

        .letter-closing {
          font-family: 'Montserrat', sans-serif;
          font-size: 7.5pt;
          font-weight: 600;
          color: #3b2e27;
          margin-top: 2mm;
          margin-bottom: 1.5mm;
        }

        .letter-signature {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 11pt;
          font-style: italic;
          color: #3b2e27;
          line-height: 1.3;
        }

        .divider {
          width: 20mm;
          height: 1px;
          background: #a67c5b;
          opacity: 0.4;
          margin: 3mm 0;
        }

        .dresscode-bar {
          background-color: #b0baa4;
          border-radius: 2mm;
          padding: 3mm 4mm;
          display: flex;
          align-items: center;
          gap: 3mm;
          margin-top: 3mm;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .dresscode-bar-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 5.5pt;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 600;
          color: #000;
          white-space: nowrap;
        }

        .dresscode-bar-colors {
          display: flex;
          gap: 2.5mm;
          align-items: center;
          flex-wrap: nowrap;
        }

        .dresscode-bar-swatch {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1mm;
        }

        .dresscode-bar-circle {
          width: 6mm;
          height: 6mm;
          border-radius: 50%;
          border: 0.5px solid rgba(0,0,0,0.1);
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          flex-shrink: 0;
        }

        .dresscode-bar-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 4.5pt;
          color: rgba(0,0,0,0.55);
          text-align: center;
          line-height: 1.2;
          max-width: 10mm;
          white-space: nowrap;
        }

        @media print {
          @page {
            size: 148mm 210mm;
            margin: 0;
          }
          html, body {
            width: 148mm;
            height: 210mm;
            margin: 0 !important;
            padding: 0 !important;
            background: white;
          }
          .page {
            width: 148mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <div className="no-print" style={{ textAlign: 'center', padding: '16px', fontFamily: 'sans-serif', fontSize: '14px', color: '#fff', background: '#555' }}>
        <button
          onClick={() => window.print()}
          style={{ padding: '10px 28px', background: '#3b2e27', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', letterSpacing: '0.1em' }}
        >
          Распечатать / Сохранить PDF
        </button>
        <p style={{ marginTop: '8px', fontSize: '12px' }}>1 страница A5 · При печати выберите «Без полей»</p>
      </div>

      <div className="page">
        <div className="invite-single">
          <div className="letter-photo" />

          <div className="invite-text-block">
            <p className="letter-greeting">Дорогие [имя гостя/гости]! ❤️</p>
            <p className="letter-text">
              Спасибо, что хотите разделить с нами такой важный и радостный день. Мы очень ждём вас на нашей свадьбе и хотим подтвердить детали, чтобы всё прошло идеально.
            </p>
            <p className="letter-detail">💍 Дата: 11.09.2026</p>
            <p className="letter-detail">📍 Место: Банкетный зал «Венеция», ул. Свиязева 35</p>

            <p className="letter-text" style={{ marginTop: '3mm' }}>
              Важная деталь: нам хотелось сделать этот день максимально комфортным для всех, поэтому у нас будет выездная регистрация — ехать в ЗАГС не нужно. Всё самое трогательное и важное произойдёт прямо на нашей площадке.
            </p>
            <p className="letter-text">
              На площадке будут работать наши свадебные координаторы — они помогут сориентироваться, подскажут, где что находится, и решат любые возникающие вопросы. По всем организационным моментам, пожалуйста, обращайтесь к ним.
            </p>
            <p className="letter-detail">📞 Контактный номер координатора: +79504787050 София</p>

            <div className="divider" />

            <p className="letter-subheading">Тайминг дня</p>
            {timing.map((t) => (
              <div key={t.time} className="timing-item">
                <span className="timing-time">{t.time}</span>
                <span className="timing-text">{t.text}</span>
              </div>
            ))}

            <p className="letter-closing">До встречи в самый счастливый день! 🥂</p>
            <p className="letter-signature">
              С любовью,<br />
              Вероника и Глеб
            </p>

            <div className="dresscode-bar">
              <span className="dresscode-bar-label">Дресс-код</span>
              <div className="dresscode-bar-colors">
                {dresscodeColors.map((c) => (
                  <div key={c.hex} className="dresscode-bar-swatch">
                    <div className="dresscode-bar-circle" style={{ backgroundColor: c.hex }} />
                    <span className="dresscode-bar-name">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}