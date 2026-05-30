const dresscodeColors = [
  { hex: "#3b2e27", label: "Тёмный шоколад" },
  { hex: "#5c4033", label: "Кофе" },
  { hex: "#a67c5b", label: "Карамель" },
  { hex: "#d4c4a8", label: "Светлый беж" },
  { hex: "#c8bfa8", label: "Песок" },
  { hex: "#a8b89a", label: "Шалфей" },
  { hex: "#6b7c5e", label: "Оливка" },
];

export default function Print() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Montserrat:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { background: #e8e0d8; }

        .invite-page {
          width: 148mm;
          height: 210mm;
          background: #f5f0eb;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 8mm 10mm 8mm;
        }

        .corner {
          position: absolute;
          width: 18mm;
          height: 18mm;
          border-color: #a67c5b;
          border-style: solid;
          opacity: 0.4;
        }
        .corner-tl { top: 6mm; left: 6mm; border-width: 1px 0 0 1px; }
        .corner-tr { top: 6mm; right: 6mm; border-width: 1px 1px 0 0; }
        .corner-bl { bottom: 6mm; left: 6mm; border-width: 0 0 1px 1px; }
        .corner-br { bottom: 6mm; right: 6mm; border-width: 0 1px 1px 0; }

        .invite-top { text-align: center; }

        .invite-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 7pt;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #a67c5b;
          margin-bottom: 3mm;
        }

        .invite-names {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 30pt;
          font-weight: 300;
          font-style: italic;
          color: #3b2e27;
          line-height: 1.1;
        }

        .invite-ampersand {
          font-size: 22pt;
          color: #a67c5b;
          display: block;
          margin: 0.5mm 0;
        }

        .divider {
          width: 20mm;
          height: 1px;
          background: #a67c5b;
          opacity: 0.4;
          margin: 3mm auto;
        }

        .invite-date {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15pt;
          font-weight: 400;
          color: #3b2e27;
          letter-spacing: 0.15em;
          margin-bottom: 3mm;
        }

        .invite-middle { text-align: center; width: 100%; }

        .schedule {
          width: 100%;
        }

        .schedule-item {
          display: flex;
          align-items: baseline;
          gap: 3mm;
          margin-bottom: 1.5mm;
        }

        .schedule-time {
          font-family: 'Montserrat', sans-serif;
          font-size: 7.5pt;
          font-weight: 500;
          color: #a67c5b;
          min-width: 10mm;
          text-align: right;
        }

        .schedule-dot {
          width: 1mm;
          height: 1mm;
          border-radius: 50%;
          background: #a67c5b;
          opacity: 0.5;
          flex-shrink: 0;
          margin-bottom: 1mm;
        }

        .schedule-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 7.5pt;
          color: #5c4033;
          line-height: 1.4;
        }

        .schedule-place {
          font-size: 6.5pt;
          color: #a67c5b;
          display: block;
        }

        .invite-bottom { text-align: center; width: 100%; }

        .dresscode-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 6.5pt;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a67c5b;
          margin-bottom: 3mm;
        }

        .dresscode-colors {
          display: flex;
          justify-content: center;
          gap: 2mm;
          flex-wrap: wrap;
        }

        .dresscode-swatch {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1mm;
        }

        .dresscode-circle {
          width: 7mm;
          height: 7mm;
          border-radius: 50%;
          border: 0.5px solid rgba(0,0,0,0.1);
        }

        .dresscode-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 5pt;
          color: #a67c5b;
          text-align: center;
          line-height: 1.2;
          max-width: 9mm;
        }

        .ornament {
          font-size: 10pt;
          color: #a67c5b;
          opacity: 0.6;
          letter-spacing: 3mm;
        }

        @media print {
          @page {
            size: A5 portrait;
            margin: 0;
          }
          body { background: white; }
          .invite-page { margin: 0; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="no-print" style={{ textAlign: 'center', padding: '16px', fontFamily: 'sans-serif', fontSize: '14px', color: '#666' }}>
        <button
          onClick={() => window.print()}
          style={{ padding: '10px 28px', background: '#3b2e27', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', letterSpacing: '0.1em' }}
        >
          Распечатать / Сохранить PDF
        </button>
        <p style={{ marginTop: '8px', fontSize: '12px' }}>Формат A5 · При печати выберите «Без полей»</p>
      </div>

      <div className="invite-page">
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <div className="invite-top">
          <p className="invite-label">приглашение</p>
          <div className="invite-names">
            Глеб
            <span className="invite-ampersand">&</span>
            Вероника
          </div>
          <div className="divider" />
          <p className="invite-date">11 · 09 · 2026</p>
        </div>

        <div className="invite-middle">
          <p className="ornament">✦ ✦ ✦</p>
          <div style={{ height: '4mm' }} />
          <div className="schedule">
            <div className="schedule-item">
              <span className="schedule-time">12:30</span>
              <span className="schedule-dot" />
              <span className="schedule-text">
                Церемония бракосочетания
                <span className="schedule-place">ул. Ленина, 98</span>
              </span>
            </div>
            <div className="schedule-item">
              <span className="schedule-time">14:00</span>
              <span className="schedule-dot" />
              <span className="schedule-text">
                Welcome-фуршет
                <span className="schedule-place">банкетный зал «Венеция», ул. Архитектора Свиязева, 35</span>
              </span>
            </div>
            <div className="schedule-item">
              <span className="schedule-time">15:00</span>
              <span className="schedule-dot" />
              <span className="schedule-text">
                Праздничный банкет
                <span className="schedule-place">банкетный зал «Венеция», ул. Архитектора Свиязева, 35</span>
              </span>
            </div>
          </div>
        </div>

        <div className="invite-bottom">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '3mm' }}>
            <img
              src="https://cdn.poehali.dev/projects/7c964bb9-3c9f-4251-997c-b60e7dcb9b8e/bucket/494d948c-24cc-4260-a06b-55b477cb1c77.jpg"
              style={{ width: '60mm', height: '40mm', objectFit: 'cover', objectPosition: 'center top', borderRadius: '1mm' }}
              alt=""
            />
          </div>
          <div className="divider" />
          <p className="dresscode-label">дресс-код</p>
          <div className="dresscode-colors">
            {dresscodeColors.map((c) => (
              <div key={c.hex} className="dresscode-swatch">
                <div className="dresscode-circle" style={{ backgroundColor: c.hex }} />
                <span className="dresscode-name">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}