import HeroImage from "../heroimage/hero-image";
import styles from "./herosection.module.css"

export default function HeroSection() {
    return (
        <>
            <div className={styles.heroImage}>
                <HeroImage path="/Images/lbr.png" />
            </div>
            <div className={styles.heroDetails}>
            </div>
        </>
    );
}