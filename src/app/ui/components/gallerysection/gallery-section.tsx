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
                            <img className={styles.imageElement} src="./Images/gallery/image-1.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="./Images/gallery/image-2.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="./Images/gallery/image-3.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="./Images/gallery/image-4.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="./Images/gallery/image-5.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="./Images/gallery/image-6.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="./Images/gallery/image-7.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="./Images/gallery/image-8.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="/Images/gallery/image-5.webp" />
                        </SwiperSlide>
                        <SwiperSlide className={styles.imageContainer}>
                            <img className={styles.imageElement} src="/Images/gallery/image-10.webp" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </>
        </>
    );
}