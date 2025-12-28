// app/page.tsx
"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-28">
      {/* Hero */}
      <section
      id="hero"
      className="min-h-[70vh] flex flex-col items-center justify-center text-center"
    >
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-sm tracking-[0.2em] uppercase text-[var(--stone)]"
      >
        Data • AI • Physics • Math
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-5 text-5xl md:text-6xl font-semibold text-[var(--ink)]"
      >
        Hi, I’m Zura.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-2xl text-base md:text-lg text-[var(--stone)] leading-relaxed"
      >
        Currently, I am an AI researcher at New York University’s Center for
        Artificial Intelligence and Data Science. I have a diverse scientific
        background spanning mathematics and physics. You can find a more detailed
        story{" "}
        <a
          href="/about"
          className="relative font-medium text-[var(--ink)]
            after:absolute after:left-0 after:-bottom-1
            after:h-[1.5px] after:w-0 after:bg-[var(--ink)]
            hover:after:w-full after:transition-all after:duration-300"
        >
          here
        </a>.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        className="mt-10 flex flex-col sm:flex-row gap-3"
      >
        <Link
        href="/#contact"
        className="rounded-xl px-6 py-3 border border-black/15 bg-white/50 hover:bg-white/70 transition"
        style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      >
        Contact me
      </Link>

      <Link
        href="/#projects"
        className="rounded-xl px-6 py-3 border border-black/15 bg-white/50 hover:bg-white/70 transition"
      >
        View projects
      </Link>

      </motion.div>
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

