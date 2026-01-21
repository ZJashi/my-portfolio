import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export const metadata = {
  title: "Zura Jashi | AI Researcher & Data Engineer",
  description:
    "Personal portfolio of Zura Jashi - AI researcher at NYU, with expertise in data engineering, physics, and mathematics.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-28">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
