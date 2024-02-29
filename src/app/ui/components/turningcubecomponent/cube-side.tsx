import styles from "./cubeside.module.css"
export default function CubeSide({
    imageUrl, heading, paragraph, eventNumberLabel
}: {
    imageUrl: string;
    heading: string;
    paragraph: string;
    eventNumberLabel: string;
}) {
    return (
        <>
            <div className={styles.cubeSideContainer}>
                <img className={styles.backgroundImage} src={imageUrl} />
                <div className={styles.overlay}>
                    <h3>{heading}</h3>
                    <p>
                        {paragraph}
                    </p>
                    <div className={styles.ratings}>
                        <div className={styles.stars}>
                            <p className={styles.star} style={{ display: "inline" }}>⭐️</p>
                            <p className={styles.star} style={{ display: "inline" }}>⭐️</p>
                            <p className={styles.star} style={{ display: "inline" }}>⭐️</p>
                            <p className={styles.star} style={{ display: "inline" }}>⭐️</p>
                            <p className={styles.star} style={{ display: "inline" }}>⭐️</p>
                        </div>
                        <span>{eventNumberLabel}</span>
                    </div>
                </div>
            </div>
        </>
    );
}