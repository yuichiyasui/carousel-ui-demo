import useEmblaCarousel from "embla-carousel-react";

import "./style.css";
import { Image } from "~/ui/Image";
import { Navigation } from "~/ui/Navigation";
import { Carousel } from "~/ui/Carousel";

export const TopPage = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <main>
      <h1>Carousel UI Demo</h1>
      <Navigation />
      <Carousel ref={emblaRef}>
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

      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <Image
          width={100}
          height={100}
          src="/logo/vite.svg"
          alt="Vite logo"
          className="logo"
        />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <Image
          width={100}
          height={100}
          src="/logo/react.svg"
          alt="React logo"
          className="logo react"
        />
      </a>
    </main>
  );
};
