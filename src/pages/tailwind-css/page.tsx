import { clsx } from "clsx";
import useEmblaCarousel from "embla-carousel-react";

import { Carousel } from "~/ui/Carousel";
import { Navigation } from "~/ui/Navigation";
import { PageTitle } from "~/ui/PageTitle";
import { Image } from "~/ui/Image";

const slides = [
  {
    id: "1",
    src: "/sample1.jpg",
  },
  {
    id: "2",
    src: "/sample2.jpg",
  },
  {
    id: "3",
    src: "/sample3.jpg",
  },
];

export const TailwindCssPage = () => {
  const [basicEmblaRef] = useEmblaCarousel({ loop: true });

  return (
    <main>
      <PageTitle className="mb-4">TailwindCSS</PageTitle>
      <Navigation className={clsx("mx-auto", "mb-6")} />

      <section className={clsx("max-w-lg", "mx-auto", "mb-6")}>
        <h2 className={clsx("font-bold", "text-2xl", "text-center", "mb-4")}>
          basic
        </h2>
        <Carousel ref={basicEmblaRef} className="overflow-hidden">
          <Carousel.Container className="flex">
            {slides.map((slide) => {
              return (
                <Carousel.Slide
                  key={slide.id}
                  className={clsx("cursor-grab", "basis-full", "shrink-0")}
                >
                  <Image width={512} height={384} src={slide.src} alt="" />
                </Carousel.Slide>
              );
            })}
          </Carousel.Container>
        </Carousel>
      </section>

      <section className={clsx("max-w-lg", "mx-auto", "mb-6")}>
        <h2 className={clsx("font-bold", "text-2xl", "text-center", "mb-4")}>
          with dots
        </h2>
      </section>
    </main>
  );
};
