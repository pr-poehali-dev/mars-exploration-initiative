import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import FAQ from "@/components/FAQ";
import Promo from "@/components/Promo";
import RSVP from "@/components/RSVP";
import Print2 from "@/pages/Print2";

const Index = () => {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Featured />
        <FAQ />
        <RSVP />
        <Promo />
      </main>

      <div
        id="print-overlay"
        style={{ display: 'none', position: 'fixed', inset: 0, zIndex: 9999, overflowY: 'auto', background: '#888' }}
      >
        <div style={{ padding: '8px', textAlign: 'right' }}>
          <button
            onClick={() => { document.getElementById('print-overlay')!.style.display = 'none'; }}
            style={{ color: '#fff', background: 'transparent', border: '1px solid #fff', padding: '6px 16px', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '13px', borderRadius: '4px' }}
          >
            ✕ Закрыть
          </button>
        </div>
        <Print2 />
      </div>
    </>
  );
};

export default Index;