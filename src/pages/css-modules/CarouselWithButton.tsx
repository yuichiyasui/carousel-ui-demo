import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import clsx from "clsx";

import { Carousel } from "~/ui/Carousel";
import { Image } from "~/ui/Image";

import styles from "./CarouselWithButton.module.css";

export const CarouselWithButton = () => {
  const [withButtonEmblaRef, withButtonEmblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (withButtonEmblaApi) withButtonEmblaApi.scrollPrev();
  }, [withButtonEmblaApi]);

  const scrollNext = useCallback(() => {
    if (withButtonEmblaApi) withButtonEmblaApi.scrollNext();
  }, [withButtonEmblaApi]);

  return (
    <Carousel className={clsx(styles["base"], styles["carousel-with-button"])}>
      <Carousel.Viewport ref={withButtonEmblaRef}>
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
      </Carousel.Viewport>
      <Carousel.PrevButton
        onClick={scrollPrev}
        className={styles["prev-button"]}
      />
      <Carousel.NextButton
        onClick={scrollNext}
        className={styles["next-button"]}
      />
    </Carousel>
  );
};
