import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import FAQ from "@/components/FAQ";
import Promo from "@/components/Promo";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <FAQ />
      <Promo />
    </main>
  );
};

export default Index;