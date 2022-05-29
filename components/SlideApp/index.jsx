import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from '../../styles/Home.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SlideApp() {
  return (
    <div className={styles.carousel_app}>
      <Carousel autoPlay showStatus={false} infiniteLoop showThumbs={false}>
        <div
          className={styles.slide_app_images}
        >
          <Image src="/app-1.png" alt={"image"} layout="fill" />
        </div>
        <div
          className={styles.slide_app_images}
        >
          <Image src="/app-1.png" alt={"image"} layout="fill" />
        </div>
        <div
          className={styles.slide_app_images}
        >
          <Image src="/app-1.png" alt={"image"} layout="fill" />
        </div>
        <div
          className={styles.slide_app_images}
        >
          <Image src="/app-1.png" alt={"image"} layout="fill" />
        </div>
      </Carousel>
    </div>
  );
}
