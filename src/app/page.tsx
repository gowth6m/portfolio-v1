import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
      <Hero />
      <About />
    </main>
  );
}
