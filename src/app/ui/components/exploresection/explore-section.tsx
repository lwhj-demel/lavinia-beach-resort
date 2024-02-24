'use client';
import styles from "./exploresection.module.css"
import TurningCube from "../turningcubecomponent/turning-cube";
import Testimonial from "../testimonialcomponent/testimonial-component";

const testimonials: TestimonialData[] = [
    {
        eventType: "wedding",
        message: "\" My husband and I had the most magical wedding at Lavinia Beach Resort in 2017. The beachfront setting was absolutely stunning, and the staff went above and beyond to make our day perfect. The food was delicious, the décor was beautiful, and everything ran smoothly from start to finish. We couldn't have asked for a better experience. We are forever grateful to Harendra De Mel and the team for making our dream wedding a reality! \"",
        emoji: "💆🏻‍♀️💍",
        patronName: "Claudia Silva",
        otherDetails: "Nurse, Cabrini - Australia (Wedding, August 2017)"
    },
]

export default function ExploreSection() {
    return (
        <>
            <div className={styles.sectionContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.turningCube}>
                        <TurningCube />
                    </div>
                    <div className={styles.testimonialContainer}>
                        <h2 className={styles.testimonialHeading}>Customer Testimonials</h2>
                        <div className={styles.subHeading}>Hear what our patrons have to say.....</div>
                        <p style={{ fontSize: "18px", marginTop: "48px" }}>★★★★★</p>
                        <Testimonial eventType={testimonials[0].eventType} message={testimonials[0].message} emoji={testimonials[0].emoji} patronName={testimonials[0].patronName} otherDetails={testimonials[0].otherDetails} />
                    </div>
                </div>
            </div>
        </>
    );
}