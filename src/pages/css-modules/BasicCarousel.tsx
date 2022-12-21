import useEmblaCarousel from "embla-carousel-react";

import { Carousel } from "~/ui/Carousel";
import { Image } from "~/ui/Image";

import styles from "./BasicCarousel.module.css";

export const BasicCarousel = () => {
  const [basicEmblaRef] = useEmblaCarousel({ loop: true });

  return (
    <Carousel ref={basicEmblaRef} className={styles["base"]}>
      <Carousel.Container className={styles["container"]}>
        <Carousel.Slide className={styles["slide"]}>
          <Image width={512} height={384} src="/sample1.jpg" alt="" />
        </Carousel.Slide>
        <Carousel.Slide className={styles["slide"]}>
          <Image width={512} height={384} src="/sample2.jpg" alt="" />
        </Carousel.Slide>
        <Carousel.Slide className={styles["slide"]}>
          <Image width={512} height={384} src="/sample3.jpg" alt="" />
        </Carousel.Slide>
      </Carousel.Container>
    </Carousel>
  );
};
