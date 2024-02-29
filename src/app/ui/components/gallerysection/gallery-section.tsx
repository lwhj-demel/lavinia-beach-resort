'use client';
import styles from "./gallerysection.module.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function GallerySection() {
    return (
        <>
            <>
                <div className={styles.sectionContainer}>
                    <h2 className={styles.sectionHeading}>Our Gallery</h2>
                    <p className={styles.bodyText}>Experience the beauty of our restaurant and events</p>
                    <Swiper
                        effect={'coverflow'}
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="https://swiperjs.com/demos/images/nature-6.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="https://swiperjs.com/demos/images/nature-7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="https://swiperjs.com/demos/images/nature-8.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </>
        </>
    );
}