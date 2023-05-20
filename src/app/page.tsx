import Hero from "@/components/hero/hero";
import SideNav from "@/components/misc/sideNav";
import SideSocials from "@/components/misc/sideSocials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <SideSocials />
      <SideNav />
      <Hero />
    </main>
  );
}
