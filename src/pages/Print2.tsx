const dresscodeColors = [
  { hex: "#3b2e27", label: "Тёмный шоколад" },
  { hex: "#5c4033", label: "Кофе" },
  { hex: "#a67c5b", label: "Карамель" },
  { hex: "#d4c4a8", label: "Светлый беж" },
  { hex: "#c8bfa8", label: "Песок" },
  { hex: "#a8b89a", label: "Шалфей" },
  { hex: "#6b7c5e", label: "Оливка" },
];

export default function Print2() {
  const programme = [
    { time: "12:30", title: "Церемония бракосочетания", desc: "ул. Ленина 98" },
    { time: "14:00", title: "Welcome-фуршет", desc: "ул. Архитектора Свиязева 35, банкетный зал «Венеция»" },
    { time: "15:00", title: "Торжественная церемония", desc: "ул. Архитектора Свиязева 35, банкетный зал «Венеция»" },
    { time: "15:30", title: "Праздничный банкет", desc: "ул. Архитектора Свиязева 35, банкетный зал «Венеция»" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { background: #888; }

        .page {
          width: 559px;
          height: 794px;
          margin: 0 auto 24px;
          position: relative;
          overflow: hidden;
          page-break-after: always;
          break-after: page;
        }

        @media print {
          .page {
            width: 148mm;
            height: 210mm;
            margin: 0;
          }
        }

        /* ——— СТРАНИЦА 1 ——— */
        .page-front {
          background: #1a1a1a;
        }

        .page-front .bg-photo {
          position: absolute;
          inset: 0;
          background-image: url('https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/bucket/e99b8781-80de-4f77-9a69-26df3eb6643b.jpg');
          background-size: cover;
          background-position: center top;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .page-front .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0.05) 100%);
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .page-front .content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 12mm 10mm;
        }

        .front-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 7pt;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          text-shadow: 0 1px 6px rgba(0,0,0,0.4);
          margin-bottom: 6mm;
        }

        .front-names {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 48pt;
          font-weight: 700;
          font-style: italic;
          color: #fff;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
          line-height: 1.05;
          letter-spacing: -0.01em;
        }

        .front-date {
          font-family: 'Montserrat', sans-serif;
          font-size: 13pt;
          letter-spacing: 0.3em;
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          text-shadow: 0 1px 6px rgba(0,0,0,0.4);
          margin-top: 6mm;
        }

        /* ——— СТРАНИЦА 2 ——— */
        .page-back {
          background-color: #c8d0be;
          display: flex;
          flex-direction: row;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .back-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10mm 7mm 10mm 9mm;
        }

        .back-right {
          width: 55mm;
          flex-shrink: 0;
          background-image: url('https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/bucket/38d34505-5d32-45a9-a836-a8ca550c1b18.jpg');
          background-size: cover;
          background-position: center;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .back-section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 7pt;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 600;
          color: #000;
          margin-bottom: 5mm;
        }

        .programme-item {
          display: flex;
          gap: 4mm;
          align-items: flex-start;
          border-bottom: 0.5px solid rgba(0,0,0,0.15);
          padding-bottom: 4mm;
          margin-bottom: 4mm;
        }

        .programme-time {
          font-family: 'Montserrat', sans-serif;
          font-size: 10pt;
          font-weight: 600;
          color: #000;
          min-width: 12mm;
        }

        .programme-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 10pt;
          font-weight: 600;
          color: #000;
          line-height: 1.3;
        }

        .programme-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 7.5pt;
          color: rgba(0,0,0,0.5);
          margin-top: 1mm;
          line-height: 1.4;
        }

        .lottery-box {
          border-radius: 3mm;
          padding: 4mm 5mm;
          margin-top: 2mm;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          background-color: #b0baa4;
        }

        .lottery-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 8pt;
          color: #000;
          line-height: 1.5;
          font-weight: 500;
        }

        .dresscode-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #b0baa4;
          padding: 3mm 9mm;
          display: flex;
          align-items: center;
          gap: 4mm;
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
        <p style={{ marginTop: '8px', fontSize: '12px' }}>2 страницы A5 · Двусторонняя печать · Выберите «Без полей»</p>
      </div>

      {/* Страница 1 — лицевая */}
      <div className="page page-front">
        <div className="bg-photo" />
        <div className="bg-overlay" />
        <div className="content">
          <p className="front-label">приглашение на торжество</p>
          <h1 className="front-names">Глеб & Вероника</h1>
          <p className="front-date">11.09.2026</p>
        </div>
      </div>

      {/* Страница 2 — оборотная */}
      <div className="page page-back">
        <div className="back-left">
          <p className="back-section-title">Программа торжества</p>
          <div>
            {programme.map((item) => (
              <div key={item.time} className="programme-item">
                <span className="programme-time">{item.time}</span>
                <div>
                  <p className="programme-title">{item.title}</p>
                  {item.desc && <p className="programme-desc">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="lottery-box">
            <p className="lottery-text">
              Просим каждого взять с собой лотерейный билет: вход в банкетный зал состоится по нему. Перед входом, пожалуйста, напишите на билете свой номер телефона. Зачем? Узнаете на торжестве)
            </p>
          </div>
        </div>
        <div className="back-right" />
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
    </>
  );
}