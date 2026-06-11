import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Solutions />
      <Testimonials />
      <About />
    </main>
  );
}

