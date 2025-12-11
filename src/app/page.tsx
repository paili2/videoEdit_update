import Hero from "../components/home/Hero";
import FeaturedStrip from "../components/home/FeaturedStrip";
import StatsSection from "../components/home/StatsSection";
import ClientsSection from "../components/home/ClientsSection";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 md:py-16">
      <Hero />
      <FeaturedStrip />
      <StatsSection />
      <ClientsSection />
    </main>
  );
}
