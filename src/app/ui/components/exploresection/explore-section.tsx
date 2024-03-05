'use client';
import styles from "./exploresection.module.css"
import 'swiper/css';
import 'swiper/css/effect-fade';

import EventSwipeCards from "../turningcubecomponent/event-swipe-cards";
import Testimonial from "../testimonialcomponent/testimonial-component";
import { EffectFade, Autoplay } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials: TestimonialData[] = [
    {
        eventType: "wedding",
        message: "\"My husband and I had the most magical wedding at Lavinia Beach Resort in 2017. The beachfront setting was absolutely stunning, and the staff went above and beyond to make our day perfect. The food was delicious, the décor was beautiful, and everything ran smoothly from start to finish. We couldn't have asked for a better experience. We are forever grateful to Harendra De Mel and the team for making our dream wedding a reality!\"",
        emoji: "☞",
        patronName: "Claudia Silva",
        otherDetails: "Nurse, Cabrini - Australia (Wedding, August 2017)"
    },
    {
        eventType: "romantic-dinner",
        message: "\" My fiancé surprised me with a romantic dinner at LBR for my birthday. The ambiance was incredible, with the sound of the waves and the beautiful ocean view. The food was absolutely divine, and the service was impeccable. It was the perfect way to celebrate a special occasion, and we will definitely be back for more! \"",
        emoji: "☞",
        patronName: "Nimali Perera",
        otherDetails: "Exec, John keels (March 2019)"
    },
    {
        eventType: "yoga",
        message: "\" I participated in a yoga retreat at LBR, and it was a truly transformative experience. The beachfront location was incredibly peaceful, and the yoga instructors were excellent. I felt completely rejuvenated and relaxed after the retreat, and I would highly recommend it to anyone looking for a getaway to reconnect with themselves and nature. \"",
        emoji: "☞",
        patronName: "David Miller",
        otherDetails: "Software Engineer, San Francisco, USA (Retreat, May 2018)"
    },
    {
        eventType: "corp-event",
        message: "\" We held our annual team-building event at Lavinia Beach Resort and it was a huge success. The beachfront setting was inspiring, and the space was perfect for our activities. The staff was incredibly accommodating and helped us to plan a memorable event that fostered teamwork and collaboration. Our team is still raving about the experience! \"",
        emoji: "☞",
        patronName: "Rosh Perera",
        otherDetails: "Director, Quindril - Sri Lanka (Event, October 2018)"
    },
    {
        eventType: "family-gathering",
        message: "\" We celebrated my twins' 5th Birthday at Lavinia Beach Resort, and it was a truly special occasion. The beachfront location was perfect for a family gathering, and the restaurant was able to accommodate our large group comfortably. The food was delicious, and the staff was very attentive to our needs. I'm sure the kids and friends will remind about this party when they meet at school. \"",
        emoji: "☞",
        patronName: "Chen Lin",
        otherDetails: "Doctor, Port city (Party, November 2023)"
    }
]

export default function ExploreSection() {
    return (
        <>
            <div className={styles.sectionContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.turningCube}>
                        <EventSwipeCards />
                    </div>
                    <div className={styles.testimonialContainer}>
                        <h2 className={styles.testimonialHeading}>Customer Testimonials</h2>
                        <div className={styles.subHeading}>Hear what our patrons have to say.....</div>
                        <p style={{ fontSize: "18px", marginTop: "48px" }}>★★★★★</p>
                        <Swiper
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            fadeEffect={{
                                crossFade: true
                            }}
                            loop={true}
                            effect={'fade'}
                            modules={[EffectFade, Autoplay]}
                            className="testimonialSwiper"
                            style={{ width: "100%" }}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.eventType}>
                                    <div  >
                                        <Testimonial eventType={testimonial.eventType} message={testimonial.message} emoji={testimonial.emoji} patronName={testimonial.patronName} otherDetails={testimonial.otherDetails} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}