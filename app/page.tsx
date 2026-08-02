import Hero from "@/components/hero";
import About from "@/components/about";
import Stack from "@/components/stack";
import Work from "@/components/work";
import Milestones from "@/components/milestones";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Stack />
      <Work />
      <Milestones />
      <Contact />
    </main>
  );
}
