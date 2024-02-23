import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./ui/herosection/hero-section";
import NavBar from "./ui/navbar/nav-bar";
import LocationSection from "./ui/locationsection/location-section";


export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <section id="hero-section" className="section">
          <HeroSection />
        </section>
        <section id="location-section" className="section">
          <LocationSection />
        </section>
      </main>
    </>
  );
}
