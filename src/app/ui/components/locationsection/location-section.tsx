"use client";
import styles from "./locationsection.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import { useRef, useEffect } from "react";

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

export default function LocationSection() {
    return (
        <>
            <div className={styles.sectionContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.locationTextContainer}>
                        <p className={styles.smallTopLabel}>Unforgettable</p>
                        <p className={styles.boldLargeLabel}>Dine in Paradise, Right by the Beach</p>
                        <p className={styles.bodyText}>Experience the unique pleasure of dining right next to the beach at our beachside restaurant. Enjoy the soothing sound of waves and the breathtaking view while savoring our delicious dishes made with the freshest ingredients.</p>
                        <div className={styles.subDetailsContainer}>
                            <div className={styles.subDetails}>
                                <p className={styles.subDetailsLabel}>Indulge Yourself</p>
                                <p className={styles.subDetailsText}>Treat yourself to a culinary journey with our diverse menu inspired by coastal flavors.</p>
                            </div>
                            <div className={styles.subDetails}>
                                <p className={styles.subDetailsLabel}>Celebrate Life</p>
                                <p className={styles.subDetailsText}>Create unforgettable memories with your loved ones in our stunning beachside venue.</p>
                            </div>
                        </div>
                        <div className={styles.buttonLayout}>
                            <p className={styles.actionBackground}>Navigate 📍</p>
                            <p>Visit the 'Golden Mile' of Mt. Lavinia</p>
                        </div>
                    </div>
                    <div className={styles.locationMap}>
                        <Swiper
                            effect={'cube'}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                                waitForTransition: false
                            }}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 48,
                                shadowScale: 0.8
                            }}
                            modules={[EffectCube, Autoplay]}
                            className="locationSwiper"
                            style={{ boxSizing: "border-box", width: "100%", height: "100%", borderRadius: "20px" }}
                        >
                            <SwiperSlide>
                                <div className={styles.iframeSlot}><iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=6.841427949564448,%2079.8627680540085+(Lavinia%20Beach%20Resort)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.iframeSlot}><iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=6.841427949564448,%2079.8627680540085+(Lavinia%20Beach%20Resort)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}