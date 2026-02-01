import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Integrations } from "@/components/integrations";
import { TechSpecs } from "@/components/tech-specs";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      <Hero />
      <Features />
      <Integrations />
      <TechSpecs />
      <Footer />
    </main>
  );
}
