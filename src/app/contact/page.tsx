import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Contact | Zura Jashi",
  description:
    "Get in touch for collaboration, consulting, or engineering/research work.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 space-y-16">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--ink)]">
          Contact
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[var(--stone)] leading-relaxed">
          Open to collaboration, consulting, and interesting engineering or
          research work. The best way to reach me is by email.
        </p>
      </header>

      <section
        className="mx-auto max-w-xl rounded-3xl border border-black/10
                   bg-white/40 p-10 text-center space-y-8"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}
      >
        <a
          href="mailto:zurajashi09@gmail.com"
          className="flex items-center justify-center gap-3
                     text-xl font-medium text-[var(--ink)]
                     hover:underline underline-offset-4"
        >
          <FaEnvelope />
          zurajashi09@gmail.com
        </a>

        <div className="flex justify-center gap-8 text-2xl">
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
        </div>

        <a
          href="mailto:zurajashi09@gmail.com"
          className="inline-block rounded-xl px-8 py-3
                     border border-black/15 bg-white/60
                     hover:bg-white/80 transition"
        >
          Email me
        </a>
      </section>
    </main>
  );
}
