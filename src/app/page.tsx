"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Hero3D from "./components/Hero3D";   // ⭐ Add this import

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 space-y-32">

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden"
      >
        {/* 3D Background Sphere */}
        {/* <div className="absolute inset-0 -z-10 opacity-60">
          <Hero3D />
        </div> */}

        {/* Hero Text */}
        <h1 className="relative text-6xl font-bold text-[var(--accent-blue)] z-10 drop-shadow-lg">
          Hi, I’m Zura 👋
        </h1>

        <p className="relative mt-6 text-lg text-gray-300 max-w-2xl mx-auto z-10">
          I’m a physicist, mathematician, and data engineer. I build things with math, physics, and data.
        </p>
      </section>

      {/* About */}
      <section id="about" className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[var(--accent-blue)]">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I enjoy solving complex problems and creating data-driven solutions. My background spans physics,
          math, and data engineering, and I’m passionate about bridging science and technology.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--accent-blue)]">Experience</h2>
        <div className="space-y-8 text-left">
          {[
            {
              title: "Big Data Engineer – Bank of Georgia",
              time: "2023 – Present",
              desc:
                "Building Spark-based ETL pipelines, Airflow DAGs, and Kafka streams for personalized banking offers used by 4M+ clients."
            },
            {
              title: "Researcher – Perimeter Institute",
              time: "2022 – 2023",
              desc:
                "Worked on Fermi surfaces in quasicrystals and CHY-based scattering amplitudes, producing an arXiv preprint and advancing amplitude theory."
            },
            {
              title: "Tutor – Physics & Math Olympiads",
              time: "2018 – Present",
              desc:
                "Coaching students for AMC, AIME, USAPhO, and IOAA with a focus on Olympiad-style problem solving and competition prep."
            }
          ].map((job, i) => (
            <div
              key={i}
              className="bg-[#0c1445] rounded-xl p-6 shadow hover:shadow-[0_0_15px_var(--accent-blue)] transition"
            >
              <h3 className="text-xl font-bold text-[var(--accent-blue)]">{job.title}</h3>
              <p className="text-gray-400 text-sm">{job.time}</p>
              <p className="mt-2 text-gray-300">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--accent-blue)] text-center">Projects</h2>
        <div className="h-[600px] overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {[
            {
              img: "/projects/schumann.png",
              title: "Schumann Resonance Data Project",
              desc: "Analyzing multi-year electromagnetic field data to study resonance patterns."
            },
            {
              img: "/projects/options.png",
              title: "Options Trading Simulator",
              desc: "Advanced strategies with Python, pair trading, and volatility analysis."
            },
            {
              img: "/projects/ai.png",
              title: "AI Research",
              desc: "Experiments with machine learning, twinned regression, and LLMs in finance."
            },
            {
              img: "/projects/budget.png",
              title: "Interactive Budget Dashboard",
              desc: "A real-time expense tracking dashboard built with Python, SQLite, and Streamlit."
            },
            {
              img: "/projects/weather.png",
              title: "Weather Forecasting Model",
              desc: "Built ARIMA/SARIMA-based models to predict rainfall and wind patterns with visual reports."
            }
          ].map((p, i) => (
            <div
              key={i}
              className="bg-[#0c1445] rounded-xl shadow hover:shadow-[0_0_15px_var(--accent-blue)] transition flex flex-col md:flex-row"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
              />
              <div className="p-4">
                <h3 className="font-bold text-[var(--accent-blue)]">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[var(--accent-blue)]">Contact</h2>
        <p className="text-gray-300 mb-6">Let’s connect! You can find me here:</p>
        <div className="flex justify-center space-x-8 text-3xl">
          <a
            href="https://github.com/ZJashi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--accent-yellow)] transition hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/zurajashi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--accent-yellow)] transition hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:zurajashi09@gmail.com"
            className="text-gray-400 hover:text-[var(--accent-yellow)] transition hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>
    </main>
  );
}

