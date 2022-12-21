import { clsx } from "clsx";
import useEmblaCarousel from "embla-carousel-react";

import { Carousel } from "~/ui/Carousel";
import { Navigation } from "~/ui/Navigation";
import { PageTitle } from "~/ui/PageTitle";
import { Image } from "~/ui/Image";

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

      <section className={clsx("max-w-lg", "mx-auto", "mb-6")}>
        <h2 className={clsx("font-bold", "text-2xl", "text-center", "mb-4")}>
          with dots
        </h2>
      </section>
    </main>
  );
};
