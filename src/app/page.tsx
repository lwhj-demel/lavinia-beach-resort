import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./ui/herosection/hero-section";

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="hero-section" className="section">
        <HeroSection />
      </section>
    </main>
  );
}
