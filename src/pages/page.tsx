import useEmblaCarousel from "embla-carousel-react";
import { clsx } from "clsx";

import "./style.css";
import { Image } from "~/ui/Image";
import { Navigation } from "~/ui/Navigation";
import { Carousel } from "~/ui/Carousel";
import { useCallback } from "react";
import { PageTitle } from "~/ui/PageTitle";

export const TopPage = () => {
  const [basicEmblaRef] = useEmblaCarousel({ loop: true });
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
    <main>
      <PageTitle className="mb-4">Carousel UI Demo</PageTitle>
      <Navigation className={clsx("mx-auto", "mb-6")} />

      <section className="basic-section">
        <h2 className={clsx("font-bold", "text-2xl", "text-center", "mb-4")}>
          basic
        </h2>
        <Carousel ref={basicEmblaRef}>
          <Carousel.Container>
            <Carousel.Slide>
              <Image width={512} height={384} src="/sample1.jpg" alt="" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image width={512} height={384} src="/sample2.jpg" alt="" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image width={512} height={384} src="/sample3.jpg" alt="" />
            </Carousel.Slide>
          </Carousel.Container>
        </Carousel>
      </section>

      <section className="with-button-section">
        <h2 className={clsx("font-bold", "text-2xl", "text-center", "mb-4")}>
          with button
        </h2>
        <Carousel className="carousel-with-button">
          <Carousel.Viewport ref={withButtonEmblaRef}>
            <Carousel.Container>
              <Carousel.Slide>
                <Image width={512} height={384} src="/sample1.jpg" alt="" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image width={512} height={384} src="/sample2.jpg" alt="" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image width={512} height={384} src="/sample3.jpg" alt="" />
              </Carousel.Slide>
            </Carousel.Container>
          </Carousel.Viewport>
          <Carousel.PrevButton onClick={scrollPrev} className="prev-button" />
          <Carousel.NextButton onClick={scrollNext} className="next-button" />
        </Carousel>
      </section>
    </main>
  );
};
