import styles from "./testimonial.module.css"

export default function Testimonial(
    { eventType, message, emoji, patronName, otherDetails }: {
        eventType: string;
        message: string;
        emoji: string;
        patronName: string;
        otherDetails: string;
    }
) {
    return (
        <>
            <p className={styles.testimonialBody}>{message}</p>
            <div className={styles.testimonialCredentials}>
                <div className={styles.patronEmoji}>{emoji}</div>
                <div className={styles.patronDetailsLayout}>
                    <p className={styles.patronName}>{patronName}</p>
                    <p className={styles.patronOtherDetails}>{otherDetails}</p>
                </div>
            </div>
        </>
    );
}