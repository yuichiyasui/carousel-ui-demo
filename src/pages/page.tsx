import useEmblaCarousel from "embla-carousel-react";

import "./style.css";
import { Image } from "~/ui/Image";
import { Navigation } from "~/ui/Navigation";
import { Carousel } from "~/ui/Carousel";
import { useCallback } from "react";

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
      <h1>Carousel UI Demo</h1>
      <Navigation />

      <section>
        <h2>basic</h2>
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
        <h2>with button</h2>
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
