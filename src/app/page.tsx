import styles from "./page.module.css";
import HeroSection from "./ui/components/herosection/hero-section";
import NavBar from "./ui/components/navbar/nav-bar";
import LocationSection from "./ui/components/locationsection/location-section";
import ExploreSection from "./ui/components/exploresection/explore-section";
import EnquireSection from "./ui/components/enquiresection/enquire-section";


export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <section id="hero-section" className="section">
          <HeroSection />
        </section>
        <section id="explore-section" className="section">
          <ExploreSection />
        </section>
        <section id="enquire-section" className="section">
          <EnquireSection />
        </section>
        <section id="location-section" className="section">
          <LocationSection />
        </section>
      </main>
    </>
  );
}