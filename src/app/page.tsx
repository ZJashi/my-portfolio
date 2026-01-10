import Hero from "./home/Hero";
import Projects from "./home/Projects";
import Contact from "./home/Contact";

export default function Home() {
  return (
      <main className="mx-auto max-w-5xl px-6 py-16 space-y-28">
        <Hero />
        <Projects />
        <Contact />
      </main>
  );
}
