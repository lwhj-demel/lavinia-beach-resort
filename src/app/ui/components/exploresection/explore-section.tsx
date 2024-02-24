'use client';
import styles from "./exploresection.module.css"
import TurningCube from "../turningcubecomponent/turning-cube";
import CubeSide from "../turningcubecomponent/cube-side";

export default function ExploreSection() {
    return (
        <>
            <div className={styles.sectionContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.turningCube}>
                        <TurningCube />
                    </div>
                </div>
            </div>
        </>
    );
}