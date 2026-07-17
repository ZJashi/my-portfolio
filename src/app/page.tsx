import styles from "./page.module.css";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";

export const metadata = {
  title: "Zura Jashi | AI Engineer",
  description: "Personal portfolio of Zura Jashi - AI Engineer at NYU",
};

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.section}>
        <div className={styles.heroContainer}>
          <Hero />
        </div>
      </section>

      {/* About */}
      <section className={styles.sectionPadded}>
        <div className={styles.aboutBg1} />
        <div className={styles.aboutBg2} />
        <div className={styles.container}>
          <About />
        </div>
      </section>

      {/* Experience */}
      <section className={styles.sectionPadded}>
        <div className={styles.container}>
          <Experience />
        </div>
      </section>

      {/* Projects */}
      <section className={styles.sectionPadded}>
        <div className={styles.projectsBg1} />
        <div className={styles.projectsBg2} />
        <div className={styles.container}>
          <Projects />
        </div>
      </section>
    </main>
  );
}
