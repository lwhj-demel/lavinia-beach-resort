import CubeSide from "./cube-side";
import styles from "./turningcube.module.css"

const eventCards: EventCardData[] = [
    {
        imageUrl: "/Images/events/beach-wedding.png",
        heading: "Dreamy Beach Weddings",
        paragraph: "Say \"I do\" with sand beneath your toes. We handle every detail, from catering to ceremony coordination, for your flawless beach wedding.",
        eventNumberLabel: "97 weddings and counting...",
    },
    {
        imageUrl: "/Images/events/romantic-dinner.png",
        heading: "Romantic Dinners",
        paragraph: "Savor delicious cuisine and breathtaking ocean views under the stars. Celebrate any occasion with an unforgettable beachfront dining experience.",
        eventNumberLabel: "Too many rominners to count.",
    },
    {
        imageUrl: "/Images/events/beach-yoga.png",
        heading: "Beach Yoga",
        paragraph: "Reserve some beach real-estate for your beach yoga sessions. Experienced team willing to go the distance to guarantee a tranquil space in a one of a kind beach setting",
        eventNumberLabel: "Recurring yoga sessions hapenning now.",
    },
    {
        imageUrl: "/Images/events/corporate-event.png",
        heading: "Corporate Events",
        paragraph: "Inspire your team in a stimulating beachfront environment. We offer versatile space and dedicated support for seamless meetings, conferences, or team building.",
        eventNumberLabel: "Hosting the biggest names in Sri Lanka",
    },
    {
        imageUrl: "/Images/events/family-gatherings.png",
        heading: "Family Gatherings",
        paragraph: "Create lasting memories with loved ones at our spacious beachfront restaurant. Enjoy delicious food and a welcoming atmosphere for any occasion.",
        eventNumberLabel: "Birthdays, anniversaries...",
    },
];


export default function TurningCube() {
    return (
        <>
            <div className={styles.turningCubeContainer}>
                {eventCards.map((card) => (
                    <div key={card.heading} className="swiper-slide" style={{ height: "100%" }}>
                        <CubeSide
                            imageUrl={card.imageUrl} heading={card.heading} paragraph={card.paragraph} eventNumberLabel={card.eventNumberLabel} />
                    </div>
                ))}
            </div>
        </>
    );
}