"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-28">
      {/* Hero */}
      <section
        id="hero"
        className="min-h-[70vh] flex flex-col items-center justify-center text-center"
      >
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--stone)]">
          Data Engineering • ML • Physics
        </p>

        <h1 className="mt-5 text-5xl md:text-6xl font-semibold text-[var(--ink)]">
          Hi, I’m Zura.
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-[var(--stone)] leading-relaxed">
          I build reliable data pipelines, analytics, and ML systems — with a
          research mindset and production discipline.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="/#contact"
            className="rounded-xl px-6 py-3 border border-black/15 bg-white/50 hover:bg-white/70 transition"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
          >
            Contact me
          </a>
          <a
            href="/projects"
            className="rounded-xl px-6 py-3 border border-black/15 hover:bg-black/5 transition"
          >
            View projects
          </a>
        </div>
      </section>




      {/* About */}
      <section id="about" className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
          About
        </h2>
        <p className="text-[var(--stone)] leading-relaxed max-w-3xl">
          I enjoy solving complex problems and building systems that are simple
          to operate. My background spans physics, mathematics, and data
          engineering, and I like bridging research thinking with real-world
          delivery.
        </p>
      </section>







      {/* Experience */}
      <section id="experience" className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
          Experience
        </h2>

        <div className="grid gap-4">
          {[
            {
              title: "Big Data Engineer — Bank of Georgia",
              time: "2023 — Present",
              desc:
                "Building Spark pipelines, Airflow DAGs, and Kafka streaming jobs for personalization and offers at scale.",
            },
            {
              title: "Researcher — Perimeter Institute",
              time: "2022 — 2023",
              desc:
                "Worked on quasicrystals and scattering amplitudes, producing research writeups and expanding theoretical tools.",
            },
            {
              title: "Tutor — Physics & Math Olympiads",
              time: "2018 — Present",
              desc:
                "Coaching students for competition-style problem solving with structured prep and feedback loops.",
            },
          ].map((job) => (
            <div
              key={job.title}
              className="rounded-2xl border border-black/10 bg-white/40 p-6 hover:bg-white/55 transition"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {job.title}
                </h3>
                <p className="text-sm text-[var(--stone)]">{job.time}</p>
              </div>
              <p className="mt-3 text-[var(--stone)] leading-relaxed">
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </section>




      {/* Projects */}
      <section id="projects" className="space-y-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
            Projects
          </h2>
          <a
            href="/projects"
            className="text-sm underline underline-offset-4 text-[var(--ultramarine)]"
          >
            See all →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Schumann Resonance Data Project",
              desc:
                "Processing multi-year electromagnetic field data into daily summaries and frequency statistics.",
            },
            {
              title: "Options Trading Simulator",
              desc:
                "Strategy research with Python, implied volatility analysis, and end-of-day simulation.",
            },
            {
              title: "Streaming Offers Pipeline",
              desc:
                "Spark + Kafka structured streaming pipelines for eligibility + recommender offer payloads.",
            },
            {
              title: "Personal Budget Dashboard",
              desc:
                "Expense tracking dashboard with fast querying and clean analytics views.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-black/10 bg-white/40 p-6 hover:bg-white/55 transition"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}
            >
              <h3 className="text-lg font-semibold text-[var(--ink)]">
                {p.title}
              </h3>
              <p className="mt-2 text-[var(--stone)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>





      {/* Contact */}
      <section id="contact" className="space-y-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
          Contact
        </h2>
        <p className="text-[var(--stone)] max-w-2xl mx-auto">
          Open to collaboration, consulting, and interesting engineering/research
          work. The fastest way to reach me is email.
        </p>

        <div className="flex items-center justify-center gap-6 text-2xl">
          <a
            href="https://github.com/ZJashi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--stone)] hover:text-[var(--ink)] transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/zurajashi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--stone)] hover:text-[var(--ink)] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:zurajashi09@gmail.com"
            className="text-[var(--stone)] hover:text-[var(--ink)] transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="pt-2">
          <a
            href="mailto:zurajashi09@gmail.com"
            className="inline-block rounded-xl px-6 py-3 border border-black/15 bg-white/50 hover:bg-white/70 transition"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
          >
            Email me
          </a>
        </div>
      </section>
    </main>
  );
}


