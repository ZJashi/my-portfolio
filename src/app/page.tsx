import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export const metadata = {
  title: "Zura Jashi | AI Researcher & Developer",
  description:
    "Personal portfolio of Zura Jashi - AI researcher at NYU, with expertise in data engineering, physics, and mathematics.",
};

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top right orb - teal/cyan */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full
                        bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent
                        dark:from-teal-500/10 dark:via-cyan-500/5
                        blur-3xl animate-pulse"
             style={{ animationDuration: "8s" }} />

        {/* Bottom left orb - emerald/green */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full
                        bg-gradient-to-tr from-emerald-500/15 via-green-500/10 to-transparent
                        dark:from-emerald-500/10 dark:via-green-500/5
                        blur-3xl animate-pulse"
             style={{ animationDuration: "10s", animationDelay: "2s" }} />

        {/* Center orb - subtle blue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[800px] rounded-full
                        bg-gradient-to-br from-sky-500/5 via-blue-500/5 to-transparent
                        dark:from-sky-500/5 dark:via-blue-500/3
                        blur-3xl animate-pulse"
             style={{ animationDuration: "12s", animationDelay: "4s" }} />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-24">
          <Hero />
        </div>
      </section>

      {/* About - Mesh gradient band */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-emerald-500/5 dark:from-teal-500/10 dark:to-emerald-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent dark:from-black/20" />
        <div className="relative max-w-5xl mx-auto px-6">
          <About />
        </div>
      </section>

      {/* Experience */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Experience />
        </div>
      </section>

      {/* Projects - Glass band */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-teal-500/10" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <Projects />
        </div>
      </section>

      {/* Contact - Gradient band */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-sky-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:via-sky-500/10 dark:to-blue-500/10" />
        <div className="relative max-w-5xl mx-auto px-6">
          <Contact />
        </div>
      </section>
    </main>
  );
}
