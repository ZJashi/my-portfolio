import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
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

      <a
        href="mailto:zurajashi09@gmail.com"
        className="inline-block rounded-xl px-6 py-3 border border-black/15 bg-white/50 hover:bg-white/70 transition"
        style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      >
        Email me
      </a>
    </section>
  );
}
