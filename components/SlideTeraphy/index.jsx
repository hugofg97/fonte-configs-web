import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../../styles/Home.module.css'


export default function SlideTeraphy() {
  return (
    <div className={styles.caroulsel_teraphy}>
      <Carousel autoPlay showStatus={false} axis={'horizontal'} preventMovementUntilSwipeScrollTolerance emulateTouch infiniteLoop  showThumbs={false}>
        <div
          className={styles.image_caroulsel_teraphy}
        >
          <Image
            src="/terapia-1.jpeg"
            alt={"image"}
            layout="fill"
            objectFit="cover"

            
          />
        </div>
        <div
          className={styles.image_caroulsel_teraphy}
        >
          <Image
            src="/terapia-2.jpeg"
            alt={"image"}
            layout="fill"
            objectFit="cover"

            
          />
        </div>
        <div
          className={styles.image_caroulsel_teraphy}
        >
          <Image
            src="/terapia-3.jpeg"
            alt={"image"}
            layout="fill"
            objectFit="cover"

            
          />
        </div>
        <div
          className={styles.image_caroulsel_teraphy}
        >
          <Image
            src="/terapia-4.jpeg"
            alt={"image"}
            layout="fill"
            objectFit="cover"

            
          />
        </div>
        <div
          className={styles.image_caroulsel_teraphy}
        >
          <Image
            src="/terapia-5.jpeg"
            alt={"image"}
            layout="fill"
            objectFit="cover"

            
          />
        </div>
      </Carousel>
    </div>
  );
}
