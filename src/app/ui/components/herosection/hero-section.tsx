import HeroImage from "../heroimage/hero-image";
import styles from "./herosection.module.css"

export default function HeroSection() {
    return (
        <>
            <div className={styles.sectionContainer}>
                <div className={styles.heroImageContainer}>
                    <HeroImage path="/Images/lbr.png" />
                </div>
                <div className={styles.detailsContainer}>
                    <h2 className={styles.largeBoldLabel}>Experience beachside dining at its finest</h2>
                    <div className={styles.endingDetailsContainer}>
                        <p className={styles.smallLabel}>Indulge in delicious food while enjoying breathtaking views of the ocean.</p>
                        <div className={styles.buttonLayout}>
                            <div className={styles.buttonBackground}>
                                <a className={styles.buttonText} href="#explore-section">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}