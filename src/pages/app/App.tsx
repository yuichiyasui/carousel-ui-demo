import styles from "./App.module.css";
import { Image } from "~/ui/Image";
import useEmblaCarousel from "embla-carousel-react";

export const App = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div>
      <h1>Carousel UI Demo</h1>
      <div ref={emblaRef} className={`${styles.embla} embla`}>
        <div className={`${styles.embla__container} embla__container`}>
          <div className={`${styles.embla__slide} embla__slide`}>
            <Image width={512} height={384} src="/sample1.jpg" alt="" />
          </div>
          <div className={`${styles.embla__slide} embla__slide`}>
            <Image width={512} height={384} src="/sample2.jpg" alt="" />
          </div>
          <div className={`${styles.embla__slide} embla__slide`}>
            <Image width={512} height={384} src="/sample3.jpg" alt="" />
          </div>
        </div>
      </div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <Image
          width={100}
          height={100}
          src="/logo/vite.svg"
          alt="Vite logo"
          className={styles.logo}
        />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <Image
          width={100}
          height={100}
          src="/logo/react.svg"
          alt="React logo"
          className={`${styles.logo} ${styles.react}`}
        />
      </a>
    </div>
  );
};
